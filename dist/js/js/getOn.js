"use strict";

//功能：用户点击页面的某张的时候，用cookie存储单击的图片属于的版块号、当前图片的id名
function GetOn() {
  this.oFn1 = $('.onFn1'); //头版

  this.oFn2 = $('.onFn2'); //推荐

  this.oFn3 = $('.onFn3'); //新品

  this.oFn4 = $('.onFn4'); //户外

  this.oFn5 = $('.onFn5'); //男鞋

  this.oFn6 = $('.onFn6'); //女鞋

  this.oFn7 = $('.onFn7'); //男装

  this.oFn8 = $('.onFn8'); //瑜伽

  this.oFn9 = $('.onFn9'); //童装

  this.oFn10 = $('.onFn10'); // 箱包

  this.oFn11 = $('.onFn11'); //家居

  this.init();
}

GetOn.prototype = {
  init: function init() {
    this.eventBind();
  },
  //添加cookie
  setCookie: function setCookie(uName, uVal, expires) {
    var d = new Date();
    d.setDate(d.getDate() + expires);
    document.cookie = uName + "=" + uVal + ";path=/;expires=" + d.toGMTString();
  },
  eventBind: function eventBind() {
    var _this = this;

    this.oFn1.on('click', 'img', function () {
      _this.setCookie("imgType:", _this.oFn1.attr('data-name'), 1);

      _this.setCookie('imgId:', $(this).attr('data-id'), 1);
    });
    this.oFn2.on('click', 'img', function () {
      _this.setCookie("imgType:", _this.oFn2.attr('data-name'), 1);

      _this.setCookie('imgId:', $(this).attr('data-id'), 1);

      _this.setCookie('imgNum:', $(this).attr('alt'), 1);
    });
    this.oFn3.on('click', 'img', function () {
      _this.setCookie("imgType:", _this.oFn3.attr('data-name'), 1);

      _this.setCookie('imgId:', $(this).attr('data-id'), 1);
    });
    this.oFn4.on('click', 'img', function () {
      _this.setCookie("imgType:", _this.oFn4.attr('data-name'), 1);

      _this.setCookie('imgId:', $(this).attr('data-id'), 1);
    });
    this.oFn5.on('click', 'img', function () {
      _this.setCookie("imgType:", _this.oFn5.attr('data-name'), 1);

      _this.setCookie('imgId:', $(this).attr('data-id'), 1);
    });
    this.oFn6.on('click', 'img', function () {
      _this.setCookie("imgType:", _this.oFn6.attr('data-name'), 1);

      _this.setCookie('imgId:', $(this).attr('data-id'), 1);
    });
    this.oFn7.on('click', 'img', function () {
      _this.setCookie("imgType:", _this.oFn7.attr('data-name'), 1);

      _this.setCookie('imgId:', $(this).attr('data-id'), 1);
    });
    this.oFn8.on('click', 'img', function () {
      _this.setCookie("imgType:", _this.oFn8.attr('data-name'), 1);

      _this.setCookie('imgId:', $(this).attr('data-id'), 1);
    });
    this.oFn9.on('click', 'img', function () {
      _this.setCookie("imgType:", _this.oFn9.attr('data-name'), 1);

      _this.setCookie('imgId:', $(this).attr('data-id'), 1);
    });
    this.oFn10.on('click', 'img', function () {
      _this.setCookie("imgType:", _this.oFn10.attr('data-name'), 1);

      _this.setCookie('imgId:', $(this).attr('data-id'), 1);
    });
    this.oFn11.on('click', 'img', function () {
      _this.setCookie("imgType:", _this.oFn11.attr('data-name'), 1);

      _this.setCookie('imgId:', $(this).attr('data-id'), 1);
    });
  }
};
new GetOn();