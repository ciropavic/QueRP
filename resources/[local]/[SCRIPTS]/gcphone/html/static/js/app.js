webpackJsonp([1], [, , , , , , , , , function(t, e, n) {
    "use strict";
    var s = n(76),
        o = n.n(s),
        i = n(15),
        a = n(296),
        r = n.n(a),
        c = n(297),
        u = n.n(c),
        l = n(23),
        h = n(12);
    e.a = {
        CreateModal: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return new o.a(function(e, n) {
                var s = new(i.a.extend(r.a))({
                    el: document.createElement("div"),
                    propsData: t
                });
                document.querySelector("#app").appendChild(s.$el), s.$on("select", function(t) {
                    e(t), s.$el.parentNode.removeChild(s.$el), s.$destroy()
                }), s.$on("cancel", function() {
                    e({
                        title: "cancel"
                    }), s.$el.parentNode.removeChild(s.$el), s.$destroy()
                })
            })
        },
        CreateTextModal: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return !1 === l.a.getters.useMouse ? h.a.getReponseText(t) : new o.a(function(e, n) {
                var s = new(i.a.extend(u.a))({
                    el: document.createElement("div"),
                    propsData: t
                });
                document.querySelector("#app").appendChild(s.$el), s.$on("valid", function(t) {
                    e(t), s.$el.parentNode.removeChild(s.$el), s.$destroy()
                }), s.$on("cancel", function() {
                    n("UserCancel"), s.$el.parentNode.removeChild(s.$el), s.$destroy()
                })
            })
        }
    }
}, function(t, e, n) {
    function s(t) {
        n(258)
    }
    var o = n(0)(n(175), n(331), s, "data-v-3a8bc553", null);
    t.exports = o.exports
}, , function(t, e, n) {
    "use strict";
    var s = n(2),
        o = n.n(s),
        i = n(49),
        a = n.n(i),
        r = n(6),
        c = n.n(r),
        u = n(30),
        l = n.n(u),
        h = n(5),
        p = n.n(h),
        f = n(77),
        d = n.n(f),
        m = n(78),
        g = n.n(m),
        v = n(31),
        _ = n.n(v),
        w = n(23),
        C = n(144),
        k = n(15),
        b = n(36),
        S = (n.n(b), n(355)),
        y = n.n(S),
        T = _()(y.a),
        A = !1,
        E = function() {
            function t() {
                var e = this;
                d()(this, t), window.addEventListener("message", function(t) {
                    var n = t.data.event;
                    void 0 !== n && "function" == typeof e["on" + n] ? e["on" + n](t.data) : void 0 !== t.data.show && w.a.commit("SET_PHONE_VISIBILITY", t.data.show)
                }), this.config = null, this.voiceRTC = null, this.soundList = {}
            }
            return g()(t, [{
                key: "post",
                value: function() {
                    function t(t, n) {
                        return e.apply(this, arguments)
                    }
                    var e = p()(c.a.mark(function t(e, n) {
                        var s, o;
                        return c.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return s = void 0 === n ? "{}" : l()(n), t.next = 3, window.jQuery.post("http://gcphone/" + e, s);
                                case 3:
                                    return o = t.sent, t.abrupt("return", JSON.parse(o));
                                case 5:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "log",
                value: function() {
                    function t() {
                        return e.apply(this, arguments)
                    }
                    var e = p()(c.a.mark(function t() {
                        for (var e = arguments.length, n = Array(e), s = 0; s < e; s++) n[s] = arguments[s];
                        var o;
                        return c.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", this.post("log", n));
                                case 4:
                                    return t.abrupt("return", (o = console).log.apply(o, n));
                                case 5:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "convertEmoji",
                value: function(t) {
                    var e = !0,
                        n = !1,
                        s = void 0;
                    try {
                        for (var o, i = a()(T); !(e = (o = i.next()).done); e = !0) {
                            var r = o.value;
                            t = t.replace(new RegExp(":" + r + ":", "g"), y.a[r])
                        }
                    } catch (t) {
                        n = !0, s = t
                    } finally {
                        try {
                            !e && i.return && i.return()
                        } finally {
                            if (n) throw s
                        }
                    }
                    return t
                }
            }, {
                key: "sendMessage",
                value: function() {
                    function t(t, n) {
                        return e.apply(this, arguments)
                    }
                    var e = p()(c.a.mark(function t(e, n) {
                        return c.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", this.post("sendMessage", {
                                        phoneNumber: e,
                                        message: n
                                    }));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "deleteMessage",
                value: function() {
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    var e = p()(c.a.mark(function t(e) {
                        return c.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", this.post("deleteMessage", {
                                        id: e
                                    }));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "deleteMessagesNumber",
                value: function() {
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    var e = p()(c.a.mark(function t(e) {
                        return c.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", this.post("deleteMessageNumber", {
                                        number: e
                                    }));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "deleteAllMessages",
                value: function() {
                    function t() {
                        return e.apply(this, arguments)
                    }
                    var e = p()(c.a.mark(function t() {
                        return c.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", this.post("deleteAllMessage"));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "setMessageRead",
                value: function() {
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    var e = p()(c.a.mark(function t(e) {
                        return c.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", this.post("setReadMessageNumber", {
                                        number: e
                                    }));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "updateContact",
                value: function() {
                    function t(t, n, s) {
                        return e.apply(this, arguments)
                    }
                    var e = p()(c.a.mark(function t(e, n, s) {
                        return c.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", this.post("updateContact", {
                                        id: e,
                                        display: n,
                                        phoneNumber: s
                                    }));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "addContact",
                value: function() {
                    function t(t, n) {
                        return e.apply(this, arguments)
                    }
                    var e = p()(c.a.mark(function t(e, n) {
                        return c.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", this.post("addContact", {
                                        display: e,
                                        phoneNumber: n
                                    }));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "deleteContact",
                value: function() {
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    var e = p()(c.a.mark(function t(e) {
                        return c.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", this.post("deleteContact", {
                                        id: e
                                    }));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "appelsDeleteHistorique",
                value: function() {
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    var e = p()(c.a.mark(function t(e) {
                        return c.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", this.post("appelsDeleteHistorique", {
                                        numero: e
                                    }));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "appelsDeleteAllHistorique",
                value: function() {
                    function t() {
                        return e.apply(this, arguments)
                    }
                    var e = p()(c.a.mark(function t() {
                        return c.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", this.post("appelsDeleteAllHistorique"));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "closePhone",
                value: function() {
                    function t() {
                        return e.apply(this, arguments)
                    }
                    var e = p()(c.a.mark(function t() {
                        return c.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", this.post("closePhone"));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "setUseMouse",
                value: function() {
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    var e = p()(c.a.mark(function t(e) {
                        return c.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", this.post("useMouse", e));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "setGPS",
                value: function() {
                    function t(t, n) {
                        return e.apply(this, arguments)
                    }
                    var e = p()(c.a.mark(function t(e, n) {
                        return c.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", this.post("setGPS", {
                                        x: e,
                                        y: n
                                    }));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "takePhoto",
                value: function() {
                    function t() {
                        return e.apply(this, arguments)
                    }
                    var e = p()(c.a.mark(function t() {
                        var e;
                        return c.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return w.a.commit("SET_TEMPO_HIDE", !0), t.next = 3, this.post("takePhoto", {
                                        url: this.config.fileUploadService_Url,
                                        field: this.config.fileUploadService_Field
                                    });
                                case 3:
                                    return e = t.sent, w.a.commit("SET_TEMPO_HIDE", !1), t.abrupt("return", e);
                                case 6:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "getReponseText",
                value: function() {
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    var e = p()(c.a.mark(function t(e) {
                        return c.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", this.post("reponseText", e || {}));
                                case 4:
                                    return t.abrupt("return", {
                                        text: window.prompt()
                                    });
                                case 5:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "faketakePhoto",
                value: function() {
                    function t() {
                        return e.apply(this, arguments)
                    }
                    var e = p()(c.a.mark(function t() {
                        return c.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", this.post("faketakePhoto"));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "callEvent",
                value: function() {
                    function t(t, n) {
                        return e.apply(this, arguments)
                    }
                    var e = p()(c.a.mark(function t(e, n) {
                        return c.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", this.post("callEvent", {
                                        eventName: e,
                                        data: n
                                    }));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "deleteALL",
                value: function() {
                    function t() {
                        return e.apply(this, arguments)
                    }
                    var e = p()(c.a.mark(function t() {
                        return c.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return localStorage.clear(), w.a.dispatch("tchatReset"), w.a.dispatch("notesReset"), w.a.dispatch("resetPhone"), w.a.dispatch("resetMessage"), w.a.dispatch("resetContact"), w.a.dispatch("resetBourse"), w.a.dispatch("resetAppels"), t.abrupt("return", this.post("deleteALL"));
                                case 9:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "getConfig",
                value: function() {
                    function t() {
                        return e.apply(this, arguments)
                    }
                    var e = p()(c.a.mark(function t() {
                        var e;
                        return c.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (null !== this.config) {
                                        t.next = 7;
                                        break
                                    }
                                    return t.next = 3, window.jQuery.get("/html/static/config/config.json");
                                case 3:
                                    e = t.sent, this.config = JSON.parse(e), !0 === this.config.useWebRTCVocal && (this.voiceRTC = new C.a(this.config.RTCConfig), A = !0), this.notififyUseRTC(this.config.useWebRTCVocal);
                                case 7:
                                    return t.abrupt("return", this.config);
                                case 8:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "onsetEnableApp",
                value: function() {
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    var e = p()(c.a.mark(function t(e) {
                        return c.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    w.a.dispatch("setEnableApp", e);
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "setIgnoreFocus",
                value: function() {
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    var e = p()(c.a.mark(function t(e) {
                        return c.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    this.post("setIgnoreFocus", {
                                        ignoreFocus: e
                                    });
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "tchatGetMessagesChannel",
                value: function() {
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    var e = p()(c.a.mark(function t(e) {
                        return c.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    this.post("tchat_getChannel", {
                                        channel: e
                                    });
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "tchatSendMessage",
                value: function() {
                    function t(t, n) {
                        return e.apply(this, arguments)
                    }
                    var e = p()(c.a.mark(function t(e, n) {
                        return c.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    this.post("tchat_addMessage", {
                                        channel: e,
                                        message: n
                                    });
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "notesGetMessagesChannel",
                value: function() {
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    var e = p()(c.a.mark(function t(e) {
                        return c.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    window.localStorage.setItem("gc_notas_locales", e);
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "notesSendMessage",
                value: function() {
                    function t(t, n) {
                        return e.apply(this, arguments)
                    }
                    var e = p()(c.a.mark(function t(e, n) {
                        return c.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    this.post("notes_addMessage", {
                                        channel: e,
                                        message: n
                                    });
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "onupdateMyPhoneNumber",
                value: function(t) {
                    w.a.commit("SET_MY_PHONE_NUMBER", t.myPhoneNumber)
                }
            }, {
                key: "onupdateMessages",
                value: function(t) {
                    w.a.commit("SET_MESSAGES", t.messages)
                }
            }, {
                key: "onnewMessage",
                value: function(t) {
                    w.a.commit("ADD_MESSAGE", t.message)
                }
            }, {
                key: "onupdateContacts",
                value: function(t) {
                    w.a.commit("SET_CONTACTS", t.contacts)
                }
            }, {
                key: "onhistoriqueCall",
                value: function(t) {
                    w.a.commit("SET_APPELS_HISTORIQUE", t.historique)
                }
            }, {
                key: "onupdateBankbalance",
                value: function(t) {
                    w.a.commit("SET_BANK_AMONT", t.banking)
                }
            }, {
                key: "onupdateBourse",
                value: function(t) {
                    w.a.commit("SET_BOURSE_INFO", t.bourse)
                }
            }, {
                key: "startCall",
                value: function() {
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    var e = p()(c.a.mark(function t(e) {
                        var n, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                        return c.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (!0 !== A) {
                                        t.next = 7;
                                        break
                                    }
                                    return t.next = 3, this.voiceRTC.prepareCall();
                                case 3:
                                    return n = t.sent, t.abrupt("return", this.post("startCall", {
                                        numero: e,
                                        rtcOffer: n,
                                        extraData: s
                                    }));
                                case 7:
                                    return t.abrupt("return", this.post("startCall", {
                                        numero: e,
                                        extraData: s
                                    }));
                                case 8:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "acceptCall",
                value: function() {
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    var e = p()(c.a.mark(function t(e) {
                        var n;
                        return c.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (!0 !== A) {
                                        t.next = 7;
                                        break
                                    }
                                    return t.next = 3, this.voiceRTC.acceptCall(e);
                                case 3:
                                    return n = t.sent, t.abrupt("return", this.post("acceptCall", {
                                        infoCall: e,
                                        rtcAnswer: n
                                    }));
                                case 7:
                                    return t.abrupt("return", this.post("acceptCall", {
                                        infoCall: e
                                    }));
                                case 8:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "rejectCall",
                value: function() {
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    var e = p()(c.a.mark(function t(e) {
                        return c.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", this.post("rejectCall", {
                                        infoCall: e
                                    }));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "notififyUseRTC",
                value: function() {
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    var e = p()(c.a.mark(function t(e) {
                        return c.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", this.post("notififyUseRTC", e));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "onwaitingCall",
                value: function(t) {
                    w.a.commit("SET_APPELS_INFO_IF_EMPTY", o()({}, t.infoCall, {
                        initiator: t.initiator
                    }))
                }
            }, {
                key: "onacceptCall",
                value: function(t) {
                    var e = this;
                    !0 === A && (!0 === t.initiator && this.voiceRTC.onReceiveAnswer(t.infoCall.rtcAnswer), this.voiceRTC.addEventListener("onCandidate", function(n) {
                        e.post("onCandidates", {
                            id: t.infoCall.id,
                            candidates: n
                        })
                    })), w.a.commit("SET_APPELS_INFO_IS_ACCEPTS", !0)
                }
            }, {
                key: "oncandidatesAvailable",
                value: function(t) {
                    this.voiceRTC.addIceCandidates(t.candidates)
                }
            }, {
                key: "onrejectCall",
                value: function(t) {
                    null !== this.voiceRTC && this.voiceRTC.close(), w.a.commit("SET_APPELS_INFO", null)
                }
            }, {
                key: "ontchat_receive",
                value: function(t) {
                    w.a.dispatch("tchatAddMessage", t)
                }
            }, {
                key: "ontchat_channel",
                value: function(t) {
                    w.a.commit("TCHAT_SET_MESSAGES", t)
                }
            }, {
                key: "onnotes_receive",
                value: function(t) {
                    w.a.dispatch("notesAddMessage", t)
                }
            }, {
                key: "onnotes_channel",
                value: function(t) {
                    w.a.commit("NOTES_SET_MESSAGES", t)
                }
            }, {
                key: "onautoStartCall",
                value: function(t) {
                    this.startCall(t.number, t.extraData)
                }
            }, {
                key: "onautoAcceptCall",
                value: function(t) {
                    w.a.commit("SET_APPELS_INFO", t.infoCall), this.acceptCall(t.infoCall)
                }
            }, {
                key: "twitter_login",
                value: function(t, e) {
                    this.post("twitter_login", {
                        username: t,
                        password: e
                    })
                }
            }, {
                key: "twitter_changePassword",
                value: function(t, e, n) {
                    this.post("twitter_changePassword", {
                        username: t,
                        password: e,
                        newPassword: n
                    })
                }
            }, {
                key: "twitter_createAccount",
                value: function(t, e, n) {
                    this.post("twitter_createAccount", {
                        username: t,
                        password: e,
                        avatarUrl: n
                    })
                }
            }, {
                key: "twitter_postTweet",
                value: function(t, e, n) {
                    this.post("twitter_postTweet", {
                        username: t,
                        password: e,
                        message: n
                    })
                }
            }, {
                key: "twitter_postTweetImg",
                value: function(t, e, n) {
                    this.post("twitter_postTweetImg", {
                        username: t,
                        password: e,
                        img: n
                    })
                }
            }, {
                key: "twitter_toggleLikeTweet",
                value: function(t, e, n) {
                    this.post("twitter_toggleLikeTweet", {
                        username: t,
                        password: e,
                        tweetId: n
                    })
                }
            }, {
                key: "twitter_setAvatar",
                value: function(t, e, n) {
                    this.post("twitter_setAvatarUrl", {
                        username: t,
                        password: e,
                        avatarUrl: n
                    })
                }
            }, {
                key: "twitter_getTweets",
                value: function(t, e) {
                    this.post("twitter_getTweets", {
                        username: t,
                        password: e
                    })
                }
            }, {
                key: "twitter_getFavoriteTweets",
                value: function(t, e) {
                    this.post("twitter_getFavoriteTweets", {
                        username: t,
                        password: e
                    })
                }
            }, {
                key: "ontwitter_tweets",
                value: function(t) {
                    w.a.commit("SET_TWEETS", t)
                }
            }, {
                key: "ontwitter_favoritetweets",
                value: function(t) {
                    w.a.commit("SET_FAVORITE_TWEETS", t)
                }
            }, {
                key: "ontwitter_newTweet",
                value: function(t) {
                    w.a.dispatch("addTweet", t.tweet)
                }
            }, {
                key: "ontwitter_setAccount",
                value: function(t) {
                    w.a.dispatch("setAccount", t)
                }
            }, {
                key: "ontwitter_updateTweetLikes",
                value: function(t) {
                    w.a.commit("UPDATE_TWEET_LIKE", t)
                }
            }, {
                key: "ontwitter_setTweetLikes",
                value: function(t) {
                    w.a.commit("UPDATE_TWEET_ISLIKE", t)
                }
            }, {
                key: "ontwitter_showError",
                value: function(t) {
                    k.a.notify({
                        title: w.a.getters.IntlString(t.title, ""),
                        message: w.a.getters.IntlString(t.message),
                        icon: "twitter",
                        backgroundColor: "#e0245e80"
                    })
                }
            }, {
                key: "ontwitter_showSuccess",
                value: function(t) {
                    k.a.notify({
                        title: w.a.getters.IntlString(t.title, ""),
                        message: w.a.getters.IntlString(t.message),
                        icon: "twitter"
                    })
                }
            }, {
                key: "onplaySound",
                value: function(t) {
                    var e = t.sound,
                        n = t.volume,
                        s = void 0 === n ? 1 : n,
                        o = "/html/static/sound/" + e;
                    e && (void 0 !== this.soundList[e] ? this.soundList[e].volume = s : (this.soundList[e] = new b.Howl({
                        src: o,
                        volume: s,
                        loop: !0,
                    }), this.soundList[e].play()))
                }
            }, {
                key: "onsetSoundVolume",
                value: function(t) {
                    var e = t.sound,
                        n = t.volume,
                        s = void 0 === n ? 1 : n;
                    void 0 !== this.soundList[e] && (this.soundList[e].volume = s)
                }
            }, {
                key: "onstopSound",
                value: function(t) {
                    var e = t.sound;
                    void 0 !== this.soundList[e] && (this.soundList[e].pause(), delete this.soundList[e])
                }
            }]), t
        }(),
        I = new E;
    e.a = I
}, , , , , , , , , , , function(t, e, n) {
    "use strict";
    var s = n(15),
        o = n(3),
        i = n(152),
        a = n(149),
        r = n(150),
        c = n(146),
        u = n(147),
        l = n(151),
        h = n(148),
        p = n(153),
        f = n(154);
    s.a.use(o.c), e.a = new o.c.Store({
        modules: {
            phone: i.a,
            contacts: a.a,
            messages: r.a,
            appels: c.a,
            bank: u.a,
            bourse: h.a,
            notes: l.a,
            tchat: p.a,
            twitter: f.a
        },
        strict: !0
    })
}, , , , function(t, e, n) {
    function s(t) {
        n(252)
    }
    var o = n(0)(n(168), n(325), s, "data-v-2804e189", null);
    t.exports = o.exports
}, , function(t, e, n) {
    "use strict";

    function s(t) {
        var e = t.match(/rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/);
        return null !== e ? {
            red: parseInt(e[1], 10),
            green: parseInt(e[2], 10),
            blue: parseInt(e[3], 10)
        } : (e = t.match(/^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})/), null !== e ? {
            red: parseInt(e[1], 16),
            green: parseInt(e[2], 16),
            blue: parseInt(e[3], 16)
        } : void 0)
    }

    function o(t, e) {
        return t.reduce(function(t, n) {
            return (t[n[e]] = t[n[e]] || []).push(n), t
        }, {})
    }

    function i(t) {
        if (0 === t.length || "#" === t[0]) return "#D32F2F";
        var e = t.split("").reduce(function(t, e) {
            return (t << 5) - t + e.charCodeAt(0) | 0
        }, 0);
        return r.a.getters.colors[Math.abs(e) % r.a.getters.colors.length]
    }

    function a(t) {
        var e = s(t);
        return void 0 === e ? "#000000" : .299 * e.red + .587 * e.green + .114 * e.blue > 186 ? "rgba(0, 0, 0, 0.87)" : "#FFFFFF"
    }
    e.b = o, e.a = i, e.c = a;
    var r = n(23)
}, , , , , , , , function(t, e, n) {
    function s(t) {
        n(277)
    }
    var o = n(0)(n(169), n(350), s, "data-v-def349b2", null);
    t.exports = o.exports
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
    "use strict";
    var s = n(15);
    e.a = new s.a
}, , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
    "use strict";
    var s = n(193),
        o = n.n(s),
        i = n(15),
        a = n(283),
        r = n.n(a),
        c = n(75),
        u = {
            install: function(t) {
                if (!this.installed) {
                    this.installed = !0, i.a.component("notification", r.a);
                    var e = function(t) {
                        c.a.$emit("add", t)
                    };
                    i.a.notify = e, o()(i.a.prototype, {
                        $notify: {
                            get: function() {
                                return i.a.notify
                            }
                        }
                    })
                }
            }
        };
    e.a = u
}, function(t, e, n) {
    "use strict";

    function s(t, e) {
        if ("just now" === t) return e;
        var n = Math.round(t);
        return Array.isArray(e) ? n > 1 ? e[1].replace(/%s/, n) : e[0].replace(/%s/, n) : e.replace(/%s/, n)
    }

    function o(t) {
        return new Date(t).toLocaleString()
    }

    function i(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = e.name,
            i = void 0 === n ? "timeago" : n,
            a = e.locale,
            m = e.locales,
            g = void 0 === m ? d : m;
        if (!g || 0 === r()(g).length) throw new TypeError("Expected locales to have at least one locale.");
        var v = {
            props: {
                since: {
                    required: !0
                },
                locale: String,
                maxTime: Number,
                autoUpdate: Number,
                format: Function
            },
            data: function() {
                return {
                    now: (new Date).getTime()
                }
            },
            computed: {
                currentLocale: function() {
                    if (t.prototype.$timeago) {
                        var e = v.locales[v.locale];
                        if (e) return e
                    }
                    return g.fr_FR
                },
                sinceTime: function() {
                    return new Date(this.since).getTime()
                },
                timeForTitle: function() {
                    var t = this.now / 1e3 - this.sinceTime / 1e3;
                    return this.maxTime && t > this.maxTime ? null : this.format ? this.format(this.sinceTime) : o(this.sinceTime)
                },
                timeago: function() {
                    var t = this.now / 1e3 - this.sinceTime / 1e3;
                    return this.maxTime && t > this.maxTime ? (clearInterval(this.interval), this.format ? this.format(this.sinceTime) : o(this.sinceTime)) : t <= 5 ? s("just now", this.currentLocale[0]) : t < c ? s(t, this.currentLocale[1]) : t < u ? s(t / c, this.currentLocale[2]) : t < l ? s(t / u, this.currentLocale[3]) : t < h ? s(t / l, this.currentLocale[4]) : t < p ? s(t / h, this.currentLocale[5]) : t < f ? s(t / p, this.currentLocale[6]) : s(t / f, this.currentLocale[7])
                }
            },
            mounted: function() {
                this.autoUpdate && this.update()
            },
            render: function(t) {
                return t("time", {
                    attrs: {
                        datetime: new Date(this.since),
                        title: this.timeForTitle
                    }
                }, this.timeago)
            },
            watch: {
                autoUpdate: function(t) {
                    this.stopUpdate(), t && this.update()
                }
            },
            methods: {
                update: function() {
                    var t = this,
                        e = 1e3 * this.autoUpdate;
                    this.interval = setInterval(function() {
                        t.now = (new Date).getTime()
                    }, e)
                },
                stopUpdate: function() {
                    clearInterval(this.interval), this.interval = null
                }
            },
            beforeDestroy: function() {
                this.stopUpdate()
            }
        };
        v.locale = "fr_FR", v.locales = {}, t.prototype.$timeago = {
            setCurrentLocale: function(t) {
                v.locale = t
            },
            addLocale: function(t, e) {
                v.locales[t] = e
            }
        }, t.component(i, v)
    }
    e.a = i;
    var a = n(31),
        r = n.n(a),
        c = 60,
        u = 60 * c,
        l = 24 * u,
        h = 7 * l,
        p = 30 * l,
        f = 365 * l,
        d = {
            fr_FR: ["à l'instant", ["il y a %s seconde", "il y a %s secondes"],
                ["il y a %s minute", "il y a %s minutes"],
                ["il y a %s heure", "il y a %s heures"],
                ["il y a %s jour", "il y a %s jours"],
                ["il y a %s semaine", "il y a %s semaines"],
                ["il y a %s mois", "il y a %s mois"],
                ["il y a %s an", "il y a %s ans"]
            ]
        }
}, function(t, e, n) {
    "use strict";
    var s = {
        inserted: function(t) {
            t.focus()
        }
    };
    e.a = s
}, function(t, e, n) {
    "use strict";
    var s = n(15),
        o = n(352),
        i = n(294),
        a = n.n(i),
        r = n(295),
        c = n.n(r),
        u = n(305),
        l = n.n(u),
        h = n(304),
        p = n.n(h),
        f = n(308),
        d = n.n(f),
        m = n(307),
        g = n.n(m),
        v = n(306),
        _ = n.n(v),
        w = n(285),
        C = n.n(w),
        k = n(286),
        b = n.n(k),
        S = n(289),
        y = n.n(S),
        T = n(303),
        A = n.n(T),
        E = n(301),
        I = n.n(E),
        P = n(302),
        x = n.n(P),
        $ = n(298),
        N = n.n($),
        M = n(299),
        U = n.n(M),
        L = n(313),
        O = n.n(L),
        R = n(312),
        D = n.n(R),
        B = n(309),
        H = n.n(B),
        F = n(291),
        V = n.n(F),
        G = n(292),
        q = n.n(G),
        W = n(300),
        j = n.n(W),
        z = n(284),
        Z = n.n(z);
    s.a.use(o.a), e.a = new o.a({
        routes: [{
            path: "/",
            name: "home",
            component: a.a
        }, {
            path: "/menu",
            name: "menu",
            component: c.a
        }, {
            path: "/contacts",
            name: "contacts",
            component: l.a
        }, {
            path: "/contact/:id/:number?",
            name: "contacts.view",
            component: p.a
        }, {
            path: "/messages",
            name: "messages",
            component: d.a
        }, {
            path: "/messages/select",
            name: "messages.selectcontact",
            component: _.a
        }, {
            path: "/messages/:number/:display",
            name: "messages.view",
            component: g.a
        }, {
            path: "/bourse",
            name: "bourse",
            component: q.a
        }, {
            path: "/bank",
            name: "bank",
            component: V.a
        }, {
            path: "/photo",
            name: "photo",
            component: j.a
        }, {
            path: "/paramtre",
            name: "parametre",
            component: H.a
        }, {
            path: "/appels",
            name: "appels",
            component: C.a
        }, {
            path: "/appelsactive",
            name: "appels.active",
            component: b.a
        }, {
            path: "/appelsNumber",
            name: "appels.number",
            component: y.a
        }, {
            path: "/tchatsplash",
            name: "tchat",
            component: A.a
        }, {
            path: "/tchat",
            name: "tchat.channel",
            component: I.a
        }, {
            path: "/tchat/:channel",
            name: "tchat.channel.show",
            component: x.a
        }, {
            path: "/notes",
            name: "notes",
            component: N.a
        }, {
            path: "/notes/:channel",
            name: "notes.channel.show",
            component: U.a
        }, {
            path: "/twitter/splash",
            name: "twitter.splash",
            component: O.a
        }, {
            path: "/twitter/view",
            name: "twitter.screen",
            component: D.a
        }, {
            path: "/9gag",
            name: "9gag",
            component: Z.a
        }, {
            path: "*",
            redirect: "/"
        }]
    })
}, function(t, e, n) {
    function s(t) {
        n(270)
    }
    var o = n(0)(n(155), n(343), s, null, null);
    t.exports = o.exports
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
    "use strict";
    var s = n(49),
        o = n.n(s),
        i = n(30),
        a = n.n(i),
        r = n(6),
        c = n.n(r),
        u = n(5),
        l = n.n(u),
        h = n(77),
        p = n.n(h),
        f = n(78),
        d = n.n(f),
        m = {
            video: !1,
            audio: !0
        },
        g = function() {
            function t(e) {
                p()(this, t), this.myPeerConnection = null, this.candidates = [], this.listener = {}, this.myCandidates = [], this.audio = new Audio, this.offer = null, this.answer = null, this.initiator = null, this.RTCConfig = e
            }
            return d()(t, [{
                key: "init",
                value: function() {
                    function t() {
                        return e.apply(this, arguments)
                    }
                    var e = l()(c.a.mark(function t() {
                        return c.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, this.close();
                                case 2:
                                    return this.myPeerConnection = new RTCPeerConnection(this.RTCConfig), t.next = 5, navigator.mediaDevices.getUserMedia(m);
                                case 5:
                                    this.stream = t.sent;
                                case 6:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "newConnection",
                value: function() {
                    this.close(), this.candidates = [], this.myCandidates = [], this.listener = {}, this.offer = null, this.answer = null, this.initiator = null, this.myPeerConnection = new RTCPeerConnection(this.RTCConfig), this.myPeerConnection.onaddstream = this.onaddstream.bind(this)
                }
            }, {
                key: "close",
                value: function() {
                    null !== this.myPeerConnection && this.myPeerConnection.close(), this.myPeerConnection = null
                }
            }, {
                key: "prepareCall",
                value: function() {
                    function t() {
                        return e.apply(this, arguments)
                    }
                    var e = l()(c.a.mark(function t() {
                        return c.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, this.init();
                                case 2:
                                    return this.newConnection(), this.initiator = !0, this.myPeerConnection.addStream(this.stream), this.myPeerConnection.onicecandidate = this.onicecandidate.bind(this), t.next = 8, this.myPeerConnection.createOffer();
                                case 8:
                                    return this.offer = t.sent, this.myPeerConnection.setLocalDescription(this.offer), t.abrupt("return", btoa(a()(this.offer)));
                                case 11:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "acceptCall",
                value: function() {
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    var e = l()(c.a.mark(function t(e) {
                        var n;
                        return c.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return n = JSON.parse(atob(e.rtcOffer)), this.newConnection(), this.initiator = !1, t.next = 5, navigator.mediaDevices.getUserMedia(m);
                                case 5:
                                    return this.stream = t.sent, this.myPeerConnection.onicecandidate = this.onicecandidate.bind(this), this.myPeerConnection.addStream(this.stream), this.offer = new RTCSessionDescription(n), this.myPeerConnection.setRemoteDescription(this.offer), t.next = 12, this.myPeerConnection.createAnswer();
                                case 12:
                                    return this.answer = t.sent, this.myPeerConnection.setLocalDescription(this.answer), t.abrupt("return", btoa(a()(this.answer)));
                                case 15:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "onReceiveAnswer",
                value: function() {
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    var e = l()(c.a.mark(function t(e) {
                        var n;
                        return c.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    n = JSON.parse(atob(e)), this.answer = new RTCSessionDescription(n), this.myPeerConnection.setRemoteDescription(this.answer);
                                case 3:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return t
                }()
            }, {
                key: "onicecandidate",
                value: function(t) {
                    if (void 0 !== t.candidate && (this.myCandidates.push(t.candidate), void 0 !== this.listener.onCandidate)) {
                        var e = this.getAvailableCandidates(),
                            n = !0,
                            s = !1,
                            i = void 0;
                        try {
                            for (var a, r = o()(this.listener.onCandidate); !(n = (a = r.next()).done); n = !0) {
                                (0, a.value)(e)
                            }
                        } catch (t) {
                            s = !0, i = t
                        } finally {
                            try {
                                !n && r.return && r.return()
                            } finally {
                                if (s) throw i
                            }
                        }
                    }
                }
            }, {
                key: "getAvailableCandidates",
                value: function() {
                    var t = btoa(a()(this.myCandidates));
                    return this.myCandidates = [], t
                }
            }, {
                key: "addIceCandidates",
                value: function(t) {
                    var e = this;
                    if (null !== this.myPeerConnection) {
                        JSON.parse(atob(t)).forEach(function(t) {
                            null !== t && e.myPeerConnection.addIceCandidate(t)
                        })
                    }
                }
            }, {
                key: "addEventListener",
                value: function(t, e) {
                    "onCandidate" === t && (void 0 === this.listener[t] && (this.listener[t] = []), this.listener[t].push(e), e(this.getAvailableCandidates()))
                }
            }, {
                key: "onaddstream",
                value: function(t) {
                    this.audio.srcObject = t.stream, this.audio.play()
                }
            }]), t
        }();
    l()(c.a.mark(function t() {
        return c.a.wrap(function(t) {
            for (;;) switch (t.prev = t.next) {
                case 0:
                case "end":
                    return t.stop()
            }
        }, t, this)
    }))(), e.a = g
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(15),
        o = n(102),
        i = n.n(o),
        a = n(101),
        r = n(23),
        c = n(99),
        u = n(12),
        l = n(98),
        h = n(100),
        p = n(96),
        f = n(97);
    s.a.use(c.a), s.a.use(l.a), s.a.config.productionTip = !1, s.a.prototype.$bus = new s.a, s.a.prototype.$phoneAPI = u.a, window.VueTimeago = c.a, window.Vue = s.a, window.store = r.a, s.a.directive("autofocus", h.a), window.APP = new s.a({
        el: "#app",
        store: r.a,
        router: a.a,
        render: function(t) {
            return t(i.a)
        }
    }), p.a({
        dsn: "https://af5384de8c5f44c0bf01b92a95a183cf@o157063.ingest.sentry.io/5341297",
        integrations: [new f.a({
            Vue: s.a,
            attachProps: !0,
            logErrors: !0,
            release: "vue@1.3"
        })]
    })
}, function(t, e, n) {
    "use strict";
    var s = n(38),
        o = n.n(s),
        i = n(12),
        a = {
            appelsHistorique: [],
            appelsInfo: null
        },
        r = {
            appelsHistorique: function(t) {
                return t.appelsHistorique
            },
            appelsInfo: function(t) {
                return t.appelsInfo
            },
            appelsDisplayName: function(t, e) {
                if (null === t.appelsInfo) return "ERROR";
                if (!0 === t.appelsInfo.hidden) return e.IntlString("APP_PHONE_NUMBER_HIDDEN");
                var n = String(e.appelsDisplayNumber);
                return (e.contacts.find(function(t) {
                    return t.number === n
                }) || {}).display || e.IntlString("APP_PHONE_NUMBER_UNKNOWN")
            },
            appelsDisplayNumber: function(t, e) {
                return null === t.appelsInfo ? "ERROR" : !0 === e.isInitiatorCall ? t.appelsInfo.receiver_num : !0 === t.appelsInfo.hidden ? "###-####" : t.appelsInfo.transmitter_num
            },
            isInitiatorCall: function(t, e) {
                return null !== t.appelsInfo && !0 === t.appelsInfo.initiator
            }
        },
        c = {
            startCall: function(t, e) {
                var n = (t.commit, e.numero);
                i.a.startCall(n)
            },
            acceptCall: function(t) {
                var e = t.state;
                i.a.acceptCall(e.appelsInfo)
            },
            rejectCall: function(t) {
                var e = t.state;
                i.a.rejectCall(e.appelsInfo)
            },
            ignoreCall: function(t) {
                (0, t.commit)("SET_APPELS_INFO", null)
            },
            appelsDeleteHistorique: function(t, e) {
                var n = t.commit,
                    s = t.state,
                    o = e.numero;
                i.a.appelsDeleteHistorique(o), n("SET_APPELS_HISTORIQUE", s.appelsHistorique.filter(function(t) {
                    return t.num !== o
                }))
            },
            appelsDeleteAllHistorique: function(t) {
                var e = t.commit;
                i.a.appelsDeleteAllHistorique(), e("SET_APPELS_HISTORIQUE", [])
            },
            resetAppels: function(t) {
                var e = t.commit;
                e("SET_APPELS_HISTORIQUE", []), e("SET_APPELS_INFO", null)
            }
        },
        u = {
            SET_APPELS_HISTORIQUE: function(t, e) {
                t.appelsHistorique = e
            },
            SET_APPELS_INFO_IF_EMPTY: function(t, e) {
                null === t.appelsInfo && (t.appelsInfo = e)
            },
            SET_APPELS_INFO: function(t, e) {
                t.appelsInfo = e
            },
            SET_APPELS_INFO_IS_ACCEPTS: function(t, e) {
                null !== t.appelsInfo && (t.appelsInfo = o()({}, t.appelsInfo, {
                    is_accepts: e
                }))
            }
        };
    e.a = {
        state: a,
        getters: r,
        actions: c,
        mutations: u
    }
}, function(t, e, n) {
    "use strict";
    var s = n(12),
        o = {
            bankAmont: "0"
        },
        i = {
            bankAmont: function(t) {
                return t.bankAmont
            }
        },
        a = {
            sendpara: function(t, e) {
                var n = (t.state, e.id),
                    o = e.amount;
                s.a.callEvent("gcphone:bankTransfer", {
                    id: n,
                    amount: o
                })
            }
        },
        r = {
            SET_BANK_AMONT: function(t, e) {
                t.bankAmont = e
            }
        };
    e.a = {
        state: o,
        getters: i,
        actions: a,
        mutations: r
    }
}, function(t, e, n) {
    "use strict";
    var s = {
            bourseInfo: []
        },
        o = {
            bourseInfo: function(t) {
                return t.bourseInfo
            }
        },
        i = {
            resetBourse: function(t) {
                (0, t.commit)("SET_BOURSE_INFO", [])
            }
        },
        a = {
            SET_BOURSE_INFO: function(t, e) {
                t.bourseInfo = e
            }
        };
    e.a = {
        state: s,
        getters: o,
        actions: i,
        mutations: a
    }
}, function(t, e, n) {
    "use strict";
    var s = n(13),
        o = n.n(s),
        i = n(12),
        a = {
            contacts: [],
            defaultContacts: []
        },
        r = {
            contacts: function(t) {
                var e = t.contacts,
                    n = t.defaultContacts;
                return [].concat(o()(e), o()(n))
            }
        },
        c = {
            updateContact: function(t, e) {
                var n = e.id,
                    s = e.display,
                    o = e.number;
                i.a.updateContact(n, s, o)
            },
            addContact: function(t, e) {
                var n = e.display,
                    s = e.number;
                i.a.addContact(n, s)
            },
            deleteContact: function(t, e) {
                var n = e.id;
                i.a.deleteContact(n)
            },
            resetContact: function(t) {
                (0, t.commit)("SET_CONTACTS", [])
            }
        },
        u = {
            SET_CONTACTS: function(t, e) {
                t.contacts = e.sort(function(t, e) {
                    return t.display.localeCompare(e.display)
                })
            },
            SET_DEFAULT_CONTACTS: function(t, e) {
                t.defaultContacts = e
            }
        };
    e.a = {
        state: a,
        getters: r,
        actions: c,
        mutations: u
    }
}, function(t, e, n) {
    "use strict";
    var s = n(12),
        o = {
            messages: []
        },
        i = {
            messages: function(t) {
                return t.messages
            },
            nbMessagesUnread: function(t) {
                return t.messages.filter(function(t) {
                    return 1 !== t.isRead
                }).length
            }
        },
        a = {
            setMessages: function(t, e) {
                (0, t.commit)("SET_MESSAGES", e)
            },
            sendMessage: function(t, e) {
                var n = (t.commit, e.phoneNumber),
                    o = e.message;
                s.a.sendMessage(n, o)
            },
            deleteMessage: function(t, e) {
                var n = (t.commit, e.id);
                s.a.deleteMessage(n)
            },
            deleteMessagesNumber: function(t, e) {
                var n = t.commit,
                    o = t.state,
                    i = e.num;
                s.a.deleteMessagesNumber(i), n("SET_MESSAGES", o.messages.filter(function(t) {
                    return t.transmitter !== i
                }))
            },
            deleteAllMessages: function(t) {
                var e = t.commit;
                s.a.deleteAllMessages(), e("SET_MESSAGES", [])
            },
            setMessageRead: function(t, e) {
                var n = t.commit;
                s.a.setMessageRead(e), n("SET_MESSAGES_READ", {
                    num: e
                })
            },
            resetMessage: function(t) {
                (0, t.commit)("SET_MESSAGES", [])
            }
        },
        r = {
            SET_MESSAGES: function(t, e) {
                t.messages = e
            },
            ADD_MESSAGE: function(t, e) {
                t.messages.push(e)
            },
            SET_MESSAGES_READ: function(t, e) {
                for (var n = e.num, s = 0; s < t.messages.length; s += 1) t.messages[s].transmitter === n && 1 !== t.messages[s].isRead && (t.messages[s].isRead = 1)
            }
        };
    e.a = {
        state: o,
        getters: i,
        actions: a,
        mutations: r
    }
}, function(t, e, n) {
    "use strict";
    var s = n(38),
        o = (n.n(s), n(30)),
        i = n.n(o),
        a = n(12),
        r = n(36),
        c = (n.n(r), "gc_notes_channels"),
        u = null,
        l = {
            channels: JSON.parse(localStorage[c] || null) || [],
            currentChannel: null,
            messagesChannel: []
        },
        h = {
            notesChannels: function(t) {
                return t.channels
            },
            notesCurrentChannel: function(t) {
                return t.currentChannel
            },
            notesMessages: function(t) {
                return t.messagesChannel
            }
        },
        p = {
            notesReset: function(t) {
                var e = t.commit;
                e("NOTES_SET_MESSAGES", {
                    messages: []
                }), e("NOTES_SET_CHANNEL", {
                    channel: null
                }), e("NOTES_REMOVES_ALL_CHANNELS")
            },
            notesSetChannel: function(t, e) {
                var n = t.state,
                    s = t.commit,
                    o = t.dispatch,
                    i = e.channel;
                n.currentChannel !== i && (s("NOTES_SET_MESSAGES", {
                    messages: []
                }), s("NOTES_SET_CHANNEL", {
                    channel: i
                }), o("notesGetMessagesChannel", {
                    channel: i
                }))
            },
            notesAddMessage: function(t, e) {
                var n = t.state,
                    s = t.commit,
                    o = t.getters,
                    i = e.message,
                    a = i.channel;
                void 0 !== n.channels.find(function(t) {
                    return t.channel === a
                }) && (null !== u && (u.pause(), u = null), u = new r.Howl({
                    src: "/html/static/sound/tchatNotification.ogg",
                    volume: o.volume
                }), u.play()), s("NOTES_ADD_MESSAGES", {
                    message: i
                })
            },
            notesAddChannel: function(t, e) {
                (0, t.commit)("NOTES_ADD_CHANNELS", {
                    channel: e.channel
                })
            },
            notesRemoveChannel: function(t, e) {
                (0, t.commit)("NOTES_REMOVES_CHANNELS", {
                    channel: e.channel
                })
            },
            notesGetMessagesChannel: function(t, e) {
                var n = (t.commit, e.channel);
                a.a.notesGetMessagesChannel(n)
            },
            notesSendMessage: function(t, e) {
                var n = e.channel,
                    s = e.message;
                a.a.notesSendMessage(n, s)
            }
        },
        f = {
            NOTES_SET_CHANNEL: function(t, e) {
                var n = e.channel;
                t.currentChannel = n
            },
            NOTES_ADD_CHANNELS: function(t, e) {
                var n = e.channel;
                t.channels.push({
                    channel: n
                }), localStorage[c] = i()(t.channels)
            },
            NOTES_REMOVES_CHANNELS: function(t, e) {
                var n = e.channel;
                t.channels = t.channels.filter(function(t) {
                    return t.channel !== n
                }), localStorage[c] = i()(t.channels)
            },
            NOTES_REMOVES_ALL_CHANNELS: function(t) {
                t.channels = [], localStorage[c] = i()(t.channels)
            },
            NOTES_ADD_MESSAGES: function(t, e) {
                var n = e.message;
                n.channel === t.currentChannel && t.messagesChannel.push(n)
            },
            NOTES_SET_MESSAGES: function(t, e) {
                var n = e.messages;
                t.messagesChannel = n
            }
        };
    e.a = {
        state: l,
        getters: h,
        actions: p,
        mutations: f
    }
}, function(t, e, n) {
    "use strict";
    var s = n(30),
        o = n.n(s),
        i = n(6),
        a = n.n(i),
        r = n(5),
        c = n.n(r),
        u = n(49),
        l = n.n(u),
        h = n(31),
        p = n.n(h),
        f = n(15),
        d = n(12),
        m = {
            show: !1,
            tempoHide: !1,
            myPhoneNumber: "###-####",
            background: JSON.parse(window.localStorage.gc_background || null),
            coque: JSON.parse(window.localStorage.gc_coque || null),
            sonido: JSON.parse(window.localStorage.gc_sonido || null),
            zoom: window.localStorage.gc_zoom || "100%",
            volume: parseFloat(window.localStorage.gc_volume) || 1,
            mouse: "true" === window.localStorage.gc_mouse,
            lang: window.localStorage.gc_language,
            config: {
                reseau: "ElBichop",
                useFormatNumberFrance: !1,
                apps: [],
                themeColor: "#2A56C6",
                colors: ["#2A56C6"],
                language: {}
            }
        };
    d.a.setUseMouse(m.mouse);
    var g = {
            show: function(t) {
                return t.show
            },
            tempoHide: function(t) {
                return t.tempoHide
            },
            myPhoneNumber: function(t) {
                return t.myPhoneNumber
            },
            volume: function(t) {
                return t.volume
            },
            enableTakePhoto: function(t) {
                return !0 === t.config.enableTakePhoto
            },
            background: function(t) {
                var e = t.background,
                    n = t.config;
                return null === e ? void 0 !== n.background_default ? n.background_default : {
                    label: "Default",
                    value: "default.jpg"
                } : e
            },
            backgroundLabel: function(t, e) {
                return e.background.label
            },
            backgroundURL: function(t, e) {
                return !0 === e.background.value.startsWith("http") ? e.background.value : "/html/static/img/background/" + e.background.value
            },
            coque: function(t) {
                var e = t.coque,
                    n = t.config;
                return null === e ? n && void 0 !== n.coque_default ? n.coque_default : {
                    label: "base",
                    value: "base.jpg"
                } : e
            },
            sonido: function(t) {
                var e = t.sonido,
                    n = t.config;
                return null === e ? n && void 0 !== n.sonido_default ? n.sonido_default : {
                    label: "Panters",
                    value: "ring.ogg"
                } : e
            },
            coqueLabel: function(t, e) {
                return e.coque.label
            },
            sonidoLabel: function(t, e) {
                return e.sonido.label
            },
            zoom: function(t) {
                return t.zoom
            },
            useMouse: function(t) {
                return t.mouse
            },
            config: function(t) {
                return t.config
            },
            warningMessageCount: function(t) {
                return t.config.warningMessageCount || 250
            },
            useFormatNumberFrance: function(t) {
                return t.config.useFormatNumberFrance
            },
            themeColor: function(t) {
                return t.config.themeColor
            },
            colors: function(t) {
                return t.config.colors
            },
            Apps: function(t, e) {
                var n = t.config,
                    s = t.lang;
                return n.apps.filter(function(t) {
                    return !1 !== t.enabled
                }).map(function(t) {
                    void 0 !== t.puceRef && (t.puce = e[t.puceRef]);
                    var n = s + "__name";
                    return t.intlName = t[n] || t.name, t
                })
            },
            AppsHome: function(t, e) {
                return e.Apps.filter(function(t) {
                    return !0 === t.inHomePage
                })
            },
            availableLanguages: function(t) {
                var e = t.config,
                    n = p()(e.language),
                    s = {},
                    o = !0,
                    i = !1,
                    a = void 0;
                try {
                    for (var r, c = l()(n); !(o = (r = c.next()).done); o = !0) {
                        var u = r.value;
                        s[e.language[u].NAME] = u
                    }
                } catch (t) {
                    i = !0, a = t
                } finally {
                    try {
                        !o && c.return && c.return()
                    } finally {
                        if (i) throw a
                    }
                }
                return s
            },
            IntlString: function(t) {
                var e = t.config,
                    n = t.lang;
                return n = n || e.defaultLanguage, void 0 === e.language[n] ? function(t) {
                    return t
                } : function(t, s) {
                    return e.language[n][t] || s || t
                }
            }
        },
        v = {
            loadConfig: function(t) {
                var e = this,
                    n = t.commit,
                    s = t.state;
                return c()(a.a.mark(function t() {
                    var o, i, r, c, u, h, m, g, v;
                    return a.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, d.a.getConfig();
                            case 2:
                                for (o = t.sent, i = p()(o.language), r = !0, c = !1, u = void 0, t.prev = 7, h = l()(i); !(r = (m = h.next()).done); r = !0) g = m.value, void 0 !== (v = o.language[g].TIMEAGO) && f.a.prototype.$timeago.addLocale(g, v);
                                t.next = 15;
                                break;
                            case 11:
                                t.prev = 11, t.t0 = t.catch(7), c = !0, u = t.t0;
                            case 15:
                                t.prev = 15, t.prev = 16, !r && h.return && h.return();
                            case 18:
                                if (t.prev = 18, !c) {
                                    t.next = 21;
                                    break
                                }
                                throw u;
                            case 21:
                                return t.finish(18);
                            case 22:
                                return t.finish(15);
                            case 23:
                                f.a.prototype.$timeago.setCurrentLocale(s.lang), void 0 !== o.defaultContacts && n("SET_DEFAULT_CONTACTS", o.defaultContacts), n("SET_CONFIG", o);
                            case 26:
                            case "end":
                                return t.stop()
                        }
                    }, t, e, [
                        [7, 11, 15, 23],
                        [16, , 18, 22]
                    ])
                }))()
            },
            setEnableApp: function(t, e) {
                var n = t.commit,
                    s = (t.state, e.appName),
                    o = e.enable;
                n("SET_APP_ENABLE", {
                    appName: s,
                    enable: void 0 === o || o
                })
            },
            setVisibility: function(t, e) {
                (0, t.commit)("SET_PHONE_VISIBILITY", e)
            },
            setZoon: function(t, e) {
                var n = t.commit;
                window.localStorage.gc_zoom = e, n("SET_ZOOM", e)
            },
            setBackground: function(t, e) {
                var n = t.commit;
                window.localStorage.gc_background = o()(e), n("SET_BACKGROUND", e)
            },
            setCoque: function(t, e) {
                var n = t.commit;
                window.localStorage.gc_coque = o()(e), n("SET_COQUE", e)
            },
            setSonido: function(t, e) {
                var n = t.commit;
                window.localStorage.gc_sonido = o()(e), n("SET_SONIDO", e)
            },
            setVolume: function(t, e) {
                var n = t.commit;
                window.localStorage.gc_volume = e, n("SET_VOLUME", e)
            },
            setLanguage: function(t, e) {
                var n = t.commit;
                window.localStorage.gc_language = e, f.a.prototype.$timeago.setCurrentLocale(e), n("SET_LANGUAGE", e)
            },
            setMouseSupport: function(t, e) {
                var n = t.commit;
                window.localStorage.gc_mouse = e, d.a.setUseMouse(e), n("SET_MOUSE_SUPPORT", e)
            },
            closePhone: function() {
                d.a.closePhone()
            },
            resetPhone: function(t) {
                var e = t.dispatch,
                    n = t.getters;
                e("setZoon", "100%"), e("setVolume", 1), e("setBackground", n.config.background_default), e("setCoque", n.config.coque_default), e("setSonido", n.config.sonido_default), e("setLanguage", "fr_FR")
            }
        },
        _ = {
            SET_CONFIG: function(t, e) {
                t.config = e
            },
            SET_APP_ENABLE: function(t, e) {
                var n = e.appName,
                    s = e.enable,
                    o = t.config.apps.findIndex(function(t) {
                        return t.name === n
                    }); - 1 !== o && f.a.set(t.config.apps[o], "enabled", s)
            },
            SET_PHONE_VISIBILITY: function(t, e) {
                t.show = e, t.tempoHide = !1
            },
            SET_TEMPO_HIDE: function(t, e) {
                t.tempoHide = e
            },
            SET_MY_PHONE_NUMBER: function(t, e) {
                t.myPhoneNumber = e
            },
            SET_BACKGROUND: function(t, e) {
                t.background = e
            },
            SET_COQUE: function(t, e) {
                t.coque = e
            },
            SET_SONIDO: function(t, e) {
                t.sonido = e
            },
            SET_ZOOM: function(t, e) {
                t.zoom = e
            },
            SET_VOLUME: function(t, e) {
                t.volume = e
            },
            SET_LANGUAGE: function(t, e) {
                t.lang = e
            },
            SET_MOUSE_SUPPORT: function(t, e) {
                t.mouse = e
            }
        };
    e.a = {
        state: m,
        getters: g,
        actions: v,
        mutations: _
    }
}, function(t, e, n) {
    "use strict";
    var s = n(38),
        o = (n.n(s), n(30)),
        i = n.n(o),
        a = n(12),
        r = n(36),
        c = (n.n(r), "gc_tchat_channels"),
        u = null,
        l = {
            channels: JSON.parse(localStorage[c] || null) || [],
            currentChannel: null,
            messagesChannel: []
        },
        h = {
            tchatChannels: function(t) {
                return t.channels
            },
            tchatCurrentChannel: function(t) {
                return t.currentChannel
            },
            tchatMessages: function(t) {
                return t.messagesChannel
            }
        },
        p = {
            tchatReset: function(t) {
                var e = t.commit;
                e("TCHAT_SET_MESSAGES", {
                    messages: []
                }), e("TCHAT_SET_CHANNEL", {
                    channel: null
                }), e("TCHAT_REMOVES_ALL_CHANNELS")
            },
            tchatSetChannel: function(t, e) {
                var n = t.state,
                    s = t.commit,
                    o = t.dispatch,
                    i = e.channel;
                n.currentChannel !== i && (s("TCHAT_SET_MESSAGES", {
                    messages: []
                }), s("TCHAT_SET_CHANNEL", {
                    channel: i
                }), o("tchatGetMessagesChannel", {
                    channel: i
                }))
            },
            tchatAddMessage: function(t, e) {
                var n = t.state,
                    s = t.commit,
                    o = t.getters,
                    i = e.message,
                    a = i.channel;
                void 0 !== n.channels.find(function(t) {
                    return t.channel === a
                }) && (null !== u && (u.pause(), u = null), u = new r.Howl({
                    src: "/html/static/sound/tchatNotification.ogg",
                    volume: o.volume
                }), u.play()), s("TCHAT_ADD_MESSAGES", {
                    message: i
                })
            },
            tchatAddChannel: function(t, e) {
                (0, t.commit)("TCHAT_ADD_CHANNELS", {
                    channel: e.channel
                })
            },
            tchatRemoveChannel: function(t, e) {
                (0, t.commit)("TCHAT_REMOVES_CHANNELS", {
                    channel: e.channel
                })
            },
            tchatGetMessagesChannel: function(t, e) {
                var n = (t.commit, e.channel);
                a.a.tchatGetMessagesChannel(n)
            },
            tchatSendMessage: function(t, e) {
                var n = e.channel,
                    s = e.message;
                a.a.tchatSendMessage(n, s)
            }
        },
        f = {
            TCHAT_SET_CHANNEL: function(t, e) {
                var n = e.channel;
                t.currentChannel = n
            },
            TCHAT_ADD_CHANNELS: function(t, e) {
                var n = e.channel;
                t.channels.push({
                    channel: n
                }), localStorage[c] = i()(t.channels)
            },
            TCHAT_REMOVES_CHANNELS: function(t, e) {
                var n = e.channel;
                t.channels = t.channels.filter(function(t) {
                    return t.channel !== n
                }), localStorage[c] = i()(t.channels)
            },
            TCHAT_REMOVES_ALL_CHANNELS: function(t) {
                t.channels = [], localStorage[c] = i()(t.channels)
            },
            TCHAT_ADD_MESSAGES: function(t, e) {
                var n = e.message;
                n.channel === t.currentChannel && t.messagesChannel.push(n)
            },
            TCHAT_SET_MESSAGES: function(t, e) {
                var n = e.messages;
                t.messagesChannel = n
            }
        };
    e.a = {
        state: l,
        getters: h,
        actions: p,
        mutations: f
    }
}, function(t, e, n) {
    "use strict";
    var s = n(13),
        o = n.n(s),
        i = n(12),
        a = n(15),
        r = {
            twitterUsername: localStorage.gcphone_twitter_username,
            twitterPassword: localStorage.gcphone_twitter_password,
            twitterAvatarUrl: localStorage.gcphone_twitter_avatarUrl,
            twitterNotification: localStorage.gcphone_twitter_notif ? parseInt(localStorage.gcphone_twitter_notif) : 1,
            twitterNotificationSound: "false" !== localStorage.gcphone_twitter_notif_sound,
            tweets: [],
            favoriteTweets: []
        },
        c = {
            twitterUsername: function(t) {
                return t.twitterUsername
            },
            twitterPassword: function(t) {
                return t.twitterPassword
            },
            twitterAvatarUrl: function(t) {
                return t.twitterAvatarUrl
            },
            twitterNotification: function(t) {
                return t.twitterNotification
            },
            twitterNotificationSound: function(t) {
                return t.twitterNotificationSound
            },
            tweets: function(t) {
                return t.tweets
            },
            favoriteTweets: function(t) {
                return t.favoriteTweets
            }
        },
        u = {
            twitterCreateNewAccount: function(t, e) {
                var n = e.username,
                    s = e.password,
                    o = e.avatarUrl;
                i.a.twitter_createAccount(n, s, o)
            },
            twitterLogin: function(t, e) {
                var n = (t.commit, e.username),
                    s = e.password;
                i.a.twitter_login(n, s)
            },
            twitterChangePassword: function(t, e) {
                var n = t.state;
                i.a.twitter_changePassword(n.twitterUsername, n.twitterPassword, e)
            },
            twitterLogout: function(t) {
                var e = t.commit;
                localStorage.removeItem("gcphone_twitter_username"), localStorage.removeItem("gcphone_twitter_password"), localStorage.removeItem("gcphone_twitter_avatarUrl"), e("UPDATE_ACCOUNT", {
                    username: void 0,
                    password: void 0,
                    avatarUrl: void 0
                })
            },
            twitterSetAvatar: function(t, e) {
                var n = t.state,
                    s = e.avatarUrl;
                i.a.twitter_setAvatar(n.twitterUsername, n.twitterPassword, s)
            },
            twitterPostTweet: function(t, e) {
                var n = t.state,
                    s = (t.commit, e.message);
                /^https?:\/\/.*\.(png|jpg|jpeg|gif)$/.test(s) ? i.a.twitter_postTweetImg(n.twitterUsername, n.twitterPassword, s) : i.a.twitter_postTweet(n.twitterUsername, n.twitterPassword, i.a.convertEmoji(s))
            },
            twitterToogleLike: function(t, e) {
                var n = t.state,
                    s = e.tweetId;
                i.a.twitter_toggleLikeTweet(n.twitterUsername, n.twitterPassword, s)
            },
            setAccount: function(t, e) {
                var n = t.commit;
                localStorage.gcphone_twitter_username = e.username, localStorage.gcphone_twitter_password = e.password, localStorage.gcphone_twitter_avatarUrl = e.avatarUrl, n("UPDATE_ACCOUNT", e)
            },
            addTweet: function(t, e) {
                var n = t.commit,
                    s = t.state,
                    o = 2 === s.twitterNotification;
                1 === s.twitterNotification && (o = e.message && -1 !== e.message.toLowerCase().indexOf(s.twitterUsername.toLowerCase())), !0 === o && a.a.notify({
                    message: e.message,
                    title: e.author + " :",
                    icon: "twitter",
                    sound: s.twitterNotificationSound ? "Twitter_Sound_Effect.ogg" : void 0
                }), n("ADD_TWEET", {
                    tweet: e
                })
            },
            fetchTweets: function(t) {
                var e = t.state;
                i.a.twitter_getTweets(e.twitterUsername, e.twitterPassword)
            },
            fetchFavoriteTweets: function(t) {
                var e = t.state;
                i.a.twitter_getFavoriteTweets(e.twitterUsername, e.twitterPassword)
            },
            setTwitterNotification: function(t, e) {
                var n = t.commit;
                localStorage.gcphone_twitter_notif = e, n("SET_TWITTER_NOTIFICATION", {
                    notification: e
                })
            },
            setTwitterNotificationSound: function(t, e) {
                var n = t.commit;
                localStorage.gcphone_twitter_notif_sound = e, n("SET_TWITTER_NOTIFICATION_SOUND", {
                    notificationSound: e
                })
            }
        },
        l = {
            SET_TWITTER_NOTIFICATION: function(t, e) {
                var n = e.notification;
                t.twitterNotification = n
            },
            SET_TWITTER_NOTIFICATION_SOUND: function(t, e) {
                var n = e.notificationSound;
                t.twitterNotificationSound = n
            },
            UPDATE_ACCOUNT: function(t, e) {
                var n = e.username,
                    s = e.password,
                    o = e.avatarUrl;
                t.twitterUsername = n, t.twitterPassword = s, t.twitterAvatarUrl = o
            },
            SET_TWEETS: function(t, e) {
                var n = e.tweets;
                t.tweets = n
            },
            SET_FAVORITE_TWEETS: function(t, e) {
                var n = e.tweets;
                t.favoriteTweets = n
            },
            ADD_TWEET: function(t, e) {
                var n = e.tweet;
                t.tweets = [n].concat(o()(t.tweets))
            },
            UPDATE_TWEET_LIKE: function(t, e) {
                var n = e.tweetId,
                    s = e.likes,
                    o = t.tweets.findIndex(function(t) {
                        return t.id === n
                    }); - 1 !== o && (t.tweets[o].likes = s);
                var i = t.favoriteTweets.findIndex(function(t) {
                    return t.id === n
                }); - 1 !== i && (t.favoriteTweets[i].likes = s)
            },
            UPDATE_TWEET_ISLIKE: function(t, e) {
                var n = e.tweetId,
                    s = e.isLikes,
                    o = t.tweets.findIndex(function(t) {
                        return t.id === n
                    }); - 1 !== o && a.a.set(t.tweets[o], "isLikes", s);
                var i = t.favoriteTweets.findIndex(function(t) {
                    return t.id === n
                }); - 1 !== i && a.a.set(t.favoriteTweets[i], "isLikes", s)
            }
        };
    e.a = {
        state: r,
        getters: c,
        actions: u,
        mutations: l
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(2),
        o = n.n(s),
        i = n(242),
        a = (n.n(i), n(241)),
        r = (n.n(a), n(3)),
        c = n(36);
    n.n(c);
    e.default = {
        name: "app",
        components: {},
        data: function() {
            return {
                soundCall: null
            }
        },
        methods: o()({}, n.i(r.a)(["loadConfig", "rejectCall"]), {
            closePhone: function() {
                this.$phoneAPI.closePhone()
            }
        }),
        computed: o()({}, n.i(r.b)(["show", "zoom", "coque", "sonido", "appelsInfo", "myPhoneNumber", "volume", "tempoHide"])),
        watch: {
            appelsInfo: function(t, e) {
                if (null !== this.appelsInfo && !0 !== this.appelsInfo.is_accepts) {
                    null !== this.soundCall && this.soundCall.pause();
                    var n = null;
                    !0 === this.appelsInfo.initiator ? (n = "/html/static/sound/Phone_Call_Sound_Effect.ogg", this.soundCall = new c.Howl({
                        src: n,
                        volume: this.volume,
                        loop: !0,
                    })) : (n = "/html/static/sound/" + this.sonido.value, this.soundCall = new c.Howl({
                        src: n,
                        volume: this.volume,
                        loop: !0,
                    })), this.soundCall.play()
                } else null !== this.soundCall && (this.soundCall.pause(), this.soundCall = null);
                if (null === t && null !== e) return void this.$router.push({
                    name: "home"
                });
                null !== t && this.$router.push({
                    name: "appels.active"
                })
            },
            show: function() {
                null !== this.appelsInfo ? this.$router.push({
                    name: "appels.active"
                }) : this.$router.push({
                    name: "home"
                }), !1 === this.show && null !== this.appelsInfo && this.rejectCall()
            }
        },
        mounted: function() {
            var t = this;
            this.loadConfig(), window.addEventListener("message", function(e) {
                void 0 !== e.data.keyUp && t.$bus.$emit("keyUp" + e.data.keyUp)
            }), window.addEventListener("keyup", function(e) {
                -1 !== ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown", "Backspace", "Enter"].indexOf(e.key) && t.$bus.$emit("keyUp" + e.key), "Escape" === e.key && t.$phoneAPI.closePhone()
            })
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(6),
        o = n.n(s),
        i = n(2),
        a = n.n(i),
        r = n(5),
        c = n.n(r),
        u = n(75),
        l = n(36);
    n.n(l);
    e.default = {
        data: function() {
            return {
                currentId: 0,
                list: []
            }
        },
        mounted: function() {
            u.a.$on("add", this.addItem)
        },
        methods: {
            addItem: function() {
                var t = this,
                    e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return c()(o.a.mark(function n() {
                    var s, i, r;
                    return o.a.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                s = a()({}, e, {
                                    id: t.currentId++,
                                    duration: parseInt(e.duration) || 3e3
                                }), t.list.push(s), window.setTimeout(function() {
                                    t.destroy(s.id)
                                }, s.duration), null !== e.sound && void 0 !== e.sound && (i = "/html/static/sound/" + e.sound, r = new l.Howl({
                                    src: i,
                                    onend: function() {
                                        r.src = null
                                    }
                                }), r.play());
                            case 4:
                            case "end":
                                return n.stop()
                        }
                    }, n, t)
                }))()
            },
            style: function(t) {
                return {
                    backgroundColor: t.backgroundColor
                }
            },
            destroy: function(t) {
                this.list = this.list.filter(function(e) {
                    return e.id !== t
                })
            }
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(6),
        o = n.n(s),
        i = n(13),
        a = n.n(i),
        r = n(5),
        c = n.n(r),
        u = n(10),
        l = n.n(u);
    e.default = {
        components: {
            PhoneTitle: l.a
        },
        data: function() {
            return {
                nextCursor: "c=10",
                currentSelectPost: 0,
                posts: []
            }
        },
        computed: {
            currentPost: function() {
                if (this.posts && this.posts.length > this.currentSelectPost) return this.posts[this.currentSelectPost];
                this.loadItems()
            }
        },
        methods: {
            loadItems: function() {
                var t = this;
                return c()(o.a.mark(function e() {
                    var n, s, i, r;
                    return o.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return s = "https://9gag.com/v1/group-posts/group/default/type/hot?" + t.nextCursor, e.next = 3, fetch(s);
                            case 3:
                                return i = e.sent, e.next = 6, i.json();
                            case 6:
                                r = e.sent, (n = t.posts).push.apply(n, a()(r.data.posts)), t.nextCursor = r.data.nextCursor;
                            case 9:
                            case "end":
                                return e.stop()
                        }
                    }, e, t)
                }))()
            },
            previewPost: function() {
                var t = this;
                if (0 === this.currentSelectPost) return 0;
                this.currentSelectPost -= 1, setTimeout(function() {
                    void 0 !== t.$refs.video && (t.$refs.video.volume = .15)
                }, 200)
            },
            nextPost: function() {
                var t = this;
                this.currentSelectPost += 1, setTimeout(function() {
                    void 0 !== t.$refs.video && (t.$refs.video.volume = .15)
                }, 200)
            },
            onClick: function(t) {
                t.offsetX < 200 ? this.previewPost() : this.nextPost()
            },
            quit: function() {
                this.$router.push({
                    name: "home"
                })
            }
        },
        created: function() {
            this.$bus.$on("keyUpArrowLeft", this.previewPost), this.$bus.$on("keyUpArrowRight", this.nextPost), this.$bus.$on("keyUpBackspace", this.quit)
        },
        beforeDestroy: function() {
            this.$bus.$off("keyUpArrowLeft", this.previewPost), this.$bus.$off("keyUpArrowRight", this.nextPost), this.$bus.$off("keyUpBackspace", this.quit)
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(2),
        o = n.n(s),
        i = n(3),
        a = n(10),
        r = n.n(a),
        c = n(288),
        u = n.n(c),
        l = n(287),
        h = n.n(l),
        p = n(290),
        f = n.n(p);
    e.default = {
        components: {
            PhoneTitle: r.a
        },
        data: function() {
            return {
                currentMenuIndex: 1
            }
        },
        computed: o()({}, n.i(i.b)(["IntlString", "useMouse", "themeColor"]), {
            subMenu: function() {
                return [{
                    Comp: u.a,
                    name: this.IntlString("APP_PHONE_MENU_FAVORITES"),
                    icon: "star"
                }, {
                    Comp: f.a,
                    name: this.IntlString("APP_PHONE_MENU_RECENTS"),
                    icon: "clock-o"
                }, {
                    Comp: h.a,
                    name: this.IntlString("APP_PHONE_MENU_CONTACTS"),
                    icon: "user"
                }]
            }
        }),
        methods: {
            getColorItem: function(t) {
                return this.currentMenuIndex === t ? {
                    color: this.themeColor
                } : {}
            },
            swapMenu: function(t) {
                this.currentMenuIndex = t
            },
            onLeft: function() {
                this.currentMenuIndex = Math.max(this.currentMenuIndex - 1, 0)
            },
            onRight: function() {
                this.currentMenuIndex = Math.min(this.currentMenuIndex + 1, this.subMenu.length - 1)
            },
            onBackspace: function() {
                !0 !== this.ignoreControls && this.$router.push({
                    name: "home"
                })
            }
        },
        created: function() {
            this.useMouse || (this.$bus.$on("keyUpBackspace", this.onBackspace), this.$bus.$on("keyUpArrowLeft", this.onLeft), this.$bus.$on("keyUpArrowRight", this.onRight))
        },
        beforeDestroy: function() {
            this.$bus.$off("keyUpBackspace", this.onBackspace), this.$bus.$off("keyUpArrowLeft", this.onLeft), this.$bus.$off("keyUpArrowRight", this.onRight)
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(2),
        o = n.n(s),
        i = n(3),
        a = n(27),
        r = n.n(a);
    e.default = {
        components: {
            InfoBare: r.a
        },
        data: function() {
            return {
                time: -1,
                intervalNum: void 0,
                select: -1,
                status: 0
            }
        },
        methods: o()({}, n.i(i.a)(["acceptCall", "rejectCall", "ignoreCall"]), {
            onBackspace: function() {
                1 === this.status ? this.onRejectCall() : this.onIgnoreCall()
            },
            onEnter: function() {
                0 === this.status && (0 === this.select ? this.onRejectCall() : this.onAcceptCall())
            },
            raccrocher: function() {
                this.onRejectCall()
            },
            deccrocher: function() {
                0 === this.status && this.onAcceptCall()
            },
            onLeft: function() {
                0 === this.status && (this.select = 0)
            },
            onRight: function() {
                0 === this.status && (this.select = 1)
            },
            updateTime: function() {
                this.time += 1
            },
            onRejectCall: function() {
                this.rejectCall(), this.$phoneAPI.setIgnoreFocus(!1)
            },
            onAcceptCall: function() {
                this.acceptCall(), this.$phoneAPI.setIgnoreFocus(!0)
            },
            onIgnoreCall: function() {
                this.ignoreCall(), this.$phoneAPI.setIgnoreFocus(!1), this.$router.push({
                    name: "home"
                })
            },
            startTimer: function() {
                void 0 === this.intervalNum && (this.time = 0, this.intervalNum = setInterval(this.updateTime, 1e3))
            }
        }),
        watch: {
            appelsInfo: function() {
                null !== this.appelsInfo && !0 === this.appelsInfo.is_accepts && (this.status = 1, this.$phoneAPI.setIgnoreFocus(!0), this.startTimer())
            }
        },
        computed: o()({}, n.i(i.b)(["IntlString", "backgroundURL", "useMouse", "appelsInfo", "appelsDisplayName", "appelsDisplayNumber", "myPhoneNumber"]), {
            timeDisplay: function() {
                if (this.time < 0) return ". . .";
                var t = Math.floor(this.time / 60),
                    e = this.time % 60;
                return e < 10 && (e = "0" + e), t + ":" + e
            }
        }),
        mounted: function() {
            null !== this.appelsInfo && !0 === this.appelsInfo.initiator && (this.status = 1, this.$phoneAPI.setIgnoreFocus(!0))
        },
        created: function() {
            this.useMouse || (this.$bus.$on("keyUpEnter", this.onEnter), this.$bus.$on("keyUpArrowLeft", this.onLeft), this.$bus.$on("keyUpArrowRight", this.onRight)), this.$bus.$on("keyUpBackspace", this.onBackspace)
        },
        beforeDestroy: function() {
            this.$bus.$off("keyUpBackspace", this.onBackspace), this.$bus.$off("keyUpEnter", this.onEnter), this.$bus.$off("keyUpArrowLeft", this.onLeft), this.$bus.$off("keyUpArrowRight", this.onRight), void 0 !== this.intervalNum && window.clearInterval(this.intervalNum), this.$phoneAPI.setIgnoreFocus(!1)
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(13),
        o = n.n(s),
        i = n(2),
        a = n.n(i),
        r = n(3),
        c = n(29),
        u = n(37),
        l = n.n(u);
    e.default = {
        name: "Contacts",
        components: {
            List: l.a
        },
        data: function() {
            return {}
        },
        methods: a()({}, n.i(r.a)(["startCall"]), {
            onSelect: function(t) {
                void 0 !== t && (!0 === t.custom ? this.$router.push({
                    name: "appels.number"
                }) : this.startCall({
                    numero: t.number
                }))
            }
        }),
        computed: a()({}, n.i(r.b)(["IntlString", "contacts"]), {
            contactsList: function() {
                return [{
                    display: this.IntlString("APP_PHONE_ENTER_NUMBER"),
                    letter: "#",
                    backgroundColor: "#D32F2F",
                    custom: !0
                }].concat(o()(this.contacts.slice(0).map(function(t) {
                    return t.backgroundColor = n.i(c.a)(t.number), t
                })))
            }
        }),
        created: function() {},
        beforeDestroy: function() {}
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(13),
        o = n.n(s),
        i = n(2),
        a = n.n(i),
        r = n(3),
        c = n(37),
        u = n.n(c),
        l = n(9);
    e.default = {
        name: "Favoris",
        components: {
            List: u.a
        },
        data: function() {
            return {
                ignoreControls: !1
            }
        },
        computed: a()({}, n.i(r.b)(["config"]), {
            callList: function() {
                return this.config.serviceCall || []
            }
        }),
        methods: {
            onSelect: function(t) {
                var e = this;
                !0 !== this.ignoreControls && (this.ignoreControls = !0, l.a.CreateModal({
                    choix: [].concat(o()(t.subMenu), [{
                        title: "Wróć"
                    }])
                }).then(function(t) {
                    e.ignoreControls = !1, "Wróć" !== t.title && (e.$phoneAPI.callEvent(t.eventName, t.type), e.$router.push({
                        name: "home"
                    }))
                }))
            }
        },
        created: function() {},
        beforeDestroy: function() {}
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(2),
        o = n.n(s),
        i = n(3),
        a = n(10),
        r = n.n(a);
    e.default = {
        components: {
            PhoneTitle: r.a
        },
        data: function() {
            return {
                numero: "",
                keyInfo: [{
                    primary: "1",
                    secondary: ""
                }, {
                    primary: "2",
                    secondary: "abc"
                }, {
                    primary: "3",
                    secondary: "def"
                }, {
                    primary: "4",
                    secondary: "ghi"
                }, {
                    primary: "5",
                    secondary: "jkl"
                }, {
                    primary: "6",
                    secondary: "mmo"
                }, {
                    primary: "7",
                    secondary: "pqrs"
                }, {
                    primary: "8",
                    secondary: "tuv"
                }, {
                    primary: "9",
                    secondary: "wxyz"
                }, {
                    primary: "-",
                    secondary: "",
                    isNotNumber: !0
                }, {
                    primary: "0",
                    secondary: "+"
                }, {
                    primary: "#",
                    secondary: "",
                    isNotNumber: !0
                }],
                keySelect: 0
            }
        },
        methods: o()({}, n.i(i.a)(["startCall"]), {
            onLeft: function() {
                this.keySelect = Math.max(this.keySelect - 1, 0)
            },
            onRight: function() {
                this.keySelect = Math.min(this.keySelect + 1, 11)
            },
            onDown: function() {
                this.keySelect = Math.min(this.keySelect + 3, 12)
            },
            onUp: function() {
                this.keySelect > 2 && (12 === this.keySelect ? this.keySelect = 10 : this.keySelect = this.keySelect - 3)
            },
            onEnter: function() {
                12 === this.keySelect ? this.numero.length > 0 && this.startCall({
                    numero: this.numeroFormat
                }) : this.numero += this.keyInfo[this.keySelect].primary
            },
            onBackspace: function() {
                !0 !== this.ignoreControls && (0 !== this.numero.length ? this.numero = this.numero.slice(0, -1) : history.back())
            },
            deleteNumber: function() {
                0 !== this.numero.length && (this.numero = this.numero.slice(0, -1))
            },
            onPressKey: function(t) {
                this.numero = this.numero + t.primary
            },
            onPressCall: function() {
                this.startCall({
                    numero: this.numeroFormat
                })
            },
            quit: function() {
                history.back()
            }
        }),
        computed: o()({}, n.i(i.b)(["IntlString", "useMouse", "useFormatNumberFrance"]), {
            numeroFormat: function() {
                if (!0 === this.useFormatNumberFrance) return this.numero;
                var t = this.numero.startsWith("#") ? 4 : 3;
                return this.numero.length > t ? this.numero.slice(0, t) + "-" + this.numero.slice(t) : this.numero
            }
        }),
        created: function() {
            this.useMouse ? this.keySelect = -1 : (this.$bus.$on("keyUpBackspace", this.onBackspace), this.$bus.$on("keyUpArrowLeft", this.onLeft), this.$bus.$on("keyUpArrowRight", this.onRight), this.$bus.$on("keyUpArrowDown", this.onDown), this.$bus.$on("keyUpArrowUp", this.onUp), this.$bus.$on("keyUpEnter", this.onEnter))
        },
        beforeDestroy: function() {
            this.$bus.$off("keyUpBackspace", this.onBackspace), this.$bus.$off("keyUpArrowLeft", this.onLeft), this.$bus.$off("keyUpArrowRight", this.onRight), this.$bus.$off("keyUpArrowDown", this.onDown), this.$bus.$off("keyUpArrowUp", this.onUp), this.$bus.$off("keyUpEnter", this.onEnter)
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(6),
        o = n.n(s),
        i = n(13),
        a = n.n(i),
        r = n(5),
        c = n.n(r),
        u = n(2),
        l = n.n(u),
        h = n(3),
        p = n(29),
        f = n(9);
    e.default = {
        name: "Recents",
        components: {},
        data: function() {
            return {
                ignoreControls: !1,
                selectIndex: 0
            }
        },
        methods: l()({}, n.i(h.a)(["startCall", "appelsDeleteHistorique", "appelsDeleteAllHistorique", "addContact"]), {
            getContact: function(t) {
                return this.contacts.find(function(e) {
                    return e.number === t
                })
            },
            scrollIntoViewIfNeeded: function() {
                var t = this;
                this.$nextTick(function() {
                    t.$el.querySelector(".active").scrollIntoViewIfNeeded()
                })
            },
            onUp: function() {
                !0 !== this.ignoreControls && (this.selectIndex = Math.max(0, this.selectIndex - 1), this.scrollIntoViewIfNeeded())
            },
            onDown: function() {
                !0 !== this.ignoreControls && (this.selectIndex = Math.min(this.historique.length - 1, this.selectIndex + 1), this.scrollIntoViewIfNeeded())
            },
            selectItem: function(t) {
                var e = this;
                return c()(o.a.mark(function n() {
                    var s, i, r, c;
                    return o.a.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return s = t.num, i = !1 === s.startsWith("#"), e.ignoreControls = !0, r = [{
                                    id: 1,
                                    title: e.IntlString("APP_PHONE_DELETE"),
                                    icons: "fa-trash",
                                    color: "orange"
                                }, {
                                    id: 2,
                                    title: e.IntlString("APP_PHONE_DELETE_ALL"),
                                    icons: "fa-trash",
                                    color: "red"
                                }, {
                                    id: 3,
                                    title: e.IntlString("APP_PHONE_CANCEL"),
                                    icons: "fa-undo"
                                }, {
                                    id: 4,
                                    title: e.IntlString("APP_PHONE_ADD"),
                                    icons: "fa-undo"
                                }], !0 === i && (r = [{
                                    id: 0,
                                    title: e.IntlString("APP_PHONE_CALL"),
                                    icons: "fa-phone"
                                }].concat(a()(r))), n.next = 7, f.a.CreateModal({
                                    choix: r
                                });
                            case 7:
                                c = n.sent, e.ignoreControls = !1, n.t0 = c.id, n.next = 0 === n.t0 ? 12 : 1 === n.t0 ? 14 : 2 === n.t0 ? 16 : 4 === n.t0 ? 18 : 19;
                                break;
                            case 12:
                                return e.startCall({
                                    numero: s
                                }), n.abrupt("break", 19);
                            case 14:
                                return e.appelsDeleteHistorique({
                                    numero: s
                                }), n.abrupt("break", 19);
                            case 16:
                                return e.appelsDeleteAllHistorique(), n.abrupt("break", 19);
                            case 18:
                                e.$router.push({
                                    name: "contacts.view",
                                    params: {
                                        id: 0,
                                        number: s
                                    }
                                });
                            case 19:
                            case "end":
                                return n.stop()
                        }
                    }, n, e)
                }))()
            },
            onEnter: function() {
                var t = this;
                return c()(o.a.mark(function e() {
                    return o.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!0 !== t.ignoreControls) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                t.selectItem(t.historique[t.selectIndex]);
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }, e, t)
                }))()
            },
            save: function(t) {
                -1 !== this.id ? this.addContact({
                    number: t
                }) : history.back()
            },
            stylePuce: function(t) {
                return t = t || {}, void 0 !== t.icon ? {
                    backgroundImage: "url(" + t.icon + ")",
                    backgroundSize: "cover",
                    color: "rgba(0,0,0,0)"
                } : {
                    color: t.color || this.color,
                    backgroundColor: t.backgroundColor || this.backgroundColor,
                    borderRadius: "50%"
                }
            }
        }),
        computed: l()({}, n.i(h.b)(["IntlString", "useMouse", "appelsHistorique", "contacts"]), {
            historique: function() {
                var t = n.i(p.b)(this.appelsHistorique, "num"),
                    e = [];
                for (var s in t) {
                    var o = t[s],
                        i = o.map(function(t) {
                            return t.date = new Date(t.time), t
                        }).sort(function(t, e) {
                            return e.date - t.date
                        }).slice(0, 6),
                        a = this.getContact(s) || {
                            letter: "#"
                        };
                    e.push({
                        num: s,
                        display: a.display || s,
                        lastCall: i,
                        letter: a.letter || a.display[0],
                        backgroundColor: a.backgroundColor || n.i(p.a)(s),
                        icon: a.icon
                    })
                }
                return e.sort(function(t, e) {
                    return e.lastCall[0].time - t.lastCall[0].time
                }), e
            }
        }),
        created: function() {
            this.useMouse ? this.selectIndex = -1 : (this.$bus.$on("keyUpArrowDown", this.onDown), this.$bus.$on("keyUpArrowUp", this.onUp), this.$bus.$on("keyUpEnter", this.onEnter))
        },
        beforeDestroy: function() {
            this.$bus.$off("keyUpArrowDown", this.onDown), this.$bus.$off("keyUpArrowUp", this.onUp), this.$bus.$off("keyUpEnter", this.onEnter)
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(2),
        o = n.n(s),
        i = n(3),
        a = n(27),
        r = n.n(a);
    e.default = {
        components: {
            InfoBare: r.a
        },
        data: function() {
            return {
                id: "",
                paratutar: "",
                currentSelect: 0
            }
        },
        methods: o()({}, n.i(i.a)(["sendpara"]), {
            scrollIntoViewIfNeeded: function() {
                this.$nextTick(function() {
                    document.querySelector("focus").scrollIntoViewIfNeeded()
                })
            },
            onBackspace: function() {
                this.$router.go(-1)
            },
            iptal: function() {
                this.$router.go(-1)
            },
            paragonder: function() {
                var t = this.paratutar.trim();
                "" !== t && (this.paratutar = "", this.sendpara({
                    id: this.id,
                    amount: t
                }))
            },
            onUp: function() {
                this.currentSelect - 1 >= 0 && (this.currentSelect = this.currentSelect - 1), this.$refs["form" + this.currentSelect].focus()
            },
            onDown: function() {
                this.currentSelect + 1 <= 3 && (this.currentSelect = this.currentSelect + 1), this.$refs["form" + this.currentSelect].focus()
            },
            onEnter: function() {
                var t = this;
                !0 !== this.ignoreControls && (2 === this.currentSelect ? this.paragonder() : 0 === this.currentSelect ? this.$phoneAPI.getReponseText().then(function(e) {
                    var n = e.text.trim();
                    t.id = n
                }) : 1 === this.currentSelect ? this.$phoneAPI.getReponseText().then(function(e) {
                    var n = e.text.trim();
                    t.paratutar = n
                }) : 3 === this.currentSelect && this.iptal())
            }
        }),
        computed: o()({}, n.i(i.b)(["bankAmont", "IntlString"]), {
            bankAmontFormat: function() {
                return Intl.NumberFormat().format(this.bankAmont)
            }
        }),
        created: function() {
            this.display = this.$route.params.display, this.useMouse || (this.$bus.$on("keyUpArrowDown", this.onDown), this.$bus.$on("keyUpArrowUp", this.onUp), this.$bus.$on("keyUpEnter", this.onEnter)), this.$bus.$on("keyUpBackspace", this.onBackspace)
        },
        beforeDestroy: function() {
            this.$bus.$off("keyUpArrowDown", this.onDown), this.$bus.$off("keyUpArrowUp", this.onUp), this.$bus.$off("keyUpEnter", this.onEnter), this.$bus.$off("keyUpBackspace", this.onBackspace)
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(2),
        o = n.n(s),
        i = n(3),
        a = n(10),
        r = n.n(a);
    e.default = {
        components: {
            PhoneTitle: r.a
        },
        data: function() {
            return {
                currentSelect: 0
            }
        },
        computed: o()({}, n.i(i.b)(["IntlString", "useMouse", "bourseInfo"])),
        methods: {
            scrollIntoViewIfNeeded: function() {
                var t = this;
                this.$nextTick(function() {
                    t.$el.querySelector(".select").scrollIntoViewIfNeeded()
                })
            },
            colorBourse: function(t) {
                return 0 === t.difference ? "#007aff" : t.difference < 0 ? "#2e7d32" : "#c62828"
            },
            classInfo: function(t) {
                return 0 === t.difference ? ["fa-arrow-right", "iblue"] : t.difference < 0 ? ["fa-arrow-up", "ired"] : ["fa-arrow-down", "igreen"]
            },
            onBackspace: function() {
                this.$router.push({
                    name: "home"
                })
            },
            onUp: function() {
                this.currentSelect = 0 === this.currentSelect ? 0 : this.currentSelect - 1, this.scrollIntoViewIfNeeded()
            },
            onDown: function() {
                this.currentSelect = this.currentSelect === this.bourseInfo.length - 1 ? this.currentSelect : this.currentSelect + 1, this.scrollIntoViewIfNeeded()
            }
        },
        created: function() {
            this.useMouse || (this.$bus.$on("keyUpArrowDown", this.onDown), this.$bus.$on("keyUpArrowUp", this.onUp)), this.$bus.$on("keyUpBackspace", this.onBackspace)
        },
        beforeDestroy: function() {
            this.$bus.$off("keyUpArrowDown", this.onDown), this.$bus.$off("keyUpArrowUp", this.onUp), this.$bus.$off("keyUpBackspace", this.onBackspace)
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = {
        data: function() {
            return {
                time: "",
                myInterval: 0
            }
        },
        methods: {
            updateTime: function() {
                var t = new Date,
                    e = t.getMinutes();
                e = e > 9 ? e : "0" + e;
                var n = t.getHours();
                n = n > 9 ? n : "0" + n;
                var s = n + ":" + e;
                this.time = s
            }
        },
        created: function() {
            this.updateTime(), this.myInterval = setInterval(this.updateTime, 1e3)
        },
        beforeDestroy: function() {
            clearInterval(this.myInterval)
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(2),
        o = n.n(s),
        i = n(3),
        a = n(27),
        r = n.n(a);
    e.default = {
        components: {
            InfoBare: r.a
        },
        data: function() {
            return {
                currentSelect: 0
            }
        },
        computed: o()({}, n.i(i.b)(["IntlString", "useMouse", "nbMessagesUnread", "backgroundURL", "messages", "AppsHome", "warningMessageCount"])),
        methods: o()({}, n.i(i.a)(["closePhone", "setMessages"]), {
            onLeft: function() {
                this.currentSelect = (this.currentSelect + 1) % (this.AppsHome.length + 1)
            },
            onRight: function() {
                this.currentSelect = (this.currentSelect + this.AppsHome.length) % (this.AppsHome.length + 1)
            },
            onUp: function() {
                this.currentSelect = Math.max(this.currentSelect - 4, 0)
            },
            onDown: function() {
                this.currentSelect = Math.min(this.currentSelect + 4, this.AppsHome.length)
            },
            openApp: function(t) {
                this.$router.push({
                    name: t.routeName
                })
            },
            onEnter: function() {
                this.openApp(this.AppsHome[this.currentSelect] || {
                    routeName: "menu"
                })
            },
            onBack: function() {
                this.closePhone()
            }
        }),
        created: function() {
            this.useMouse ? this.currentSelect = -1 : (this.$bus.$on("keyUpArrowLeft", this.onLeft), this.$bus.$on("keyUpArrowRight", this.onRight), this.$bus.$on("keyUpArrowDown", this.onDown), this.$bus.$on("keyUpArrowUp", this.onUp), this.$bus.$on("keyUpEnter", this.onEnter)), this.$bus.$on("keyUpBackspace", this.onBack)
        },
        beforeDestroy: function() {
            this.$bus.$off("keyUpArrowLeft", this.onLeft), this.$bus.$off("keyUpArrowRight", this.onRight), this.$bus.$off("keyUpArrowDown", this.onDown), this.$bus.$off("keyUpArrowUp", this.onUp), this.$bus.$off("keyUpEnter", this.onEnter), this.$bus.$off("keyUpBackspace", this.onBack)
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(3),
        o = n(293),
        i = n.n(o);
    e.default = {
        computed: n.i(s.b)(["config"]),
        components: {
            CurrentTime: i.a
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(2),
        o = n.n(s),
        i = n(10),
        a = n.n(i),
        r = n(27),
        c = n.n(r),
        u = n(3);
    e.default = {
        name: "hello",
        components: {
            PhoneTitle: a.a,
            InfoBare: c.a
        },
        data: function() {
            return {
                currentSelect: 0
            }
        },
        props: {
            title: {
                type: String,
                default: "Title"
            },
            showHeader: {
                type: Boolean,
                default: !0
            },
            showInfoBare: {
                type: Boolean,
                default: !0
            },
            list: {
                type: Array,
                required: !0
            },
            color: {
                type: String,
                default: "#FFFFFF"
            },
            backgroundColor: {
                type: String,
                default: "#4CAF50"
            },
            keyDispay: {
                type: String,
                default: "display"
            },
            disable: {
                type: Boolean,
                default: !1
            },
            titleBackgroundColor: {
                type: String,
                default: "#FFFFFF"
            }
        },
        watch: {
            list: function() {
                this.currentSelect = 0
            }
        },
        computed: o()({}, n.i(u.b)(["useMouse"])),
        methods: {
            styleTitle: function() {
                return {
                    color: this.color,
                    backgroundColor: this.backgroundColor
                }
            },
            stylePuce: function(t) {
                return t = t || {}, void 0 !== t.icon ? {
                    backgroundImage: "url(" + t.icon + ")",
                    backgroundSize: "cover",
                    color: "rgba(0,0,0,0)"
                } : {
                    color: t.color || this.color,
                    backgroundColor: t.backgroundColor || this.backgroundColor,
                    borderRadius: "50%"
                }
            },
            scrollIntoViewIfNeeded: function() {
                this.$nextTick(function() {
                    document.querySelector(".select").scrollIntoViewIfNeeded()
                })
            },
            onUp: function() {
                !0 !== this.disable && (this.currentSelect = 0 === this.currentSelect ? this.list.length - 1 : this.currentSelect - 1, this.scrollIntoViewIfNeeded())
            },
            onDown: function() {
                !0 !== this.disable && (this.currentSelect = this.currentSelect === this.list.length - 1 ? 0 : this.currentSelect + 1, this.scrollIntoViewIfNeeded())
            },
            selectItem: function(t) {
                this.$emit("select", t)
            },
            optionItem: function(t) {
                this.$emit("option", t)
            },
            back: function() {
                this.$emit("back")
            },
            onRight: function() {
                !0 !== this.disable && this.$emit("option", this.list[this.currentSelect])
            },
            onEnter: function() {
                !0 !== this.disable && this.$emit("select", this.list[this.currentSelect])
            }
        },
        created: function() {
            this.useMouse ? this.currentSelect = -1 : (this.$bus.$on("keyUpArrowDown", this.onDown), this.$bus.$on("keyUpArrowUp", this.onUp), this.$bus.$on("keyUpArrowRight", this.onRight), this.$bus.$on("keyUpEnter", this.onEnter))
        },
        beforeDestroy: function() {
            this.$bus.$off("keyUpArrowDown", this.onDown), this.$bus.$off("keyUpArrowUp", this.onUp), this.$bus.$off("keyUpArrowRight", this.onRight), this.$bus.$off("keyUpEnter", this.onEnter)
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(2),
        o = n.n(s),
        i = n(3),
        a = n(27),
        r = n.n(a);
    e.default = {
        components: {
            InfoBare: r.a
        },
        data: function() {
            return {
                currentSelect: 0,
                nBotonesMenu: 3
            }
        },
        computed: o()({}, n.i(i.b)(["nbMessagesUnread", "backgroundURL", "Apps", "useMouse"])),
        methods: o()({}, n.i(i.b)(["closePhone"]), {
            onLeft: function() {
                var t = Math.floor(this.currentSelect / this.nBotonesMenu),
                    e = (this.currentSelect + this.nBotonesMenu - 1) % this.nBotonesMenu + t * this.nBotonesMenu;
                this.currentSelect = Math.min(e, this.Apps.length - 1)
            },
            onRight: function() {
                var t = Math.floor(this.currentSelect / this.nBotonesMenu),
                    e = (this.currentSelect + 1) % this.nBotonesMenu + t * this.nBotonesMenu;
                e >= this.Apps.length && (e = t * this.nBotonesMenu), this.currentSelect = e
            },
            onUp: function() {
                var t = this.currentSelect - this.nBotonesMenu;
                if (t < 0) {
                    var e = this.currentSelect % this.nBotonesMenu;
                    t = Math.floor((this.Apps.length - 1) / this.nBotonesMenu) * this.nBotonesMenu, this.currentSelect = Math.min(t + e, this.Apps.length - 1)
                } else this.currentSelect = t
            },
            onDown: function() {
                var t = this.currentSelect % this.nBotonesMenu,
                    e = this.currentSelect + this.nBotonesMenu;
                e >= this.Apps.length && (e = t), this.currentSelect = e
            },
            openApp: function(t) {
                this.$router.push({
                    name: t.routeName
                })
            },
            onEnter: function() {
                this.openApp(this.Apps[this.currentSelect])
            },
            onBack: function() {
                this.$router.push({
                    name: "home"
                })
            }
        }),
        mounted: function() {},
        created: function() {
            this.useMouse ? this.currentSelect = -1 : (this.$bus.$on("keyUpArrowLeft", this.onLeft), this.$bus.$on("keyUpArrowRight", this.onRight), this.$bus.$on("keyUpArrowDown", this.onDown), this.$bus.$on("keyUpArrowUp", this.onUp), this.$bus.$on("keyUpEnter", this.onEnter)), this.$bus.$on("keyUpBackspace", this.onBack)
        },
        beforeDestroy: function() {
            this.$bus.$off("keyUpArrowLeft", this.onLeft), this.$bus.$off("keyUpArrowRight", this.onRight), this.$bus.$off("keyUpArrowDown", this.onDown), this.$bus.$off("keyUpArrowUp", this.onUp), this.$bus.$off("keyUpEnter", this.onEnter), this.$bus.$off("keyUpBackspace", this.onBack)
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(2),
        o = n.n(s),
        i = n(23),
        a = n(3);
    e.default = {
        name: "Modal",
        store: i.a,
        data: function() {
            return {
                currentSelect: 0
            }
        },
        props: {
            choix: {
                type: Array,
                default: function() {
                    return []
                }
            }
        },
        computed: o()({}, n.i(a.b)(["useMouse"])),
        methods: {
            scrollIntoViewIfNeeded: function() {
                this.$nextTick(function() {
                    document.querySelector(".modal-choix.select").scrollIntoViewIfNeeded()
                })
            },
            onUp: function() {
                this.currentSelect = 0 === this.currentSelect ? 0 : this.currentSelect - 1, this.scrollIntoViewIfNeeded()
            },
            onDown: function() {
                this.currentSelect = this.currentSelect === this.choix.length - 1 ? this.currentSelect : this.currentSelect + 1, this.scrollIntoViewIfNeeded()
            },
            selectItem: function(t) {
                this.$emit("select", t)
            },
            onEnter: function() {
                this.$emit("select", this.choix[this.currentSelect])
            },
            cancel: function() {
                this.$emit("cancel")
            }
        },
        created: function() {
            this.useMouse ? this.currentSelect = -1 : (this.$bus.$on("keyUpArrowDown", this.onDown), this.$bus.$on("keyUpArrowUp", this.onUp), this.$bus.$on("keyUpEnter", this.onEnter)), this.$bus.$on("keyUpBackspace", this.cancel)
        },
        beforeDestroy: function() {
            this.$bus.$off("keyUpArrowDown", this.onDown), this.$bus.$off("keyUpArrowUp", this.onUp), this.$bus.$off("keyUpEnter", this.onEnter), this.$bus.$off("keyUpBackspace", this.cancel)
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(2),
        o = n.n(s),
        i = n(23),
        a = n(3);
    e.default = {
        name: "TextModal",
        store: i.a,
        data: function() {
            return {
                inputText: ""
            }
        },
        props: {
            title: {
                type: String,
                default: function() {
                    return ""
                }
            },
            text: {
                type: String,
                default: function() {
                    return ""
                }
            },
            limit: {
                type: Number,
                default: 255
            }
        },
        computed: o()({}, n.i(a.b)(["IntlString", "themeColor"]), {
            color: function() {
                return this.themeColor || "#2A56C6"
            }
        }),
        methods: {
            scrollIntoViewIfNeeded: function() {
                this.$nextTick(function() {
                    document.querySelector(".modal-choix.select").scrollIntoViewIfNeeded()
                })
            },
            onUp: function() {
                this.currentSelect = 0 === this.currentSelect ? 0 : this.currentSelect - 1, this.scrollIntoViewIfNeeded()
            },
            onDown: function() {
                this.currentSelect = this.currentSelect === this.choix.length - 1 ? this.currentSelect : this.currentSelect + 1, this.scrollIntoViewIfNeeded()
            },
            selectItem: function(t) {
                this.$emit("select", t)
            },
            onEnter: function() {
                this.$emit("select", this.choix[this.currentSelect])
            },
            cancel: function() {
                this.$emit("cancel")
            },
            valide: function() {
                this.$emit("valid", {
                    text: this.inputText
                })
            }
        },
        created: function() {
            this.inputText = this.text
        },
        mounted: function() {
            var t = this;
            this.$nextTick(function() {
                t.$refs.textarea.focus()
            })
        },
        beforeDestroy: function() {}
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(6),
        o = n.n(s),
        i = n(5),
        a = n.n(i),
        r = n(2),
        c = n.n(r),
        u = n(3),
        l = n(9),
        h = n(10),
        p = n.n(h);
    e.default = {
        components: {
            PhoneTitle: p.a
        },
        data: function() {
            return {
                currentSelect: 0,
                ignoreControls: !1
            }
        },
        watch: {
            list: function() {
                this.currentSelect = 0
            }
        },
        computed: c()({}, n.i(u.b)(["IntlString", "useMouse", "notesChannels", "Apps"])),
        methods: c()({}, n.i(u.a)(["notesAddChannel", "notesRemoveChannel"]), {
            scrollIntoViewIfNeeded: function() {
                var t = this;
                this.$nextTick(function() {
                    var e = t.$el.querySelector(".select");
                    null !== e && e.scrollIntoViewIfNeeded()
                })
            },
            onUp: function() {
                !0 !== this.ignoreControls && (this.currentSelect = 0 === this.currentSelect ? 0 : this.currentSelect - 1, this.scrollIntoViewIfNeeded())
            },
            onDown: function() {
                !0 !== this.ignoreControls && (this.currentSelect = this.currentSelect === this.notesChannels.length - 1 ? this.currentSelect : this.currentSelect + 1, this.scrollIntoViewIfNeeded())
            },
            onRight: function() {
                var t = this;
                return a()(o.a.mark(function e() {
                    var n, s;
                    return o.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!0 !== t.ignoreControls) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return t.ignoreControls = !0, n = [{
                                    id: 1,
                                    title: t.IntlString("APP_DARKTCHAT_NEW_NOTE"),
                                    icons: "fa-plus",
                                    color: "dodgerblue"
                                }, {
                                    id: 2,
                                    title: t.IntlString("APP_DARKTCHAT_DELETE_NOTE"),
                                    icons: "fa-minus",
                                    color: "tomato"
                                }, {
                                    id: 3,
                                    title: t.IntlString("APP_DARKTCHAT_CANCEL"),
                                    icons: "fa-undo"
                                }], 0 === t.notesChannels.length && n.splice(1, 1), e.next = 7, l.a.CreateModal({
                                    choix: n
                                });
                            case 7:
                                s = e.sent, t.ignoreControls = !1, e.t0 = s.id, e.next = 1 === e.t0 ? 12 : 2 === e.t0 ? 14 : (e.t0, 16);
                                break;
                            case 12:
                                return t.addChannelOption(), e.abrupt("break", 16);
                            case 14:
                                return t.removeChannelOption(), e.abrupt("break", 16);
                            case 16:
                            case "end":
                                return e.stop()
                        }
                    }, e, t)
                }))()
            },
            onEnter: function() {
                var t = this;
                return a()(o.a.mark(function e() {
                    var n, s;
                    return o.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!0 !== t.ignoreControls) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                if (0 !== t.notesChannels.length) {
                                    e.next = 12;
                                    break
                                }
                                return t.ignoreControls = !0, n = [{
                                    id: 1,
                                    title: t.IntlString("APP_DARKTCHAT_NEW_CHANNEL"),
                                    icons: "fa-plus",
                                    color: "green"
                                }, {
                                    id: 3,
                                    title: t.IntlString("APP_DARKTCHAT_CANCEL"),
                                    icons: "fa-undo"
                                }], e.next = 7, l.a.CreateModal({
                                    choix: n
                                });
                            case 7:
                                s = e.sent, t.ignoreControls = !1, 1 === s.id && t.addChannelOption(), e.next = 12;
                                break;
                            case 12:
                            case "end":
                                return e.stop()
                        }
                    }, e, t)
                }))()
            },
            showChannel: function(t) {
                this.$router.push({
                    name: "notes.channel.show",
                    params: {
                        channel: t
                    }
                })
            },
            onBack: function() {
                !0 !== this.ignoreControls && this.$router.push({
                    name: "home"
                })
            },
            addChannelOption: function() {
                var t = this;
                return a()(o.a.mark(function e() {
                    var n, s;
                    return o.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, l.a.CreateTextModal({
                                    limit: 280,
                                    title: t.IntlString("APP_DARKTCHAT_NEW_CHANNEL")
                                });
                            case 3:
                                n = e.sent, s = (n || {}).text || " ", s.length > 0 && (t.currentSelect = 0, t.notesAddChannel({
                                    channel: s
                                })), e.next = 11;
                                break;
                            case 9:
                                e.prev = 9, e.t0 = e.catch(0);
                            case 11:
                            case "end":
                                return e.stop()
                        }
                    }, e, t, [
                        [0, 9]
                    ])
                }))()
            },
            removeChannelOption: function() {
                var t = this;
                return a()(o.a.mark(function e() {
                    var n;
                    return o.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                n = t.notesChannels[t.currentSelect].channel, t.currentSelect = 0, t.notesRemoveChannel({
                                    channel: n
                                });
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }, e, t)
                }))()
            }
        }),
        created: function() {
            this.useMouse ? this.currentSelect = -1 : (this.$bus.$on("keyUpArrowDown", this.onDown), this.$bus.$on("keyUpArrowUp", this.onUp), this.$bus.$on("keyUpArrowRight", this.onRight), this.$bus.$on("keyUpEnter", this.onEnter), this.$bus.$on("keyUpBackspace", this.onBack))
        },
        beforeDestroy: function() {
            this.$bus.$off("keyUpArrowDown", this.onDown), this.$bus.$off("keyUpArrowUp", this.onUp), this.$bus.$off("keyUpArrowRight", this.onRight), this.$bus.$off("keyUpEnter", this.onEnter), this.$bus.$off("keyUpBackspace", this.onBack)
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(6),
        o = n.n(s),
        i = n(5),
        a = n.n(i),
        r = n(2),
        c = n.n(r),
        u = n(3),
        l = n(10),
        h = n.n(l);
    e.default = {
        components: {
            PhoneTitle: h.a
        },
        data: function() {
            return {
                message: "",
                channel: "",
                currentSelect: 0
            }
        },
        computed: c()({}, n.i(u.b)(["notesMessages", "notesCurrentChannel", "useMouse"]), {
            channelName: function() {
                return "# " + this.channel
            }
        }),
        watch: {
            notesMessages: function() {
                var t = this.$refs.elementsDiv;
                t.scrollTop = t.scrollHeight
            }
        },
        methods: c()({
            setChannel: function(t) {
                this.channel = t, this.notesSetChannel({
                    channel: t
                })
            }
        }, n.i(u.a)(["notesSetChannel", "notesSendMessage"]), {
            scrollIntoViewIfNeeded: function() {
                var t = this;
                this.$nextTick(function() {
                    var e = t.$el.querySelector(".select");
                    null !== e && e.scrollIntoViewIfNeeded()
                })
            },
            onUp: function() {
                var t = this.$refs.elementsDiv;
                t.scrollTop = t.scrollTop - 120
            },
            onDown: function() {
                var t = this.$refs.elementsDiv;
                t.scrollTop = t.scrollTop + 120
            },
            onEnter: function() {
                var t = this;
                return a()(o.a.mark(function e() {
                    var n, s;
                    return o.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, t.$phoneAPI.getReponseText();
                            case 2:
                                n = e.sent, void 0 !== n && void 0 !== n.text && (s = n.text.trim(), 0 !== s.length && t.notesSendMessage({
                                    channel: t.channel,
                                    message: s
                                }));
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }, e, t)
                }))()
            },
            sendMessage: function() {
                var t = this.message.trim();
                0 !== t.length && (this.notesSendMessage({
                    channel: this.channel,
                    message: t
                }), this.message = "")
            },
            onBack: function() {
                !0 === this.useMouse && "BODY" !== document.activeElement.tagName || this.onQuit()
            },
            onQuit: function() {
                this.$router.push({
                    name: "notes.channel"
                })
            },
            formatTime: function(t) {
                return new Date(t).toLocaleTimeString()
            }
        }),
        created: function() {
            this.useMouse ? this.currentSelect = -1 : (this.$bus.$on("keyUpArrowDown", this.onDown), this.$bus.$on("keyUpArrowUp", this.onUp), this.$bus.$on("keyUpEnter", this.onEnter)), this.$bus.$on("keyUpBackspace", this.onBack), this.setChannel(this.$route.params.channel)
        },
        mounted: function() {
            window.c = this.$refs.elementsDiv;
            var t = this.$refs.elementsDiv;
            t.scrollTop = t.scrollHeight
        },
        beforeDestroy: function() {
            this.$bus.$off("keyUpArrowDown", this.onDown), this.$bus.$off("keyUpArrowUp", this.onUp), this.$bus.$off("keyUpEnter", this.onEnter), this.$bus.$off("keyUpBackspace", this.onBack)
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(2),
        o = n.n(s),
        i = n(3),
        a = n(27),
        r = n.n(a);
    e.default = {
        components: {
            InfoBare: r.a
        },
        computed: o()({}, n.i(i.b)(["themeColorTitle"]), {
            style: function() {
                return {
                    backgroundColor: this.backgroundColor || this.themeColorTitle,
                    color: this.color || "#FFF"
                }
            }
        }),
        methods: {
            back: function() {
                this.$emit("back")
            }
        },
        props: {
            title: {
                type: String,
                required: !0
            },
            showInfoBare: {
                type: Boolean,
                default: !0
            },
            backgroundColor: {
                type: String
            }
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(12);
    e.default = {
        created: function() {
            s.a.faketakePhoto()
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(6),
        o = n.n(s),
        i = n(5),
        a = n.n(i),
        r = n(2),
        c = n.n(r),
        u = n(3),
        l = n(9),
        h = n(10),
        p = n.n(h);
    e.default = {
        components: {
            PhoneTitle: p.a
        },
        data: function() {
            return {
                currentSelect: 0,
                ignoreControls: !1
            }
        },
        watch: {
            list: function() {
                this.currentSelect = 0
            }
        },
        computed: c()({}, n.i(u.b)(["IntlString", "useMouse", "tchatChannels", "Apps"])),
        methods: c()({}, n.i(u.a)(["tchatAddChannel", "tchatRemoveChannel"]), {
            scrollIntoViewIfNeeded: function() {
                var t = this;
                this.$nextTick(function() {
                    var e = t.$el.querySelector(".select");
                    null !== e && e.scrollIntoViewIfNeeded()
                })
            },
            onUp: function() {
                !0 !== this.ignoreControls && (this.currentSelect = 0 === this.currentSelect ? 0 : this.currentSelect - 1, this.scrollIntoViewIfNeeded())
            },
            onDown: function() {
                !0 !== this.ignoreControls && (this.currentSelect = this.currentSelect === this.tchatChannels.length - 1 ? this.currentSelect : this.currentSelect + 1, this.scrollIntoViewIfNeeded())
            },
            onRight: function() {
                var t = this;
                return a()(o.a.mark(function e() {
                    var n, s;
                    return o.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!0 !== t.ignoreControls) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return t.ignoreControls = !0, n = [{
                                    id: 1,
                                    title: t.IntlString("APP_DARKTCHAT_NEW_CHANNEL"),
                                    icons: "fa-plus",
                                    color: "dodgerblue"
                                }, {
                                    id: 2,
                                    title: t.IntlString("APP_DARKTCHAT_DELETE_CHANNEL"),
                                    icons: "fa-minus",
                                    color: "tomato"
                                }, {
                                    id: 3,
                                    title: t.IntlString("APP_DARKTCHAT_CANCEL"),
                                    icons: "fa-undo"
                                }], 0 === t.tchatChannels.length && n.splice(1, 1), e.next = 7, l.a.CreateModal({
                                    choix: n
                                });
                            case 7:
                                s = e.sent, t.ignoreControls = !1, e.t0 = s.id, e.next = 1 === e.t0 ? 12 : 2 === e.t0 ? 14 : (e.t0, 16);
                                break;
                            case 12:
                                return t.addChannelOption(), e.abrupt("break", 16);
                            case 14:
                                return t.removeChannelOption(), e.abrupt("break", 16);
                            case 16:
                            case "end":
                                return e.stop()
                        }
                    }, e, t)
                }))()
            },
            onEnter: function() {
                var t = this;
                return a()(o.a.mark(function e() {
                    var n, s, i;
                    return o.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!0 !== t.ignoreControls) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                if (0 !== t.tchatChannels.length) {
                                    e.next = 12;
                                    break
                                }
                                return t.ignoreControls = !0, n = [{
                                    id: 1,
                                    title: t.IntlString("APP_DARKTCHAT_NEW_CHANNEL"),
                                    icons: "fa-plus",
                                    color: "green"
                                }, {
                                    id: 3,
                                    title: t.IntlString("APP_DARKTCHAT_CANCEL"),
                                    icons: "fa-undo"
                                }], e.next = 7, l.a.CreateModal({
                                    choix: n
                                });
                            case 7:
                                s = e.sent, t.ignoreControls = !1, 1 === s.id && t.addChannelOption(), e.next = 14;
                                break;
                            case 12:
                                i = t.tchatChannels[t.currentSelect].channel, t.showChannel(i);
                            case 14:
                            case "end":
                                return e.stop()
                        }
                    }, e, t)
                }))()
            },
            showChannel: function(t) {
                this.$router.push({
                    name: "tchat.channel.show",
                    params: {
                        channel: t
                    }
                })
            },
            onBack: function() {
                !0 !== this.ignoreControls && this.$router.push({
                    name: "home"
                })
            },
            addChannelOption: function() {
                var t = this;
                return a()(o.a.mark(function e() {
                    var n, s;
                    return o.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, l.a.CreateTextModal({
                                    limit: 20,
                                    title: t.IntlString("APP_DARKTCHAT_NEW_CHANNEL")
                                });
                            case 3:
                                n = e.sent, s = (n || {}).text || "", s = s.toLowerCase().replace(/[^a-z]/g, ""), s.length > 0 && (t.currentSelect = 0, t.tchatAddChannel({
                                    channel: s
                                })), e.next = 11;
                                break;
                            case 9:
                                e.prev = 9, e.t0 = e.catch(0);
                            case 11:
                            case "end":
                                return e.stop()
                        }
                    }, e, t, [
                        [0, 9]
                    ])
                }))()
            },
            removeChannelOption: function() {
                var t = this;
                return a()(o.a.mark(function e() {
                    var n;
                    return o.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                n = t.tchatChannels[t.currentSelect].channel, t.currentSelect = 0, t.tchatRemoveChannel({
                                    channel: n
                                });
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }, e, t)
                }))()
            }
        }),
        created: function() {
            this.useMouse ? this.currentSelect = -1 : (this.$bus.$on("keyUpArrowDown", this.onDown), this.$bus.$on("keyUpArrowUp", this.onUp), this.$bus.$on("keyUpArrowRight", this.onRight), this.$bus.$on("keyUpEnter", this.onEnter), this.$bus.$on("keyUpBackspace", this.onBack))
        },
        beforeDestroy: function() {
            this.$bus.$off("keyUpArrowDown", this.onDown), this.$bus.$off("keyUpArrowUp", this.onUp), this.$bus.$off("keyUpArrowRight", this.onRight), this.$bus.$off("keyUpEnter", this.onEnter), this.$bus.$off("keyUpBackspace", this.onBack)
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(6),
        o = n.n(s),
        i = n(5),
        a = n.n(i),
        r = n(2),
        c = n.n(r),
        u = n(3),
        l = n(10),
        h = n.n(l);
    e.default = {
        components: {
            PhoneTitle: h.a
        },
        data: function() {
            return {
                message: "",
                channel: "",
                currentSelect: 0
            }
        },
        computed: c()({}, n.i(u.b)(["tchatMessages", "tchatCurrentChannel", "useMouse"]), {
            channelName: function() {
                return "# " + this.channel
            }
        }),
        watch: {
            tchatMessages: function() {
                var t = this.$refs.elementsDiv;
                t.scrollTop = t.scrollHeight
            }
        },
        methods: c()({
            setChannel: function(t) {
                this.channel = t, this.tchatSetChannel({
                    channel: t
                })
            }
        }, n.i(u.a)(["tchatSetChannel", "tchatSendMessage"]), {
            scrollIntoViewIfNeeded: function() {
                var t = this;
                this.$nextTick(function() {
                    var e = t.$el.querySelector(".select");
                    null !== e && e.scrollIntoViewIfNeeded()
                })
            },
            onUp: function() {
                var t = this.$refs.elementsDiv;
                t.scrollTop = t.scrollTop - 120
            },
            onDown: function() {
                var t = this.$refs.elementsDiv;
                t.scrollTop = t.scrollTop + 120
            },
            onEnter: function() {
                var t = this;
                return a()(o.a.mark(function e() {
                    var n, s;
                    return o.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, t.$phoneAPI.getReponseText();
                            case 2:
                                n = e.sent, void 0 !== n && void 0 !== n.text && (s = n.text.trim(), 0 !== s.length && t.tchatSendMessage({
                                    channel: t.channel,
                                    message: s
                                }));
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }, e, t)
                }))()
            },
            sendMessage: function() {
                var t = this.message.trim();
                0 !== t.length && (this.tchatSendMessage({
                    channel: this.channel,
                    message: t
                }), this.message = "")
            },
            onBack: function() {
                !0 === this.useMouse && "BODY" !== document.activeElement.tagName || this.onQuit()
            },
            onQuit: function() {
                this.$router.push({
                    name: "tchat.channel"
                })
            },
            formatTime: function(t) {
                return new Date(t).toLocaleTimeString()
            }
        }),
        created: function() {
            this.useMouse ? this.currentSelect = -1 : (this.$bus.$on("keyUpArrowDown", this.onDown), this.$bus.$on("keyUpArrowUp", this.onUp), this.$bus.$on("keyUpEnter", this.onEnter)), this.$bus.$on("keyUpBackspace", this.onBack), this.setChannel(this.$route.params.channel)
        },
        mounted: function() {
            window.c = this.$refs.elementsDiv;
            var t = this.$refs.elementsDiv;
            t.scrollTop = t.scrollHeight
        },
        beforeDestroy: function() {
            this.$bus.$off("keyUpArrowDown", this.onDown), this.$bus.$off("keyUpArrowUp", this.onUp), this.$bus.$off("keyUpEnter", this.onEnter), this.$bus.$off("keyUpBackspace", this.onBack)
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = {
        created: function() {
            var t = this;
            setTimeout(function() {
                t.$router.push({
                    name: "tchat.channel"
                })
            }, 700)
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(2),
        o = n.n(s),
        i = n(3),
        a = n(10),
        r = n.n(a),
        c = n(9);
    e.default = {
        components: {
            PhoneTitle: r.a
        },
        data: function() {
            return {
                id: -1,
                currentSelect: 0,
                ignoreControls: !1,
                contact: {
                    display: "",
                    number: "",
                    id: -1
                }
            }
        },
        computed: o()({}, n.i(i.b)(["IntlString", "contacts", "useMouse"])),
        methods: o()({}, n.i(i.a)(["updateContact", "addContact"]), {
            onUp: function() {
                if (!0 !== this.ignoreControls) {
                    var t = document.querySelector(".group.select");
                    if (null !== t.previousElementSibling) {
                        document.querySelectorAll(".group").forEach(function(t) {
                            t.classList.remove("select")
                        }), t.previousElementSibling.classList.add("select");
                        var e = t.previousElementSibling.querySelector("input");
                        null !== e && e.focus()
                    }
                }
            },
            onDown: function() {
                if (!0 !== this.ignoreControls) {
                    var t = document.querySelector(".group.select");
                    if (null !== t.nextElementSibling) {
                        document.querySelectorAll(".group").forEach(function(t) {
                            t.classList.remove("select")
                        }), t.nextElementSibling.classList.add("select");
                        var e = t.nextElementSibling.querySelector("input");
                        null !== e && e.focus()
                    }
                }
            },
            onEnter: function() {
                var t = this;
                if (!0 !== this.ignoreControls) {
                    var e = document.querySelector(".group.select");
                    if ("text" === e.dataset.type) {
                        var n = {
                            limit: parseInt(e.dataset.maxlength) || 64,
                            text: this.contact[e.dataset.model] || ""
                        };
                        this.$phoneAPI.getReponseText(n).then(function(n) {
                            t.contact[e.dataset.model] = n.text
                        })
                    }
                    e.dataset.action && this[e.dataset.action] && this[e.dataset.action]()
                }
            },
            save: function() {
                -1 === this.id || 0 === this.id ? this.addContact({
                    display: this.contact.display,
                    number: this.contact.number
                }) : this.updateContact({
                    id: this.id,
                    display: this.contact.display,
                    number: this.contact.number
                }), history.back()
            },
            cancel: function() {
                !0 !== this.ignoreControls && (!0 === this.useMouse && "BODY" !== document.activeElement.tagName || history.back())
            },
            forceCancel: function() {
                history.back()
            },
            deleteC: function() {
                var t = this;
                if (-1 !== this.id) {
                    this.ignoreControls = !0;
                    var e = [{
                        title: "Annuler"
                    }, {
                        title: "Annuler"
                    }, {
                        title: "Supprimer",
                        color: "red"
                    }, {
                        title: "Annuler"
                    }, {
                        title: "Annuler"
                    }];
                    c.a.CreateModal({
                        choix: e
                    }).then(function(e) {
                        t.ignoreControls = !1, "Supprimer" === e.title && (t.$phoneAPI.deleteContact(t.id), history.back())
                    })
                } else history.back()
            }
        }),
        created: function() {
            var t = this;
            if (this.useMouse ? this.currentSelect = -1 : (this.$bus.$on("keyUpArrowDown", this.onDown), this.$bus.$on("keyUpArrowUp", this.onUp), this.$bus.$on("keyUpEnter", this.onEnter)), this.$bus.$on("keyUpBackspace", this.cancel), this.id = parseInt(this.$route.params.id), this.contact.display = this.IntlString("APP_CONTACT_NEW"), this.contact.number = this.$route.params.number, -1 !== this.id) {
                var e = this.contacts.find(function(e) {
                    return e.id === t.id
                });
                void 0 !== e && (this.contact = {
                    id: e.id,
                    display: e.display,
                    number: e.number
                })
            }
        },
        beforeDestroy: function() {
            this.$bus.$off("keyUpArrowDown", this.onDown), this.$bus.$off("keyUpArrowUp", this.onUp), this.$bus.$off("keyUpEnter", this.onEnter), this.$bus.$off("keyUpBackspace", this.cancel)
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(13),
        o = n.n(s),
        i = n(2),
        a = n.n(i),
        r = n(3),
        c = n(29),
        u = n(37),
        l = n.n(u),
        h = n(9);
    e.default = {
        components: {
            List: l.a
        },
        data: function() {
            return {
                disableList: !1
            }
        },
        computed: a()({}, n.i(r.b)(["IntlString", "contacts", "useMouse"]), {
            lcontacts: function() {
                return [{
                    display: this.IntlString("APP_CONTACT_NEW"),
                    letter: "+",
                    num: "",
                    id: -1
                }].concat(o()(this.contacts.map(function(t) {
                    return t.backgroundColor = t.backgroundColor || n.i(c.a)(t.number), t
                })))
            }
        }),
        methods: {
            onSelect: function(t) {
                -1 === t.id ? this.$router.push({
                    name: "contacts.view",
                    params: {
                        id: t.id
                    }
                }) : this.$router.push({
                    name: "messages.view",
                    params: {
                        number: t.number,
                        display: t.display
                    }
                })
            },
            onOption: function(t) {
                var e = this; - 1 !== t.id && void 0 !== t.id && (this.disableList = !0, h.a.CreateModal({
                    choix: [{
                        id: 1,
                        title: this.IntlString("APP_CONTACT_EDIT"),
                        icons: "fa-circle-o",
                        color: "orange"
                    }, {
                        id: 3,
                        title: "Annuler",
                        icons: "fa-undo"
                    }]
                }).then(function(n) {
                    1 === n.id && e.$router.push({
                        path: "contact/" + t.id
                    }), e.disableList = !1
                }))
            },
            back: function() {
                !0 !== this.disableList && this.$router.push({
                    name: "home"
                })
            }
        },
        created: function() {
            this.useMouse || this.$bus.$on("keyUpBackspace", this.back)
        },
        beforeDestroy: function() {
            this.$bus.$off("keyUpBackspace", this.back)
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(13),
        o = n.n(s),
        i = n(2),
        a = n.n(i),
        r = n(37),
        c = n.n(r),
        u = n(3),
        l = n(9);
    e.default = {
        components: {
            List: c.a
        },
        data: function() {
            return {}
        },
        computed: a()({}, n.i(u.b)(["IntlString", "contacts", "useMouse"]), {
            lcontacts: function() {
                return [{
                    display: this.IntlString("APP_MESSAGE_CONTRACT_ENTER_NUMBER"),
                    letter: "+",
                    backgroundColor: "orange",
                    num: -1
                }].concat(o()(this.contacts))
            }
        }),
        methods: {
            onSelect: function(t) {
                var e = this; - 1 === t.num ? l.a.CreateTextModal({
                    title: this.IntlString("APP_PHONE_ENTER_NUMBER"),
                    limit: 10
                }).then(function(t) {
                    var n = t.text.trim();
                    "" !== n && e.$router.push({
                        name: "messages.view",
                        params: {
                            number: n,
                            display: n
                        }
                    })
                }) : this.$router.push({
                    name: "messages.view",
                    params: t
                })
            },
            back: function() {
                history.back()
            }
        },
        created: function() {
            this.$bus.$on("keyUpBackspace", this.back)
        },
        beforeDestroy: function() {
            this.$bus.$off("keyUpBackspace", this.back)
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(6),
        o = n.n(s),
        i = n(13),
        a = n.n(i),
        r = n(5),
        c = n.n(r),
        u = n(2),
        l = n.n(u),
        h = n(3),
        p = n(29),
        f = n(10),
        d = n.n(f),
        m = n(9);
    e.default = {
        data: function() {
            return {
                ignoreControls: !1,
                selectMessage: -1,
                display: "",
                phoneNumber: "",
                imgZoom: void 0,
                message: ""
            }
        },
        components: {
            PhoneTitle: d.a
        },
        methods: l()({}, n.i(h.a)(["setMessageRead", "sendMessage", "deleteMessage", "startCall"]), {
            resetScroll: function() {
                var t = this;
                this.$nextTick(function() {
                    var e = document.querySelector("#sms_list");
                    e.scrollTop = e.scrollHeight, t.selectMessage = -1
                })
            },
            scrollIntoViewIfNeeded: function() {
                var t = this;
                this.$nextTick(function() {
                    var e = t.$el.querySelector(".select");
                    null !== e && e.scrollIntoViewIfNeeded()
                })
            },
            quit: function() {
                this.$router.go(-1)
            },
            onUp: function() {
                !0 !== this.ignoreControls && (-1 === this.selectMessage ? this.selectMessage = this.messagesList.length - 1 : this.selectMessage = 0 === this.selectMessage ? 0 : this.selectMessage - 1, this.scrollIntoViewIfNeeded())
            },
            onDown: function() {
                !0 !== this.ignoreControls && (-1 === this.selectMessage ? this.selectMessage = this.messagesList.length - 1 : this.selectMessage = this.selectMessage === this.messagesList.length - 1 ? this.selectMessage : this.selectMessage + 1, this.scrollIntoViewIfNeeded())
            },
            onEnter: function() {
                var t = this;
                !0 !== this.ignoreControls && (-1 !== this.selectMessage ? this.onActionMessage(this.messagesList[this.selectMessage]) : this.$phoneAPI.getReponseText().then(function(e) {
                    var n = e.text.trim();
                    "" !== n && t.sendMessage({
                        phoneNumber: t.phoneNumber,
                        message: n
                    })
                }))
            },
            send: function() {
                var t = this.message.trim();
                "" !== t && (this.message = "", this.sendMessage({
                    phoneNumber: this.phoneNumber,
                    message: t
                }))
            },
            isSMSImage: function(t) {
                return /^https?:\/\/.*\.(png|jpg|jpeg|gif)/.test(t.message)
            },
            onActionMessage: function(t) {
                var e = this;
                return c()(o.a.mark(function n() {
                    var s, i, r, c, u, l, h;
                    return o.a.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return n.prev = 0, s = /(-?\d+(\.\d+)?), (-?\d+(\.\d+)?)/.test(t.message), i = /#([0-9]+)/.test(t.message), r = e.isSMSImage(t), c = [{
                                    id: "delete",
                                    title: e.IntlString("APP_MESSAGE_DELETE"),
                                    icons: "fa-trash"
                                }, {
                                    id: -1,
                                    title: e.IntlString("CANCEL"),
                                    icons: "fa-undo"
                                }], !0 === s && (c = [{
                                    id: "gps",
                                    title: e.IntlString("APP_MESSAGE_SET_GPS"),
                                    icons: "fa-location-arrow"
                                }].concat(a()(c))), !0 === i && (u = t.message.match(/#([0-9-]*)/)[1], c = [{
                                    id: "num",
                                    title: e.IntlString("APP_MESSAGE_MESS_NUMBER") + " " + u,
                                    number: u,
                                    icons: "fa-phone"
                                }].concat(a()(c))), !0 === r && (c = [{
                                    id: "zoom",
                                    title: e.IntlString("APP_MESSAGE_ZOOM_IMG"),
                                    icons: "fa-search"
                                }].concat(a()(c))), e.ignoreControls = !0, n.next = 11, m.a.CreateModal({
                                    choix: c
                                });
                            case 11:
                                l = n.sent, "delete" === l.id ? e.deleteMessage({
                                    id: t.id
                                }) : "gps" === l.id ? (h = t.message.match(/(-?\d+(\.\d+)?), (-?\d+(\.\d+)?)/), e.$phoneAPI.setGPS(h[1], h[3])) : "num" === l.id ? e.$nextTick(function() {
                                    e.onSelectPhoneNumber(l.number)
                                }) : "zoom" === l.id && (e.imgZoom = t.message), n.next = 17;
                                break;
                            case 15:
                                n.prev = 15, n.t0 = n.catch(0);
                            case 17:
                                return n.prev = 17, e.ignoreControls = !1, e.selectMessage = -1, n.finish(17);
                            case 21:
                            case "end":
                                return n.stop()
                        }
                    }, n, e, [
                        [0, 15, 17, 21]
                    ])
                }))()
            },
            onSelectPhoneNumber: function(t) {
                var e = this;
                return c()(o.a.mark(function n() {
                    var s, i, a;
                    return o.a.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return n.prev = 0, e.ignoreControls = !0, s = [{
                                    id: "sms",
                                    title: e.IntlString("APP_MESSAGE_MESS_SMS"),
                                    icons: "fa-comment"
                                }, {
                                    id: "call",
                                    title: e.IntlString("APP_MESSAGE_MESS_CALL"),
                                    icons: "fa-phone"
                                }], s.push({
                                    id: "copy",
                                    title: e.IntlString("APP_MESSAGE_MESS_COPY"),
                                    icons: "fa-copy"
                                }), s.push({
                                    id: -1,
                                    title: e.IntlString("CANCEL"),
                                    icons: "fa-undo"
                                }), n.next = 7, m.a.CreateModal({
                                    choix: s
                                });
                            case 7:
                                if (i = n.sent, "sms" !== i.id) {
                                    n.next = 13;
                                    break
                                }
                                e.phoneNumber = t, e.display = void 0, n.next = 31;
                                break;
                            case 13:
                                if ("call" !== i.id) {
                                    n.next = 17;
                                    break
                                }
                                e.startCall({
                                    numero: t
                                }), n.next = 31;
                                break;
                            case 17:
                                if ("copy" !== i.id) {
                                    n.next = 31;
                                    break
                                }
                                return n.prev = 18, a = e.$refs.copyTextarea, a.value = t, a.style.height = "20px", a.focus(), a.select(), n.next = 26, document.execCommand("copy");
                            case 26:
                                a.style.height = "0", n.next = 31;
                                break;
                            case 29:
                                n.prev = 29, n.t0 = n.catch(18);
                            case 31:
                                n.next = 35;
                                break;
                            case 33:
                                n.prev = 33, n.t1 = n.catch(0);
                            case 35:
                                return n.prev = 35, e.ignoreControls = !1, e.selectMessage = -1, n.finish(35);
                            case 39:
                            case "end":
                                return n.stop()
                        }
                    }, n, e, [
                        [0, 33, 35, 39],
                        [18, 29]
                    ])
                }))()
            },
            onBackspace: function() {
                if (void 0 !== this.imgZoom) return void(this.imgZoom = void 0);
                !0 !== this.ignoreControls && (!0 === this.useMouse && "BODY" !== document.activeElement.tagName || (-1 !== this.selectMessage ? this.selectMessage = -1 : this.quit()))
            },
            showOptions: function() {
                var t = this;
                return c()(o.a.mark(function e() {
                    var n, s, i, a;
                    return o.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, t.ignoreControls = !0, n = [{
                                    id: 1,
                                    title: t.IntlString("APP_MESSAGE_SEND_GPS"),
                                    icons: "fa-location-arrow"
                                }, {
                                    id: -1,
                                    title: t.IntlString("CANCEL"),
                                    icons: "fa-undo"
                                }], t.enableTakePhoto && (n = [{
                                    id: 1,
                                    title: t.IntlString("APP_MESSAGE_SEND_GPS"),
                                    icons: "fa-location-arrow"
                                }, {
                                    id: 2,
                                    title: t.IntlString("APP_MESSAGE_SEND_PHOTO"),
                                    icons: "fa-picture-o"
                                }, {
                                    id: -1,
                                    title: t.IntlString("CANCEL"),
                                    icons: "fa-undo"
                                }]), e.next = 6, m.a.CreateModal({
                                    choix: n
                                });
                            case 6:
                                if (s = e.sent, 1 === s.id && t.sendMessage({
                                        phoneNumber: t.phoneNumber,
                                        message: "%pos%"
                                    }), 2 !== s.id) {
                                    e.next = 14;
                                    break
                                }
                                return e.next = 11, t.$phoneAPI.takePhoto();
                            case 11:
                                i = e.sent, a = i.url, null !== a && void 0 !== a && t.sendMessage({
                                    phoneNumber: t.phoneNumber,
                                    message: a
                                });
                            case 14:
                                t.ignoreControls = !1, e.next = 19;
                                break;
                            case 17:
                                e.prev = 17, e.t0 = e.catch(0);
                            case 19:
                                return e.prev = 19, t.ignoreControls = !1, e.finish(19);
                            case 22:
                            case "end":
                                return e.stop()
                        }
                    }, e, t, [
                        [0, 17, 19, 22]
                    ])
                }))()
            },
            onRight: function() {
                !0 !== this.ignoreControls && -1 === this.selectMessage && this.showOptions()
            }
        }),
        computed: l()({}, n.i(h.b)(["IntlString", "messages", "contacts", "useMouse", "enableTakePhoto"]), {
            messagesList: function() {
                var t = this;
                return this.messages.filter(function(e) {
                    return e.transmitter === t.phoneNumber
                }).sort(function(t, e) {
                    return t.time - e.time
                })
            },
            displayContact: function() {
                var t = this;
                if (void 0 !== this.display) return this.display;
                var e = this.contacts.find(function(e) {
                    return e.number === t.phoneNumber
                });
                return void 0 !== e ? e.display : this.phoneNumber
            },
            color: function() {
                return n.i(p.a)(this.phoneNumber)
            },
            colorSmsOwner: function() {
                return [{
                    backgroundColor: this.color,
                    color: n.i(p.c)(this.color)
                }, {}]
            }
        }),
        watch: {
            messagesList: function() {
                this.setMessageRead(this.phoneNumber), this.resetScroll()
            }
        },
        created: function() {
            this.display = this.$route.params.display, this.phoneNumber = this.$route.params.number, this.useMouse || (this.$bus.$on("keyUpArrowDown", this.onDown), this.$bus.$on("keyUpArrowUp", this.onUp), this.$bus.$on("keyUpEnter", this.onEnter), this.$bus.$on("keyUpArrowRight", this.onRight)), this.$bus.$on("keyUpBackspace", this.onBackspace)
        },
        beforeDestroy: function() {
            this.$bus.$off("keyUpArrowDown", this.onDown), this.$bus.$off("keyUpArrowUp", this.onUp), this.$bus.$off("keyUpEnter", this.onEnter), this.$bus.$off("keyUpArrowRight", this.onRight), this.$bus.$off("keyUpBackspace", this.onBackspace)
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(31),
        o = n.n(s),
        i = n(2),
        a = n.n(i),
        r = n(3),
        c = n(29),
        u = n(9),
        l = n(37),
        h = n.n(l);
    e.default = {
        components: {
            List: h.a
        },
        data: function() {
            return {
                disableList: !1
            }
        },
        methods: a()({}, n.i(r.a)(["deleteMessagesNumber", "deleteAllMessages", "startCall"]), {
            onSelect: function(t) {
                -1 === t.id ? this.$router.push({
                    name: "messages.selectcontact"
                }) : this.$router.push({
                    name: "messages.view",
                    params: t
                })
            },
            onOption: function(t) {
                var e = this;
                void 0 !== t.number && (this.disableList = !0, u.a.CreateModal({
                    choix: [{
                        id: 4,
                        title: this.IntlString("APP_PHONE_CALL"),
                        icons: "fa-phone"
                    }, {
                        id: 5,
                        title: this.IntlString("APP_PHONE_CALL_ANONYMOUS"),
                        icons: "fa-mask"
                    }, {
                        id: 6,
                        title: this.IntlString("APP_MESSAGE_NEW_MESSAGE"),
                        icons: "fa-sms"
                    }, {
                        id: 1,
                        title: this.IntlString("APP_MESSAGE_ERASE_CONVERSATION"),
                        icons: "fa-trash",
                        color: "orange"
                    }, {
                        id: 2,
                        title: this.IntlString("APP_MESSAGE_ERASE_ALL_CONVERSATIONS"),
                        icons: "fa-trash",
                        color: "red"
                    }].concat(t.unknowContact ? [{
                        id: 7,
                        title: this.IntlString("APP_MESSAGE_SAVE_CONTACT"),
                        icons: "fa-save"
                    }] : []).concat([{
                        id: 3,
                        title: this.IntlString("CANCEL"),
                        icons: "fa-undo"
                    }])
                }).then(function(n) {
                    1 === n.id ? e.deleteMessagesNumber({
                        num: t.number
                    }) : 2 === n.id ? e.deleteAllMessages() : 4 === n.id ? e.startCall({
                        numero: t.number
                    }) : 5 === n.id ? e.startCall({
                        numero: "#" + t.number
                    }) : 6 === n.id ? e.$router.push({
                        name: "messages.view",
                        params: t
                    }) : 7 === n.id && e.$router.push({
                        name: "contacts.view",
                        params: {
                            id: 0,
                            number: t.number
                        }
                    }), e.disableList = !1
                }))
            },
            back: function() {
                !0 !== this.disableList && this.$router.push({
                    name: "home"
                })
            }
        }),
        computed: a()({}, n.i(r.b)(["IntlString", "useMouse", "contacts", "messages"]), {
            messagesData: function() {
                var t = this.messages,
                    e = this.contacts,
                    s = t.reduce(function(t, s) {
                        if (void 0 === t[s.transmitter]) {
                            var o = {
                                    noRead: 0,
                                    lastMessage: 0,
                                    display: s.transmitter
                                },
                                i = e.find(function(t) {
                                    return t.number === s.transmitter
                                });
                            o.unknowContact = void 0 === i, void 0 !== i ? (o.display = i.display, o.backgroundColor = i.backgroundColor || n.i(c.a)(s.transmitter), o.letter = i.letter, o.icon = i.icon) : o.backgroundColor = n.i(c.a)(s.transmitter), t[s.transmitter] = o
                        }
                        return 0 === s.isRead && (t[s.transmitter].noRead += 1), s.time >= t[s.transmitter].lastMessage && (t[s.transmitter].lastMessage = s.time, t[s.transmitter].keyDesc = s.message), t
                    }, {}),
                    i = [];
                return o()(s).forEach(function(t) {
                    i.push({
                        display: s[t].display,
                        puce: s[t].noRead,
                        number: t,
                        lastMessage: s[t].lastMessage,
                        keyDesc: s[t].keyDesc,
                        backgroundColor: s[t].backgroundColor,
                        icon: s[t].icon,
                        letter: s[t].letter,
                        unknowContact: s[t].unknowContact
                    })
                }), i.sort(function(t, e) {
                    return e.lastMessage - t.lastMessage
                }), [this.newMessageOption].concat(i)
            },
            newMessageOption: function() {
                return {
                    backgroundColor: "#C0C0C0",
                    display: this.IntlString("APP_MESSAGE_NEW_MESSAGE"),
                    letter: "+",
                    id: -1
                }
            }
        }),
        created: function() {
            this.$bus.$on("keyUpBackspace", this.back)
        },
        beforeDestroy: function() {
            this.$bus.$off("keyUpBackspace", this.back)
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(6),
        o = n.n(s),
        i = n(5),
        a = n.n(i),
        r = n(31),
        c = n.n(r),
        u = n(2),
        l = n.n(u),
        h = n(3),
        p = n(10),
        f = n.n(p),
        d = n(9);
    e.default = {
        components: {
            PhoneTitle: f.a
        },
        data: function() {
            return {
                ignoreControls: !1,
                currentSelect: 0
            }
        },
        computed: l()({}, n.i(h.b)(["IntlString", "useMouse", "myPhoneNumber", "backgroundLabel", "coqueLabel", "sonidoLabel", "zoom", "config", "volume", "availableLanguages"]), {
            paramList: function() {
                var t = this.IntlString("CANCEL"),
                    e = this.IntlString("APP_CONFIG_RESET_CONFIRM"),
                    n = {},
                    s = {};
                return n[t] = "cancel", s[e] = "accept", [{
                    icons: "fa-phone",
                    title: this.IntlString("APP_CONFIG_MY_MUNBER"),
                    value: this.myPhoneNumber
                }, {
                    icons: "fa-picture-o",
                    title: this.IntlString("APP_CONFIG_WALLPAPER"),
                    value: this.backgroundLabel,
                    onValid: "onChangeBackground",
                    values: this.config.background
                }, {
                    icons: "fa-mobile",
                    title: this.IntlString("APP_CONFIG_CASE"),
                    value: this.coqueLabel,
                    onValid: "onChangeCoque",
                    values: this.config.coque
                }, {
                    icons: "fa-bell-o",
                    title: this.IntlString("APP_CONFIG_SOUND"),
                    value: this.sonidoLabel,
                    onValid: "onChangeSonido",
                    values: this.config.sonido
                }, {
                    icons: "fa-search",
                    title: this.IntlString("APP_CONFIG_ZOOM"),
                    value: this.zoom,
                    onValid: "setZoom",
                    onLeft: this.ajustZoom(-1),
                    onRight: this.ajustZoom(1),
                    values: {
                        "125 %": "125%",
                        "100 %": "100%",
                        "80 %": "80%",
                        "60 %": "60%",
                        "40 %": "40%",
                        "20 %": "20%"
                    }
                }, {
                    icons: "fa-volume-down",
                    title: this.IntlString("APP_CONFIG_VOLUME"),
                    value: this.valumeDisplay,
                    onValid: "setPhoneVolume",
                    onLeft: this.ajustVolume(-.01),
                    onRight: this.ajustVolume(.01),
                    values: {
                        "100 %": 1,
                        "80 %": .8,
                        "60 %": .6,
                        "40 %": .4,
                        "20 %": .2,
                        "0 %": 0
                    }
                },{
                    icons: "fa-exclamation-triangle",
                    color: "#ee3838",
                    title: this.IntlString("APP_CONFIG_RESET"),
                    onValid: "resetPhone",
                    values: l()({}, s, n)
                }]
            },
            valumeDisplay: function() {
                return Math.floor(100 * this.volume) + " %"
            }
        }),
        methods: l()({}, n.i(h.a)(["getIntlString", "setZoon", "setBackground", "setCoque", "setSonido", "setVolume", "setLanguage", "setMouseSupport"]), {
            scrollIntoViewIfNeeded: function() {
                this.$nextTick(function() {
                    document.querySelector(".select").scrollIntoViewIfNeeded()
                })
            },
            onBackspace: function() {
                !0 !== this.ignoreControls && this.$router.push({
                    name: "home"
                })
            },
            onUp: function() {
                !0 !== this.ignoreControls && (this.currentSelect = 0 === this.currentSelect ? 0 : this.currentSelect - 1, this.scrollIntoViewIfNeeded())
            },
            onDown: function() {
                !0 !== this.ignoreControls && (this.currentSelect = this.currentSelect === this.paramList.length - 1 ? this.currentSelect : this.currentSelect + 1, this.scrollIntoViewIfNeeded())
            },
            onRight: function() {
                if (!0 !== this.ignoreControls) {
                    var t = this.paramList[this.currentSelect];
                    void 0 !== t.onRight && t.onRight(t)
                }
            },
            onLeft: function() {
                if (!0 !== this.ignoreControls) {
                    var t = this.paramList[this.currentSelect];
                    void 0 !== t.onLeft && t.onLeft(t)
                }
            },
            actionItem: function(t) {
                var e = this;
                if (void 0 !== t.values) {
                    this.ignoreControls = !0;
                    var n = c()(t.values).map(function(e) {
                        return {
                            title: e,
                            value: t.values[e],
                            picto: t.values[e]
                        }
                    });
                    d.a.CreateModal({
                        choix: n
                    }).then(function(n) {
                        e.ignoreControls = !1, "cancel" !== n.title && e[t.onValid](t, n)
                    })
                }
            },
            onPressItem: function(t) {
                this.actionItem(this.paramList[t])
            },
            onEnter: function() {
                !0 !== this.ignoreControls && this.actionItem(this.paramList[this.currentSelect])
            },
            onChangeBackground: function(t, e) {
                var n = this;
                return a()(o.a.mark(function t() {
                    var s;
                    return o.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                s = e.value, "URL" === s ? (n.ignoreControls = !0, d.a.CreateTextModal({
                                    text: "https://i.imgur.com/"
                                }).then(function(t) {
                                    "" !== t.text && void 0 !== t.text && null !== t.text && "https://i.imgur.com/" !== t.text && n.setBackground({
                                        label: "Custom",
                                        value: t.text
                                    })
                                }).finally(function() {
                                    n.ignoreControls = !1
                                })) : n.setBackground({
                                    label: e.title,
                                    value: e.value
                                });
                            case 2:
                            case "end":
                                return t.stop()
                        }
                    }, t, n)
                }))()
            },
            onChangeCoque: function(t, e) {
                this.setCoque({
                    label: e.title,
                    value: e.value
                })
            },
            onChangeSonido: function(t, e) {
                this.setSonido({
                    label: e.title,
                    value: e.value
                })
            },
            setZoom: function(t, e) {
                this.setZoon(e.value)
            },
            ajustZoom: function(t) {
                var e = this;
                return function() {
                    var n = Math.max(10, (parseInt(e.zoom) || 100) + t);
                    e.setZoon(n + "%")
                }
            },
            setPhoneVolume: function(t, e) {
                this.setVolume(e.value)
            },
            ajustVolume: function(t) {
                var e = this;
                return function() {
                    var n = Math.max(0, Math.min(1, parseFloat(e.volume) + t));
                    e.setVolume(n)
                }
            },
            onChangeLanguages: function(t, e) {
                "cancel" !== e.value && this.setLanguage(e.value)
            },
            onChangeMouseSupport: function(t, e) {
                "cancel" !== e.value && (this.setMouseSupport(e.value), this.onBackspace())
            },
            resetPhone: function(t, e) {
                var n = this;
                if ("cancel" !== e.value) {
                    this.ignoreControls = !0;
                    var s = this.IntlString("CANCEL"),
                        o = this.IntlString("APP_CONFIG_RESET_CONFIRM"),
                        i = [{
                            title: s
                        }, {
                            title: s
                        }, {
                            title: o,
                            color: "red",
                            reset: !0
                        }, {
                            title: s
                        }, {
                            title: s
                        }];
                    d.a.CreateModal({
                        choix: i
                    }).then(function(t) {
                        n.ignoreControls = !1, !0 === t.reset && n.$phoneAPI.deleteALL()
                    })
                }
            }
        }),
        created: function() {
            this.useMouse ? this.currentSelect = -1 : (this.$bus.$on("keyUpArrowRight", this.onRight), this.$bus.$on("keyUpArrowLeft", this.onLeft), this.$bus.$on("keyUpArrowDown", this.onDown), this.$bus.$on("keyUpArrowUp", this.onUp), this.$bus.$on("keyUpEnter", this.onEnter)), this.$bus.$on("keyUpBackspace", this.onBackspace)
        },
        beforeDestroy: function() {
            this.$bus.$off("keyUpArrowRight", this.onRight), this.$bus.$off("keyUpArrowLeft", this.onLeft), this.$bus.$off("keyUpArrowDown", this.onDown), this.$bus.$off("keyUpArrowUp", this.onUp), this.$bus.$off("keyUpEnter", this.onEnter), this.$bus.$off("keyUpBackspace", this.onBackspace)
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(6),
        o = n.n(s),
        i = n(5),
        a = n.n(i),
        r = n(2),
        c = n.n(r),
        u = n(195),
        l = n.n(u),
        h = n(3),
        p = n(9),
        f = l()({
            MENU: 0,
            NEW_ACCOUNT: 1,
            LOGIN: 2,
            ACCOUNT: 3,
            NOTIFICATION: 4
        });
    e.default = {
        components: {},
        data: function() {
            return {
                STATES: f,
                state: f.MENU,
                localAccount: {
                    username: "",
                    password: "",
                    passwordConfirm: "",
                    avatarUrl: "/html/static/img/twitter/default_profile.png"
                },
                notification: 0,
                notificationSound: !1
            }
        },
        computed: c()({}, n.i(h.b)(["IntlString", "useMouse", "twitterUsername", "twitterPassword", "twitterAvatarUrl", "twitterNotification", "twitterNotificationSound"]), {
            isLogin: function() {
                return void 0 !== this.twitterUsername && "" !== this.twitterUsername
            },
            validAccount: function() {
                return this.localAccount.username.length >= 4 && this.localAccount.password.length >= 6 && this.localAccount.password === this.localAccount.passwordConfirm
            }
        }),
        methods: c()({}, n.i(h.a)(["twitterLogin", "twitterChangePassword", "twitterLogout", "twitterSetAvatar", "twitterCreateNewAccount", "setTwitterNotification", "setTwitterNotificationSound"]), {
            onUp: function() {
                if (!0 !== this.ignoreControls) {
                    var t = document.querySelector(".group.select");
                    if (null === t) return t = document.querySelector(".group"), void t.classList.add("select");
                    for (; null !== t.previousElementSibling && !t.previousElementSibling.classList.contains("group");) t = t.previousElementSibling;
                    if (null !== t.previousElementSibling) {
                        document.querySelectorAll(".group").forEach(function(t) {
                            t.classList.remove("select")
                        }), t.previousElementSibling.classList.add("select");
                        var e = t.previousElementSibling.querySelector("input");
                        null !== e && e.focus()
                    }
                }
            },
            onDown: function() {
                if (!0 !== this.ignoreControls) {
                    var t = document.querySelector(".group.select");
                    if (null === t) return t = document.querySelector(".group"), void t.classList.add("select");
                    for (; null !== t.nextElementSibling && !t.nextElementSibling.classList.contains("group");) t = t.nextElementSibling;
                    if (null !== t.nextElementSibling) {
                        document.querySelectorAll(".group").forEach(function(t) {
                            t.classList.remove("select")
                        }), t.nextElementSibling.classList.add("select");
                        var e = t.nextElementSibling.querySelector("input");
                        null !== e && e.focus()
                    }
                }
            },
            onEnter: function() {
                if (!0 !== this.ignoreControls) {
                    var t = document.querySelector(".group.select");
                    if (null !== t && null !== t.dataset) {
                        if ("text" === t.dataset.type) {
                            var e = t.querySelector("input"),
                                n = {
                                    limit: parseInt(t.dataset.maxlength) || 64,
                                    text: t.dataset.defaultValue || ""
                                };
                            this.$phoneAPI.getReponseText(n).then(function(t) {
                                e.value = t.text, e.dispatchEvent(new window.Event("change"))
                            })
                        }
                        "button" === t.dataset.type && t.click()
                    }
                }
            },
            onBack: function() {
                this.state !== this.STATES.MENU ? this.state = this.STATES.MENU : this.$bus.$emit("twitterHome")
            },
            setLocalAccount: function(t, e) {
                this.localAccount[e] = t.target.value
            },
            setLocalAccountAvartar: function(t) {
                var e = this;
                return a()(o.a.mark(function t() {
                    var n;
                    return o.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.prev = 0, t.next = 3, p.a.CreateTextModal({
                                    text: e.twitterAvatarUrl || "https://i.imgur.com/"
                                });
                            case 3:
                                n = t.sent, e.localAccount.avatarUrl = n.text, t.next = 9;
                                break;
                            case 7:
                                t.prev = 7, t.t0 = t.catch(0);
                            case 9:
                            case "end":
                                return t.stop()
                        }
                    }, t, e, [
                        [0, 7]
                    ])
                }))()
            },
            onPressChangeAvartar: function() {
                var t = this;
                return a()(o.a.mark(function e() {
                    var n;
                    return o.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, p.a.CreateTextModal({
                                    text: t.twitterAvatarUrl || "https://i.imgur.com/"
                                });
                            case 3:
                                n = e.sent, t.twitterSetAvatar({
                                    avatarUrl: n.text
                                }), e.next = 9;
                                break;
                            case 7:
                                e.prev = 7, e.t0 = e.catch(0);
                            case 9:
                            case "end":
                                return e.stop()
                        }
                    }, e, t, [
                        [0, 7]
                    ])
                }))()
            },
            login: function() {
                this.twitterLogin({
                    username: this.localAccount.username,
                    password: this.localAccount.password
                }), this.state = f.MENU
            },
            logout: function() {
                this.twitterLogout()
            },
            createAccount: function() {
                !0 === this.validAccount && (this.twitterCreateNewAccount(this.localAccount), this.localAccount = {
                    username: "",
                    password: "",
                    passwordConfirm: "",
                    avatarUrl: null
                }, this.state = this.STATES.MENU)
            },
            cancel: function() {
                this.state = f.MENU
            },
            setNotification: function(t) {
                this.setTwitterNotification(t)
            },
            setNotificationSound: function(t) {
                this.setTwitterNotificationSound(t)
            },
            changePassword: function(t) {
                var e = this;
                return a()(o.a.mark(function t() {
                    var n, s;
                    return o.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.prev = 0, t.next = 3, p.a.CreateTextModal({
                                    limit: 30
                                });
                            case 3:
                                if (n = t.sent, "" !== n.text) {
                                    t.next = 6;
                                    break
                                }
                                return t.abrupt("return");
                            case 6:
                                return t.next = 8, p.a.CreateTextModal({
                                    limit: 30
                                });
                            case 8:
                                if (s = t.sent, "" !== s.text) {
                                    t.next = 11;
                                    break
                                }
                                return t.abrupt("return");
                            case 11:
                                if (s.text === n.text) {
                                    t.next = 16;
                                    break
                                }
                                return e.$notify({
                                    title: e.IntlString("APP_TWITTER_NAME"),
                                    message: e.IntlString("APP_TWITTER_NOTIF_NEW_PASSWORD_MISS_MATCH"),
                                    icon: "twitter",
                                    backgroundColor: "#e0245e80"
                                }), t.abrupt("return");
                            case 16:
                                if (!(s.text.length < 6)) {
                                    t.next = 19;
                                    break
                                }
                                return e.$notify({
                                    title: e.IntlString("APP_TWITTER_NAME"),
                                    message: e.IntlString("APP_TWITTER_NOTIF_NEW_PASSWORD_LENGTH_ERROR"),
                                    icon: "twitter",
                                    backgroundColor: "#e0245e80"
                                }), t.abrupt("return");
                            case 19:
                                e.twitterChangePassword(s.text), t.next = 25;
                                break;
                            case 22:
                                t.prev = 22, t.t0 = t.catch(0), console.error(t.t0);
                            case 25:
                            case "end":
                                return t.stop()
                        }
                    }, t, e, [
                        [0, 22]
                    ])
                }))()
            }
        }),
        created: function() {
            this.useMouse || (this.$bus.$on("keyUpArrowDown", this.onDown), this.$bus.$on("keyUpArrowUp", this.onUp), this.$bus.$on("keyUpEnter", this.onEnter), this.$bus.$on("keyUpBackspace", this.onBack))
        },
        beforeDestroy: function() {
            this.$bus.$off("keyUpArrowDown", this.onDown), this.$bus.$off("keyUpArrowUp", this.onUp), this.$bus.$off("keyUpEnter", this.onEnter), this.$bus.$off("keyUpBackspace", this.onBack)
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(6),
        o = n.n(s),
        i = n(5),
        a = n.n(i),
        r = n(2),
        c = n.n(r),
        u = n(3);
    e.default = {
        components: {},
        data: function() {
            return {
                message: ""
            }
        },
        computed: c()({}, n.i(u.b)(["IntlString", "useMouse"])),
        watch: {},
        methods: c()({}, n.i(u.a)(["twitterPostTweet"]), {
            onEnter: function() {
                var t = this;
                return a()(o.a.mark(function e() {
                    var n, s;
                    return o.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, t.$phoneAPI.getReponseText({});
                            case 3:
                                n = e.sent, void 0 !== n && void 0 !== n.text && (s = n.text.trim(), 0 !== s.length && t.twitterPostTweet({
                                    message: s
                                })), e.next = 9;
                                break;
                            case 7:
                                e.prev = 7, e.t0 = e.catch(0);
                            case 9:
                            case "end":
                                return e.stop()
                        }
                    }, e, t, [
                        [0, 7]
                    ])
                }))()
            },
            tweeter: function() {
                var t = this;
                return a()(o.a.mark(function e() {
                    return o.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if ("" !== t.message) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return e.next = 4, t.twitterPostTweet({
                                    message: t.message
                                });
                            case 4:
                                t.message = "";
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }, e, t)
                }))()
            },
            onBack: function() {
                !0 === this.useMouse && "BODY" !== document.activeElement.tagName || this.$bus.$emit("twitterHome")
            }
        }),
        created: function() {
            this.useMouse || this.$bus.$on("keyUpEnter", this.onEnter), this.$bus.$on("keyUpBackspace", this.onBack)
        },
        mounted: function() {
            var t = this;
            return a()(o.a.mark(function e() {
                return o.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                        case "end":
                            return t.stop()
                    }
                }, e, t)
            }))()
        },
        beforeDestroy: function() {
            this.$bus.$off("keyUpBackspace", this.onBack), this.$bus.$off("keyUpEnter", this.onEnter)
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(2),
        o = n.n(s),
        i = n(10),
        a = n.n(i),
        r = n(315),
        c = n.n(r),
        u = n(311),
        l = n.n(u),
        h = n(310),
        p = n.n(h),
        f = n(314),
        d = n.n(f),
        m = n(3);
    e.default = {
        components: {
            PhoneTitle: a.a
        },
        data: function() {
            return {
                currentScreenIndex: 0
            }
        },
        computed: o()({}, n.i(m.b)(["IntlString", "useMouse"]), {
            screen: function() {
                return [{
                    title: this.IntlString("APP_TWITTER_VIEW_TWITTER"),
                    component: c.a,
                    icon: "fa-home"
                }, {
                    title: this.IntlString("APP_TWITTER_VIEW_TOP_TWEETS"),
                    component: d.a,
                    icon: "fa-heart"
                }, {
                    title: this.IntlString("APP_TWITTER_VIEW_TWEETER"),
                    component: l.a,
                    icon: " fa-comment-o"
                }, {
                    title: this.IntlString("APP_TWITTER_VIEW_SETTING"),
                    component: p.a,
                    icon: "fa-cog"
                }]
            },
            currentScreen: function() {
                return this.screen[this.currentScreenIndex]
            }
        }),
        watch: {},
        methods: {
            onLeft: function() {
                this.currentScreenIndex = Math.max(0, this.currentScreenIndex - 1)
            },
            onRight: function() {
                this.currentScreenIndex = Math.min(this.screen.length - 1, this.currentScreenIndex + 1)
            },
            home: function() {
                this.currentScreenIndex = 0
            },
            openMenu: function(t) {
                this.currentScreenIndex = t
            },
            quit: function() {
                0 === this.currentScreenIndex ? this.$router.push({
                    name: "home"
                }) : this.currentScreenIndex = 0
            }
        },
        created: function() {
            this.useMouse || (this.$bus.$on("keyUpArrowLeft", this.onLeft), this.$bus.$on("keyUpArrowRight", this.onRight)), this.$bus.$on("twitterHome", this.home)
        },
        mounted: function() {},
        beforeDestroy: function() {
            this.$bus.$off("keyUpArrowLeft", this.onLeft), this.$bus.$off("keyUpArrowRight", this.onRight), this.$bus.$off("twitterHome", this.home)
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = {
        created: function() {
            var t = this;
            setTimeout(function() {
                t.$router.push({
                    name: "twitter.screen"
                })
            }, 500)
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(6),
        o = n.n(s),
        i = n(13),
        a = n.n(i),
        r = n(5),
        c = n.n(r),
        u = n(2),
        l = n.n(u),
        h = n(3),
        p = n(9);
    e.default = {
        components: {},
        data: function() {
            return {
                selectMessage: -1,
                ignoreControls: !1,
                imgZoom: void 0
            }
        },
        computed: l()({}, n.i(h.b)(["favoriteTweets", "IntlString", "useMouse"]), {
            tweets: function() {
                return this.favoriteTweets
            }
        }),
        watch: {},
        methods: l()({}, n.i(h.a)(["twitterLogin", "twitterPostTweet", "twitterToogleLike", "fetchFavoriteTweets"]), {
            showOption: function() {
                var t = this;
                return c()(o.a.mark(function e() {
                    var n, s, i;
                    return o.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t.ignoreControls = !0, n = t.tweets[t.selectMessage], s = [{
                                    id: 1,
                                    title: "Like / Unlike",
                                    icons: "fa-heart"
                                }, {
                                    id: 2,
                                    title: "Répondre",
                                    icons: "fa-reply"
                                }, {
                                    id: -1,
                                    title: t.IntlString("CANCEL"),
                                    icons: "fa-undo"
                                }], t.isImage(n.message) && (s = [{
                                    id: 3,
                                    title: t.IntlString("APP_MESSAGE_ZOOM_IMG"),
                                    icons: "fa-search"
                                }].concat(a()(s))), e.next = 6, p.a.CreateModal({
                                    choix: s
                                });
                            case 6:
                                i = e.sent, t.ignoreControls = !1, e.t0 = i.id, e.next = 1 === e.t0 ? 11 : 2 === e.t0 ? 13 : 3 === e.t0 ? 15 : 17;
                                break;
                            case 11:
                                return t.twitterToogleLike({
                                    tweetId: n.id
                                }), e.abrupt("break", 17);
                            case 13:
                                return t.reply(n), e.abrupt("break", 17);
                            case 15:
                                return t.imgZoom = n.message, e.abrupt("break", 17);
                            case 17:
                            case "end":
                                return e.stop()
                        }
                    }, e, t)
                }))()
            },
            isImage: function(t) {
                return /^https?:\/\/.*\.(png|jpg|jpeg|gif)/.test(t)
            },
            reply: function(t) {
                var e = this;
                return c()(o.a.mark(function n() {
                    var s, i, a;
                    return o.a.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return s = t.author, n.prev = 1, e.ignoreControls = !0, n.next = 5, p.a.CreateTextModal({
                                    title: "Répondre",
                                    text: "@" + s + " "
                                });
                            case 5:
                                i = n.sent, void 0 !== i && void 0 !== i.text && (a = i.text.trim(), 0 !== a.length && e.twitterPostTweet({
                                    message: a
                                })), n.next = 11;
                                break;
                            case 9:
                                n.prev = 9, n.t0 = n.catch(1);
                            case 11:
                                return n.prev = 11, e.ignoreControls = !1, n.finish(11);
                            case 14:
                            case "end":
                                return n.stop()
                        }
                    }, n, e, [
                        [1, 9, 11, 14]
                    ])
                }))()
            },
            resetScroll: function() {
                var t = this;
                this.$nextTick(function() {
                    var e = document.querySelector("#tweets");
                    e.scrollTop = e.scrollHeight, t.selectMessage = -1
                })
            },
            scrollIntoViewIfNeeded: function() {
                var t = this;
                this.$nextTick(function() {
                    var e = t.$el.querySelector(".select");
                    null !== e && e.scrollIntoViewIfNeeded()
                })
            },
            onUp: function() {
                !0 !== this.ignoreControls && (-1 === this.selectMessage ? this.selectMessage = 0 : this.selectMessage = 0 === this.selectMessage ? 0 : this.selectMessage - 1, this.scrollIntoViewIfNeeded())
            },
            onDown: function() {
                !0 !== this.ignoreControls && (-1 === this.selectMessage ? this.selectMessage = 0 : this.selectMessage = this.selectMessage === this.tweets.length - 1 ? this.selectMessage : this.selectMessage + 1, this.scrollIntoViewIfNeeded())
            },
            onEnter: function() {
                var t = this;
                return c()(o.a.mark(function e() {
                    return o.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!0 !== t.ignoreControls) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                -1 === t.selectMessage ? t.newTweet() : t.showOption();
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }, e, t)
                }))()
            },
            onBack: function() {
                if (void 0 !== this.imgZoom) return void(this.imgZoom = void 0);
                !0 !== this.ignoreControls && (-1 !== this.selectMessage ? this.selectMessage = -1 : this.$bus.$emit("twitterHome"))
            },
            formatTime: function(t) {
                return new Date(t).toLocaleTimeString()
            }
        }),
        created: function() {
            this.useMouse || (this.$bus.$on("keyUpArrowDown", this.onDown), this.$bus.$on("keyUpArrowUp", this.onUp), this.$bus.$on("keyUpEnter", this.onEnter)), this.$bus.$on("keyUpBackspace", this.onBack)
        },
        mounted: function() {
            this.fetchFavoriteTweets()
        },
        beforeDestroy: function() {
            this.$bus.$off("keyUpArrowDown", this.onDown), this.$bus.$off("keyUpArrowUp", this.onUp), this.$bus.$off("keyUpEnter", this.onEnter), this.$bus.$off("keyUpBackspace", this.onBack)
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(6),
        o = n.n(s),
        i = n(13),
        a = n.n(i),
        r = n(5),
        c = n.n(r),
        u = n(2),
        l = n.n(u),
        h = n(3),
        p = n(9);
    e.default = {
        components: {},
        data: function() {
            return {
                selectMessage: -1,
                ignoreControls: !1,
                imgZoom: void 0
            }
        },
        computed: l()({}, n.i(h.b)(["tweets", "IntlString", "useMouse"])),
        watch: {},
        methods: l()({}, n.i(h.a)(["twitterLogin", "twitterPostTweet", "twitterToogleLike", "fetchTweets"]), {
            showOption: function() {
                var t = this;
                return c()(o.a.mark(function e() {
                    var n, s, i;
                    return o.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t.ignoreControls = !0, n = t.tweets[t.selectMessage], s = [{
                                    id: 1,
                                    title: "Like / Unlike",
                                    icons: "fa-heart"
                                }, {
                                    id: 2,
                                    title: "Répondre",
                                    icons: "fa-reply"
                                }, {
                                    id: -1,
                                    title: t.IntlString("CANCEL"),
                                    icons: "fa-undo"
                                }], t.isImage(n.message) && (s = [{
                                    id: 3,
                                    title: t.IntlString("APP_MESSAGE_ZOOM_IMG"),
                                    icons: "fa-search"
                                }].concat(a()(s))), e.next = 6, p.a.CreateModal({
                                    choix: s
                                });
                            case 6:
                                i = e.sent, t.ignoreControls = !1, e.t0 = i.id, e.next = 1 === e.t0 ? 11 : 2 === e.t0 ? 13 : 3 === e.t0 ? 15 : 17;
                                break;
                            case 11:
                                return t.twitterToogleLike({
                                    tweetId: n.id
                                }), e.abrupt("break", 17);
                            case 13:
                                return t.reply(n), e.abrupt("break", 17);
                            case 15:
                                return t.imgZoom = n.message, e.abrupt("break", 17);
                            case 17:
                            case "end":
                                return e.stop()
                        }
                    }, e, t)
                }))()
            },
            isImage: function(t) {
                return /^https?:\/\/.*\.(png|jpg|jpeg|gif)/.test(t)
            },
            reply: function(t) {
                var e = this;
                return c()(o.a.mark(function n() {
                    var s, i, a;
                    return o.a.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return s = t.author, n.prev = 1, e.ignoreControls = !0, n.next = 5, p.a.CreateTextModal({
                                    title: "Répondre",
                                    text: "@" + s + " "
                                });
                            case 5:
                                i = n.sent, void 0 !== i && void 0 !== i.text && (a = i.text.trim(), 0 !== a.length && e.twitterPostTweet({
                                    message: a
                                })), n.next = 11;
                                break;
                            case 9:
                                n.prev = 9, n.t0 = n.catch(1);
                            case 11:
                                return n.prev = 11, e.ignoreControls = !1, n.finish(11);
                            case 14:
                            case "end":
                                return n.stop()
                        }
                    }, n, e, [
                        [1, 9, 11, 14]
                    ])
                }))()
            },
            resetScroll: function() {
                var t = this;
                this.$nextTick(function() {
                    var e = document.querySelector("#tweets");
                    e.scrollTop = e.scrollHeight, t.selectMessage = -1
                })
            },
            scrollIntoViewIfNeeded: function() {
                var t = this;
                this.$nextTick(function() {
                    var e = t.$el.querySelector(".select");
                    null !== e && e.scrollIntoViewIfNeeded()
                })
            },
            onUp: function() {
                !0 !== this.ignoreControls && (-1 === this.selectMessage ? this.selectMessage = 0 : this.selectMessage = 0 === this.selectMessage ? 0 : this.selectMessage - 1, this.scrollIntoViewIfNeeded())
            },
            onDown: function() {
                !0 !== this.ignoreControls && (-1 === this.selectMessage ? this.selectMessage = 0 : this.selectMessage = this.selectMessage === this.tweets.length - 1 ? this.selectMessage : this.selectMessage + 1, this.scrollIntoViewIfNeeded())
            },
            onEnter: function() {
                var t = this;
                return c()(o.a.mark(function e() {
                    return o.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!0 !== t.ignoreControls) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                -1 === t.selectMessage ? t.newTweet() : t.showOption();
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }, e, t)
                }))()
            },
            onBack: function() {
                if (void 0 !== this.imgZoom) return void(this.imgZoom = void 0);
                !0 !== this.ignoreControls && (-1 !== this.selectMessage ? this.selectMessage = -1 : this.$router.push({
                    name: "home"
                }))
            },
            formatTime: function(t) {
                return new Date(t).toLocaleTimeString()
            }
        }),
        created: function() {
            this.useMouse || (this.$bus.$on("keyUpArrowDown", this.onDown), this.$bus.$on("keyUpArrowUp", this.onUp), this.$bus.$on("keyUpEnter", this.onEnter)), this.$bus.$on("keyUpBackspace", this.onBack)
        },
        mounted: function() {
            this.fetchTweets()
        },
        beforeDestroy: function() {
            this.$bus.$off("keyUpArrowDown", this.onDown), this.$bus.$off("keyUpArrowUp", this.onUp), this.$bus.$off("keyUpEnter", this.onEnter), this.$bus.$off("keyUpBackspace", this.onBack)
        }
    }
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, , , , , function(t, e, n) {
    function s(t) {
        n(266)
    }
    var o = n(0)(n(156), n(339), s, "data-v-64f456c2", null);
    t.exports = o.exports
}, function(t, e, n) {
    function s(t) {
        n(267)
    }
    var o = n(0)(n(157), n(340), s, "data-v-6a46c302", null);
    t.exports = o.exports
}, function(t, e, n) {
    function s(t) {
        n(251)
    }
    var o = n(0)(n(158), n(324), s, "data-v-26ec6c14", null);
    t.exports = o.exports
}, function(t, e, n) {
    function s(t) {
        n(274)
    }
    var o = n(0)(n(159), n(347), s, "data-v-d2b698c8", null);
    t.exports = o.exports
}, function(t, e, n) {
    function s(t) {
        n(272)
    }
    var o = n(0)(n(160), n(345), s, "data-v-9104422e", null);
    t.exports = o.exports
}, function(t, e, n) {
    function s(t) {
        n(245)
    }
    var o = n(0)(n(161), n(318), s, "data-v-0c8c5d42", null);
    t.exports = o.exports
}, function(t, e, n) {
    function s(t) {
        n(243)
    }
    var o = n(0)(n(162), n(316), s, "data-v-0570365f", null);
    t.exports = o.exports
}, function(t, e, n) {
    function s(t) {
        n(244)
    }
    var o = n(0)(n(163), n(317), s, "data-v-07b6e6d2", null);
    t.exports = o.exports
}, function(t, e, n) {
    function s(t) {
        n(271)
    }
    var o = n(0)(n(164), n(344), s, "data-v-821f15d4", null);
    t.exports = o.exports
}, function(t, e, n) {
    function s(t) {
        n(264)
    }
    var o = n(0)(n(165), n(337), s, "data-v-5d567654", null);
    t.exports = o.exports
}, function(t, e, n) {
    function s(t) {
        n(278)
    }
    var o = n(0)(n(166), n(351), s, "data-v-e5131126", null);
    t.exports = o.exports
}, function(t, e, n) {
    function s(t) {
        n(250)
    }
    var o = n(0)(n(167), n(323), s, "data-v-235696e8", null);
    t.exports = o.exports
}, function(t, e, n) {
    function s(t) {
        n(249)
    }
    var o = n(0)(n(170), n(322), s, "data-v-1c547768", null);
    t.exports = o.exports
}, function(t, e, n) {
    function s(t) {
        n(268)
    }
    var o = n(0)(n(171), n(341), s, "data-v-6cc9c1b2", null);
    t.exports = o.exports
}, function(t, e, n) {
    function s(t) {
        n(248)
    }
    var o = n(0)(n(172), n(321), s, "data-v-17cee085", null);
    t.exports = o.exports
}, function(t, e, n) {
    function s(t) {
        n(253)
    }
    var o = n(0)(n(173), n(326), s, "data-v-2cbc2b79", null);
    t.exports = o.exports
}, function(t, e, n) {
    function s(t) {
        n(255)
    }
    var o = n(0)(n(174), n(328), s, "data-v-2f4ae706", null);
    t.exports = o.exports
}, function(t, e, n) {
    var s = n(0)(n(176), null, null, null, null);
    t.exports = s.exports
}, function(t, e, n) {
    function s(t) {
        n(257)
    }
    var o = n(0)(n(177), n(330), s, "data-v-3967a7e3", null);
    t.exports = o.exports
}, function(t, e, n) {
    function s(t) {
        n(247)
    }
    var o = n(0)(n(178), n(320), s, "data-v-15f3ee32", null);
    t.exports = o.exports
}, function(t, e, n) {
    function s(t) {
        n(265)
    }
    var o = n(0)(n(179), n(338), s, "data-v-5fdffa03", null);
    t.exports = o.exports
}, function(t, e, n) {
    function s(t) {
        n(254)
    }
    var o = n(0)(n(180), n(327), s, "data-v-2e18afa6", null);
    t.exports = o.exports
}, function(t, e, n) {
    function s(t) {
        n(256)
    }
    var o = n(0)(n(181), n(329), s, "data-v-392cfe96", null);
    t.exports = o.exports
}, function(t, e, n) {
    function s(t) {
        n(259)
    }
    var o = n(0)(n(182), n(332), s, "data-v-3bd73f1c", null);
    t.exports = o.exports
}, function(t, e, n) {
    function s(t) {
        n(275)
    }
    var o = n(0)(n(183), n(348), s, "data-v-d7a21294", null);
    t.exports = o.exports
}, function(t, e, n) {
    function s(t) {
        n(260)
    }
    var o = n(0)(n(184), n(333), s, "data-v-48096518", null);
    t.exports = o.exports
}, function(t, e, n) {
    function s(t) {
        n(276)
    }
    var o = n(0)(n(185), n(349), s, "data-v-d8a29754", null);
    t.exports = o.exports
}, function(t, e, n) {
    function s(t) {
        n(262)
    }
    var o = n(0)(n(186), n(335), s, "data-v-4f9e50c2", null);
    t.exports = o.exports
}, function(t, e, n) {
    function s(t) {
        n(269)
    }
    var o = n(0)(n(187), n(342), s, "data-v-7163c2ba", null);
    t.exports = o.exports
}, function(t, e, n) {
    function s(t) {
        n(273)
    }
    var o = n(0)(n(188), n(346), s, "data-v-bbe95f2c", null);
    t.exports = o.exports
}, function(t, e, n) {
    function s(t) {
        n(246)
    }
    var o = n(0)(n(189), n(319), s, "data-v-0ff47592", null);
    t.exports = o.exports
}, function(t, e, n) {
    function s(t) {
        n(263)
    }
    var o = n(0)(n(190), n(336), s, "data-v-5d20189a", null);
    t.exports = o.exports
}, function(t, e, n) {
    function s(t) {
        n(261)
    }
    var o = n(0)(n(191), n(334), s, "data-v-48f6b0ba", null);
    t.exports = o.exports
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "phone_app"
            }, [n("PhoneTitle", {
                attrs: {
                    title: t.IntlString("APP_PHONE_TITLE")
                },
                on: {
                    back: t.quit
                }
            }), t._v(" "), n("div", {
                staticClass: "content"
            }, [n("div", {
                staticClass: "number"
            }, [t._v("\n     " + t._s(t.numeroFormat) + "\n     "), n("span", {
                staticClass: "deleteNumber",
                on: {
                    click: function(e) {
                        return e.stopPropagation(), t.deleteNumber(e)
                    }
                }
            })]), t._v(" "), n("div", {
                staticClass: "keyboard"
            }, t._l(t.keyInfo, function(e, s) {
                return n("div", {
                    key: e.primary,
                    staticClass: "key",
                    class: {
                        "key-select": s === t.keySelect, keySpe: !0 === e.isNotNumber
                    },
                    on: {
                        click: function(n) {
                            return n.stopPropagation(), t.onPressKey(e)
                        }
                    }
                }, [n("span", {
                    staticClass: "key-primary",
                    on: {
                        click: function(n) {
                            return n.stopPropagation(), t.onPressKey(e)
                        }
                    }
                }, [t._v(t._s(e.primary))]), t._v(" "), n("span", {
                    staticClass: "key-secondary",
                    on: {
                        click: function(n) {
                            return n.stopPropagation(), t.onPressKey(e)
                        }
                    }
                }, [t._v(t._s(e.secondary))])])
            }), 0), t._v(" "), n("div", {
                staticClass: "call"
            }, [n("div", {
                staticClass: "call-btn",
                class: {
                    active: 12 === t.keySelect
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(), t.onPressCall(e)
                    }
                }
            }, [n("svg", {
                attrs: {
                    viewBox: "0 0 24 24"
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(), t.onPressCall(e)
                    }
                }
            }, [n("g", {
                attrs: {
                    transform: "rotate(0, 12, 12)"
                }
            }, [n("path", {
                attrs: {
                    d: "M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"
                }
            })])])])])])], 1)
        },
        staticRenderFns: []
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "phone_app"
            }, [n("div", {
                staticClass: "elements"
            }, t._l(t.historique, function(e, s) {
                return n("div", {
                    key: s,
                    staticClass: "element",
                    class: {
                        active: t.selectIndex === s
                    },
                    on: {
                        click: function(n) {
                            return n.stopPropagation(), t.selectItem(e)
                        }
                    }
                }, [n("img", {
                    staticStyle: {
                        width: "32px",
                        "margin-left": "10px"
                    },
                    attrs: {
                        src: "/html/static/img/icons_app/borrado.png",
                        alt: "Logotipo APR2"
                    }
                }), t._v(" "), n("div", {
                    staticClass: "elem-content",
                    on: {
                        click: function(n) {
                            return n.stopPropagation(), t.selectItem(e)
                        }
                    }
                }, [n("div", {
                    staticClass: "elem-content-p",
                    staticStyle: {
                        "font-size": "20px",
                        "font-weight": "400",
                        "margin-top": "20px"
                    },
                    on: {
                        click: function(n) {
                            return n.stopPropagation(), t.selectItem(e)
                        }
                    }
                }, [t._v(t._s(e.display))]), t._v(" "), n("div", {
                    staticClass: "elem-content-s",
                    on: {
                        click: function(n) {
                            return n.stopPropagation(), t.selectItem(e)
                        }
                    }
                }, t._l(e.lastCall, function(s, o) {
                    return n("div", {
                        key: o,
                        staticClass: "elem-histo-pico",
                        class: {
                            reject: !1 === s.accept
                        },
                        on: {
                            click: function(n) {
                                return n.stopPropagation(), t.selectItem(e)
                            }
                        }
                    }, [1 === s.accepts && 1 === s.incoming ? n("svg", {
                        attrs: {
                            viewBox: "0 0 24 24",
                            fill: "#c5c5c7"
                        },
                        on: {
                            click: function(n) {
                                return n.stopPropagation(), t.selectItem(e)
                            }
                        }
                    }, [n("path", {
                        attrs: {
                            d: "M9,5v2h6.59L4,18.59L5.41,20L17,8.41V15h2V5H9z"
                        }
                    })]) : 1 === s.accepts && 0 === s.incoming ? n("svg", {
                        attrs: {
                            viewBox: "0 0 24 24",
                            fill: "#c5c5c7"
                        },
                        on: {
                            click: function(n) {
                                return n.stopPropagation(), t.selectItem(e)
                            }
                        }
                    }, [n("path", {
                        attrs: {
                            d: "M20,5.41L18.59,4L7,15.59V9H5v10h10v-2H8.41L20,5.41z"
                        }
                    })]) : 0 === s.accepts && 1 === s.incoming ? n("svg", {
                        attrs: {
                            viewBox: "0 0 24 24",
                            fill: "#c5c5c7"
                        },
                        on: {
                            click: function(n) {
                                return n.stopPropagation(), t.selectItem(e)
                            }
                        }
                    }, [n("path", {
                        attrs: {
                            d: "M3,8.41l9,9l7-7V15h2V7h-8v2h4.59L12,14.59L4.41,7L3,8.41z"
                        },
                        on: {
                            click: function(n) {
                                return n.stopPropagation(), t.selectItem(e)
                            }
                        }
                    })]) : 0 === s.accepts && 0 === s.incoming ? n("svg", {
                        attrs: {
                            viewBox: "0 0 24 24",
                            fill: "#c5c5c7"
                        },
                        on: {
                            click: function(n) {
                                return n.stopPropagation(), t.selectItem(e)
                            }
                        }
                    }, [n("path", {
                        attrs: {
                            d: "M19.59,7L12,14.59L6.41,9H11V7H3v8h2v-4.59l7,7l9-9L19.59,7z"
                        }
                    })]) : t._e()])
                }), 0), t._v(" "), 0 !== e.lastCall.length ? n("div", {
                    staticClass: "lastCall",
                    staticStyle: {
                        float: "right",
                        "margin-top": "-43px"
                    }
                }, [n("timeago", {
                    staticClass: "time",
                    attrs: {
                        since: e.lastCall[0].date,
                        "auto-update": 20
                    }
                })], 1) : t._e()])])
            }), 0)])
        },
        staticRenderFns: []
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", [n("list", {
                attrs: {
                    list: t.callList,
                    showHeader: !1,
                    disable: t.ignoreControls
                },
                on: {
                    select: t.onSelect
                }
            })], 1)
        },
        staticRenderFns: []
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement;
            t._self._c;
            return t._m(0)
        },
        staticRenderFns: [function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "splash",
                staticStyle: {
                    width: "326px",
                    height: "743px"
                }
            }, [n("img", {
                attrs: {
                    src: "/html/static/img/twitter/bird.png"
                }
            })])
        }]
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "phone_app",
                staticStyle: {
                    width: "334px",
                    height: "742px",
                    background: "white"
                }
            }, [n("PhoneTitle", {
                attrs: {
                    title: t.channelName,
                    backgroundColor: "#ff4500"
                },
                on: {
                    back: t.onQuit
                }
            }), t._v(" "), n("div", {
                staticClass: "phone_content"
            }, [n("div", {
                ref: "elementsDiv",
                staticClass: "elements"
            }, t._l(t.tchatMessages, function(e) {
                return n("div", {
                    key: e.id,
                    staticClass: "element"
                }, [n("div", {
                    staticClass: "time"
                }, [t._v(t._s(t.formatTime(e.time)))]), t._v(" "), n("div", {
                    staticClass: "message"
                }, [t._v("\n            " + t._s(e.message) + "\n          ")])])
            }), 0), t._v(" "), n("div", {
                staticClass: "tchat_write"
            }, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.message,
                    expression: "message"
                }],
                attrs: {
                    type: "text",
                    placeholder: "..."
                },
                domProps: {
                    value: t.message
                },
                on: {
                    keyup: function(e) {
                        return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : (e.preventDefault(), t.sendMessage(e))
                    },
                    input: function(e) {
                        e.target.composing || (t.message = e.target.value)
                    }
                }
            }), t._v(" "), n("span", {
                staticClass: "tchat_send",
                on: {
                    click: t.sendMessage
                }
            }, [t._v(">")])])])], 1)
        },
        staticRenderFns: []
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("transition", {
                attrs: {
                    name: "modal"
                }
            }, [n("div", {
                staticClass: "modal-mask"
            }, [n("div", {
                staticClass: "modal-container",
                on: {
                    click: function(t) {
                        t.stopPropagation()
                    }
                }
            }, [n("h2", {
                style: {
                    color: t.color
                }
            }, [t._v(t._s(t.title))]), t._v(" "), n("textarea", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.inputText,
                    expression: "inputText"
                }],
                ref: "textarea",
                staticClass: "modal-textarea",
                class: {
                    oneline: t.limit <= 18
                },
                style: {
                    borderColor: t.color
                },
                attrs: {
                    maxlength: t.limit
                },
                domProps: {
                    value: t.inputText
                },
                on: {
                    input: function(e) {
                        e.target.composing || (t.inputText = e.target.value)
                    }
                }
            }), t._v(" "), n("div", {
                staticClass: "botton-container"
            }, [n("button", {
                style: {
                    color: t.color
                },
                on: {
                    click: t.cancel
                }
            }, [t._v("\r\n              " + t._s(t.IntlString("CANCEL")) + "\r\n            ")]), t._v(" "), n("button", {
                style: {
                    color: t.color
                },
                on: {
                    click: t.valide
                }
            }, [t._v("\r\n              " + t._s(t.IntlString("OK")) + "\r\n            ")])])])])])
        },
        staticRenderFns: []
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "phone_app",
                staticStyle: {
                    width: "326px",
                    height: "743px"
                }
            }, [n("div", {
                staticClass: "backblur",
                staticStyle: {
                    width: "342px",
                    height: "756px"
                },
                style: {
                    background: "url(" + t.backgroundURL + ")"
                }
            }), t._v(" "), n("InfoBare", {
                staticClass: "infobare"
            }), t._v(" "), n("div", {
                staticClass: "menu",
                on: {
                    click: t.onBack
                }
            }, [n("div", {
                staticClass: "menu_content"
            }, [n("div", {
                staticClass: "menu_buttons"
            }, t._l(t.Apps, function(e, s) {
                return n("button", {
                    key: e.name,
                    staticClass: "letra",
                    class: {
                        select: s === t.currentSelect
                    },
                    style: {
                        backgroundImage: "url(" + e.icons + ")"
                    },
                    on: {
                        click: function(n) {
                            return n.stopPropagation(), t.openApp(e)
                        }
                    }
                }, [t._v("\n              " + t._s(e.intlName) + "\n              "), void 0 !== e.puce && 0 !== e.puce ? n("span", {
                    staticClass: "puce"
                }, [t._v(t._s(e.puce))]) : t._e()])
            }), 0)])])], 1)
        },
        staticRenderFns: []
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "home",
                staticStyle: {
                    width: "326px",
                    height: "743px"
                },
                style: {
                    background: "url(" + t.backgroundURL + ")"
                }
            }, [n("InfoBare"), t._v(" "), t.messages.length >= t.warningMessageCount ? n("span", {
                staticClass: "warningMess"
            }, [t._m(0), t._v(" "), n("span", {
                staticClass: "warningMess_content"
            }, [n("span", {
                staticClass: "warningMess_title"
            }, [t._v(t._s(t.IntlString("PHONE_WARNING_MESSAGE")))]), n("br"), t._v(" "), n("span", {
                staticClass: "warningMess_mess"
            }, [t._v(t._s(t.messages.length) + " / " + t._s(t.warningMessageCount) + " " + t._s(t.IntlString("PHONE_WARNING_MESSAGE_MESS")))])])]) : t._e(), t._v(" "), n("div", {
                staticClass: "time"
            }), t._v(" "), n("div", {
                staticClass: "time-display"
            }, [t._v(t._s(t.timeDisplay))]), t._v(" "), n("div", {
                staticClass: "home_buttons"
            }, [t._l(t.AppsHome, function(e, s) {
                return n("button", {
                    key: e.name,
                    class: {
                        select: s === t.currentSelect
                    },
                    staticStyle: {
                        top: "73px",
                        "font-family": "initial",
                        "margin-left": "10px",
                        "margin-right": "10px"
                    },
                    style: {
                        backgroundImage: "url(" + e.icons + ")"
                    },
                    on: {
                        click: function(n) {
                            return t.openApp(e)
                        }
                    }
                }, [void 0 !== e.puce && 0 !== e.puce ? n("span", {
                    staticClass: "puce"
                }, [t._v(t._s(e.puce))]) : t._e()])
            }), t._v(" "), n("div", {
                staticClass: "btn_menu_ctn"
            }, [n("button", {
                staticClass: "btn_menu",
                class: {
                    select: t.AppsHome.length === t.currentSelect
                },
                style: {
                    backgroundImage: "url(/html/static/img/icons_app/menu.png)"
                },
                on: {
                    click: function(e) {
                        return t.openApp({
                            routeName: "menu"
                        })
                    }
                }
            })])], 2)], 1)
        },
        staticRenderFns: [function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "warningMess_icon"
            }, [n("i", {
                staticClass: "fa fa-warning"
            })])
        }]
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "phone_app",
                staticStyle: {
                    width: "326px",
                    height: "743px"
                }
            }, [n("PhoneTitle", {
                attrs: {
                    title: t.IntlString("APP_PHONE_TITLE")
                },
                on: {
                    back: t.onBackspace
                }
            }), t._v(" "), n("div", {
                staticClass: "content"
            }, [n(t.subMenu[t.currentMenuIndex].Comp, {
                tag: "component"
            })], 1), t._v(" "), n("div", {
                staticClass: "subMenu"
            }, t._l(t.subMenu, function(e, s) {
                return n("div", {
                    key: s,
                    staticClass: "subMenu-elem",
                    style: t.getColorItem(s),
                    on: {
                        click: function(e) {
                            return t.swapMenu(s)
                        }
                    }
                }, [n("i", {
                    staticClass: "subMenu-icon fa",
                    class: ["fa-" + e.icon],
                    on: {
                        click: function(e) {
                            return e.stopPropagation(), t.swapMenu(s)
                        }
                    }
                }), t._v(" "), n("span", {
                    staticClass: "subMenu-name",
                    on: {
                        click: function(e) {
                            return e.stopPropagation(), t.swapMenu(s)
                        }
                    }
                }, [t._v(t._s(e.name))])])
            }), 0)], 1)
        },
        staticRenderFns: []
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "phone_infoBare barre-header",
                staticStyle: {
                    width: "326px",
                    top: "4px"
                }
            }, [n("span", {
                staticClass: "reseau"
            }, [t._v(t._s(t.config.reseau))]), t._v(" "), n("span", {
                staticClass: "time"
            }, [n("current-time", {
                staticStyle: {
                    "font-size": "12px",
                    "margin-right": "2px"
                }
            })], 1), t._v(" "), n("hr", {
                staticClass: "batterie1"
            }), t._v(" "), n("hr", {
                staticClass: "batterie2"
            }), t._v(" "), n("hr", {
                staticClass: "barre1"
            }), t._v(" "), n("hr", {
                staticClass: "barre2"
            }), t._v(" "), n("hr", {
                staticClass: "barre3"
            }), t._v(" "), n("hr", {
                staticClass: "barre4"
            })])
        },
        staticRenderFns: []
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "phone_app",
                staticStyle: {
                    width: "334px",
                    height: "742px",
                    color: "white"
                }
            }, [n("PhoneTitle", {
                attrs: {
                    title: t.IntlString("APP_NOTES"),
                    backgroundColor: "#f8d344",
                    color: "white"
                },
                on: {
                    back: t.onBack
                }
            }), t._v(" "), n("div", {
                staticClass: "elements",
                staticStyle: {
                    backgroundColor: "white"
                },
                on: {
                    contextmenu: function(e) {
                        return e.preventDefault(), t.addChannelOption(e)
                    }
                }
            }, [n("div", t._l(t.notesChannels, function(e, s) {
                return n("div", {
                    key: e.channel,
                    staticClass: "elem-title",
                    class: {
                        select: s === t.currentSelect
                    }
                }, [n("h3", {
                    staticStyle: {
                        "margin-left": "7px",
                        "font-size": "16px",
                        "font-weight": "400"
                    }
                }, [t._v(" " + t._s(e.channel))])])
            }), 0)])], 1)
        },
        staticRenderFns: []
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "phone_app",
                staticStyle: {
                    width: "326px",
                    height: "743px"
                }
            }, [n("PhoneTitle", {
                attrs: {
                    title: t.contact.display
                },
                on: {
                    back: t.forceCancel
                }
            }), t._v(" "), n("div", {
                staticClass: "phone_content content inputText"
            }, [n("div", {
                staticClass: "group select",
                attrs: {
                    "data-type": "text",
                    "data-model": "display",
                    "data-maxlength": "64"
                }
            }, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.contact.display,
                    expression: "contact.display"
                }, {
                    name: "autofocus",
                    rawName: "v-autofocus"
                }],
                attrs: {
                    type: "text",
                    maxlength: "64"
                },
                domProps: {
                    value: t.contact.display
                },
                on: {
                    input: function(e) {
                        e.target.composing || t.$set(t.contact, "display", e.target.value)
                    }
                }
            }), t._v(" "), n("span", {
                staticClass: "highlight"
            }), t._v(" "), n("span", {
                staticClass: "bar"
            }), t._v(" "), n("label", [t._v(t._s(t.IntlString("APP_CONTACT_LABEL_NAME")))])]), t._v(" "), n("div", {
                staticClass: "group inputText",
                attrs: {
                    "data-type": "text",
                    "data-model": "number",
                    "data-maxlength": "10"
                }
            }, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.contact.number,
                    expression: "contact.number"
                }],
                attrs: {
                    type: "text",
                    maxlength: "10"
                },
                domProps: {
                    value: t.contact.number
                },
                on: {
                    input: function(e) {
                        e.target.composing || t.$set(t.contact, "number", e.target.value)
                    }
                }
            }), t._v(" "), n("span", {
                staticClass: "highlight"
            }), t._v(" "), n("span", {
                staticClass: "bar"
            }), t._v(" "), n("label", [t._v(t._s(t.IntlString("APP_CONTACT_LABEL_NUMBER")))])]), t._v(" "), n("div", {
                staticClass: "group ",
                staticStyle: {
                    "margin-top": "23px",
                    width: "263px",
                    "margin-left": "23px"
                },
                attrs: {
                    "data-type": "button",
                    "data-action": "save"
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(), t.save(e)
                    }
                }
            }, [n("input", {
                staticClass: "btn btn-green",
                staticStyle: {
                    "font-weight": "100"
                },
                attrs: {
                    type: "button",
                    value: t.IntlString("APP_CONTACT_SAVE")
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(), t.save(e)
                    }
                }
            })]), t._v(" "), n("div", {
                staticClass: "group",
                staticStyle: {
                    "margin-top": "23px",
                    width: "263px",
                    "margin-left": "23px"
                },
                attrs: {
                    "data-type": "button",
                    "data-action": "cancel"
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(), t.forceCancel(e)
                    }
                }
            }, [n("input", {
                staticClass: "btn btn-orange",
                staticStyle: {
                    "font-weight": "100"
                },
                attrs: {
                    type: "button",
                    value: t.IntlString("APP_CONTACT_CANCEL")
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(), t.forceCancel(e)
                    }
                }
            })]), t._v(" "), n("div", {
                staticClass: "group",
                staticStyle: {
                    "margin-top": "23px",
                    width: "263px",
                    "margin-left": "23px"
                },
                attrs: {
                    "data-type": "button",
                    "data-action": "deleteC"
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(), t.deleteC(e)
                    }
                }
            }, [n("input", {
                staticClass: "btn btn-red",
                staticStyle: {
                    "font-weight": "100"
                },
                attrs: {
                    type: "button",
                    value: t.IntlString("APP_CONTACT_DELETE")
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(), t.deleteC(e)
                    }
                }
            })])])], 1)
        },
        staticRenderFns: []
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "phone_app",
                staticStyle: {
                    width: "334px",
                    height: "742px",
                    background: "white"
                }
            }, [n("PhoneTitle", {
                attrs: {
                    title: t.channelName,
                    backgroundColor: "#f8d344"
                },
                on: {
                    back: t.onQuit
                }
            }), t._v(" "), n("div", {
                staticClass: "phone_content"
            }, [n("div", {
                ref: "elementsDiv",
                staticClass: "elements"
            }, t._l(t.notesMessages, function(e) {
                return n("div", {
                    key: e.id,
                    staticClass: "element"
                }, [n("div", {
                    staticClass: "time"
                }, [t._v(t._s(t.formatTime(e.time)))]), t._v(" "), n("div", {
                    staticClass: "message"
                }, [t._v("\n            " + t._s(e.message) + "\n          ")])])
            }), 0), t._v(" "), n("div", {
                staticClass: "notes_write"
            }, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.message,
                    expression: "message"
                }],
                attrs: {
                    type: "text",
                    placeholder: "..."
                },
                domProps: {
                    value: t.message
                },
                on: {
                    keyup: function(e) {
                        return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : (e.preventDefault(), t.sendMessage(e))
                    },
                    input: function(e) {
                        e.target.composing || (t.message = e.target.value)
                    }
                }
            }), t._v(" "), n("span", {
                staticClass: "notes_send",
                on: {
                    click: t.sendMessage
                }
            }, [t._v(">")])])])], 1)
        },
        staticRenderFns: []
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "contact",
                staticStyle: {
                    width: "326px",
                    height: "743px",
                    backgroundColor: "white"
                }
            }, [n("list", {
                attrs: {
                    list: t.lcontacts,
                    disable: t.disableList,
                    title: t.IntlString("APP_CONTACT_TITLE")
                },
                on: {
                    back: t.back,
                    select: t.onSelect,
                    option: t.onOption
                }
            })], 1)
        },
        staticRenderFns: []
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "phone_app",
                staticStyle: {
                    width: "334px",
                    height: "742px",
                    color: "white"
                }
            }, [n("PhoneTitle", {
                staticStyle: {
                    color: "white"
                },
                attrs: {
                    title: t.IntlString("APP_DARKTCHAT_TITLE"),
                    backgroundColor: "#ff4500"
                },
                on: {
                    back: t.onBack
                }
            }), t._v(" "), n("div", {
                staticClass: "elements",
                staticStyle: {
                    backgroundColor: "#dae0e6"
                },
                on: {
                    contextmenu: function(e) {
                        return e.preventDefault(), t.addChannelOption(e)
                    }
                }
            }, t._l(t.tchatChannels, function(e, s) {
                return n("div", {
                    key: e.channel,
                    staticClass: "element",
                    class: {
                        select: s === t.currentSelect
                    },
                    on: {
                        click: function(n) {
                            return n.stopPropagation(), t.showChannel(e.channel)
                        }
                    }
                }, [n("div", {
                    staticClass: "elem-title",
                    on: {
                        click: function(n) {
                            return n.stopPropagation(), t.showChannel(e.channel)
                        }
                    }
                }, [n("span", {
                    staticClass: "diese"
                }, [t._v("#")]), t._v(" " + t._s(e.channel))])])
            }), 0)], 1)
        },
        staticRenderFns: []
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "phone_title_content",
                class: {
                    hasInfoBare: t.showInfoBare
                },
                style: t.style
            }, [t.showInfoBare ? n("InfoBare") : t._e(), t._v(" "), n("div", {
                staticClass: "phone_title",
                style: {
                    backgroundColor: t.backgroundColor
                }
            }, [n("button", {
                staticClass: "btn-back",
                on: {
                    click: function(e) {
                        return e.stopPropagation(), t.back(e)
                    }
                }
            }, [n("i", {
                staticClass: "fas fa-angle-left",
                on: {
                    click: function(e) {
                        return e.stopPropagation(), t.back(e)
                    }
                }
            })]), t._v("\n    " + t._s(t.title) + "\n  ")])], 1)
        },
        staticRenderFns: []
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "contact",
                staticStyle: {
                    width: "326px",
                    height: "743px",
                    backgroundColor: "white"
                }
            }, [n("list", {
                attrs: {
                    list: t.lcontacts,
                    title: t.IntlString("APP_MESSAGE_CONTACT_TITLE")
                },
                on: {
                    select: t.onSelect,
                    back: t.back
                }
            })], 1)
        },
        staticRenderFns: []
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "screen",
                staticStyle: {
                    width: "326px",
                    height: "743px"
                }
            }, [n("list", {
                staticStyle: {
                    color: "black"
                },
                attrs: {
                    list: t.messagesData,
                    disable: t.disableList,
                    title: t.IntlString("APP_MESSAGE_TITLE")
                },
                on: {
                    back: t.back,
                    select: t.onSelect,
                    option: t.onOption
                }
            })], 1)
        },
        staticRenderFns: []
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "phone_content",
                staticStyle: {
                    width: "326px",
                    height: "743px"
                }
            }, [void 0 !== t.imgZoom ? n("div", {
                staticClass: "img-fullscreen",
                on: {
                    click: function(e) {
                        e.stopPropagation(), t.imgZoom = void 0
                    }
                }
            }, [n("img", {
                attrs: {
                    src: t.imgZoom
                }
            })]) : t._e(), t._v(" "), n("div", {
                ref: "elementsDiv",
                staticClass: "tweets-wrapper"
            }, t._l(t.tweets, function(e, s) {
                return n("div", {
                    key: e.id,
                    staticClass: "tweet",
                    class: {
                        select: s === t.selectMessage
                    }
                }, [n("div", {
                    staticClass: "tweet-img"
                }, [n("img", {
                    attrs: {
                        src: e.authorIcon || "html/static/img/twitter/default_profile.png",
                        width: "48",
                        height: "48"
                    }
                })]), t._v(" "), n("div", {
                    staticClass: "tweet-content"
                }, [n("div", {
                    staticClass: "tweet-head"
                }, [n("div", {
                    staticClass: "tweet-head-author"
                }, [t._v(t._s(e.author))]), t._v(" "), n("div", {
                    staticClass: "tweet-head-time"
                }, [t._v(t._s(t.formatTime(e.time)))])]), t._v(" "), n("div", {
                    staticClass: "tweet-message"
                }, [t.isImage(e.message) ? n("img", {
                    staticClass: "tweet-attachement-img",
                    attrs: {
                        src: e.message
                    },
                    on: {
                        click: function(n) {
                            n.stopPropagation(), t.imgZoom = e.message
                        }
                    }
                }) : [t._v(t._s(e.message))]], 2), t._v(" "), n("div", {
                    staticClass: "tweet-like"
                }, [n("div", {
                    staticClass: "item svgreply",
                    on: {
                        click: function(n) {
                            return n.stopPropagation(), t.reply(e)
                        }
                    }
                }, [n("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "12",
                        height: "12",
                        viewBox: "0 0 24 24"
                    },
                    on: {
                        click: function(n) {
                            return n.stopPropagation(), t.reply(e)
                        }
                    }
                }, [n("path", {
                    attrs: {
                        fill: "none",
                        d: "M0 0h24v24H0V0z"
                    }
                }), n("path", {
                    attrs: {
                        d: "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"
                    }
                })])]), t._v(" "), n("div", {
                    staticClass: "item"
                }, [n("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "12",
                        height: "12",
                        viewBox: "0 0 24 24"
                    }
                }, [n("path", {
                    attrs: {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    }
                }), n("path", {
                    attrs: {
                        d: "M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"
                    }
                })])]), t._v(" "), e.isLikes ? n("div", {
                    staticClass: "item svgdislike",
                    on: {
                        click: function(n) {
                            return n.stopPropagation(), t.twitterToogleLike({
                                tweetId: e.id
                            })
                        }
                    }
                }, [n("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "12",
                        height: "12",
                        viewBox: "0 0 24 24"
                    },
                    on: {
                        click: function(n) {
                            return n.stopPropagation(), t.twitterToogleLike({
                                tweetId: e.id
                            })
                        }
                    }
                }, [n("path", {
                    attrs: {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    }
                }), n("path", {
                    attrs: {
                        d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    }
                })]), t._v(" "), n("span", {
                    on: {
                        click: function(n) {
                            return n.stopPropagation(), t.twitterToogleLike({
                                tweetId: e.id
                            })
                        }
                    }
                }, [t._v(t._s(e.likes))])]) : n("div", {
                    staticClass: "svglike",
                    on: {
                        click: function(n) {
                            return n.stopPropagation(), t.twitterToogleLike({
                                tweetId: e.id
                            })
                        }
                    }
                }, [n("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "12",
                        height: "12",
                        viewBox: "0 0 24 24"
                    },
                    on: {
                        click: function(n) {
                            return n.stopPropagation(), t.twitterToogleLike({
                                tweetId: e.id
                            })
                        }
                    }
                }, [n("path", {
                    attrs: {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    }
                }), n("path", {
                    attrs: {
                        d: "M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
                    }
                })]), t._v(" "), n("span", {
                    on: {
                        click: function(n) {
                            return n.stopPropagation(), t.twitterToogleLike({
                                tweetId: e.id
                            })
                        }
                    }
                }, [t._v(t._s(e.likes))])]), t._v(" "), n("div", {
                    staticClass: "item"
                }, [n("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "12",
                        height: "12",
                        viewBox: "0 0 24 24"
                    }
                }, [n("path", {
                    attrs: {
                        fill: "none",
                        d: "M0 0h24v24H0V0z"
                    }
                }), n("path", {
                    attrs: {
                        d: "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"
                    }
                })])])])])])
            }), 0)])
        },
        staticRenderFns: []
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "phone_content content inputText",
                staticStyle: {
                    width: "314px",
                    height: "577px"
                }
            }, [t.state === t.STATES.MENU ? [t.isLogin ? t._e() : [n("div", {
                staticClass: "group",
                attrs: {
                    "data-type": "button"
                },
                on: {
                    click: function(e) {
                        e.stopPropagation(), t.state = t.STATES.LOGIN
                    }
                }
            }, [n("input", {
                staticClass: "btn btn-blue",
                attrs: {
                    type: "button",
                    value: t.IntlString("APP_TWITTER_ACCOUNT_LOGIN")
                },
                on: {
                    click: function(e) {
                        e.stopPropagation(), t.state = t.STATES.LOGIN
                    }
                }
            })]), t._v(" "), n("div", {
                staticClass: "group",
                attrs: {
                    "data-type": "button"
                },
                on: {
                    click: function(e) {
                        e.stopPropagation(), t.state = t.STATES.NOTIFICATION
                    }
                }
            }, [n("input", {
                staticClass: "btn btn-blue",
                attrs: {
                    type: "button",
                    value: t.IntlString("APP_TWITTER_NOTIFICATION")
                },
                on: {
                    click: function(e) {
                        e.stopPropagation(), t.state = t.STATES.NOTIFICATION
                    }
                }
            })]), t._v(" "), n("div", {
                staticClass: "group bottom",
                attrs: {
                    "data-type": "button"
                },
                on: {
                    click: function(e) {
                        e.stopPropagation(), t.state = t.STATES.NEW_ACCOUNT
                    }
                }
            }, [n("input", {
                staticClass: "btn btn-red",
                attrs: {
                    type: "button",
                    value: t.IntlString("APP_TWITTER_ACCOUNT_NEW")
                },
                on: {
                    click: function(e) {
                        e.stopPropagation(), t.state = t.STATES.NEW_ACCOUNT
                    }
                }
            })])], t._v(" "), t.isLogin ? [n("img", {
                staticStyle: {
                    "align-self": "center"
                },
                attrs: {
                    src: t.twitterAvatarUrl,
                    height: "128",
                    width: "128"
                }
            }), t._v(" "), n("div", {
                staticClass: "group",
                attrs: {
                    "data-type": "button"
                },
                on: {
                    click: function(e) {
                        e.stopPropagation(), t.state = t.STATES.ACCOUNT
                    }
                }
            }, [n("input", {
                staticClass: "btn btn-blue",
                attrs: {
                    type: "button",
                    value: t.IntlString("APP_TWITTER_ACCOUNT_PARAM")
                },
                on: {
                    click: function(e) {
                        e.stopPropagation(), t.state = t.STATES.ACCOUNT
                    }
                }
            })]), t._v(" "), n("div", {
                staticClass: "group",
                attrs: {
                    "data-type": "button"
                },
                on: {
                    click: function(e) {
                        e.stopPropagation(), t.state = t.STATES.NOTIFICATION
                    }
                }
            }, [n("input", {
                staticClass: "btn btn-blue",
                attrs: {
                    type: "button",
                    value: t.IntlString("APP_TWITTER_NOTIFICATION")
                },
                on: {
                    click: function(e) {
                        e.stopPropagation(), t.state = t.STATES.NOTIFICATION
                    }
                }
            })]), t._v(" "), n("div", {
                staticClass: "group bottom",
                attrs: {
                    "data-type": "button"
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(), t.logout(e)
                    }
                }
            }, [n("input", {
                staticClass: "btn btn-red",
                attrs: {
                    type: "button",
                    value: t.IntlString("APP_TWITTER_ACCOUNT_LOGOUT")
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(), t.logout(e)
                    }
                }
            })])] : t._e()] : t.state === t.STATES.LOGIN ? [n("div", {
                staticClass: "group inputText",
                attrs: {
                    "data-type": "text",
                    "data-maxlength": "64",
                    "data-defaultValue": t.localAccount.username
                }
            }, [n("input", {
                attrs: {
                    type: "text"
                },
                domProps: {
                    value: t.localAccount.username
                },
                on: {
                    change: function(e) {
                        return t.setLocalAccount(e, "username")
                    }
                }
            }), t._v(" "), n("span", {
                staticClass: "highlight"
            }), t._v(" "), n("span", {
                staticClass: "bar"
            }), t._v(" "), n("label", [t._v(t._s(t.IntlString("APP_TWITTER_ACCOUNT_USERNAME")))])]), t._v(" "), n("div", {
                staticClass: "group inputText",
                attrs: {
                    "data-type": "text",
                    "data-model": "password",
                    "data-maxlength": "30"
                }
            }, [n("input", {
                attrs: {
                    autocomplete: "new-password",
                    type: "password"
                },
                domProps: {
                    value: t.localAccount.password
                },
                on: {
                    change: function(e) {
                        return t.setLocalAccount(e, "password")
                    }
                }
            }), t._v(" "), n("span", {
                staticClass: "highlight"
            }), t._v(" "), n("span", {
                staticClass: "bar"
            }), t._v(" "), n("label", [t._v(t._s(t.IntlString("APP_TWITTER_ACCOUNT_PASSWORD")))])]), t._v(" "), n("div", {
                staticClass: "group",
                attrs: {
                    "data-type": "button"
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(), t.login(e)
                    }
                }
            }, [n("input", {
                staticClass: "btn btn-blue",
                attrs: {
                    type: "button",
                    value: t.IntlString("APP_TWITTER_ACCOUNT_LOGIN")
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(), t.login(e)
                    }
                }
            })])] : t.state === t.STATES.NOTIFICATION ? [n("div", {
                staticClass: "groupCheckBoxTitle"
            }, [n("label", [t._v(t._s(t.IntlString("APP_TWITTER_NOTIFICATION_WHEN")))])]), t._v(" "), n("label", {
                staticClass: "group checkbox",
                attrs: {
                    "data-type": "button"
                },
                on: {
                    click: function(e) {
                        return e.preventDefault(), e.stopPropagation(), t.setNotification(2)
                    }
                }
            }, [n("input", {
                attrs: {
                    type: "checkbox"
                },
                domProps: {
                    checked: 2 === t.twitterNotification
                },
                on: {
                    click: function(e) {
                        return e.preventDefault(), e.stopPropagation(), t.setNotification(2)
                    }
                }
            }), t._v("\n      " + t._s(t.IntlString("APP_TWITTER_NOTIFICATION_ALL")) + "\n    ")]), t._v(" "), n("label", {
                staticClass: "group checkbox",
                attrs: {
                    "data-type": "button"
                },
                on: {
                    click: function(e) {
                        return e.preventDefault(), e.stopPropagation(), t.setNotification(1)
                    }
                }
            }, [n("input", {
                attrs: {
                    type: "checkbox"
                },
                domProps: {
                    checked: 1 === t.twitterNotification
                },
                on: {
                    click: function(e) {
                        return e.preventDefault(), e.stopPropagation(), t.setNotification(1)
                    }
                }
            }), t._v("\n      " + t._s(t.IntlString("APP_TWITTER_NOTIFICATION_MENTION")) + "\n    ")]), t._v(" "), n("label", {
                staticClass: "group checkbox",
                attrs: {
                    "data-type": "button"
                },
                on: {
                    click: function(e) {
                        return e.preventDefault(), e.stopPropagation(), t.setNotification(0)
                    }
                }
            }, [n("input", {
                attrs: {
                    type: "checkbox"
                },
                domProps: {
                    checked: 0 === t.twitterNotification
                },
                on: {
                    click: function(e) {
                        return e.preventDefault(), e.stopPropagation(), t.setNotification(0)
                    }
                }
            }), t._v("\n      " + t._s(t.IntlString("APP_TWITTER_NOTIFICATION_NEVER")) + "\n    ")]), t._v(" "), n("div", {
                staticClass: "groupCheckBoxTitle"
            }, [n("label", [t._v(t._s(t.IntlString("APP_TWITTER_NOTIFICATION_SOUND")))])]), t._v(" "), n("label", {
                staticClass: "group checkbox",
                attrs: {
                    "data-type": "button"
                },
                on: {
                    click: function(e) {
                        return e.preventDefault(), e.stopPropagation(), t.setNotificationSound(!0)
                    }
                }
            }, [n("input", {
                attrs: {
                    type: "checkbox"
                },
                domProps: {
                    checked: t.twitterNotificationSound
                },
                on: {
                    click: function(e) {
                        return e.preventDefault(), e.stopPropagation(), t.setNotificationSound(!0)
                    }
                }
            }), t._v("\n      " + t._s(t.IntlString("APP_TWITTER_NOTIFICATION_SOUND_YES")) + "\n    ")]), t._v(" "), n("label", {
                staticClass: "group checkbox",
                attrs: {
                    "data-type": "button"
                },
                on: {
                    click: function(e) {
                        return e.preventDefault(), e.stopPropagation(), t.setNotificationSound(!1)
                    }
                }
            }, [n("input", {
                attrs: {
                    type: "checkbox"
                },
                domProps: {
                    checked: !t.twitterNotificationSound
                },
                on: {
                    click: function(e) {
                        return e.preventDefault(), e.stopPropagation(), t.setNotificationSound(!1)
                    }
                }
            }), t._v("\n      " + t._s(t.IntlString("APP_TWITTER_NOTIFICATION_SOUND_NO")) + "\n    ")])] : t.state === t.STATES.ACCOUNT ? [n("div", {
                staticClass: "group img",
                staticStyle: {
                    "margin-top": "42px",
                    "margin-bottom": "42px"
                },
                attrs: {
                    "data-type": "button"
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(), t.onPressChangeAvartar(e)
                    }
                }
            }, [n("img", {
                attrs: {
                    src: t.twitterAvatarUrl,
                    height: "128",
                    width: "128"
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(), t.onPressChangeAvartar(e)
                    }
                }
            }), t._v(" "), n("input", {
                staticClass: "btn btn-blue",
                attrs: {
                    type: "button",
                    value: t.IntlString("APP_TWITTER_ACCOUNT_AVATAR")
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(), t.onPressChangeAvartar(e)
                    }
                }
            })]), t._v(" "), n("div", {
                staticClass: "group",
                attrs: {
                    "data-type": "button"
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(), t.changePassword(e)
                    }
                }
            }, [n("input", {
                staticClass: "btn btn-red",
                attrs: {
                    type: "button",
                    value: t.IntlString("APP_TWITTER_ACCOUNT_CHANGE_PASSWORD")
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(), t.changePassword(e)
                    }
                }
            })])] : t.state === t.STATES.NEW_ACCOUNT ? [n("div", {
                staticClass: "group inputText",
                attrs: {
                    "data-type": "text",
                    "data-maxlength": "64",
                    "data-defaultValue": ""
                }
            }, [n("input", {
                attrs: {
                    type: "text"
                },
                domProps: {
                    value: t.localAccount.username
                },
                on: {
                    change: function(e) {
                        return t.setLocalAccount(e, "username")
                    }
                }
            }), t._v(" "), n("span", {
                staticClass: "highlight"
            }), t._v(" "), n("span", {
                staticClass: "bar"
            }), t._v(" "), n("label", [t._v(t._s(t.IntlString("APP_TWITTER_NEW_ACCOUNT_USERNAME")))])]), t._v(" "), n("div", {
                staticClass: "group inputText",
                attrs: {
                    "data-type": "text",
                    "data-model": "password",
                    "data-maxlength": "30"
                }
            }, [n("input", {
                attrs: {
                    autocomplete: "new-password",
                    type: "password"
                },
                domProps: {
                    value: t.localAccount.password
                },
                on: {
                    change: function(e) {
                        return t.setLocalAccount(e, "password")
                    }
                }
            }), t._v(" "), n("span", {
                staticClass: "highlight"
            }), t._v(" "), n("span", {
                staticClass: "bar"
            }), t._v(" "), n("label", [t._v(t._s(t.IntlString("APP_TWITTER_NEW_ACCOUNT_PASSWORD")))])]), t._v(" "), n("div", {
                staticClass: "group inputText",
                attrs: {
                    "data-type": "text",
                    "data-model": "password",
                    "data-maxlength": "30"
                }
            }, [n("input", {
                attrs: {
                    autocomplete: "new-password",
                    type: "password"
                },
                domProps: {
                    value: t.localAccount.passwordConfirm
                },
                on: {
                    change: function(e) {
                        return t.setLocalAccount(e, "passwordConfirm")
                    }
                }
            }), t._v(" "), n("span", {
                staticClass: "highlight"
            }), t._v(" "), n("span", {
                staticClass: "bar"
            }), t._v(" "), n("label", [t._v(t._s(t.IntlString("APP_TWITTER_NEW_ACCOUNT_PASSWORD_CONFIRM")))])]), t._v(" "), n("div", {
                staticClass: "group img",
                staticStyle: {
                    "margin-top": "42px",
                    "margin-bottom": "42px"
                },
                attrs: {
                    "data-type": "button"
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(), t.setLocalAccountAvartar(e)
                    }
                }
            }, [n("img", {
                attrs: {
                    src: t.localAccount.avatarUrl,
                    height: "128",
                    width: "128"
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(), t.setLocalAccountAvartar(e)
                    }
                }
            }), t._v(" "), n("input", {
                staticClass: "btn btn-blue",
                attrs: {
                    type: "button",
                    value: t.IntlString("APP_TWITTER_NEW_ACCOUNT_AVATAR")
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(), t.setLocalAccountAvartar(e)
                    }
                }
            })]), t._v(" "), n("div", {
                staticClass: "group",
                attrs: {
                    "data-type": "button"
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(), t.createAccount(e)
                    }
                }
            }, [n("input", {
                staticClass: "btn",
                class: t.validAccount ? "btn-blue" : "btn-gray",
                attrs: {
                    type: "button",
                    value: t.IntlString("APP_TWIITER_ACCOUNT_CREATE")
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(), t.createAccount(e)
                    }
                }
            })])] : t._e()], 2)
        },
        staticRenderFns: []
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "phone_content",
                staticStyle: {
                    width: "326px",
                    height: "743px"
                }
            }, [void 0 !== t.imgZoom ? n("div", {
                staticClass: "img-fullscreen",
                on: {
                    click: function(e) {
                        e.stopPropagation(), t.imgZoom = void 0
                    }
                }
            }, [n("img", {
                attrs: {
                    src: t.imgZoom
                }
            })]) : t._e(), t._v(" "), n("div", {
                ref: "elementsDiv",
                staticClass: "tweets-wrapper"
            }, t._l(t.tweets, function(e, s) {
                return n("div", {
                    key: e.id,
                    staticClass: "tweet",
                    class: {
                        select: s === t.selectMessage
                    }
                }, [n("div", {
                    staticClass: "tweet-img"
                }, [n("img", {
                    attrs: {
                        src: e.authorIcon || "html/static/img/twitter/default_profile.png",
                        width: "48",
                        height: "48"
                    }
                })]), t._v(" "), n("div", {
                    staticClass: "tweet-content"
                }, [n("div", {
                    staticClass: "tweet-head"
                }, [n("div", {
                    staticClass: "tweet-head-author"
                }, [t._v(t._s(e.author))]), t._v(" "), n("div", {
                    staticClass: "tweet-head-time"
                }, [t._v(t._s(t.formatTime(e.time)))])]), t._v(" "), n("div", {
                    staticClass: "tweet-message"
                }, [t.isImage(e.message) ? n("img", {
                    staticClass: "tweet-attachement-img",
                    attrs: {
                        src: e.message
                    },
                    on: {
                        click: function(n) {
                            n.stopPropagation(), t.imgZoom = e.message
                        }
                    }
                }) : [t._v(t._s(e.message))]], 2), t._v(" "), n("div", {
                    staticClass: "tweet-like"
                }, [n("div", {
                    staticClass: "item svgreply",
                    on: {
                        click: function(n) {
                            return n.stopPropagation(), t.reply(e)
                        }
                    }
                }, [n("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "12",
                        height: "12",
                        viewBox: "0 0 24 24"
                    },
                    on: {
                        click: function(n) {
                            return n.stopPropagation(), t.reply(e)
                        }
                    }
                }, [n("path", {
                    attrs: {
                        fill: "none",
                        d: "M0 0h24v24H0V0z"
                    }
                }), n("path", {
                    attrs: {
                        d: "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"
                    }
                })])]), t._v(" "), n("div", {
                    staticClass: "item"
                }, [n("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "12",
                        height: "12",
                        viewBox: "0 0 24 24"
                    }
                }, [n("path", {
                    attrs: {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    }
                }), n("path", {
                    attrs: {
                        d: "M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"
                    }
                })])]), t._v(" "), e.isLikes ? n("div", {
                    staticClass: "item svgdislike",
                    on: {
                        click: function(n) {
                            return n.stopPropagation(), t.twitterToogleLike({
                                tweetId: e.id
                            })
                        }
                    }
                }, [n("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "12",
                        height: "12",
                        viewBox: "0 0 24 24"
                    },
                    on: {
                        click: function(n) {
                            return n.stopPropagation(), t.twitterToogleLike({
                                tweetId: e.id
                            })
                        }
                    }
                }, [n("path", {
                    attrs: {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    }
                }), n("path", {
                    attrs: {
                        d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    }
                })]), t._v(" "), n("span", {
                    on: {
                        click: function(n) {
                            return n.stopPropagation(), t.twitterToogleLike({
                                tweetId: e.id
                            })
                        }
                    }
                }, [t._v(t._s(e.likes))])]) : n("div", {
                    staticClass: "svglike",
                    on: {
                        click: function(n) {
                            return n.stopPropagation(), t.twitterToogleLike({
                                tweetId: e.id
                            })
                        }
                    }
                }, [n("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "12",
                        height: "12",
                        viewBox: "0 0 24 24"
                    },
                    on: {
                        click: function(n) {
                            return n.stopPropagation(), t.twitterToogleLike({
                                tweetId: e.id
                            })
                        }
                    }
                }, [n("path", {
                    attrs: {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    }
                }), n("path", {
                    attrs: {
                        d: "M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
                    }
                })]), t._v(" "), n("span", {
                    on: {
                        click: function(n) {
                            return n.stopPropagation(), t.twitterToogleLike({
                                tweetId: e.id
                            })
                        }
                    }
                }, [t._v(t._s(e.likes))])]), t._v(" "), n("div", {
                    staticClass: "item"
                }, [n("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "12",
                        height: "12",
                        viewBox: "0 0 24 24"
                    }
                }, [n("path", {
                    attrs: {
                        fill: "none",
                        d: "M0 0h24v24H0V0z"
                    }
                }), n("path", {
                    attrs: {
                        d: "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"
                    }
                })])])])])])
            }), 0)])
        },
        staticRenderFns: []
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "phone_app"
            }, [n("PhoneTitle", {
                attrs: {
                    title: t.IntlString("APP_BOURSE_TITLE")
                },
                on: {
                    back: t.onBackspace
                }
            }), t._v(" "), n("div", {
                staticClass: "elements"
            }, t._l(t.bourseInfo, function(e, s) {
                return n("div", {
                    key: s,
                    staticClass: "element",
                    class: {
                        select: s === t.currentSelect
                    }
                }, [n("div", {
                    staticClass: "elem-evo"
                }, [n("i", {
                    staticClass: "fa",
                    class: t.classInfo(e)
                })]), t._v(" "), n("div", {
                    staticClass: "elem-libelle"
                }, [t._v(t._s(e.libelle))]), t._v(" "), n("div", {
                    staticClass: "elem-price",
                    style: {
                        color: t.colorBourse(e)
                    }
                }, [t._v(t._s(e.price) + " $ ")]), t._v(" "), n("div", {
                    staticClass: "elem-difference",
                    style: {
                        color: t.colorBourse(e)
                    }
                }, [e.difference > 0 ? n("span", [t._v("+")]) : t._e(), t._v(t._s(e.difference))])])
            }), 0)], 1)
        },
        staticRenderFns: []
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement;
            t._self._c;
            return t._m(0)
        },
        staticRenderFns: [function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "splash",
                staticStyle: {
                    width: "334px",
                    height: "678px",
                    background: "white"
                }
            }, [n("img", {
                attrs: {
                    src: "/html/static/img/app_tchat/reddit.png",
                    alt: ""
                }
            })])
        }]
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "notifications"
            }, t._l(t.list, function(e) {
                return n("div", {
                    key: e.id,
                    staticClass: "notification",
                    style: t.style(e)
                }, [n("div", {
                    staticClass: "title"
                }, [e.icon ? n("i", {
                    staticClass: "fa",
                    class: "fa-" + e.icon
                }) : t._e(), t._v(" " + t._s(e.title) + "\n    ")]), t._v(" "), n("div", {
                    staticClass: "message"
                }, [t._v(t._s(e.message))])])
            }), 0)
        },
        staticRenderFns: []
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "phone_app"
            }, [n("PhoneTitle", {
                attrs: {
                    title: "9 GAG (" + t.currentSelectPost + ")",
                    backgroundColor: "#000"
                },
                on: {
                    back: t.quit
                }
            }), t._v(" "), n("div", {
                staticClass: "phone_content",
                on: {
                    click: t.onClick
                }
            }, [void 0 !== t.currentPost ? n("div", {
                staticClass: "post"
            }, [n("h1", {
                staticClass: "post-title"
            }, [t._v(t._s(t.currentPost.title))]), t._v(" "), n("div", {
                staticClass: "post-content"
            }, [void 0 !== t.currentPost.images.image460svwm ? n("video", {
                ref: "video",
                staticClass: "post-video",
                attrs: {
                    autoplay: "",
                    loop: "",
                    src: t.currentPost.images.image460svwm.url
                }
            }) : n("img", {
                staticClass: "post-image",
                attrs: {
                    src: t.currentPost.images.image460.url,
                    alt: ""
                }
            })])]) : n("div", {
                staticClass: "loading"
            }, [n("div", [t._v("CHARGEMENT")])])])], 1)
        },
        staticRenderFns: []
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("transition", {
                attrs: {
                    name: "modal"
                }
            }, [n("div", {
                staticClass: "modal-mask",
                on: {
                    click: function(e) {
                        return e.stopPropagation(), t.cancel(e)
                    }
                }
            }, [n("div", {
                staticClass: "modal-container"
            }, t._l(t.choix, function(e, s) {
                return n("div", {
                    key: s,
                    staticClass: "modal-choix",
                    class: {
                        select: s === t.currentSelect
                    },
                    style: {
                        color: e.color
                    },
                    on: {
                        click: function(n) {
                            return n.stopPropagation(), t.selectItem(e)
                        }
                    }
                }, [n("i", {
                    staticClass: "fas",
                    class: e.icons,
                    on: {
                        click: function(n) {
                            return n.stopPropagation(), t.selectItem(e)
                        }
                    }
                }), t._v(t._s(e.title) + "\r\n            ")])
            }), 0)])])
        },
        staticRenderFns: []
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "phone_content",
                staticStyle: {
                    width: "326px",
                    height: "743px"
                }
            }, [n("div", {
                staticClass: "tweet_write"
            }, [n("textarea", {
                directives: [{
                    name: "model",
                    rawName: "v-model.trim",
                    value: t.message,
                    expression: "message",
                    modifiers: {
                        trim: !0
                    }
                }, {
                    name: "autofocus",
                    rawName: "v-autofocus"
                }],
                staticClass: "textarea-input",
                attrs: {
                    placeholder: t.IntlString("APP_TWITTER_PLACEHOLDER_MESSAGE")
                },
                domProps: {
                    value: t.message
                },
                on: {
                    input: function(e) {
                        e.target.composing || (t.message = e.target.value.trim())
                    },
                    blur: function(e) {
                        return t.$forceUpdate()
                    }
                }
            }), t._v(" "), n("span", {
                staticClass: "tweet_send",
                on: {
                    click: t.tweeter
                }
            }, [t._v(t._s(t.IntlString("APP_TWITTER_BUTTON_ACTION_TWEETER")))])])])
        },
        staticRenderFns: []
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticStyle: {
                    height: "100vh",
                    width: "100vw"
                },
                on: {
                    contextmenu: t.closePhone
                }
            }, [n("notification"), t._v(" "), !0 === t.show && !1 === t.tempoHide ? n("div", {
                style: {
                    zoom: t.zoom
                },
                on: {
                    contextmenu: function(t) {
                        t.stopPropagation()
                    }
                }
            }, [n("div", {
                staticClass: "phone_wrapper"
            }, [t.coque ? n("div", {
                staticClass: "phone_coque",
                style: {
                    backgroundImage: "url(/html/static/img/coque/" + t.coque.value + ")"
                }
            }) : t._e(), t._v(" "), n("div", {
                staticClass: "phone_screen",
                attrs: {
                    id: "app"
                }
            }, [n("router-view")], 1)])]) : t._e()], 1)
        },
        staticRenderFns: []
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "screen",
                staticStyle: {
                    width: "326px",
                    height: "743px"
                }
            }, [n("div", {
                staticClass: "elements"
            }, [n("InfoBare", {
                staticStyle: {
                    width: "326px",
                    top: "-207px",
                    "margin-left": "-17px"
                }
            }), t._v(" "), n("img", {
                staticClass: "logo_maze",
                attrs: {
                    src: "/html/static/img/app_bank/fleeca_tar.png"
                }
            }), t._v(" "), n("div", {
                staticClass: "num-tarj"
            }, [n("span", {
                staticClass: "moneyTitle"
            }, [t._v(t._s(t.IntlString("APP_BANK_TITLE_BALANCE")))]), t._v(" "), n("span", {
                staticClass: "moneyTitle"
            }, [t._v(t._s(t.bankAmontFormat) + "$")])]), t._v(" "), n("div", {
                staticClass: "hr"
            }), t._v(" "), n("div", {
                staticClass: "element"
            }, [n("div", {
                staticClass: "element-content"
            }), t._v(" "), n("div", {
                ref: "form",
                staticClass: "element-content"
            }, [n("input", {
                directives: [{
                    name: "autofocus",
                    rawName: "v-autofocus"
                }, {
                    name: "model",
                    rawName: "v-model",
                    value: t.id,
                    expression: "id"
                }],
                ref: "form0",
                staticClass: "paragonder",
                class: {
                    select: 0 === t.currentSelect
                },
                staticStyle: {
                    "border-radius": "23px",
                    "font-size": "16px"
                },
                attrs: {
                    oninput: "this.value = this.value.replace(/[^0-9.]/g, ''); this.value = this.value.replace(/(\\..*)\\./g, '$1');",
                    placeholder: "Numer Konta"
                },
                domProps: {
                    value: t.id
                },
                on: {
                    input: function(e) {
                        e.target.composing || (t.id = e.target.value)
                    }
                }
            })]), t._v(" "), n("div", {
                staticClass: "element-content"
            }, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.paratutar,
                    expression: "paratutar"
                }],
                ref: "form1",
                staticClass: "paragonder",
                class: {
                    select: 1 === t.currentSelect
                },
                staticStyle: {
                    "border-radius": "23px",
                    "font-size": "16px"
                },
                attrs: {
                    oninput: "this.value = this.value.replace(/[^0-9.]/g, ''); this.value = this.value.replace(/(\\..*)\\./g, '$1');",
                    placeholder: "$"
                },
                domProps: {
                    value: t.paratutar
                },
                on: {
                    input: function(e) {
                        e.target.composing || (t.paratutar = e.target.value)
                    }
                }
            }), t._v(" "), n("button", {
                ref: "form2",
                staticClass: "buton-transfer",
                class: {
                    select: 2 === t.currentSelect
                },
                attrs: {
                    id: "gonder"
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(), t.paragonder(e)
                    }
                }
            }, [t._v(t._s(t.IntlString("APP_BANK_BUTTON_TRANSFER")))]), n("br"), t._v(" "), n("button", {
                ref: "form3",
                staticClass: "buton-cancel",
                class: {
                    select: 3 === t.currentSelect
                },
                attrs: {
                    id: "iptal"
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(), t.iptal(e)
                    }
                }
            }, [t._v(t._s(t.IntlString("APP_BANK_BUTTON_CANCEL")))])])])], 1), t._v(" "), n("img", {
                staticClass: "logo_tarj_end",
            })])
        },
        staticRenderFns: []
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticStyle: {
                    width: "326px",
                    height: "743px"
                }
            }, [n("list", {
                attrs: {
                    list: t.contactsList,
                    showHeader: !1
                },
                on: {
                    select: t.onSelect
                }
            })], 1)
        },
        staticRenderFns: []
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "phone_app",
                staticStyle: {
                    width: "326px",
                    height: "743px"
                }
            }, [n("PhoneTitle", {
                attrs: {
                    title: t.currentScreen.title,
                    backgroundColor: "white"
                },
                on: {
                    back: t.quit
                }
            }), t._v(" "), n("div", {
                staticClass: "phone_content"
            }, [n(t.currentScreen.component, {
                tag: "component"
            })], 1), t._v(" "), n("div", {
                staticClass: "twitter_menu"
            }, t._l(t.screen, function(e, s) {
                return n("div", {
                    key: s,
                    staticClass: "twitter_menu-item",
                    class: {
                        select: s === t.currentScreenIndex
                    },
                    on: {
                        click: function(e) {
                            return e.stopPropagation(), t.openMenu(s)
                        }
                    }
                }, [n("i", {
                    staticClass: "fa",
                    class: e.icon,
                    on: {
                        click: function(e) {
                            return e.stopPropagation(), t.openMenu(s)
                        }
                    }
                })])
            }), 0)], 1)
        },
        staticRenderFns: []
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "phone_app",
                staticStyle: {
                    width: "326px",
                    height: "743px"
                }
            }, [n("div", {
                staticClass: "backblur",
                style: {
                    background: "url(" + t.backgroundURL + ")"
                }
            }), t._v(" "), n("InfoBare"), t._v(" "), n("div", {
                staticClass: "num"
            }, [t._v(t._s(t.appelsDisplayNumber))]), t._v(" "), n("div", {
                staticClass: "contactName"
            }, [t._v(t._s(t.appelsDisplayName))]), t._v(" "), n("div", {
                staticClass: "time"
            }), t._v(" "), n("div", {
                staticClass: "time-display"
            }, [t._v(t._s(t.timeDisplay))]), t._v(" "), t.useMouse && 0 === t.status ? n("div", {
                staticClass: "ignore",
                on: {
                    click: function(e) {
                        return e.stopPropagation(), t.onIgnoreCall(e)
                    }
                }
            }, [t._v("\n   " + t._s(t.IntlString("APP_PHONE_CALL_IGNORE")) + "\n ")]) : t._e(), t._v(" "), n("div", {
                staticClass: "actionbox"
            }, [n("div", {
                staticClass: "action raccrocher",
                class: {
                    disableTrue: 0 === t.status && 0 !== t.select
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(), t.raccrocher(e)
                    }
                }
            }, [n("svg", {
                attrs: {
                    viewBox: "0 0 24 24"
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(), t.raccrocher(e)
                    }
                }
            }, [n("g", {
                attrs: {
                    transform: "rotate(135, 12, 12)"
                }
            }, [n("path", {
                attrs: {
                    d: "M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"
                }
            })])])]), t._v(" "), 0 === t.status ? n("div", {
                staticClass: "action deccrocher",
                class: {
                    disableFalse: 0 === t.status && 1 !== t.select
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(), t.deccrocher(e)
                    }
                }
            }, [n("svg", {
                attrs: {
                    viewBox: "0 0 24 24"
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(), t.deccrocher(e)
                    }
                }
            }, [n("g", {
                attrs: {
                    transform: "rotate(0, 12, 12)"
                }
            }, [n("path", {
                attrs: {
                    d: "M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"
                }
            })])])]) : t._e()])], 1)
        },
        staticRenderFns: []
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "phone_app messages",
                staticStyle: {
                    width: "330px",
                    height: "743px",
                    backgroundColor: "white"
                }
            }, [n("PhoneTitle", {
                staticStyle: {
                    backgroundColor: "#F1F1F1",
                    color: "black"
                },
                attrs: {
                    title: t.displayContact
                },
                on: {
                    back: t.quit
                }
            }), t._v(" "), void 0 !== t.imgZoom ? n("div", {
                staticClass: "img-fullscreen",
                on: {
                    click: function(e) {
                        e.stopPropagation(), t.imgZoom = void 0
                    }
                }
            }, [n("img", {
                attrs: {
                    src: t.imgZoom
                }
            })]) : t._e(), t._v(" "), n("textarea", {
                ref: "copyTextarea",
                staticClass: "copyTextarea"
            }), t._v(" "), n("div", {
                staticStyle: {
                    width: "326px",
                    height: "678px",
                    backgroundColor: "white"
                },
                attrs: {
                    id: "sms_list"
                },
                on: {
                    contextmenu: function(e) {
                        return e.preventDefault(), e.stopPropagation(), t.showOptions(e)
                    }
                }
            }, t._l(t.messagesList, function(e, s) {
                return n("div", {
                    key: e.id,
                    staticClass: "sms",
                    class: {
                        select: s === t.selectMessage
                    },
                    on: {
                        click: function(n) {
                            return n.stopPropagation(), t.onActionMessage(e)
                        },
                        contextmenu: function(e) {
                            return e.preventDefault(), e.stopPropagation(), t.showOptions(e)
                        }
                    }
                }, [n("div", {
                    staticClass: "sms_message_time"
                }, [n("h6", {
                    staticClass: "name_other_sms_me",
                    class: {
                        sms_me: 1 === e.owner
                    }
                }, [t._v(t._s(t.displayContact))]), t._v(" "), n("h6", {
                    staticClass: "name_other_sms_other",
                    class: {
                        sms_me: 1 === e.owner
                    },
                    on: {
                        click: function(n) {
                            return n.stopPropagation(), t.onActionMessage(e)
                        }
                    }
                }, [n("timeago", {
                    staticClass: "sms_time",
                    staticStyle: {
                        "font-weight": "500"
                    },
                    attrs: {
                        since: e.time,
                        "auto-update": 20
                    }
                })], 1)]), t._v(" "), n("span", {
                    staticClass: "sms_message sms_me",
                    class: {
                        sms_other: 0 === e.owner
                    },
                    on: {
                        click: function(n) {
                            return n.stopPropagation(), t.onActionMessage(e)
                        }
                    }
                }, [t.isSMSImage(e) ? n("img", {
                    staticClass: "sms-img",
                    attrs: {
                        src: e.message
                    },
                    on: {
                        click: function(n) {
                            return n.stopPropagation(), t.onActionMessage(e)
                        }
                    }
                }) : n("span", {
                    on: {
                        click: function(n) {
                            return n.stopPropagation(), t.onActionMessage(e)
                        }
                    }
                }, [t._v(t._s(e.message))])])])
            }), 0), t._v(" "), n("div", {
                staticStyle: {
                    width: "306px"
                },
                attrs: {
                    id: "sms_write"
                },
                on: {
                    contextmenu: function(e) {
                        return e.preventDefault(), t.showOptions(e)
                    }
                }
            }, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.message,
                    expression: "message"
                }, {
                    name: "autofocus",
                    rawName: "v-autofocus"
                }],
                attrs: {
                    type: "text",
                    placeholder: t.IntlString("APP_MESSAGE_PLACEHOLDER_ENTER_MESSAGE")
                },
                domProps: {
                    value: t.message
                },
                on: {
                    keyup: function(e) {
                        return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : (e.preventDefault(), t.send(e))
                    },
                    input: function(e) {
                        e.target.composing || (t.message = e.target.value)
                    }
                }
            }), t._v(" "), n("div", {
                staticClass: "sms_send",
                staticStyle: {
                    "font-size": "10px"
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(), t.send(e)
                    }
                }
            }, [n("svg", {
                attrs: {
                    height: "24",
                    viewBox: "0 0 24 24",
                    width: "24"
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(), t.send(e)
                    }
                }
            }, [n("path", {
                attrs: {
                    d: "M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
                }
            }), t._v(" "), n("path", {
                attrs: {
                    d: "M0 0h24v24H0z",
                    fill: "none"
                }
            })])])])], 1)
        },
        staticRenderFns: []
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "phone_app"
            }, [n("PhoneTitle", {
                attrs: {
                    title: t.IntlString("APP_CONFIG_TITLE")
                },
                on: {
                    back: t.onBackspace
                }
            }), t._v(" "), n("div", {
                staticClass: "phone_content elements"
            }, t._l(t.paramList, function(e, s) {
                return n("div", {
                    key: s,
                    staticClass: "element",
                    class: {
                        select: s === t.currentSelect
                    },
                    on: {
                        click: function(e) {
                            return e.stopPropagation(), t.onPressItem(s)
                        }
                    }
                }, [n("i", {
                    staticClass: "fa",
                    class: e.icons,
                    style: {
                        color: e.color
                    },
                    on: {
                        click: function(e) {
                            return e.stopPropagation(), t.onPressItem(s)
                        }
                    }
                }), t._v(" "), n("div", {
                    staticClass: "element-content",
                    on: {
                        click: function(e) {
                            return e.stopPropagation(), t.onPressItem(s)
                        }
                    }
                }, [n("span", {
                    staticClass: "element-title",
                    on: {
                        click: function(e) {
                            return e.stopPropagation(), t.onPressItem(s)
                        }
                    }
                }, [t._v(t._s(e.title))]), t._v(" "), e.value ? n("span", {
                    staticClass: "element-value",
                    on: {
                        click: function(e) {
                            return e.stopPropagation(), t.onPressItem(s)
                        }
                    }
                }, [t._v(t._s(e.value))]) : t._e()])])
            }), 0)], 1)
        },
        staticRenderFns: []
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "phone_app"
            }, [t.showHeader ? n("PhoneTitle", {
                attrs: {
                    title: t.title,
                    showInfoBare: t.showInfoBare
                },
                on: {
                    back: t.back
                }
            }) : t._e(), t._v(" "), n("div", {
                staticClass: "phone_content elements",
                staticStyle: {
                    width: "324px",
                    height: "595px"
                }
            }, t._l(t.list, function(e, s) {
                return n("div", {
                    key: e[t.keyDispay],
                    staticClass: "element",
                    class: {
                        select: s === t.currentSelect
                    },
                    on: {
                        click: function(n) {
                            return n.stopPropagation(), t.selectItem(e)
                        },
                        contextmenu: function(n) {
                            return n.preventDefault(), n.stopPropagation(), t.optionItem(e)
                        }
                    }
                }, [n("div", {
                    staticClass: "elem-pic",
                    style: t.stylePuce(e),
                    on: {
                        click: function(n) {
                            return n.stopPropagation(), t.selectItem(e)
                        }
                    }
                }, [t._v("\n            " + t._s(e.letter || e[t.keyDispay][0]) + "\n          ")]), t._v(" "), void 0 !== e.puce && 0 !== e.puce ? n("div", {
                    staticClass: "elem-puce",
                    on: {
                        click: function(n) {
                            return n.stopPropagation(), t.selectItem(e)
                        },
                        contextmenu: function(n) {
                            return n.preventDefault(), n.stopPropagation(), t.optionItem(e)
                        }
                    }
                }, [t._v(t._s(e.puce))]) : t._e(), t._v(" "), void 0 === e.keyDesc || "" === e.keyDesc ? n("div", {
                    staticClass: "elem-title",
                    on: {
                        click: function(n) {
                            return n.stopPropagation(), t.selectItem(e)
                        },
                        contextmenu: function(n) {
                            return n.preventDefault(), n.stopPropagation(), t.optionItem(e)
                        }
                    }
                }, [t._v(t._s(e[t.keyDispay]))]) : t._e(), t._v(" "), void 0 !== e.keyDesc && "" !== e.keyDesc ? n("div", {
                    staticClass: "elem-title-has-desc",
                    on: {
                        click: function(n) {
                            return n.stopPropagation(), t.selectItem(e)
                        },
                        contextmenu: function(n) {
                            return n.preventDefault(), n.stopPropagation(), t.optionItem(e)
                        }
                    }
                }, [t._v(t._s(e[t.keyDispay]))]) : t._e(), t._v(" "), void 0 !== e.keyDesc && "" !== e.keyDesc ? n("div", {
                    staticClass: "elem-description",
                    on: {
                        click: function(n) {
                            return n.stopPropagation(), t.selectItem(e)
                        },
                        contextmenu: function(n) {
                            return n.preventDefault(), n.stopPropagation(), t.optionItem(e)
                        }
                    }
                }, [t._v(t._s(e.keyDesc))]) : t._e()])
            }), 0)], 1)
        },
        staticRenderFns: []
    }
}, function(t, e) {
    t.exports = {
        render: function() {
            var t = this,
                e = t.$createElement;
            return (t._self._c || e)("span", [t._v(t._s(t.time))])
        },
        staticRenderFns: []
    }
}, , , , function(t, e) {
    t.exports = {
        100: "💯",
        1234: "🔢",
        grinning: "😀",
        grimacing: "😬",
        grin: "😁",
        joy: "😂",
        rofl: "🤣",
        partying: "🥳",
        smiley: "😃",
        smile: "😄",
        sweat_smile: "😅",
        laughing: "😆",
        innocent: "😇",
        wink: "😉",
        blush: "😊",
        slightly_smiling_face: "🙂",
        upside_down_face: "🙃",
        relaxed: "☺️",
        yum: "😋",
        relieved: "😌",
        heart_eyes: "😍",
        smiling_face_with_three_hearts: "🥰",
        kissing_heart: "😘",
        kissing: "😗",
        kissing_smiling_eyes: "😙",
        kissing_closed_eyes: "😚",
        stuck_out_tongue_winking_eye: "😜",
        zany: "🤪",
        raised_eyebrow: "🤨",
        monocle: "🧐",
        stuck_out_tongue_closed_eyes: "😝",
        stuck_out_tongue: "😛",
        money_mouth_face: "🤑",
        nerd_face: "🤓",
        sunglasses: "😎",
        star_struck: "🤩",
        clown_face: "🤡",
        cowboy_hat_face: "🤠",
        hugs: "🤗",
        smirk: "😏",
        no_mouth: "😶",
        neutral_face: "😐",
        expressionless: "😑",
        unamused: "😒",
        roll_eyes: "🙄",
        thinking: "🤔",
        lying_face: "🤥",
        hand_over_mouth: "🤭",
        shushing: "🤫",
        symbols_over_mouth: "🤬",
        exploding_head: "🤯",
        flushed: "😳",
        disappointed: "😞",
        worried: "😟",
        angry: "😠",
        rage: "😡",
        pensive: "😔",
        confused: "😕",
        slightly_frowning_face: "🙁",
        frowning_face: "☹",
        persevere: "😣",
        confounded: "😖",
        tired_face: "😫",
        weary: "😩",
        pleading: "🥺",
        triumph: "😤",
        open_mouth: "😮",
        scream: "😱",
        fearful: "😨",
        cold_sweat: "😰",
        hushed: "😯",
        frowning: "😦",
        anguished: "😧",
        cry: "😢",
        disappointed_relieved: "😥",
        drooling_face: "🤤",
        sleepy: "😪",
        sweat: "😓",
        hot: "🥵",
        cold: "🥶",
        sob: "😭",
        dizzy_face: "😵",
        astonished: "😲",
        zipper_mouth_face: "🤐",
        nauseated_face: "🤢",
        sneezing_face: "🤧",
        vomiting: "🤮",
        mask: "😷",
        face_with_thermometer: "🤒",
        face_with_head_bandage: "🤕",
        woozy: "🥴",
        sleeping: "😴",
        zzz: "💤",
        poop: "💩",
        smiling_imp: "😈",
        imp: "👿",
        japanese_ogre: "👹",
        japanese_goblin: "👺",
        skull: "💀",
        ghost: "👻",
        alien: "👽",
        robot: "🤖",
        smiley_cat: "😺",
        smile_cat: "😸",
        joy_cat: "😹",
        heart_eyes_cat: "😻",
        smirk_cat: "😼",
        kissing_cat: "😽",
        scream_cat: "🙀",
        crying_cat_face: "😿",
        pouting_cat: "😾",
        palms_up: "🤲",
        raised_hands: "🙌",
        clap: "👏",
        wave: "👋",
        call_me_hand: "🤙",
        "\\+1": "👍",
        "-1": "👎",
        facepunch: "👊",
        fist: "✊",
        fist_left: "🤛",
        fist_right: "🤜",
        v: "✌",
        ok_hand: "👌",
        raised_hand: "✋",
        raised_back_of_hand: "🤚",
        open_hands: "👐",
        muscle: "💪",
        pray: "🙏",
        foot: "🦶",
        leg: "🦵",
        handshake: "🤝",
        point_up: "☝",
        point_up_2: "👆",
        point_down: "👇",
        point_left: "👈",
        point_right: "👉",
        fu: "🖕",
        raised_hand_with_fingers_splayed: "🖐",
        love_you: "🤟",
        metal: "🤘",
        crossed_fingers: "🤞",
        vulcan_salute: "🖖",
        writing_hand: "✍",
        selfie: "🤳",
        nail_care: "💅",
        lips: "👄",
        tooth: "🦷",
        tongue: "👅",
        ear: "👂",
        nose: "👃",
        eye: "👁",
        eyes: "👀",
        brain: "🧠",
        bust_in_silhouette: "👤",
        busts_in_silhouette: "👥",
        speaking_head: "🗣",
        baby: "👶",
        child: "🧒",
        boy: "👦",
        girl: "👧",
        adult: "🧑",
        man: "👨",
        woman: "👩",
        blonde_woman: "👱‍♀️",
        blonde_man: "👱",
        bearded_person: "🧔",
        older_adult: "🧓",
        older_man: "👴",
        older_woman: "👵",
        man_with_gua_pi_mao: "👲",
        woman_with_headscarf: "🧕",
        woman_with_turban: "👳‍♀️",
        man_with_turban: "👳",
        policewoman: "👮‍♀️",
        policeman: "👮",
        construction_worker_woman: "👷‍♀️",
        construction_worker_man: "👷",
        guardswoman: "💂‍♀️",
        guardsman: "💂",
        female_detective: "🕵️‍♀️",
        male_detective: "🕵",
        woman_health_worker: "👩‍⚕️",
        man_health_worker: "👨‍⚕️",
        woman_farmer: "👩‍🌾",
        man_farmer: "👨‍🌾",
        woman_cook: "👩‍🍳",
        man_cook: "👨‍🍳",
        woman_student: "👩‍🎓",
        man_student: "👨‍🎓",
        woman_singer: "👩‍🎤",
        man_singer: "👨‍🎤",
        woman_teacher: "👩‍🏫",
        man_teacher: "👨‍🏫",
        woman_factory_worker: "👩‍🏭",
        man_factory_worker: "👨‍🏭",
        woman_technologist: "👩‍💻",
        man_technologist: "👨‍💻",
        woman_office_worker: "👩‍💼",
        man_office_worker: "👨‍💼"
    }
}], [145]);