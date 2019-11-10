import $ from 'jquery'
import fullpage from 'fullpage.js'
import '../../js/index/layer/layer.js'
import '../../js/index/pc.js'
import '../../js/index/ajax.js'
import '../../js/index/mobile.js'

import Swiper from 'swiper'
import '../../js/index/lem_counter.js'
import '../../js/index/TweenLite.min.js'

import '../../js/index/layer/theme/default/layer.css'
import '../../css/index/fullpage.css'
import '../../css/index/swiper.css'
import '../../css/index/swiper3d.css'
import '../../css/index/normalize.css'
import '../../css/index/main.css'
import '../../css/index/pc.css'
import '../../css/index/world.css'
import '../../css/index/mobile.css'
import '../../css/index/animate.css'
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

import '../../images/x1.png'
import '../../images/x2.png'
import '../../images/x3.png'
import '../../images/x4.png'

/**
 * 第二屏预约奖励模块
 * 数字变化特效
 * 预约数字ajax
 * 预约进程变化
 */
var number;
$.get("https://admin.gamemorefun.net/welcome/get_appointment_number", function (res) {
    var res = JSON.parse(res);
    if (res && res.data) {
        number = res.data;
        $('#number').lemCounter({
            value_to: number
        });
        appointProcess(number);
    }
})
console.log('NUMBER大师傅的说法',number);
var fullPageInstance = new fullpage('#fullpage', {
    navigation: 'true',
    navigationPosition: 'right',
    anchors: ['首頁', '預約獎勵', '參與預約', '種火', '世界觀', '檔案', 'footer'],
    menu: '#myMenu',
    verticalCentered: 'true',
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    onLeave: function (index, nextIndex, direction) {
        var i = index.index;
        var nextI = nextIndex.index;
        $('#number').text('');
    },
    afterLoad: function (anchorLink, index) {
        var a = anchorLink.anchor;
        var i = index.index;
        console.log('获取到值',number);
        $('#number').lemCounter({
            value_to: number
        });
    },
    // 这个回调是在页面结构生成之后触发，这是要用来初始化其他插件
    afterRender: function () {
        $('#video').get(0).play();
    }
});

function appointProcess(n) {
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
 * 第二屏幕预约奖励模块
 * 点击出现预约弹出框 以及 出现下拉框地区选择
 */
document.getElementById('appoint').addEventListener('click', function () {
    appointInfoPop();
})

// 弹框关闭按钮
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

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor: true,
    observer:true,
    observeParents:true,
    keyboard: {
        enabled: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        slideChangeTransitionEnd: function () {
            $('.Detail h3,.Detail h2,.Detail dd').addClass('active');
            var i = this.activeIndex;
            var fz = document.getElementById('fuzhu_l');
            var fy = document.getElementById('fangyu_l');
            var gj = document.getElementById('gongji_l');
            if (i == 0 || i == 1 || i == 2 || i == 3) {
                fz.classList.add('active0');
                fy.classList.remove('active1');
                gj.classList.remove('active2');
            }
            if (i == 4 || i == 5 || i == 6 || i == 7) {
                fz.classList.remove('active0');
                fy.classList.add('active1');
                gj.classList.remove('active2');
            }
            if (i == 8 || i == 9 || i == 10 || i == 11) {
                fz.classList.remove('active0');
                fy.classList.remove('active1');
                gj.classList.add('active2');
            }
        }
    }
});

swiper.slideNext(1000, function () {

});

// 弹窗中左边的三个logo状态
$('.three .three_con .characters_detail .left li').each(function (index) {
    $(this).on('click', function () {
        console.log('index是', index);
        if (index == 0) {
            $(this).addClass('active0').siblings().removeClass('active1 active2');
            swiper.slideTo(0);
        }
        if (index == 1) {
            $(this).addClass('active1').siblings().removeClass('active0 active2');
            swiper.slideTo(4);
        }
        if (index == 2) {
            $(this).addClass('active2').siblings().removeClass('active0 active1');
            swiper.slideTo(8);
        }
        $('.characters_detail .con>div').eq(index).show().siblings().hide();
    })
})


/**
 * 人物立绘模块
 * 内部两个人物切换
 */
$('.Detail .d_con ul li').each(function (index) {
    $(this).on('click', function () {
        console.log('index22', index);

        if ($(this).parents().hasClass('xiunv')) {
            if ($(this).hasClass('x1')) {
                // console.log('是修女模块');
                $(this).parents('.d_con').children().children().find('.age_x').text(29);
                $(this).parents('.d_con').children().children().find('.age_d').text('猥瑣');
            } else {
                $(this).parents('.d_con').children().children().find('.age_x').text(19);
                $(this).parents('.d_con').children().children().find('.age_d').text('元氣');
            }

        } else {
            // console.log('不是修女模块');
        }


        $(this).addClass('active').siblings().removeClass('active');
        $('.img_tab img').eq(index).fadeIn().siblings().fadeOut();
    })
})

