import $ from 'jquery';
import fullpage from 'fullpage.js';
import '../../js/index/layer/layer.js'
import '../../js/index/pc.js';
import '../../js/index/mobile.js';
import Swiper from 'swiper';

import '../../js/index/layer/theme/default/layer.css'
import '../../css/index/fullpage.css';
import '../../css/index/swiper.css';
import '../../css/index/swiper3d.css';
import '../../css/index/normalize.css';
import '../../css/index/main.css';
import '../../css/index/pc.css';
import '../../css/index/world.css';
import '../../css/index/mobile.css';
import '../../css/index/animate.css';
import '../../images/video.mp4'

import '../../images/w-yueyuanshi.png'
import '../../images/w-zhonghuojihua.png'
import '../../images/w-shenqigongsi.png'
import '../../images/w-sangshi.png'
import '../../images/w-anquanqu.png'
import '../../images/b0.jpg'
import '../../images/b1.jpg'
import '../../images/b2.jpg'
import '../../images/b3.jpg'
import '../../images/b4.jpg'
import '../../images/b5.jpg'
import '../../images/b6.jpg'
import '../../images/b7.jpg'
import '../../images/b8.jpg'

/**
 * 预约模块
 * 数字变化特效
 */
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


/**
 * 预约模块
 * 点击出现预约弹出框 以及 出现下拉框地区选择
 */
document.getElementById('appoint').addEventListener('click', function () {
    appointInfoPop();
})
var s = document.getElementById('select');
var d = document.getElementById('backgroundImg');
s.onclick = function () {
    // d.style.display = 'block';
    $('#backgroundImg').slideToggle();
}


// var ul = document.getElementById('backgroundImg');
// var li = ul.getElementsByTagName('li');
// var li = ul.querySelectorAll('li');
// for (var i = 0; i < li.length; i++) {
//     li[i].onclick = function () {
//         for (var i = 0; i < li.length; i++) {
//             li[i].style.color = '#767676';
//             li[i].style.backgroundColor = '#c8c8c8';
//             li[0].classList.add('leftBorder');
//             li[2].classList.add('rightBorder');
//             this.style.color = '#fff';
//             this.style.backgroundColor = '#a6a6a6';
//         }
//     }
// }

/**
 * 预约模块
 * ajax
 */
document.getElementById('submit').addEventListener('click', function () {
    layer.closeAll();
    appointSuccessPop();
})
/**
 * 预约模块
 * 弹框关闭按钮
 */
