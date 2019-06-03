"use strict";

/*功能：商品详情页面的商品属性选择功能
    属性的选中效果、数量增加功能
*/
function Article() {
  this.cloneColor = $('.sp_siz_color i'); //存有小图片（商品款式）的标签

  this.cloneSize = $('.sp_size i'); //存有尺码的标签

  this.imgBlank = $('.Blank'); //图片1

  this.imgGreen = $('.gayGreen'); //图片2

  this.oInput = $('.sp_sl'); //存数量的input框

  this.addBtn = $('.addBtn'); //加按钮

  this.jjBtn = $('.jjBtn'); //减按钮

  this.measVal = $('.sp_zt span'); //储存用户选择的商品属性信息的标签 1

  this.measVal2 = $('.sp_zt i'); //储存用户选择的商品属性信息的标签 2

  this.mai = $('.mat_btn'); //立即购买按钮

  this.addCar = $('.jioncar_btn'); //加入购物车按钮

  this.showImg = $('.bigImg'); //当前图片显示区的容器

  this.smallShow = $('.xq_small_box img'); //所有小图片

  this.smaImg1 = $('.smaImg1');
  this.smaImg2 = $('.smaImg2');
  this.smaImg3 = $('.smaImg3');
  this.smaImg4 = $('.smaImg4');
  this.smaImg5 = $('.smaImg5');
  this.fixe = $('.fixedBox'); //弹出的对话框

  this.hidBox1 = $('.hideBox1'); //弹出的对话框的关闭按钮

  this.hidBox2 = $('.hideBox2'); //弹出的对话框的 继续购物 按钮

  this.zhezhao = $('.cover'); //遮罩

  this.obj = {
    "j0": "../images/img/big_1.png",
    "j1": "../images/img/big_2.png",
    "j2": "../images/img/big_3.png",
    "j3": "../images/img/big_4.png",
    "j4": "../images/img/big_5.png"
  };
  this.init();
}

Article.prototype = {
  init: function init() {
    this.changeImg();
    this.eventBInd();
  },
  // 更改大图的src
  changeSrc: function changeSrc(index) {
    this.showImg.attr('src', this.obj[index]);
  },
  //拿到cookie值和，ajax请求数据，和得到的数据作对比，并且找到该项
  changeImg: function changeImg() {
    var _this = this; //获取cookie的值；


    var shopType = getCookie("imgType:");
    var imgID = getCookie("imgId:");
    var imgNum = getCookie("imgNum:");
    console.log(shopType);
    console.log(Number(imgID) - 1);
    console.log(imgNum);
    axios({
      method: 'get',
      url: 'http://localhost/myStation/camel/src/js/js/json/gather.json',
      data: {}
    }).then(function (data) {
      console.log(data[shopType][Number(imgID) - 1].img); //让从cookie里面获取的id进行数据类型转换成为数字，因为数组的下标是从0开始，所以要减1
      // 大图

      _this.showImg.attr('src', data[shopType][Number(imgID) - 1].img); // 小图


      _this.smaImg1.attr('src', data[shopType][Number(imgID) - 1].smallImg);

      _this.smaImg2.attr('src', data[shopType][Number(imgID) - 1].smallImg);

      _this.smaImg3.attr('src', data[shopType][Number(imgID) - 1].smallImg);

      _this.smaImg4.attr('src', data[shopType][Number(imgID) - 1].smallImg);

      _this.smaImg5.attr('src', data[shopType][Number(imgID) - 1].smallImg); // 款式图


      _this.imgBlank.attr('src', data[shopType][Number(imgID) - 1].styleImg);

      _this.imgGreen.attr('src', data[shopType][Number(imgID) - 1].styleImg); //如果存有选项卡下标的cookie存在那么久执行下面的代码            


      if (imgNum != "") {
        // 大图
        _this.showImg.attr('src', data[shopType][imgNum][Number(imgID) - 1].img); // 小图


        _this.smaImg1.attr('src', data[shopType][imgNum][Number(imgID) - 1].img);

        _this.smaImg2.attr('src', data[shopType][imgNum][Number(imgID) - 1].img);

        _this.smaImg3.attr('src', data[shopType][imgNum][Number(imgID) - 1].img);

        _this.smaImg4.attr('src', data[shopType][imgNum][Number(imgID) - 1].img);

        _this.smaImg5.attr('src', data[shopType][imgNum][Number(imgID) - 1].img); // 款式图


        _this.imgBlank.attr('src', data[shopType][imgNum][Number(imgID) - 1].img);

        _this.imgGreen.attr('src', data[shopType][imgNum][Number(imgID) - 1].img);

        console.log(data[shopType][imgNum][Number(imgID) - 1].img);
      }
    })["catch"](function () {
      console.log(false);
    });
  },
  eventBInd: function eventBInd() {
    var _this = this; // 商品款式的选中


    this.cloneColor.on('click', function () {
      $(this).addClass('active_img').siblings().removeClass('active_img');
      var otxt = $(this).attr('data-title'); // var otxt1 = _this.measVal.text();

      _this.measVal.text(otxt);
    }); // 尺码的选中

    this.cloneSize.on('click', function () {
      $(this).addClass('active_size').siblings().removeClass('active_size');
      var osize = $(this).attr('data-size'); // var otxt2 = _this.measVal.text();

      _this.measVal2.text(osize);
    }); // 数量的递增功能

    this.addBtn.on('click', function () {
      var num = _this.oInput.val();

      num++;

      _this.oInput.val(num);
    }); // 数量的递减功能

    this.jjBtn.on('click', function () {
      var num2 = _this.oInput.val();

      num2--;

      _this.oInput.val(num2);

      if (num2 <= 0) {
        _this.oInput.val('1');
      }
    }); //鼠标滑过小图改变大图的src

    this.smallShow.on('mouseover', function () {
      var index = $(this).attr('data-id');

      for (key in _this.obj) {
        if (key == $(this).attr('data-id')) {
          // _this.showImg.attr('src' , _this.obj[key]) ;
          _this.changeSrc(index);
        }
      }
    }); //点击加入购物车弹出一个新的供用户选择操作的对话框

    this.addCar.on('click', function () {
      console.log(11);

      _this.fixe.css('display', 'block'); //遮罩的显示


      _this.zhezhao.css('display', 'block');
    }); //关闭按钮

    this.hidBox1.on('click', function () {
      _this.fixe.css('display', 'none');

      _this.zhezhao.css('display', 'none');
    }); //继续购物按钮单击之后

    this.hidBox2.on('click', function () {
      _this.fixe.css('display', 'none');

      _this.zhezhao.css('display', 'none');
    });
  }
};
new Article();