$('.Detail dt,.Detail h3,.Detail h2,.Detail dd').addClass('active');
/**
 * 人物立绘模块
 * 右上角关闭按钮
 */
$('.top_close').on('click', function () {
    $(this).parents('.Detail').hide().siblings().show();
    $('.Detail .d_con ul li:nth-child(1)').addClass('active');
    $('.Detail .d_con ul li:nth-child(2)').removeClass('active');
    $('.Detail dt,.Detail h3,.Detail h2,.Detail dd').removeClass('active');
    var t = $(this).siblings('dl').children('dt').children('h2').text();
    var fy = document.getElementById('fangyu_first');
    var fz = document.getElementById('fuzhu_first');
    var gj = document.getElementById('gongji_first');

    switch (t) {
        case '阿蒙森':
            fy.setAttribute('src', '../../images/d1_amengsen1.png');
            break;
        case '梵高':
            fy.setAttribute('src', '../../images/d2_fangao1.png');
            break;
        case '齊格弗里德':
            fy.setAttribute('src', '../../images/d3_qigefulide1.png');
            break;
        case '熙德':
            fy.setAttribute('src', '../../images/d4_xide1.png');
            break;
        case '拉海爾':
            fz.setAttribute('src', '../../images/d1_lahaier1.png');
            break;
        case '牛頓':
            fz.setAttribute('src', '../../images/d2_niudun1.png');
            break;
        case '希普頓修女':
            fz.setAttribute('src', '../../images/d3_xipudunxiunv1.png');
            break;
        case '凱撒':
            fz.setAttribute('src', '../../images/d4_kaisa1.png');
            break;
        case '愛因斯坦':
            fz.setAttribute('src', '../../images/d1_aiyinsitan1.png');
            break;
        case '伽利略':
            fz.setAttribute('src', '../../images/d2_jialilve1.png');
            break;
        case '德川家康':
            fz.setAttribute('src', '../../images/d3_dechuanjiakang1.png');
            break;
        case '拿破崙':
            fz.setAttribute('src', '../../images/d4_napolun1.png');
            break;
    }
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
                d.setAttribute('src', '../../images/b0.jpg');
                break;
            case 1:
                d.setAttribute('src', '../../images/b1.jpg');
                break;
            case 2:
                d.setAttribute('src', '../../images/b2.jpg');
                break;
            case 3:
                d.setAttribute('src', '../../images/b3.jpg');
                break;
            case 4:
                d.setAttribute('src', '../../images/b4.jpg');
                break;
            case 5:
                d.setAttribute('src', '../../images/b5.jpg');
                break;
            case 6:
                d.setAttribute('src', '../../images/b6.jpg');
                break;
            case 7:
                d.setAttribute('src', '../../images/b7.jpg');
                break;
            case 8:
                d.setAttribute('src', '../../images/b8.jpg');
        }
    }
}



/**
 * fullpage 插件主目录
 */
var s = document.getElementById('select');
var e = document.getElementById('select_em');
var d = document.getElementById('backgroundImg');


s.onclick = function () {
    e.classList.add('active');
    $('#backgroundImg').slideToggle();
}

function ifText(st) {
    if (st == '台灣') {
        document.getElementById('areaphone').innerText = '+886';
        document.getElementById('phone').setAttribute('placeholder', '請填寫0後的9位數行動電話號碼');
        document.getElementById('phone').setAttribute('maxlength', '9');
    }
    if (st == '香港') {
        document.getElementById('areaphone').innerText = '+852';
        document.getElementById('phone').setAttribute('placeholder', '請填寫8位數行動電話號碼');
        document.getElementById('phone').setAttribute('maxlength', '8');
    }
    if (st == '澳門') {
        document.getElementById('areaphone').innerText = '+853';
        document.getElementById('phone').setAttribute('placeholder', '請填寫8位數行動電話號碼');
        document.getElementById('phone').setAttribute('maxlength', '8');
    }
    if (st == '新加坡') {
        document.getElementById('areaphone').innerText = '+65';
        document.getElementById('phone').setAttribute('placeholder', '請填寫8位數行動電話號碼');
        document.getElementById('phone').setAttribute('maxlength', '8');
    }
    if (st == '馬來西亞') {
        document.getElementById('areaphone').innerText = '+60';
        document.getElementById('phone').setAttribute('placeholder', '請填寫9位數行動電話號碼');
        document.getElementById('phone').setAttribute('maxlength', '9');
    }
}

$(function () {
    $('#backgroundImg li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        $('#backgroundImg').hide();
        $('#select').text($(this).text());
        var st = $(this).text();
        document.getElementById('phone').value = '';
        ifText(st);
        $('#select').siblings('em').removeClass('active');
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

    // 资料屏
    $('.five .last_con ul li a').hover(function () {
        $(this).parent().siblings().children('a').addClass('on');
    }, function () {
        $(this).parent().siblings().children('a').removeClass('on');
    })

})