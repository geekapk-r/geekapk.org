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
  var body = $$('body')[0]
  var cls = body.classList
  if (shouldApplyDarkStyle())
    cls.add(MDUI_DARK_CLASS)
  else
    cls.remove(MDUI_DARK_CLASS)
}
