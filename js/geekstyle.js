// License AGPL-3.0
// Copyright(C) 2018 duangsuse
// GeekApk.org style helper

// should use dark style from 19:00 to 6:00
function shouldApplyDarkStyle() {
    var conf = localStorage['night']
    if (conf != null) {
        if (conf == false.toString())
            return false;
        else return true;
    }
    var dh = new Date();
    var nightBegin = localStorage['nightBegin'] || 19
    var nightEnd = localStorage['nightEnd'] || 6
    return dh.getHours() >= nightBegin && dh.getHours() <= nightEnd
}

MDUI_DARK_CLASS = 'mdui-theme-layout-dark'

// call this to apply dark style automatically
function autodark() {
    var body = mdui.JQ('body')[0]
    var cls = body.classList
    if (shouldApplyDarkStyle())
        cls.add(MDUI_DARK_CLASS)
    else
        cls.remove(MDUI_DARK_CLASS)
}

// returns random html color
function getRandomColor() {
    return (function (m, s, c) {
        return (c ? arguments.callee(m, s, c - 1) : '#') +
            s[m.floor(m.random() * 16)]
    })(Math, '0123456789abcdef', 5)
}

// chage location to url
function r(url) { window.location = url }
