import $ from 'jquery'
import fullpage from 'fullpage.js'
import '../../js/index/layer/layer.js'
import '../../js/index/pc.js'
import '../../js/index/ajax.js'
import '../../js/index/mobile.js'
import Swiper from 'swiper'

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

import '../../images/fuzhu/d1_lahaier1.png'
import '../../images/fuzhu/d1_lahaier2.png'
import '../../images/fuzhu/d2_niudun1.png'
import '../../images/fuzhu/d2_niudun2.png'
import '../../images/fuzhu/d3_xiunv1.png'
import '../../images/fuzhu/d3_xiunv2.png'
import '../../images/fuzhu/d4_kaisa1.png'
import '../../images/fuzhu/d4_kaisa2.png'
import '../../images/fuzhu/d1_lahaier_icon1.png'
import '../../images/fuzhu/d1_lahaier_icon2.png'
import '../../images/fuzhu/d2_niudun_icon1.png'
import '../../images/fuzhu/d2_niudun_icon2.png'
import '../../images/fuzhu/d3_xiunv_icon1.png'
import '../../images/fuzhu/d3_xiunv_icon2.png'
import '../../images/fuzhu/d4_kaisa_icon1.png'
import '../../images/fuzhu/d4_kaisa_icon2.png'


import '../../images/fangyu/d1_amengsen1.png'
import '../../images/fangyu/d1_amengsen2.png'
import '../../images/fangyu/d2_fangao1.png'
import '../../images/fangyu/d2_fangao2.png'
import '../../images/fangyu/d3_qigefulide1.png'
import '../../images/fangyu/d3_qigefulide2.png'
import '../../images/fangyu/d4_xide1.png'
import '../../images/fangyu/d4_xide2.png'
import '../../images/fangyu/d1_amengsen_icon1.png'
import '../../images/fangyu/d1_amengsen_icon2.png'
import '../../images/fangyu/d2_fangao_icon1.png'
import '../../images/fangyu/d2_fangao_icon2.png'
import '../../images/fangyu/d3_qigefulide_icon1.png'
import '../../images/fangyu/d3_qigefulide_icon2.png'
import '../../images/fangyu/d4_xide_icon1.png'
import '../../images/fangyu/d4_xide_icon2.png'




import '../../images/gongji/d1_aiyinsitan1.png'
import '../../images/gongji/d1_aiyinsitan2.png'
import '../../images/gongji/d2_jialilve1.png'
import '../../images/gongji/d2_jialilve2.png'
import '../../images/gongji/d3_dechuanjiakang1.png'
import '../../images/gongji/d3_dechuanjiakang2.png'
import '../../images/gongji/d4_napolun1.png'
import '../../images/gongji/d4_napolun2.png'

import '../../images/gongji/d1_aiyinsitan_icon1.png'
import '../../images/gongji/d1_aiyinsitan_icon2.png'

import '../../images/gongji/d2_jialilve_icon1.png'
import '../../images/gongji/d2_jialilve_icon2.png'

import '../../images/gongji/d3_dechuanjiakang_icon1.png'
import '../../images/gongji/d3_dechuanjiakang_icon2.png'

import '../../images/gongji/d4_napolun_icon1.png'
import '../../images/gongji/d4_napolun_icon2.png'

import '../../images/x1.png'
import '../../images/x2.png'
import '../../images/x3.png'
import '../../images/x4.png'


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
            // $('.Detail h3,.Detail h2,.Detail dd').addClass('active');
            console.log('当前滑动的是哪个索引', this.activeIndex);
            var i = this.activeIndex;
            var fz = document.getElementById('fuzhu_l');
            var fy = document.getElementById('fangyu_l');
            var gj = document.getElementById('gongji_l');
            switch (i) {
                case 0:
                    fz.classList.add('active0');
                    fy.classList.remove('active1');
                    gj.classList.remove('active2');
                    break;
                case 4:
                    fz.classList.remove('active0');
                    fy.classList.add('active1');
                    gj.classList.remove('active2');
                    break;
                case 8:
                    fz.classList.remove('active0');
                    fy.classList.remove('active1');
                    gj.classList.add('active2');
                    break;
            }
        }
    }
});

