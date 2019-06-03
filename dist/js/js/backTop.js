"use strict";

//功能：获取浏览器滚动条高度，根据条件设置返回顶部按钮
function backTop() {
  this.hidBtn = $('.hidBtn');
  this.speed = 1000;
  this.timer = null;
  this.init();
}

backTop.prototype = {
  init: function init() {
    var _this = this;

    window.onscroll = function () {
      _this.getHeig();

      _this.eventBind();
    };
  },
  getHeig: function getHeig() {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollTop >= 1000) {
      this.hidBtn.show();
    } else {
      this.hidBtn.hide();
    }
  },
  eventBind: function eventBind() {
    var _this = this;

    var timer = null;
    this.hidBtn.on('click', function () {
      var scrollTop2 = document.documentElement.scrollTop || document.body.scrollTop;
      var speed = scrollTop2;
      timer = setInterval(function () {
        speed -= 500;
        scrollTop2 = speed;
        document.documentElement.scrollTop = document.body.scrollTop = scrollTop2;

        if (scrollTop2 <= 0) {
          clearInterval(timer);
        }
      }, 10);
    });
  }
};
new backTop();