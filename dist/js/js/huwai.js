"use strict";

//户外商品板块数据的渲染
function ListMess() {
  this.init();
}

ListMess.prototype = {
  init: function init() {
    this.showMess();
  },
  //ajax请求数据
  showMess: function showMess() {
    axios({
      method: 'get',
      url: 'js/js/json/huwai.json',
      data: {}
    }).then(function (data) {
      var oBoxUl = document.querySelector('.BoxUl');
      var str = "";

      for (var i = 1; i < data.length; i++) {
        if (i % 4 == 0 && i != 0) {
          str += "\n                    <li style=\"margin-right:0;\">\n                        <a target=\"_blank\" href=\"http://localhost/myStation/camel/src/html/article.html\">\n                            <div class=\"list_img\">\n                                <img src=\"".concat(data[i].img, "\" alt=\"\" data-id=\"").concat(data[i].id, "\">\n                            </div>\n                            <div class=\"list_message\">\n                                <p class=\"title11\"><i>").concat(data[i].tit1, "</i></p>\n                                <p class=\"title22\">").concat(data[i].tit2, "</p>\n                                <p class=\"pice\"><i>").concat(data[i].price, "</i></p>\n                            </div>\n                        </a>\n                    </li>\n            \n                ");
        } else {
          str += "\n                    <li>\n                        <a target=\"_blank\" href=\"http://localhost/myStation/camel/src/html/article.html\">\n                            <div class=\"list_img\">\n                                <img src=\"".concat(data[i].img, "\" alt=\"\" data-id=\"").concat(data[i].id, "\" >\n                            </div>\n                            <div class=\"list_message\">\n                                <p class=\"title11\"><i>").concat(data[i].tit1, "</i></p>\n                                <p class=\"title22\">").concat(data[i].tit2, "</p>\n                                <p class=\"pice\"><i>").concat(data[i].price, "</i></p>\n                            </div>\n                        </a>\n                    </li>\n            \n            ");
        }
      }

      oBoxUl.innerHTML = str;
    })["catch"](function () {
      console.log(false);
    });
  }
};
new ListMess();