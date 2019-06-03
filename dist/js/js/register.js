"use strict";

//功能：骆驼官方网站会员账号登录时用户信息的验证
function Register() {
  this.userName = $('.uName');
  this.userPwd = $('.uPwd');
  this.oBtn = $('.putBtn');
  this.oSpan1 = $('.hidTxt1');
  this.oSpan2 = $('.hidTxt2'); // this.setCo = document.querySelector(".git_check");

  this.setCo = $(".git_check");
  this.init();
}

Register.prototype = {
  init: function init() {
    this.pushVal();
    this.eventBind();
  },
  //如果用户勾选了保存登录按钮的话，那么我们就将数据用cookie储存起来
  addsCookie: function addsCookie() {
    if (this.setCo.is(":checked")) {
      setCookie('账号:', this.userName.val(), 1);
      setCookie('密码:', this.userPwd.val(), 1);
    }
  },
  pushVal: function pushVal() {
    if (getCookie('账号:') != "" && getCookie('密码:') != "") {
      if (document.cookie) {
        this.userName.val(getCookie('账号:'));
        this.userPwd.val(getCookie('密码:'));
      }
    }
  },
  //获取input里面的value值，并且传到后台
  getData: function getData() {
    var _this = this;

    axios({
      method: 'get',
      url: 'http://localhost/myStation/camel/src/php/register.php',
      data: {
        username: this.userName.val(),
        userpwd: this.userPwd.val()
      }
    }).then(function (data) {
      if (data.state == '1') {
        alert('尊敬的会员，欢迎回来');
        location.href = 'http://localhost/myStation/camel/src/index.html';
      } else {
        alert(data.info);
      }
    })["catch"](function (info) {
      console.log(info);
    });
  },
  eventBind: function eventBind() {
    var _this = this;

    this.oBtn.on('click', function () {
      if (_this.userName.val() != '' && _this.userPwd.val() != '') {
        _this.getData();

        _this.addsCookie();

        console.log(_this.setCo.is(":checked"));
      } else {
        _this.oSpan1.text('账号不能为空！');

        _this.oSpan2.text('密码不能为空！');
      }
    });
  }
};
new Register();