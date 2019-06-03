"use strict";

// contwent版块中选项卡版块、
function Contents() {
  this.oLi = [[{
    'id': '1',
    'absImg': 'images/xinpin.png',
    'img': 'images/new_1.jpg',
    'tit1': '2019新品',
    'tit2': '男士全棉短袖T恤',
    'price': '￥128'
  }, {
    'id': '2',
    'absImg': 'images/xinpin.png',
    'img': 'images/new_2.jpg',
    'tit1': '2019新品',
    'tit2': '简约舒适凉鞋',
    'price': '￥199'
  }, {
    'id': '3',
    'absImg': 'images/xinpin.png',
    'img': 'images/new_3.jpg',
    'tit1': '2019新品',
    'tit2': '男夏季透气老爹鞋',
    'price': '￥259'
  }, {
    'id': '4',
    'absImg': 'images/xinpin.png',
    'img': 'images/new_4.jpg',
    'tit1': '2019新品',
    'tit2': '情侣款决明子枕头',
    'price': '￥69'
  }], [{
    'id': '1',
    'absImg': 'images/特惠.png',
    'img': 'images/特惠_01.png',
    'tit1': '2019新品',
    'tit2': '纯棉翻领短袖T恤',
    'price': '￥49'
  }, {
    'id': '2',
    'absImg': 'images/特惠.png',
    'img': 'images/特惠_02.png',
    'tit1': '2019新品',
    'tit2': '徒步登山裤',
    'price': '￥69'
  }, {
    'id': '3',
    'absImg': 'images/特惠.png',
    'img': 'images/特惠_03.png',
    'tit1': '2019新品',
    'tit2': '情侣款透气耐磨沙滩鞋',
    'price': '￥139'
  }, {
    'id': '4',
    'absImg': 'images/特惠.png',
    'img': 'images/特惠_04.png',
    'tit1': '2019新品',
    'tit2': '套脚透气椰子鞋',
    'price': '￥199'
  }], [{
    'id': '1',
    'absImg': 'images/爆品.png',
    'img': 'images/爆款_1.png',
    'tit1': '2019新品',
    'tit2': '宽松舒适Polo衫',
    'price': '￥169'
  }, {
    'id': '2',
    'absImg': 'images/爆品.png',
    'img': 'images/爆款_2.png',
    'tit1': '2019新品',
    'tit2': '男士休闲短裤',
    'price': '￥139'
  }, {
    'id': '3',
    'absImg': 'images/爆品.png',
    'img': 'images/爆款_3.png',
    'tit1': '2019新品',
    'tit2': '休闲低帮徒步鞋',
    'price': '￥259'
  }, {
    'id': '4',
    'absImg': 'images/爆品.png',
    'img': 'images/爆款_4.png',
    'tit1': '2019新品',
    'tit2': '百搭ins潮鞋休闲鞋',
    'price': '￥259'
  }], [{
    'id': '1',
    'absImg': 'images/尊贵系列.png',
    'img': 'images/尊贵_01.png',
    'tit1': '2019新品',
    'tit2': '骆驼珠峰级户外冲锋衣',
    'price': '￥539'
  }, {
    'id': '2',
    'absImg': 'images/尊贵系列.png',
    'img': 'images/尊贵_02.png',
    'tit1': '2019新品',
    'tit2': '男女三合一两件套',
    'price': '￥499'
  }, {
    'id': '3',
    'absImg': 'images/尊贵系列.png',
    'img': 'images/尊贵_03.png',
    'tit1': '2019新品',
    'tit2': '男士商务正装鞋',
    'price': '￥439'
  }, {
    'id': '4',
    'absImg': 'images/尊贵系列.png',
    'img': 'images/尊贵_04.png',
    'tit1': '2019新品',
    'tit2': '男士商务手提包',
    'price': '￥469'
  }]];
  this.oA = document.querySelectorAll('.new_title .ul a');
  this.oUL = document.querySelectorAll('.content_inner_2 .new_wupin ul');
  this.init(); // console.log(this.oLi.length);
  // console.log(this.oLi[1][1]);
}

Contents.prototype = {
  init: function init() {
    this.addLi();
    this.eventBind();
  },
  //遍历上面对应版块数组的长度，动态添加元素给this.oLi
  addLi: function addLi() {
    for (var i = 0, k = this.oLi.length; i < k; i++) {
      var str = '';

      for (var j = 0; j < this.oLi[i].length; j++) {
        str += "           \n                <li class=\"boxLi ul\">\n                        <img src=\"".concat(this.oLi[i][j].absImg, "\" alt=\"\" class=\"newsLogo\">\n                        <div class=\"clones\">\n                            <a target=\"_blank\" href=\"http://localhost/myStation/camel/src/html/article.html\">\n                                <img src=\"").concat(this.oLi[i][j].img, "\" alt=\"").concat(i, "\" class=\"clon\" data-id=\"").concat(this.oLi[i][j].id, "\">\n                            </a>\n                        </div>\n                        <div class=\"clonesTitle\">\n                            <p class=\"title1\"><j class=\"iL1\">").concat(this.oLi[i][j].tit1, "</j></p>\n                            <p class=\"title2\">").concat(this.oLi[i][j].tit2, "</p>\n                            <p class=\"price\"><j class=\"iL2\">").concat(this.oLi[i][j].price, "</j></p>\n                        </div>\n                </li>         \n                ");
      }

      this.oUL[i].innerHTML = str;
    }
  },
  //添加 ul_active
  eventBind: function eventBind() {
    var _this2 = this;

    var _this = this;

    var _loop = function _loop(i, k) {
      _this2.oA[i].index = i;

      _this2.oA[i].onmouseover = function () {
        for (var j = 0, q = k; j < q; j++) {
          _this.oA[j].className = "";
          _this.oUL[j].className = "";
        }

        this.className = "ul_active";
        this.setAttribute('data-num', i);
        _this.oUL[this.index].className = "showUl";
      };
    };

    for (var i = 0, k = this.oA.length; i < k; i++) {
      _loop(i, k);
    }
  }
};
new Contents();