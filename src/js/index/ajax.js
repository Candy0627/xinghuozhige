import fullpage from 'fullpage.js'



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
            console.log('您沒有登錄facebook !');
        }
    }, {
        scope: 'public_profile,email'
    })
}

var fblogin = 'false';
document.getElementById('submit').addEventListener('click', function () {
    if (fblogin == 'false') {
        console.log('fblogin的值',fblogin);
        layer.msg('請先進行facebook登錄');
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