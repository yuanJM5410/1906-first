"use strict";

// 轮播图
function Slideshow() {
  this.bgImg = [{
    'id': '0',
    'img': 'images/banner1.jpg'
  }, {
    'id': '1',
    'img': 'images/banner2.jpg'
  }, {
    'id': '2',
    'img': 'images/banner3.jpg'
  }, {
    'id': '3',
    'img': 'images/banner4.jpg'
  }, {
    'id': '4',
    'img': 'images/banner5.jpg'
  }, {
    'id': '5',
    'img': 'images/banner6.jpg'
  }];
  this.oBanner = $('.banner');
  this.oImgShow = $('.banner .imgBox div');
  this.oBody = $('body').width();
  this.bigBox = $('.banner').height();
  this.imgBoxH = $('.imgBox');
  this.pre = $('.banner span').eq(1);
  this.next = $('.banner span').eq(0);
  this.oCreat = $('.banner .creat');
  this.count = 0;
  this.distace = this.oBody;
  this.timer = null;
  this.init(); // console.log(this.pre)
}

Slideshow.prototype = {
  init: function init() {
    //克隆第一个div
    this.clonDiv = $('.banner .imgBox div').first().clone(true).appendTo(this.imgBoxH);
    this.clonDiv.css({
      'width': $('.banner .imgBox div').first().width(),
      'height': $('.banner .imgBox div').first().height()
    });
    this.imgBox();
    this.changeImgBox();
    this.autoPlay();
    this.createLi();
    this.eventBInd();
  },
  //动态设置每个放有背景图的div的宽度 根据body的宽度来设置 、高度 、背景图片、背景图片的位置
  imgBox: function imgBox() {
    for (var i = 0, k = this.oImgShow.length; i < k; i++) {
      this.oImgShow.eq(i).css({
        'width': this.oBody,
        'height': 480,
        'background-image': 'url(' + this.bgImg[i].img + ')',
        'background-position': 'center'
      });
    } //单独设置克隆出来的第一个div的宽高、背景图


    $('.banner .imgBox div').last().css({
      'width': $('.banner').width(),
      'height': 480,
      'background-image': 'url(' + this.bgImg[0].img + ')',
      'background-position': 'center'
    });
  },
  //动态设置imgBox的宽度
  changeImgBox: function changeImgBox() {
    this.imgBoxH.css('width', this.oImgShow.eq(0).width() * $('.banner .imgBox div').length);
  },
  //每次imgBox移动的距离
  imgBoxMove: function imgBoxMove() {
    this.imgBoxH.stop(true).animate({
      left: -this.distace * this.count
    }, 500);
  },
  //nextImg
  nextImg: function nextImg() {
    if (this.count >= $('.banner .imgBox div').length - 1) {
      this.imgBoxH.css('left', 0);
      this.count = 1;
    } else {
      this.count++;
    }

    this.imgBoxMove();
    this.changeStyle();
  },
  // preImg
  preImg: function preImg() {
    if (this.count <= 0) {
      this.imgBoxH.css('left', -this.distace * ($('.banner .imgBox div').length - 1));
      this.count = $('.banner .imgBox div').length - 2;
    } else {
      this.count--;
    }

    this.imgBoxMove();
    this.changeStyle();
  },
  autoPlay: function autoPlay() {
    var _this = this;

    this.timer = setInterval(function () {
      _this.nextImg();
    }, 3000);
  },
  //根据背景图有iv的个数动态创建圆点
  createLi: function createLi() {
    for (var i = 0, k = $('.banner .imgBox div').length - 1; i < k; i++) {
      $('<li></li>').appendTo(this.oCreat);
    }

    $('.creat li').first().addClass('active');
  },
  //更改li的样式，动态添加类名active
  changeStyle: function changeStyle() {
    $('.creat li').eq(this.count > $('.banner .imgBox div').length - 2 ? 0 : this.count).addClass('active').siblings().removeClass('active');
  },
  //鼠标所在的li圆点上，添加类名
  changeCount: function changeCount(index) {
    $('.creat li').eq(index).addClass('active').siblings().removeClass('active');
  },
  eventBInd: function eventBInd() {
    var _this = this; //对按钮进行绑定单击事件


    this.pre.click(function () {
      _this.preImg();
    });
    this.next.click(function () {
      _this.nextImg();
    }); //鼠标滑入banner区域的时候清除定时器，划出再开启

    this.oBanner.mouseover(function () {
      clearInterval(_this.timer);
    });
    this.oBanner.mouseout(function () {
      _this.autoPlay();
    }); //给所有li添加上鼠标滑过事件

    $('.creat li').stop(true).mouseover(function () {
      var index = $(this).index();
      _this.count = index;

      _this.changeCount(index);

      _this.imgBoxMove();
    });
  }
};
new Slideshow();