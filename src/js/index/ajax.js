/**
 * 第二屏预约奖励模块
 * 数字变化特效
 * 预约数字ajax
 * 预约进程变化
 */

function magic_number(value, num) {
    num.animate({
        count: value
    }, {
        duration: 6000, //持续时间
        step: function () {
            num.text(Math.round(this.count));
        }
    })
}
$.get("https://admin.gamemorefun.net/welcome/get_appointment_number", function (res) {
    var res = JSON.parse(res);
    if (res && res.data) {
        var n = res.data;
        $('#number').text(n);
        // magic_number(number, $('#number'));
        appointProcess(n);
    }
})

function appointProcess(n) {
    // console.log('dsfhj', n);
    if (n > 0 && n < 50000) {
        $('.two ul li:nth-child(1) .two_pic_img img:nth-of-type(1)').show().siblings('img').hide();
        $('.two ul li:nth-child(2) .two_pic_img img:nth-of-type(1)').show().siblings('img').hide();
        $('.two ul li:nth-child(3) .two_pic_img img:nth-of-type(1)').show().siblings('img').hide();
        $('.two ul li:nth-child(4) .two_pic_img img:nth-of-type(1)').show().siblings('img').hide();
        $('.two ul li:nth-child(1) .two_title em').removeClass('on');
        $('.two ul li:nth-child(2) .two_title em').removeClass('on');
        $('.two ul li:nth-child(3) .two_title em').removeClass('on');
        $('.two ul li:nth-child(4) .two_title em').removeClass('on');

        $('.two ul li:nth-child(1) .two_pic_img .corner').show();
        $('.two ul li:nth-child(2) .two_pic_img .corner').show();
        $('.two ul li:nth-child(3) .two_pic_img .corner').show();
        $('.two ul li:nth-child(4) .two_pic_img .corner').show();

        $('#process_ul').css({
            'background': 'url(../../images/x0.png) no-repeat',
            'background-size': '100% 100%'
        });
    } else if (n >= 50000 && n < 100000) {
        $('.two ul li:nth-child(1) .two_pic_img img:nth-of-type(1)').hide().siblings('img').show();
        $('.two ul li:nth-child(2) .two_pic_img img:nth-of-type(1)').show().siblings('img').hide();
        $('.two ul li:nth-child(3) .two_pic_img img:nth-of-type(1)').show().siblings('img').hide();
        $('.two ul li:nth-child(4) .two_pic_img img:nth-of-type(1)').show().siblings('img').hide();
        $('.two ul li:nth-child(1) .two_title em').addClass('on');
        $('.two ul li:nth-child(2) .two_title em').removeClass('on');
        $('.two ul li:nth-child(3) .two_title em').removeClass('on');
        $('.two ul li:nth-child(4) .two_title em').removeClass('on');

        $('.two ul li:nth-child(1) .two_pic_img .corner').hide();
        $('.two ul li:nth-child(2) .two_pic_img .corner').show();
        $('.two ul li:nth-child(3) .two_pic_img .corner').show();
        $('.two ul li:nth-child(4) .two_pic_img .corner').show();


        $('#process_ul').css({
            'background': 'url(../../images/x1.png) no-repeat',
            'background-size': '100% 100%'
        });
    } else if (n >= 100000 && n < 150000) {
        $('.two ul li:nth-child(1) .two_pic_img img:nth-of-type(1)').hide().siblings('img').show();
        $('.two ul li:nth-child(2) .two_pic_img img:nth-of-type(1)').hide().siblings('img').show();
        $('.two ul li:nth-child(3) .two_pic_img img:nth-of-type(1)').show().siblings('img').hide();
        $('.two ul li:nth-child(4) .two_pic_img img:nth-of-type(1)').show().siblings('img').hide();
        $('.two ul li:nth-child(1) .two_title em').addClass('on');
        $('.two ul li:nth-child(2) .two_title em').addClass('on');
        $('.two ul li:nth-child(3) .two_title em').removeClass('on');
        $('.two ul li:nth-child(4) .two_title em').removeClass('on');


        $('.two ul li:nth-child(1) .two_pic_img .corner').hide();
        $('.two ul li:nth-child(2) .two_pic_img .corner').hide();
        $('.two ul li:nth-child(3) .two_pic_img .corner').show();
        $('.two ul li:nth-child(4) .two_pic_img .corner').show();


        $('#process_ul').css({
            'background': 'url(../../images/x2.png) no-repeat',
            'background-size': '100% 100%'
        });
    } else if (n >= 150000 && n < 200000) {
        $('.two ul li:nth-child(1) .two_pic_img img:nth-of-type(1)').hide().siblings('img').show();
        $('.two ul li:nth-child(2) .two_pic_img img:nth-of-type(1)').hide().siblings('img').show();
        $('.two ul li:nth-child(3) .two_pic_img img:nth-of-type(1)').hide().siblings('img').show();
        $('.two ul li:nth-child(4) .two_pic_img img:nth-of-type(1)').show().siblings('img').hide();
        $('.two ul li:nth-child(1) .two_title em').addClass('on');
        $('.two ul li:nth-child(2) .two_title em').addClass('on');
        $('.two ul li:nth-child(3) .two_title em').addClass('on');
        $('.two ul li:nth-child(4) .two_title em').removeClass('on');

        $('.two ul li:nth-child(1) .two_pic_img .corner').hide();
        $('.two ul li:nth-child(2) .two_pic_img .corner').hide();
        $('.two ul li:nth-child(3) .two_pic_img .corner').hide();
        $('.two ul li:nth-child(4) .two_pic_img .corner').show();


        $('#process_ul').css({
            'background': 'url(../../images/x3.png) no-repeat',
            'background-size': '100% 100%'
        });
    } else if (n >= 200000) {
        $('.two ul li:nth-child(1) .two_pic_img img:nth-of-type(1)').hide().siblings('img').show();
        $('.two ul li:nth-child(2) .two_pic_img img:nth-of-type(1)').hide().siblings('img').show();
        $('.two ul li:nth-child(3) .two_pic_img img:nth-of-type(1)').hide().siblings('img').show();
        $('.two ul li:nth-child(4) .two_pic_img img:nth-of-type(1)').hide().siblings('img').show();
        $('.two ul li:nth-child(1) .two_title em').addClass('on');
        $('.two ul li:nth-child(2) .two_title em').addClass('on');
        $('.two ul li:nth-child(3) .two_title em').addClass('on');
        $('.two ul li:nth-child(4) .two_title em').addClass('on');

        $('.two ul li:nth-child(1) .two_pic_img .corner').hide();
        $('.two ul li:nth-child(2) .two_pic_img .corner').hide();
        $('.two ul li:nth-child(3) .two_pic_img .corner').hide();
        $('.two ul li:nth-child(4) .two_pic_img .corner').hide();


        $('#process_ul').css({
            'background': 'url(../../images/x4.png) no-repeat',
            'background-size': '100% 100%'
        });
    }
}

