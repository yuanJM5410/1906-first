"use strict";

//头部通告消息的上下轮播、导航
function Index() {
  this.oDiv = $('.inform_info');
  this.oA = $('.inform_info div');
  this.distace = $('.animation').first().height();
  this.twoMenu = $('.ul .sMenu');
  this.firstA = $('.ul .firstLi');
  this.timer = null;
  this.count = 0;
  this.init();
}

Index.prototype = {
  init: function init() {
    this.oA.first().clone(true).appendTo(this.oDiv);
    this.autoPlay();
    this.eventBind();
  },
  //每次div往上移动的距离
  divTop: function divTop() {
    this.oDiv.animate({
      top: -this.distace * this.count
    }, 2000);
  },
  nextTxt: function nextTxt() {
    if (this.count >= $('.inform_info div').length - 1) {
      this.oDiv.css('top', -this.distace);
      this.count = 1;
    } else {
      this.count++;
    }

    this.divTop();
  },
  autoPlay: function autoPlay() {
    var _this = this;

    this.timer = setInterval(function () {
      _this.nextTxt();
    }, 2500);
  },
  eventBind: function eventBind() {
    var _this = this;

    this.firstA.on('mouseover', function () {
      _this.twoMenu.show();
    });
    this.firstA.on('mouseout', function () {
      _this.twoMenu.hide();
    });
  }
};
new Index();