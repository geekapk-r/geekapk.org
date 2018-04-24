// License AGPL-3.0
// Copyright(C) 2018 duangsuse
// GeekApk.org style helper

// should use dark style from 19:00 to 6:00
function shouldApplyDarkStyle() {
  if (localStorage['night'] == false.toString())
    return false;
  var dh = new Date();
  nightBegin = localStorage['nightBegin'] || 19
  nightEnd = localStorage['nightEnd'] || 6
  return dh.getHours() >= nightBegin && dh.getHours() <= nightEnd
}

// call this to apply dark style automatically
function autodark() {
  if (shouldApplyDarkStyle()) {
    body = $$('body')[0]
    cls = body.classList
    cls.add('mdui-theme-layout-dark')
  }
}
