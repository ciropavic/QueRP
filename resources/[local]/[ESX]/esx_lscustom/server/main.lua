ESX = nil
local Vehicles

TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)

function DiscordHookreload(hook,message,color)
    local msg19 = 'https://discord.com/api/webhooks/915641617585668108/tG6reYw_xJp0D565UOGvjvdQvOx30ji-s4aWANgt1wi6oUrlhSwQBxiDXVkf5WEaY34M'
    local embeds = {
                {
            ["title"] = message,
            ["type"] = "rich",
            ["color"] = color,
            ["footer"] = {
				["text"] = 'IslandRP.pl'
                    },
                }
            }
    if message == nil or message == '' then return FALSE end
    PerformHttpRequest(msg19, function(err, text, headers) end, 'POST', json.encode({ username = hook,embeds = embeds}), { ['Content-Type'] = 'application/json' })
end

RegisterServerEvent('esx_lscustom:buyMod')
AddEventHandler('esx_lscustom:buyMod', function(price)
	local _source = source
	local xPlayer = ESX.GetPlayerFromId(_source)
	price = tonumber(price)

	if Config.IsMechanicJobOnly then
		local societyAccount

		TriggerEvent('esx_addonaccount:getSharedAccount', 'society_mecano', function(account)
			societyAccount = account
		end)

		if price < xPlayer.getMoney() then
			TriggerClientEvent('esx_lscustom:installMod', _source)
			TriggerClientEvent('esx:showNotification', _source, _U('purchased'))
			xPlayer.removeMoney(price)
		else
			TriggerClientEvent('esx_lscustom:cancelInstallMod', _source)
			TriggerClientEvent('esx:showNotification', _source, _U('not_enough_money'))
		end
	end
end)

RegisterServerEvent('esx_lscustom:refreshOwnedVehicle')
AddEventHandler('esx_lscustom:refreshOwnedVehicle', function(vehicleProps)
	local xPlayer = ESX.GetPlayerFromId(source)

	MySQL.Async.fetchAll('SELECT vehicle FROM owned_vehicles WHERE plate = @plate', {
		['@plate'] = vehicleProps.plate
	}, function(result)
		if result[1] then
			local vehicle = json.decode(result[1].vehicle)

			if vehicleProps.model == vehicle.model then
				MySQL.Async.execute('UPDATE owned_vehicles SET vehicle = @vehicle WHERE plate = @plate', {
					['@plate'] = vehicleProps.plate,
					['@vehicle'] = json.encode(vehicleProps)
				})
			else
				print(('esx_lscustom: %s attempted to upgrade vehicle with mismatching vehicle model!'):format(xPlayer.identifier))
			end
		end
	end)
end)

ESX.RegisterServerCallback('esx_lscustom:getVehiclesPrices', function(source, cb)
	if not Vehicles then
		MySQL.Async.fetchAll('SELECT * FROM vehicles', {}, function(result)
			local vehicles = {}

			for i=1, #result, 1 do
				table.insert(vehicles, {
					model = result[i].model,
					price = result[i].price
				})
			end

			Vehicles = vehicles
			cb(Vehicles)
		end)
	else
		cb(Vehicles)
	end
end)