/**
 * 种火模块
 * -辅助
 */
function swiper1() {
    var thumbsSwiper = new Swiper('#thumbs', {
        spaceBetween: 10,
        slidesPerView: 5,
        watchSlidesVisibility: true, //防止不可点击
        observer: true,
        observeParents: true,
        on: {
            click: function () {
                var i = this.clickedIndex;
                var l = document.getElementsByName('name_l');
                var r = document.getElementsByName('name_r');
                console.log('当前的第一个hide', i);
                $('.characters_detail .fuzhu .swpier_fuzhu').hide();
                $('.characters_detail .fuzhu .Detail').show();

                switch (i) {
                    case 0:
                        lahaier();
                        break;
                    case 1:
                        niudun();
                        break;
                    case 2:
                        xipudunxiunv();
                        break;
                    case 3:
                        kaisa();
                        break;
                }
            }
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
        coverflowEffect: {
            rotate: -34,
            stretch: 0,
            depth: 180,
            modifier: 1,
            slideShadows: true
        },
        thumbs: {
            swiper: thumbsSwiper,
        },
        on: {
            click: function () {

            }
        }
    })
}

function lahaier() {
    var c = document.getElementById('d_cv');
    var n = document.getElementById('d_name');
    var i = document.getElementById('d_info');
    var h = document.getElementById('d_height');
    var w = document.getElementById('d_weapon');

    var a = document.getElementById('d_age');
    var q = document.getElementById('d_character');
    var m = document.getElementById('d_motto');

    var o = document.getElementById('fuzhu_first');
    var t = document.getElementById('fuzhu_two');
    var e = document.getElementById('fuzhu_three');
    var r = document.getElementById('fuzhu_four');

    c.innerText = '悠木碧';
    n.innerText = '拉海爾';
    n.setAttribute('data-text', n.innerText);
    i.innerText = '以歷史上英法百年戰爭中著名的法國騎士拉海爾的名字命名的種火少女外表年齡略顯幼小，三無蘿莉，相對於說話，更習慣通過文字通訊工具與人交流，使用文字通訊時，卻是另外一種人格，話多暴躁。';

    a.innerText = '17';
    q.innerText = '三無';
    m.innerText = '這樣下去的話…總有一天能看到新的動漫…對吧？';

    h.innerText = '145cm';
    w.innerText = '儀仗劍，電子終端';
    o.setAttribute('src', '../../images/d1_lahaier1.png');
    t.setAttribute('src', '../../images/d1_lahaier2.png');
    e.setAttribute('src', '../../images/d1_lahaier_icon1.png');
    r.setAttribute('src', '../../images/d1_lahaier_icon2.png');
    $('.Detail h3,.Detail h2,.Detail dd').addClass('active');
};

function niudun() {
    var c = document.getElementById('d_cv');
    var n = document.getElementById('d_name');
    var i = document.getElementById('d_info');
    var h = document.getElementById('d_height');
    var w = document.getElementById('d_weapon');

    var a = document.getElementById('d_age');
    var q = document.getElementById('d_character');
    var m = document.getElementById('d_motto');

    var o = document.getElementById('fuzhu_first');
    var t = document.getElementById('fuzhu_two');
    var e = document.getElementById('fuzhu_three');
    var r = document.getElementById('fuzhu_four');


    c.innerText = '日高裡菜';
    n.innerText = '牛頓';
    n.setAttribute('data-text', n.innerText);
    i.innerText = '以著名的物理學家牛頓的名字命名的種火少女，懶散頹廢的少女，討厭麻煩，卻有著神一般解決問題的能力。喜歡吃蘋果，認為只要有蘋果，他可以不吃其他任何東西。';

    a.innerText = '19';
    q.innerText = '打不起精神';
    m.innerText = '我想將甜美的蘋果撒播在世界各地。';

    h.innerText = '170cm';
    w.innerText = '重力球';
    o.setAttribute('src', '../../images/d2_niudun1.png');
    t.setAttribute('src', '../../images/d2_niudun2.png');
    e.setAttribute('src', '../../images/d2_niudun_icon1.png');
    r.setAttribute('src', '../../images/d2_niudun_icon2.png');
    $('.Detail h3,.Detail h2,.Detail dd').addClass('active');

};

function xipudunxiunv() {
    var c = document.getElementById('d_cv');
    var n = document.getElementById('d_name');
    var i = document.getElementById('d_info');
    var h = document.getElementById('d_height');
    var w = document.getElementById('d_weapon');

    var a = document.getElementById('d_age');
    var q = document.getElementById('d_character');
    var m = document.getElementById('d_motto');

    var o = document.getElementById('fuzhu_first');
    var t = document.getElementById('fuzhu_two');
    var e = document.getElementById('fuzhu_three');
    var r = document.getElementById('fuzhu_four');

    c.innerText = '夏憐';
    n.innerText = '希普顿修女';
    n.setAttribute('data-text', n.innerText);
    i.innerText = '以著名的預言家希普頓修女的名字命名的種火少女，職業偶像歌手。不僅能發出有美感讓人愉悅的聲音，同時也是製造噪音的能手。';

    a.innerText = '19(29)';
    q.innerText = '元氣（猥瑣）';
    m.innerText = '嗯嗯嗯！別看世界變成這樣，但是美麗的女性還是很多的嘛（口水）~';

    h.innerText = '165cm';
    w.innerText = '麥克風';
    o.setAttribute('src', '../../images/d3_xiunv1.png');

    t.setAttribute('src', '../../images/d3_xiunv2.png');
    e.setAttribute('src', '../../images/d3_xiunv_icon1.png');
    r.setAttribute('src', '../../images/d3_xiunv_icon2.png');
    $('.Detail h3,.Detail h2,.Detail dd').addClass('active');

};

function kaisa() {
    var c = document.getElementById('d_cv');
    var n = document.getElementById('d_name');
    var i = document.getElementById('d_info');
    var h = document.getElementById('d_height');
    var w = document.getElementById('d_weapon');

    var a = document.getElementById('d_age');
    var q = document.getElementById('d_character');
    var m = document.getElementById('d_motto');


    var o = document.getElementById('fuzhu_first');
    var t = document.getElementById('fuzhu_two');
    var e = document.getElementById('fuzhu_three');
    var r = document.getElementById('fuzhu_four');

    c.innerText = '斎藤千和';
    n.innerText = '凱撒';
    n.setAttribute('data-text', n.innerText);
    i.innerText = '以古羅馬共和國執政官尤裡烏斯凱撒的名字為代號的種火少女，樂觀開朗，愛笑，善於交際；因為善於和各種各樣的人打交道，並且能拉來投資，所以隱隱有援力從身上散發出來';

    a.innerText = '19';
    q.innerText = '元氣';
    m.innerText = '如果足夠努力，就會綻放出足夠的光芒。在光芒的指引下，我們都會繼續前進！';

    h.innerText = '170cm';
    w.innerText = '羅馬式寬刃短劍；古羅馬軍團式鷹旗';
    o.setAttribute('src', '../../images/d4_kaisa1.png');

    t.setAttribute('src', '../../images/d4_kaisa2.png');
    e.setAttribute('src', '../../images/d4_kaisa_icon1.png');
    r.setAttribute('src', '../../images/d4_kaisa_icon2.png');
    $('.Detail h3,.Detail h2,.Detail dd').addClass('active');

};
swiper1();


//防御
function swiper2() {
    var thumbsSwiper1 = new Swiper('#thumbs1', {
        spaceBetween: 10,
        slidesPerView: 5,
        watchSlidesVisibility: true, //防止不可点击
        observer: true,
        observeParents: true,
        on: {
            click: function () {
                var i = this.clickedIndex;
                var l = document.getElementsByName('name_l');
                var r = document.getElementsByName('name_r');
                console.log('防御hide', i);
                $('#swpier_fangyu').hide();
                $('#swpier_fangyu_detail').show();
                switch (i) {
                    case 0:
                        amengsen();
                        break;
                    case 1:
                        fangao();
                        break;
                    case 2:
                        qigefulide();
                        break;
                    case 3:
                        xide();
                }
            }
        }
    })
    var gallerySwiper1 = new Swiper('#gallery1', {
        effect: 'coverflow',
        spaceBetween: 10, //缩略图间距
        slidesPerView: 3,
        centeredSlides: true,
        initialSlide: 2,
        observer: true,
        observeParents: true,
        coverflowEffect: {
            rotate: -34,
            stretch: 0,
            depth: 180,
            modifier: 1,
            slideShadows: true
        },
        thumbs: {
            swiper: thumbsSwiper1,
        }
    })
}

function amengsen() {
    var c = document.getElementById('f_cv');
    var n = document.getElementById('f_name');
    var i = document.getElementById('f_info');
    var h = document.getElementById('f_height');
    var w = document.getElementById('f_weapon');

    var a = document.getElementById('f_age');
    var q = document.getElementById('f_character');
    var m = document.getElementById('f_motto');

    var o = document.getElementById('fangyu_first');
    var t = document.getElementById('fangyu_two');
    var e = document.getElementById('fangyu_three');
    var r = document.getElementById('fangyu_four');

    c.innerText = '上阪すみれ';
    n.innerText = '阿蒙森';
    n.setAttribute('data-text', n.innerText);
    i.innerText = '以第一個到達南極點的探險家的名字命名的種火少女雖然外表年齡偏小，言談舉止卻喜歡裝成熟，模仿大人的樣子，並且會嘲諷別人孩子氣的行為';

    a.innerText = '16';
    q.innerText = '逞强 冷静';
    m.innerText = '只要雪还在下…';


    h.innerText = '155cm';
    w.innerText = '冰凍射線槍';
    o.setAttribute('src', '../../images/d1_amengsen1.png');
    t.setAttribute('src', '../../images/d1_amengsen2.png');
    e.setAttribute('src', '../../images/d1_amengsen_icon1.png');
    r.setAttribute('src', '../../images/d1_amengsen_icon2.png');
    $('.Detail h3,.Detail h2,.Detail dd').addClass('active');
};

function fangao() {
    var c = document.getElementById('f_cv');
    var n = document.getElementById('f_name');
    var i = document.getElementById('f_info');
    var h = document.getElementById('f_height');
    var w = document.getElementById('f_weapon');

    var a = document.getElementById('f_age');
    var q = document.getElementById('f_character');
    var m = document.getElementById('f_motto');

    var o = document.getElementById('fangyu_first');
    var t = document.getElementById('fangyu_two');
    var e = document.getElementById('fangyu_three');
    var r = document.getElementById('fangyu_four');

    c.innerText = '夏憐';
    n.innerText = '梵高';
    n.setAttribute('data-text', n.innerText);
    i.innerText = '以著名立體主義畫家梵高的名字命名的種火少女電波系少女，擅長在立體空間中直接繪上色彩，通過色彩表達自己的感情，或者影響他人的感情。';

    a.innerText = '15';
    q.innerText = '冷淡';
    m.innerText = '只要雪还要將世界重新染上希望的顏色在下…';

    h.innerText = '155cm';
    w.innerText = '電子調色板，全息筆刷';
    o.setAttribute('src', '../../images/d2_fangao1.png');
    t.setAttribute('src', '../../images/d2_fangao2.png');
    e.setAttribute('src', '../../images/d2_fangao_icon1.png');
    r.setAttribute('src', '../../images/d2_fangao_icon2.png');
    $('.Detail h3,.Detail h2,.Detail dd').addClass('active');
};

function qigefulide() {
    var c = document.getElementById('f_cv');
    var n = document.getElementById('f_name');
    var i = document.getElementById('f_info');
    var h = document.getElementById('f_height');
    var w = document.getElementById('f_weapon');

    var a = document.getElementById('f_age');
    var q = document.getElementById('f_character');
    var m = document.getElementById('f_motto');

    var o = document.getElementById('fangyu_first');
    var t = document.getElementById('fangyu_two');
    var e = document.getElementById('fangyu_three');
    var r = document.getElementById('fangyu_four');

    c.innerText = '白椛ひとみ';
    n.innerText = '齊格弗里德';
    n.setAttribute('data-text', n.innerText);
    i.innerText = '以北歐神話中著名的屠龍英雄齊格弗里德的名字命名的種火少女沉默寡言的少女騎士，感情淡漠，表情冷峻，沒事的時候會望著星空發呆。';

    a.innerText = '20';
    q.innerText = '天然呆  冷淡';
    m.innerText = '我不想傷害什麼，但我知道舉起這把劍的時候，我就已經不能回頭了。';

    h.innerText = '185cm';
    w.innerText = '雙手大劍';
    o.setAttribute('src', '../../images/d3_qigefulide1.png');

    t.setAttribute('src', '../../images/d3_qigefulide2.png');
    e.setAttribute('src', '../../images/d3_qigefulide_icon1.png');
    r.setAttribute('src', '../../images/d3_qigefulide_icon2.png');
    $('.Detail h3,.Detail h2,.Detail dd').addClass('active');

};

function xide() {
    var c = document.getElementById('f_cv');
    var n = document.getElementById('f_name');
    var i = document.getElementById('f_info');
    var h = document.getElementById('f_height');
    var w = document.getElementById('f_weapon');

    var a = document.getElementById('f_age');
    var q = document.getElementById('f_character');
    var m = document.getElementById('f_motto');


    var o = document.getElementById('fangyu_first');
    var t = document.getElementById('fangyu_two');
    var e = document.getElementById('fangyu_three');
    var r = document.getElementById('fangyu_four');


    c.innerText = '斎藤千和';
    n.innerText = '熙德';
    n.setAttribute('data-text', n.innerText);
    i.innerText = '以西班牙著名的騎士英雄熙德的名字為代號的種火少女帥氣瀟灑的禦姐，擁有騎士的美德，卻不死板，正直的同時懂得變通，口才一流還有幽默感。';

    a.innerText = '19';
    q.innerText = '绅士';
    m.innerText = '嗯嗯，我的剑刃一直以来便是为了守护而存在。';

    h.innerText = '180cm';
    w.innerText = '雙劍：左手“帆式”短劍提澤納（Tizona），右手西班牙籠手十字劍科拉達（Colada）';
    o.setAttribute('src', '../../images/d4_xide1.png');
    t.setAttribute('src', '../../images/d4_xide2.png');
    e.setAttribute('src', '../../images/d4_xide_icon1.png');
    r.setAttribute('src', '../../images/d4_xide_icon2.png');
    $('.Detail h3,.Detail h2,.Detail dd').addClass('active');
};

//攻击
function swiper3() {
    var thumbsSwiper2 = new Swiper('#thumbs2', {
        spaceBetween: 10,
        slidesPerView: 5,
        watchSlidesVisibility: true, //防止不可点击
        observer: true,
        observeParents: true,
        on: {
            click: function () {
                var i = this.clickedIndex;
                var l = document.getElementsByName('name_l');
                var r = document.getElementsByName('name_r');
                $('#swiper_gongji').hide();
                $('#swpier_gongji_detail').show();
                switch (i) {
                    case 0:
                        aiyinsitan();
                        break;
                    case 1:
                        jialilve();
                        break;
                    case 2:
                        dechuanjiakang();
                        break;
                    case 3:
                        napolun();
                }
            }
        }
    })
    var gallerySwiper2 = new Swiper('#gallery2', {
        effect: 'coverflow',
        spaceBetween: 10, //缩略图间距
        slidesPerView: 3,
        centeredSlides: true,
        initialSlide: 2,
        observer: true,
        observeParents: true,
        coverflowEffect: {
            rotate: -34,
            stretch: 0,
            depth: 180,
            modifier: 1,
            slideShadows: true
        },
        thumbs: {
            swiper: thumbsSwiper2,
        }
    })
}

function aiyinsitan() {
    var c = document.getElementById('g_cv');
    var n = document.getElementById('g_name');
    var i = document.getElementById('g_info');
    var h = document.getElementById('g_height');
    var w = document.getElementById('g_weapon');

    var a = document.getElementById('g_age');
    var q = document.getElementById('g_character');
    var m = document.getElementById('g_motto');

    var o = document.getElementById('gongji_first');
    var t = document.getElementById('gongji_two');
    var e = document.getElementById('gongji_three');
    var r = document.getElementById('gongji_four');


    c.innerText = '小清水亜美';
    n.innerText = '愛因斯坦';
    n.setAttribute('data-text', n.innerText);
    i.innerText = '以偉大的物理學家愛因斯坦之名命名的種火少女，智商極高的科學天才，性格古靈精怪，活潑好動，愛捉弄人，是個非常有愛心，樂意幫助他人的好女孩。';
    h.innerText = '160cm';
    w.innerText = '核動力裝甲，質能轉換手套';

    a.innerText = '16';
    q.innerText = '愛捉弄人 活潑 善良';
    m.innerText = '動力嘛…辛辛苦苦一上午，然後是最喜歡的下午茶時間！這就夠了啦~';

    o.setAttribute('src', '../../images/d1_aiyinsitan1.png');
    t.setAttribute('src', '../../images/d1_aiyinsitan2.png');
    e.setAttribute('src', '../../images/d1_aiyinsitan_icon1.png');
    r.setAttribute('src', '../../images/d1_aiyinsitan_icon2.png');
    $('.Detail h3,.Detail h2,.Detail dd').addClass('active');
};

function jialilve() {
    var c = document.getElementById('g_cv');
    var n = document.getElementById('g_name');
    var i = document.getElementById('g_info');
    var h = document.getElementById('g_height');

    var a = document.getElementById('g_age');
    var q = document.getElementById('g_character');
    var m = document.getElementById('g_motto');

    var w = document.getElementById('g_weapon');
    var o = document.getElementById('gongji_first');
    var t = document.getElementById('gongji_two');
    var e = document.getElementById('gongji_three');
    var r = document.getElementById('gongji_four');

    c.innerText = '金元壽子';
    n.innerText = '伽利略';
    n.setAttribute('data-text', n.innerText);
    i.innerText = '以著名的天文學家伽利略的名字命名的種火少女，學識淵博，知識量豐富，善於觀察，徹底的行動派，同樣的錯誤絕不會再犯第二次。';

    a.innerText = '17';
    q.innerText = '好奇，仔細';
    m.innerText = '總有一天，我會復原星空讓人們都能感受到浩瀚的美麗。';

    h.innerText = '170cm';
    w.innerText = '光線槍';
    o.setAttribute('src', '../../images/d2_jialilve1.png');
    t.setAttribute('src', '../../images/d2_jialilve2.png');
    e.setAttribute('src', '../../images/d2_jialilve_icon1.png');
    r.setAttribute('src', '../../images/d2_jialilve_icon2.png');
    $('.Detail h3,.Detail h2,.Detail dd').addClass('active');
};

function dechuanjiakang() {
    var c = document.getElementById('g_cv');
    var n = document.getElementById('g_name');
    var i = document.getElementById('g_info');
    var h = document.getElementById('g_height');
    var w = document.getElementById('g_weapon');

    var a = document.getElementById('g_age');
    var q = document.getElementById('g_character');
    var m = document.getElementById('g_motto');

    var o = document.getElementById('gongji_first');
    var t = document.getElementById('gongji_two');
    var e = document.getElementById('gongji_three');
    var r = document.getElementById('gongji_four');

    c.innerText = '井上麻裡奈';
    n.innerText = '德川家康';
    n.setAttribute('data-text', n.innerText);
    i.innerText = '以日本戰國大名德川家康的名字為代號的種火少女，雙重人格。弱氣的蘿莉，說話輕聲輕氣，有些懦弱，帶上面具，就會變成另一種人格，爆發出不符合體格的怪力，解除武裝後就會後悔不已。';

    a.innerText = '17';
    q.innerText = '懦弱善良/兇暴殘酷';
    m.innerText = '收集所有古代刀劍';

    h.innerText = '145cm';
    w.innerText = '妖刀村正，武士面具';
    o.setAttribute('src', '../../images/d3_dechuanjiakang1.png');
    t.setAttribute('src', '../../images/d3_dechuanjiakang2.png');
    e.setAttribute('src', '../../images/d3_dechuanjiakang_icon1.png');
    r.setAttribute('src', '../../images/d3_dechuanjiakang_icon2.png');
    $('.Detail h3,.Detail h2,.Detail dd').addClass('active');
};

function napolun() {
    var c = document.getElementById('g_cv');
    var n = document.getElementById('g_name');
    var i = document.getElementById('g_info');
    var h = document.getElementById('g_height');

    var a = document.getElementById('g_age');
    var q = document.getElementById('g_character');
    var m = document.getElementById('g_motto');

    var w = document.getElementById('g_weapon');
    var o = document.getElementById('gongji_first');
    var t = document.getElementById('gongji_two');
    var e = document.getElementById('gongji_three');
    var r = document.getElementById('gongji_four');


    c.innerText = '日高裡菜';
    n.innerText = '拿破崙';
    n.setAttribute('data-text', n.innerText);
    i.innerText = '以法蘭西皇帝拿破崙的名字為代號的種火少女，嬌小軟萌蘿莉一枚，愛吃甜食，尤其討厭別人說她小（身高意義上），被說小的時候會憤怒爆發，不過也只是用粉拳給別人按摩罷了。';

    a.innerText = '15';
    q.innerText = '認真';
    m.innerText = '煙花祭，在之前是存在的吧？嗯嗯，我想要去征服看看…';

    h.innerText = '140cm';
    w.innerText = '？？？';
    o.setAttribute('src', '../../images/d4_napolun1.png');
    t.setAttribute('src', '../../images/d4_napolun2.png');
    e.setAttribute('src', '../../images/d4_napolun_icon1.png');
    r.setAttribute('src', '../../images/d4_napolun_icon2.png');
    $('.Detail h3,.Detail h2,.Detail dd').addClass('active');


};

// 弹窗中左边的三个logo状态
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
 * 人物立绘模块
 * 内部两个人物切换
 */
$('.Detail .d_con ul li').each(function (index) {
    $(this).on('click', function () {
        console.log('index22', index);
        
            if ($(this).parents().hasClass('xiunv')) {
                if($(this).hasClass('x1')){
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

    var fullPageInstance = new fullpage('#fullpage', {
        navigation: 'true',
        navigationPosition: 'right',
        anchors: ['首頁', '預約獎勵', '參與預約', '種火', '世界觀', '檔案', 'footer'],
        menu: '#myMenu',
        verticalCentered: 'true',
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        onLeave: function (index, nextIndex, direction) {
            console.log('当前离开', index.index, nextIndex.index, direction);
            var i = index.index;
            var nextI = nextIndex.index;
            // if (nextI !== 1) {
            //     $('#number').text('');
            // } else {
            //     magic_number(203728, $('#number'));
            // }
            // if (nextI == 1 && direction == 'down') {}
            // if (nextI == 1 && direction == 'up') {}
        },
        afterLoad: function (anchorLink, index) {
            console.log('当前在', anchorLink.anchor, index.index);
            var a = anchorLink.anchor;
            var i = index.index;

            // if (i == 1) {
            //     console.log('我要执行预约数字动画', $('#number'));
            //     setTimeout(function () {
            //         magic_number(203728, $('#number'));
            //     }, 20000000000)

            // }
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

    // 资料屏
    $('.five .last_con ul li a').hover(function () {
        $(this).parent().siblings().children('a').addClass('on');
    }, function () {
        $(this).parent().siblings().children('a').removeClass('on');
    })

})