/**
 * 第三屏预约逻辑模块
 * ajax调取数据
 * 手机号验证格式
 */
(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
window.fbAsyncInit = function () {
    FB.init({
        appId: '596196177797821',
        cookie: true, // 启用cookie
        xfbml: true, // 解析此页面上的社交插件
        version: 'v2.8' // 使用图形api 2.8版本
    });
};
/**
 * 第三屏预约逻辑
 * fb登录成功之后进行第二步的预约逻辑
 */
var l = document.getElementById('loginFb');
l.onclick = function () {
    FB.login(function (response) {
        if (response.status === 'connected') {
            FB.api('/me', function (response) {
                $('#loginFb').css('background','none');
                console.log(response, '登录成功: ' + response.name);
                l.innerText = '您好! ' + response.name;
                fblogin = 'true';
            });
            // 预约逻辑
        } else {
            console.log('請沒有登錄facebook !');
        }
    }, {
        scope: 'public_profile,email'
    })
}

var fblogin = 'false';
document.getElementById('submit').addEventListener('click', function () {
    if (fblogin == 'false') {
        console.log('fblogin的值',fblogin);
        layer.msg('请先进行facebook登录');
    } else {
        var platform = '1';
        var engSimpol = '';
        var area = document.getElementById('select').innerText;
        var str = document.getElementById('areaphone').innerText;
        var areaPhone = str.substr(1);
        var number = document.getElementById('phone').value;
        // console.log('number', typeof number);
        var allNumber = areaPhone + number;
        switch (area) {
            case '台灣':
                engSimpol = 'TW';
                break;
            case '香港':
                engSimpol = 'HK';
                break;
            case '澳門':
                engSimpol = 'MO';
                break;
            case '新加坡':
                engSimpol = 'SG';
                break;
            case '馬來西亞':
                engSimpol = 'MY';
                break;
        }

        if (area == "") {
            layer.msg('地區不能爲空！');
        }


        if (!validatePhone(allNumber, areaPhone, number)) {
            if (number == "") {
                layer.msg('電話號碼不能爲空！');
            } else {
                layer.msg('电话号码格式錯誤!');
            }
        } else {
            $.post('https://admin.gamemorefun.net/welcome/appointment', {
                phone: allNumber,
                country: engSimpol,
                platform: platform
            }, function (res) {

                var data = JSON.parse(res);
                // console.log(data.success);
                if (data.success == 'true') {
                    // layer.msg('预约成功！');
                    appointSuccessPop();
                } else {
                    layer.msg(data.msg);
                }
            })
        }
    }
    // layer.closeAll();
})

function validatePhone(phone, areaCode, number) {
    let map = {
        886: /^(886)?\d{9,10}$/,
        852: /^(852)?\d{8}$/,
        853: /^(853)?\d{8}$/,
        60: /^(60)?\d{9}$/,
        65: /^(65)?\d{8}$/
    };
    return map[areaCode].test(phone);
}