var arrc = document.getElementsByName('close');
for (var i = 0; i < arrc.length; i++) {
    arrc[i].index = i;
    arrc[i].addEventListener('click', function () {
        console.log(this.index);
        layer.closeAll();
        var i = document.getElementById('w_img');
        var h = document.getElementById('w_h2');
        var t = document.getElementById('w_txt');
        i.classList.remove('active');
        h.classList.remove('active');
        t.classList.remove('active');

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

/**
 * 种火模块
 * 种火-swiper轮播
 */
function swiper1() {
    var thumbsSwiper = new Swiper('#thumbs', {
        spaceBetween: 10,
        slidesPerView: 5,
        watchSlidesVisibility: true, //防止不可点击
        observer: true,
        observeParents: true,
        onInit: function (swiper) {
            swiper.slides[5].className = "swiper-slide swiper-slide-active"; //当前选中 状态
        }
    })
    var gallerySwiper = new Swiper('#gallery', {
        effect: 'coverflow',
        spaceBetween: 10, //缩略图间距
        slidesPerView: 3,
        centeredSlides: true,
        initialSlide: 2,
        observer: true,
        observeParents: true,
        thumbs: {
            swiper: thumbsSwiper,
        },
        onInit: function (swiper) {
            swiper.slides[5].className = "swiper-slide swiper-slide-active"; //当前选中 状态
        },
        on: {
            click: function () {
                var i = this.clickedIndex;
                var l = document.getElementsByName('name_l');
                var r = document.getElementsByName('name_r');
                console.log(i);
            }
        }
    })
}

function swiper2() {
    var thumbsSwiper1 = new Swiper('#thumbs1', {
        spaceBetween: 10,
        slidesPerView: 5,
        watchSlidesVisibility: true, //防止不可点击
        observer: true,
        observeParents: true
    })
    var gallerySwiper1 = new Swiper('#gallery1', {
        effect: 'coverflow',
        spaceBetween: 10, //缩略图间距
        slidesPerView: 3,
        centeredSlides: true,
        initialSlide: 2,
        observer: true,
        observeParents: true,
        thumbs: {
            swiper: thumbsSwiper1,
        }
    })
}

function swiper3() {
    var thumbsSwiper2 = new Swiper('#thumbs2', {
        spaceBetween: 10,
        slidesPerView: 5,
        observer: true,
        observeParents: true,
        watchSlidesVisibility: true, //防止不可点击
    })
    var gallerySwiper2 = new Swiper('#gallery2', {
        effect: 'coverflow',
        spaceBetween: 10, //缩略图间距
        slidesPerView: 3,
        centeredSlides: true,
        initialSlide: 2,
        observer: true,
        observeParents: true,
        thumbs: {
            swiper: thumbsSwiper2,
        }
    })
}
swiper1();

// gallerySwiper.on('slideChangeTransitionEnd', function (e) {
//     console.log("===索引值：" + gallerySwiper.activeIndex);
//     var i = gallerySwiper.activeIndex;
//     var a = document.getElementsByName('audio');
//     console.log('当前的this', $(e), $(this))
//     a[i].style.display = 'block';
// });

$('.three .three_con .characters_detail .left li').each(function (index) {
    $(this).on('click', function () {
        console.log('index是', index);
        if (index == 0) {
            $(this).addClass('active0').siblings().removeClass('active1 active2');
        }
        if (index == 1) {
            $(this).addClass('active1').siblings().removeClass('active0 active2');
        }
        if (index == 2) {
            $(this).addClass('active2').siblings().removeClass('active0 active1');
        }
        $('.characters_detail .con>div').eq(index).show().siblings().hide();
        swiper1();
        swiper2();
        swiper3();

    })
})

/**
 * 世界模块
 * 内部内容弹框
 */
var ul_f = document.getElementById('four_ul');
var arrw = ul_f.querySelectorAll('li');
var w_pop = document.getElementById('world_pop');

for (var i = 0; i < arrw.length; i++) {
    arrw[i].index = i;
    arrw[i].onclick = function () {
        // console.log("下标索引值为：" + this.index);
        worldPop();
        // w_pop.style.display = 'block';
        var i = document.getElementById('w_img');
        var h = document.getElementById('w_h2');
        var t = document.getElementById('w_txt');
        switch (this.index) {
            case 0:
                i.setAttribute('src', '../../images/w-yueyuanshi.png');
                h.innerText = '月源石';
                t.innerText = 'A.D.2080年人類在月球上發現了月源石。月源石具有放射性元素，在喪屍危機前被密碼投放到世界各地，是引起喪屍危機的根源。';
                break;
            case 1:
                i.setAttribute('src', '../../images/w-zhonghuojihua.png');
                h.innerText = '種火計劃';
                t.innerText = '為了對抗喪屍行基因改造而獲得超能力的被改造者，各自擁有不同的超能力，根據其能力的特點獲得了專屬的“代號”，她們擁有超常的戰鬥力和對喪屍感染的免疫力，而這些被改造者便被稱為 ——【種火】';
                break;
            case 2:
                i.setAttribute('src', '../../images/w-shenqigongsi.png');
                h.innerText = '神啟公司';
                t.innerText = '2神啟財團是由維羅妮卡生物研究議會與福音基金會所融合而成的生物科技集團，其財團主在世界政府混沌的時間段中秉持著‘拯救世界’的理念而協助著世界政府與維羅妮卡研究議會的激進研究。';
                break;
            case 3:
                i.setAttribute('src', '../../images/w-sangshi.png');
                h.innerText = '喪尸';
                t.innerText = '人類世界中突然爆發了恐怖的喪屍病毒，受到感染的人類都變成了殘暴異常的喪屍四處殺人。喪屍們的出現讓人類猝不及防，凡是受到喪屍攻擊的人絕大多數都會因為感染而變成新的喪屍。';
                break;
            case 4:
                i.setAttribute('src', '../../images/w-anquanqu.png');
                h.innerText = '安全區';
                t.innerText = '喪屍危機爆發後，人類在各地建立的家園，危機擴散後，除了有種火戰士幫助守衛的地方，大部分全區都沒能倖存。';
        };
        i.classList.add('active');
        h.classList.add('active');
        t.classList.add('active');
    }
}

function worldPop() {
    layer.open({
        type: 1,
        shade: true,
        shadeClose: true,
        title: false,
        closeBtn: 0,
        skin: 'myskin',
        anim: -1,
        area: ['8.65rem', '4.49rem'],
        content: $('#world_pop')
    })
}

/**
 * 资料模块
 * 大图弹框
 */
function dataPop() {
    layer.open({
        type: 1,
        shade: true,
        shadeClose: true,
        title: false,
        closeBtn: 0,
        skin: 'myskin',
        anim: 3,
        area: ['16.25rem', '7.39rem'],
        content: $('#data_pop')
    })
}

var ul_d = document.getElementById('data_ul');
var arr_d = ul_d.querySelectorAll('li');
for (var i = 0; i < arr_d.length; i++) {
    arr_d[i].index = i;
    arr_d[i].onclick = function () {
        dataPop();
        var d = document.getElementById('data_img');
        switch (this.index) {
            case 0:
                d.setAttribute('src', 'images/b0.jpg');
                break;
            case 1:
                d.setAttribute('src', 'images/b1.jpg');
                break;
            case 2:
                d.setAttribute('src', 'images/b2.jpg');
                break;
            case 3:
                d.setAttribute('src', 'images/b3.jpg');
                break;
            case 4:
                d.setAttribute('src', 'images/b4.jpg');
                break;
            case 5:
                d.setAttribute('src', 'images/b5.jpg');
                break;
            case 6:
                d.setAttribute('src', 'images/b6.jpg');
                break;
            case 7:
                d.setAttribute('src', 'images/b7.jpg');
                break;
            case 8:
                d.setAttribute('src', 'images/b8.jpg');

        }
        // switch (this.index) {
        //     case 0: 
        //         d.setAttribute('src','../../images/b0.jpg');
        //         break;
        //     case 1: 
        //         d.setAttribute('src','../../images/b1.jpg');
        //         break;
        //     case 2: 
        //         d.setAttribute('src','../../images/b2.jpg');
        //         break;
        //     case 3: 
        //         d.setAttribute('src','../../images/b3.jpg');
        //         break;
        //     case 4: 
        //         d.setAttribute('src','../../images/b4.jpg');
        //         break;
        //     case 5: 
        //         d.setAttribute('src','../../images/b5.jpg');
        //         break;
        //     case 6: 
        //         d.setAttribute('src','../../images/b6.jpg');
        //         break;
        //     case 7: 
        //         d.setAttribute('src','../../images/b7.jpg');
        //         break;
        //     case 8: 
        //         d.setAttribute('src','../../images/b8.jpg');

        // }
    }
}

/**
 * 
 */
$(function () {
    $('#backgroundImg li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        $('#select').text($(this).text());
        $('#backgroundImg').hide();
    });

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
    $(document).mousemove(function (e) {
        var x = e.originalEvent.x || e.originalEvent.layerX || 0;
        var y = e.originalEvent.y || e.originalEvent.layerY || 0;
        var $imgDeco = $('.page-role');
        $imgDeco.css({
            webkitTransform: 'translate3d(' + (x * 0.04) + 'px, ' + (y * 0.04) + 'px, 0px)',
            transform: 'translate3d(' + (x * 0.04) + 'px, ' + (y * 0.04) + 'px, 0px)',
        })
    })

    // $(document).mousemove(function (e) {
    //     var x = e.originalEvent.x || e.originalEvent.layerX || 0;
    //     var y = e.originalEvent.y || e.originalEvent.layerY || 0;
    //     var $page = $('.pageone');
    //     var $role = $page.find('.page-role');
    //     $role.css({
    //         webkitTransform: 'translate3d(' + (x * 0.01) + 'px, ' + (y * 0.01) + 'px, 0px)',
    //         transform: 'translate3d(' + (x * 0.01) + 'px, ' + (y * 0.01) + 'px, 0px)'
    //     });
    // });

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
    // $('#fullpage .four ul li').hover(function () {
    //     $(this).removeClass('on').siblings().addClass('on');
    // }, function () {
    //     $(this).siblings().removeClass('on');
    // })

    // 资料屏
    $('.five .last_con ul li a').hover(function () {
        // $(this).hide().siblings('img').show();
        $(this).parent().siblings().children('a').addClass('on');
    }, function () {
        $(this).parent().siblings().children('a').removeClass('on');
    })

})