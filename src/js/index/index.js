import $ from 'jquery';
import fullpage from 'fullpage.js';
import '../../js/index/layer/layer.js'
import '../../js/index/pc.js';
import '../../js/index/mobile.js';

import '../../js/index/layer/theme/default/layer.css'
import '../../css/index/fullpage.css';
import '../../css/index/normalize.css';
import '../../css/index/main.css';
import '../../css/index/pc.css';
import '../../css/index/world.css';
import '../../css/index/mobile.css';
import '../../css/index/animate.css';
import '../../images/video.mp4'


//数字变化特效
function magic_number(value, num) {
    num.animate({
        count: value
    }, {
        duration: 2000, //持续时间
        step: function () {
            num.text(Math.round(this.count));
        }
    })
}
magic_number(203728, $('#number'));


// 点击出现预约弹出框
document.getElementById('appoint').addEventListener('click', function () {
    appointInfoPop();
})

var ul = document.getElementById('backgroundImg');
// var li = ul.getElementsByTagName('li');
var li = ul.querySelectorAll('li');
for (var i = 0; i < li.length; i++) {
    li[i].onclick = function () {
        for (var i = 0; i < li.length; i++) {
            li[i].style.color = '#767676';
            li[i].style.backgroundColor = '#c8c8c8';
            this.style.color = '#fff';
            this.style.backgroundColor = '#a6a6a6';
        }
    }
}

// 预约ajax
document.getElementById('submit').addEventListener('click', function () {
    layer.closeAll();
    appointSuccessPop();
})

// 弹框关闭按钮
var arrc = document.getElementsByName('close');
for (var i = 0; i < arrc.length; i++) {
    arrc[i].addEventListener('click', function () {
        layer.closeAll();
    })
}

function appointInfoPop() {
    layer.open({
        type: 1,
        shade: true,
        shadeClose: true,
        title: false,
        closeBtn: 0,
        skin: 'myskin',
        area: ['8.65rem', '4.49rem'],
        content: $('#appoint_pop')
    })
}

function appointSuccessPop() {
    layer.open({
        type: 1,
        shade: true,
        shadeClose: true,
        title: false,
        closeBtn: 0,
        skin: 'myskin',
        area: ['8.65rem', '4.49rem'],
        content: $('#appoint_success_pop')
    })
}

$(function () {
    var fullPageInstance = new fullpage('#fullpage', {
        navigation: 'true',
        navigationPosition: 'right',
        anchors: ['首頁', '預約', '種火', '世界', '資料', 'footer'],
        menu: '#myMenu',
        verticalCentered: 'true',
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        onLeave: function (index, nextIndex, direction) {
            console.log('当前离开', index.index, nextIndex.index, direction);
            var i = index.index;
            var nextI = nextIndex.index;
            if (nextI !== 1) {
                $('#number').text('');
            } else {
                magic_number(203728, $('#number'));
            }
            if (nextI == 1 && direction == 'down') {}
            if (nextI == 1 && direction == 'up') {}
        },
        afterLoad: function (anchorLink, index) {
            console.log('当前在', anchorLink.anchor, index.index);
            var a = anchorLink.anchor;
            var i = index.index;

            if (i == 1) {
                console.log('我要执行预约数字动画', $('#number'));
                setTimeout(function () {
                    magic_number(203728, $('#number'));
                }, 20000000000)

            }
        },
        // 这个回调是在页面结构生成之后触发，这是要用来初始化其他插件
        afterRender: function () {
            $('#video').get(0).play();
        }
    });

    $('.five').fadeIn();

    $('.one_con a.btn').hover(function () {
        $(this).children().css('top', '0px');
    }, function () {
        $(this).children().css('top', '6px');
    })

    $('#fullpage .two ul li .corner i').addClass('animated infinite tada');


    // 世界-浮层
    //     $(document).mousemove(function(e) {
    // 	var x = e.originalEvent.x || e.originalEvent.layerX || 0;
    // 	var y = e.originalEvent.y || e.originalEvent.layerY || 0;
    // 	var $imgPeople = $('.nav_img2');
    // 	var $imgDeco = $('.nav_img3');
    // 	$imgPeople.css({
    // 		webkitTransform: 'translate3d('+(x*0.05)+'px, '+(y*0.05)+'px, 0px)',
    // 		transform: 'translate3d('+(x*0.05)+'px, '+(y*0.05)+'px, 0px)',
    // 	});
    // 	$imgDeco.css({
    // 		webkitTransform: 'translate3d('+(x*0.04)+'px, '+(y*0.04)+'px, 0px)',
    // 		transform: 'translate3d('+(x*0.04)+'px, '+(y*0.04)+'px, 0px)',
    // 	})
    // })

    $(document).mousemove(function (e) {
        var x = e.originalEvent.x || e.originalEvent.layerX || 0;
        var y = e.originalEvent.y || e.originalEvent.layerY || 0;
        var $page = $('.pageone');
        var $role = $page.find('.page-role');
        $role.css({
            webkitTransform: 'translate3d(' + (x * 0.01) + 'px, ' + (y * 0.01) + 'px, 0px)',
            transform: 'translate3d(' + (x * 0.01) + 'px, ' + (y * 0.01) + 'px, 0px)'
        });
    });

    // 种火屏
    $('#fullpage .three ul li a span').hover(function () {
        $(this).siblings('img.a1').addClass('off');
        $(this).siblings('img.u1').addClass('on');
        $(this).siblings('p').addClass('animated flipInY');
        $(this).siblings('p').children('i').addClass('active');
    }, function () {
        $(this).siblings('img.a1').removeClass('off');
        $(this).siblings('img.u1').removeClass('on');
        $(this).siblings('p').removeClass('animated flipInY');
        $(this).siblings('p').children('i').removeClass('active');
    })

    // 世界屏
    $('#fullpage .four ul li').hover(function () {

    }, function () {})

    // 资料屏
    $('.five .last_con ul li a').hover(function () {
        // $(this).hide().siblings('img').show();
        $(this).parent().siblings().children('a').addClass('on');
    }, function () {
        $(this).parent().siblings().children('a').removeClass('on');
    })

})