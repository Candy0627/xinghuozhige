import $ from 'jquery';
import fullpage from 'fullpage.js';
import '../../js/index/pc.js';
import '../../js/index/mobile.js';
import '../../css/index/fullpage.css';
import '../../css/index/normalize.css';
import '../../css/index/main.css';
import '../../css/index/pc.css';
import '../../css/index/world.css';
import '../../css/index/mobile.css';
import '../../css/index/animate.css';
import '../../images/video.mp4'


var promise = document.querySelector('video').play();

if (promise !== undefined) {
    promise.then(_ => {
        // Autoplay started!
    }).catch(error => {
        // Autoplay was prevented.
        // Show a "Play" button so that user can start playback.
    });
}

$(function () {
    // 数字变化
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

    var fullPageInstance = new fullpage('#fullpage', {
        navigation: 'true',
        navigationPosition: 'right',
        anchors: ['首頁', '預約', '種火', '世界', '資料', 'footer'],
        menu: '#myMenu',
        verticalCentered: 'true',
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        afterRender: function () {
            // 页面结构渲染完毕后触发的函数
            $('#video').get(0).play();
            magic_number(203728, $('#number'));
        },
        afterLoad: function (anchorLink, index) {
            // 到达某一个页面触发的回调函数
            console.log('当前在', anchorLink.anchor, index.index);
            var a = anchorLink.anchor;
            var i = index.index;
            if (i == 1) {
                $('.two').find('p').delay(500).animate({
                    left: '0'
                }, 1500, 'easeOutExpo')
            }
        },
        onLeave: function (index, nextIndex, direction) {
            // 离开某一个页面触发的回调函数
            console.log('当前离开', index.index, nextIndex.index, direction);
            var i = index.index;
            var nextI = nextIndex.index;
            if (i == 1) {

            }
            if (nextI == 2) {

            }
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
        // $(this).children('.txt').css('display', 'block').removeClass('animated lightSpeedOut').addClass('animated lightSpeedIn');

    }, function () {
        // $(this).children('.txt').css('display', 'block').removeClass('animated lightSpeedIn').addClass('animated lightSpeedOut');
    })

    // 资料屏
    $('.five .last_con ul li a').hover(function () {
        // $(this).hide().siblings('img').show();
        $(this).parent().siblings().children('a').addClass('on');
    }, function () {
        $(this).parent().siblings().children('a').removeClass('on');
    })



    // setTimeout(function(){
    //     $('#fullpage .two .two_num_bg i').addClass('on');
    // },1000)


})