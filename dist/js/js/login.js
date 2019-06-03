"use strict";

//功能：注册页面的用户注册信息检测与数据库的存储
function Login() {
  this.userName = $('.uName');
  this.userPwd1 = $('.uPwd1');
  this.userPwd2 = $('.uPwd2');
  this.yanZhen = $('.ma1');
  this.yanZhenMa = $('.ma2');
  this.oBtn = $('.putBtn');
  this.oSpan1 = $('.hidTxt1');
  this.oSpan2 = $('.hidTxt2');
  this.oSpan3 = $('.hidTxt3');
  this.oSpan4 = $('.hidTxt4');
  this.code = '';
  this.randomCount = 4;
  this.init(); // this.yanZhenMa.val();
}

Login.prototype = {
  init: function init() {
    this.randomNUm();
    this.eventBind();
  },
  getData: function getData() {
    axios({
      method: 'get',
      url: 'http://localhost/myStation/camel/src/php/login.php',
      data: {
        username: this.userName.val(),
        userpwd: this.userPwd1.val()
      }
    }).then(function (data) {
      if (data.state == '1') {
        alert(data.info);
        location.href = 'http://localhost/myStation/camel/src/html/register.html';
      } else {
        alert(data.info);
      }
    })["catch"](function (info) {
      console.log(info);
    });
  },
  //验证码的随机
  randomNUm: function randomNUm() {
    this.code = '';
    var arr = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');

    for (var i = 0; i < this.randomCount; i++) {
      console.log(arr.length);
      var index = Math.floor(Math.random() * arr.length);
      this.code += arr[index];
    }

    this.yanZhenMa.val(this.code); // window.onload = function(){
    // this.randomNUm();
    // }
  },
  //给注册时写的信息写规则
  writeReg: function writeReg() {
    var reg1 = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/; //邮箱地址的规则

    var reg2 = /^[a-zA-Z\d]\w{5,17}$/; //密码的规则

    var a = reg1.test(this.userName.val());
    var b = reg2.test(this.userPwd1.val()); //验证码的随机

    if (!a) {
      this.oSpan1.text('请输入合法的邮箱地址');
    } else {
      this.oSpan1.text(' ');

      if (!b) {
        this.oSpan2.text('密码为6-18位，可以使数字、字母、下划线');
      } else {
        this.oSpan2.text(' ');
      }
    }

    if (this.userPwd1.val() != this.userPwd2.val()) {
      this.oSpan3.text('输入的密码不一致，请重新输入');
    } else {
      this.oSpan3.text(' ');

      if (this.userPwd1.val() == "") {
        this.oSpan3.text('密码不能为空');
      }
    }

    if (this.yanZhen.val() != this.yanZhenMa.val()) {
      this.oSpan4.text('验证码错误，请重新输入');

      if (this.yanZhen.val() == "") {
        this.oSpan4.text('验证码不能为空');
      }
    } else {
      this.oSpan4.text(' ');
    }

    if (a && b && this.yanZhen.val() == this.yanZhenMa.val()) {
      console.log('good');
      this.getData();
    } else {
      console.log('错误');
    }
  },
  eventBind: function eventBind() {
    var _this = this;

    this.oBtn.on('click', function () {
      _this.writeReg();
    });
    this.yanZhenMa.on('click', function () {
      _this.yanZhenMa.val(" ");

      _this.randomNUm();
    });
  }
};
new Login();