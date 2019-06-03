"use strict";

//添加cookie
function setCookie(uName, uVal, expires) {
  var d = new Date();
  d.setDate(d.getDate() + expires);
  document.cookie = uName + "=" + uVal + ";path=/;expires=" + d.toGMTString();
} //读取cookie


function getCookie(uName) {
  var str = document.cookie;
  var arr = str.split('; ');

  for (var i = 0, k = arr.length; i < k; i++) {
    var temp = arr[i].split('=');

    if (temp[0] == uName) {
      return temp[1];
    }
  }
} //删除cookie  原理是；因为cookie'是不能重名的，所以利用这个特性，
// 要删除哪个cookie那么就再创建一个名为要删除的cookie、的名，然后设置这个新的cookie的expires值为一个负值，
// 让这个新的cookie变成一个已经过期的这样就达到了删除的效果；


function removeCookie(uName) {
  setCookie(uName, null, -1);
}