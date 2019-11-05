import $ from 'jquery'
import fullpage from 'fullpage.js'
import '../../js/index/layer/layer.js'
import '../../js/index/pc.js'
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

import '../../images/gongji/d1_jialilve_icon1.png'
import '../../images/gongji/d1_jialilve_icon2.png'

import '../../images/gongji/d3_dechuanjiakang_icon1.png'
import '../../images/gongji/d3_dechuanjiakang_icon2.png'

import '../../images/gongji/d4_napolun_icon1.png'
import '../../images/gongji/d4_napolun_icon2.png'


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
 * -辅助
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
                console.log('hide', i);
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
}

function lahaier() {
    var c = document.getElementById('d_cv');
    var n = document.getElementById('d_name');
    var i = document.getElementById('d_info');
    var h = document.getElementById('d_height');
    var w = document.getElementById('d_weapon');
    var o = document.getElementById('fuzhu_first');
    var t = document.getElementById('fuzhu_two');
    var e = document.getElementById('fuzhu_three');
    var r = document.getElementById('fuzhu_four');

    c.innerText = '悠木碧';
    n.innerText = '拉海爾';
    n.setAttribute('data-text', n.innerText);
    i.innerText = '以歷史上英法百年戰爭中著名的法國騎士拉海爾的名字命名的女性火種外表年齡略顯幼小，和她的名字不同（ 拉海爾La Hire， 原意為古法文的憤怒）， 這個小女孩冷靜、 內斂，總是面無表情，很少表露情緒，說話不多，卻總能通過一兩 個辭彙點中對話中的要害。 說白了就是個三無蘿莉。 相對於說話，更習慣通過文字 通訊工具與人交流，使用文字通訊時，卻是另外一種人格，話多暴躁。';
    h.innerText = '145cm';
    w.innerText = '儀仗劍，電子終端';
    o.setAttribute('src', '../../images/d1_lahaier1.png');
    t.setAttribute('src', '../../images/d1_lahaier2.png');
    e.setAttribute('src', '../../images/d1_lahaier_icon1.png');
    r.setAttribute('src', '../../images/d1_lahaier_icon2.png');
};

function niudun() {
    var c = document.getElementById('d_cv');
    var n = document.getElementById('d_name');
    var i = document.getElementById('d_info');
    var h = document.getElementById('d_height');
    var w = document.getElementById('d_weapon');
    var o = document.getElementById('fuzhu_first');

    var t = document.getElementById('fuzhu_two');
    var e = document.getElementById('fuzhu_three');
    var r = document.getElementById('fuzhu_four');


    c.innerText = '日高里菜';
    n.innerText = '牛頓';
    n.setAttribute('data-text', n.innerText);
    i.innerText = '以著名的物理學家牛頓的名字命名的女性火種有些懶散頹廢的少女，不修邊幅，討厭麻煩，拖延症患者，卻有著神一般的解決能	力，當問題到了不能不解決的時候，會以最直接有效的方式迅速徹底的解決掉。對於他人的求助，並不會拒絕，但也不會自己出手幫忙，通常會將求助者介紹給其他有解決能力的人。喜歡吃蘋果，認為只要有蘋果，他可以不吃其他任何東西就活下來。';
    h.innerText = '165cm';
    w.innerText = '重力球';
    o.setAttribute('src', '../../images/d2_niudun1.png');
    t.setAttribute('src', '../../images/d2_niudun2.png');
    e.setAttribute('src', '../../images/d2_niudun_icon1.png');
    r.setAttribute('src', '../../images/d2_niudun_icon2.png');

};

function xipudunxiunv() {
    var c = document.getElementById('d_cv');
    var n = document.getElementById('d_name');
    var i = document.getElementById('d_info');
    var h = document.getElementById('d_height');
    var w = document.getElementById('d_weapon');
    var o = document.getElementById('fuzhu_first');

    var t = document.getElementById('fuzhu_two');
    var e = document.getElementById('fuzhu_three');
    var r = document.getElementById('fuzhu_four');

    c.innerText = '夏怜';
    n.innerText = '希普顿修女';
    n.setAttribute('data-text', n.innerText);
    i.innerText = '以著名的预言家希普顿修女的名字命名为代号的火种战士职业偶像歌手，面对粉丝和观众的时候是一个行为端正的美少女偶像，其实内心中住着一个猥琐大叔，私下里喜欢绘声绘色的和别人交流黄段子，对美女评头论足。有着莫名其妙的超能力，可以通过感应直到附近哪个方向有美女，并给美女打分，被她称为美女雷达。不只能发出有美感让人愉悦的声音，同时也是制造噪音的能手。';
    h.innerText = '165cm';
    w.innerText = '麦克风';
    o.setAttribute('src', '../../images/d3_xiunv1.png');

    t.setAttribute('src', '../../images/d3_xiunv2.png');
    e.setAttribute('src', '../../images/d3_xiunv_icon1.png');
    r.setAttribute('src', '../../images/d3_xiunv_icon2.png');

};

function kaisa() {
    var c = document.getElementById('d_cv');
    var n = document.getElementById('d_name');
    var i = document.getElementById('d_info');
    var h = document.getElementById('d_height');
    var w = document.getElementById('d_weapon');
    var o = document.getElementById('fuzhu_first');

    var t = document.getElementById('fuzhu_two');
    var e = document.getElementById('fuzhu_three');
    var r = document.getElementById('fuzhu_four');

    c.innerText = '斎藤千和';
    n.innerText = '凱撒';
    n.setAttribute('data-text', n.innerText);
    i.innerText = '以古罗马共和国执政官尤里乌斯凯撒的名字为代号的火种战士乐观开朗，爱笑，自来熟，善于交际；因为善于和各种各样的人打交道，并且能拉来投资，所以隐隐有援力从身上散发出来';
    h.innerText = '165cm';
    w.innerText = '罗马式宽刃短剑；古罗马军团式鹰旗';
    o.setAttribute('src', '../../images/d4_kaisa1.png');

    t.setAttribute('src', '../../images/d4_kaisa2.png');
    e.setAttribute('src', '../../images/d4_kaisa_icon1.png');
    r.setAttribute('src', '../../images/d4_kaisa_icon2.png');

};
swiper1();
/**
 * 种火模块
 * -防御
 */
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
        },
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
}

function amengsen() {
    var c = document.getElementById('f_cv');
    var n = document.getElementById('f_name');
    var i = document.getElementById('f_info');
    var h = document.getElementById('f_height');
    var w = document.getElementById('f_weapon');
    var o = document.getElementById('fangyu_first');

    var t = document.getElementById('fangyu_two');
    var e = document.getElementById('fangyu_three');
    var r = document.getElementById('fangyu_four');

    c.innerText = '上阪すみれ';
    n.innerText = '阿蒙森';
    n.setAttribute('data-text', n.innerText);
    i.innerText = '以第一個到達南極點的探險家的名字命名的火種少女雖然外表年齡偏小，言談舉止卻喜歡裝成熟，模仿大人的樣子，並且會嘲諷別人孩子氣	的行為；身體十分耐寒，喜歡下雪天，可以穿著夏裝從容的在雪中散步；雖然不願意承	認，但其實十分喜歡喝牛奶，怕讓別人覺得自己是個沒斷奶的孩子，所以在別人面前總是裝作討厭牛奶的樣子。';
    h.innerText = '155cm';
    w.innerText = '冰凍射線槍';
    o.setAttribute('src', '../../images/d1_amengsen1.png');

    t.setAttribute('src', '../../images/d1_amengsen2.png');
    e.setAttribute('src', '../../images/d1_amengsen_icon1.png');
    r.setAttribute('src', '../../images/d1_amengsen_icon2.png');
};

function fangao() {
    var c = document.getElementById('f_cv');
    var n = document.getElementById('f_name');
    var i = document.getElementById('f_info');
    var h = document.getElementById('f_height');
    var w = document.getElementById('f_weapon');
    var o = document.getElementById('fangyu_first');

    var t = document.getElementById('fangyu_two');
    var e = document.getElementById('fangyu_three');
    var r = document.getElementById('fangyu_four');

    c.innerText = '夏怜';
    n.innerText = '梵高';
    n.setAttribute('data-text', n.innerText);
    i.innerText = '以著名立體主義畫家梵高的名字命名的少女火種電波系少女，自理能力幾乎為0，經常會對著空氣說出一些他人聽不懂的辭彙，繪	畫天賦極高，擅長在立體空間中直接繪上色彩，通過色彩表達自己的感情，或者影	響他人的感情。';
    h.innerText = '155cm';
    w.innerText = '電子調色板，全息筆刷';
    o.setAttribute('src', '../../images/d2_fangao1.png');

    t.setAttribute('src', '../../images/d2_fangao2.png');
    e.setAttribute('src', '../../images/d2_fangao_icon1.png');
    r.setAttribute('src', '../../images/d2_fangao_icon2.png');
};

function qigefulide() {
    var c = document.getElementById('f_cv');
    var n = document.getElementById('f_name');
    var i = document.getElementById('f_info');
    var h = document.getElementById('f_height');
    var w = document.getElementById('f_weapon');
    var o = document.getElementById('fangyu_first');

    var t = document.getElementById('fangyu_two');
    var e = document.getElementById('fangyu_three');
    var r = document.getElementById('fangyu_four');

    c.innerText = '白椛ひとみ';
    n.innerText = '齐格弗里德';
    n.setAttribute('data-text', n.innerText);
    i.innerText = '以北歐神話中著名的屠龍英雄齊格弗裏德的名字命名的女性火種沉默寡言的少女騎士，感情淡漠，表情冷峻，有些像機器人，喜好，欲望，目標等	全都沒有，不笑不哭，不悲不喜，由於這個性情，很少自發的做些什麼，大多時候	是受人拜託解決問題而行動，戰鬥時也多是被動挨打，不過由於強橫的身體，基本上不會受什麼傷。間歇性健忘，有時甚至會把1分鐘前的事情都忘的一乾二淨。沒	事的時候會望著銀河系的中心發呆。';
    h.innerText = '190cm';
    w.innerText = '雙手大劍';
    o.setAttribute('src', '../../images/d3_qigefulide1.png');

    t.setAttribute('src', '../../images/d3_qigefulide2.png');
    e.setAttribute('src', '../../images/d3_qigefulide_icon1.png');
    r.setAttribute('src', '../../images/d3_qigefulide_icon2.png');

};

function xide() {
    var c = document.getElementById('f_cv');
    var n = document.getElementById('f_name');
    var i = document.getElementById('f_info');
    var h = document.getElementById('f_height');
    var w = document.getElementById('f_weapon');
    var o = document.getElementById('fangyu_first');

    var t = document.getElementById('fangyu_two');
    var e = document.getElementById('fangyu_three');
    var r = document.getElementById('fangyu_four');


    c.innerText = '斎藤千和';
    n.innerText = '熙德';
    n.setAttribute('data-text', n.innerText);
    i.innerText = '以西班牙著名的骑士英雄熙德的名字为代号的火种战士帅气潇洒风流的御姐，拥有骑士的美德，却并不死板，正直的同时懂变通，口才一流还有幽默感，尤其是会讨女孩子的欢心，喜欢所有女性，看不惯别人粗鲁的对待女性，尤其是美女。力量不弱却也不算顶尖，所以剑术走的是华丽兼具实用的路子，不以力取胜。对小孩子没辙，如果让她来带孩子，会变得手足无措。  身高：170cm';
    h.innerText = '170cm';
    w.innerText = '双剑：左手“帆式”短剑提泽纳（Tizona），右手西班牙笼手十字剑科拉达（Colada）';
    o.setAttribute('src', '../../images/d4_xide1.png');

    t.setAttribute('src', '../../images/d4_xide2.png');
    e.setAttribute('src', '../../images/d4_xide_icon1.png');
    r.setAttribute('src', '../../images/d4_xide_icon2.png');
};

/**
 * 种火模块
 * -攻击
 */
function swiper3() {
    var thumbsSwiper2 = new Swiper('#thumbs2', {
        spaceBetween: 10,
        slidesPerView: 5,
        watchSlidesVisibility: true, //防止不可点击
        observer: true,
        observeParents: true
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
        },
        on: {
            click: function () {
                var i = this.clickedIndex;
                var l = document.getElementsByName('name_l');
                var r = document.getElementsByName('name_r');
                console.log('攻击hide', i);
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
}

function aiyinsitan() {
    var c = document.getElementById('g_cv');
    var n = document.getElementById('g_name');
    var i = document.getElementById('g_info');
    var h = document.getElementById('g_height');
    var w = document.getElementById('g_weapon');
    var o = document.getElementById('fangyu_first');

    var t = document.getElementById('fangyu_two');
    var e = document.getElementById('fangyu_three');
    var r = document.getElementById('fangyu_four');


    c.innerText = '小清水亜美';
    n.innerText = '愛因斯坦';
    n.setAttribute('data-text', n.innerText);
    i.innerText = '以偉大的物理學家愛因斯坦之名命名的火種少女.智商極高的科學天才，性格古靈精怪，活潑好動，愛捉弄人，愛做鬼臉，雖然嘴上	不承認，但是個非常有愛心，樂意幫助他人的好女孩。';
    h.innerText = '160cm';
    w.innerText = '核動力裝甲，質能轉換手套';
    o.setAttribute('src', '../../images/d1_aiyinsitan1.png');

    t.setAttribute('src', '../../images/d1_aiyinsitan2.png');
    e.setAttribute('src', '../../images/d1_aiyinsitan.png');
    r.setAttribute('src', '../../images/d1_aiyinsitan.png');
};

function jialilve() {
    var c = document.getElementById('g_cv');
    var n = document.getElementById('g_name');
    var i = document.getElementById('g_info');
    var h = document.getElementById('g_height');
    var w = document.getElementById('g_weapon');
    var o = document.getElementById('fangyu_first');

    var t = document.getElementById('fangyu_two');
    var e = document.getElementById('fangyu_three');
    var r = document.getElementById('fangyu_four');

    c.innerText = '金元寿子';
    n.innerText = '伽利略';
    n.setAttribute('data-text', n.innerText);
    i.innerText = '以著名的天文學家伽利略的名字命名的女性火種學識淵博，知識量豐富，善於觀察，卻是個有些冒失的，徹底的行動派，抱著"不	試試怎麼知道結果"的想法行動，但同樣的錯誤絕不會再犯第二次。';
    h.innerText = '170cm';
    w.innerText = '光線槍';
    o.setAttribute('src', '../../images/d2_jialilve1.png');

    t.setAttribute('src', '../../images/d2_jialilve2.png');
    e.setAttribute('src', '../../images/d2_jialilve.png');
    r.setAttribute('src', '../../images/d2_jialilve.png');
};

function dechuanjiakang() {
    var c = document.getElementById('g_cv');
    var n = document.getElementById('g_name');
    var i = document.getElementById('g_info');
    var h = document.getElementById('g_height');
    var w = document.getElementById('g_weapon');
    var o = document.getElementById('fangyu_first');

    var t = document.getElementById('fangyu_two');
    var e = document.getElementById('fangyu_three');
    var r = document.getElementById('fangyu_four');

    c.innerText = '井上麻里奈';
    n.innerText = '德川家康';
    n.setAttribute('data-text', n.innerText);
    i.innerText = '以日本战国大名德川家康的名字为代号的火种战士弱气的萝莉，说话轻声轻气，有些懦弱，就连被别人大声说两句就会委屈的要哭出来，习惯性道歉。害怕惹事，如果有超出预想的情况发生，就会陷入慌乱。但是一旦武装起来，带上面具，就会变成另一种人格，爆发出不符合体格的怪力，大声吼叫，像黑帮小混混一样的挑衅，唯恐天下不乱的态度，但解除武装后就会后悔不已。';
    h.innerText = '145cm';
    w.innerText = '妖刀村正，武士面具';
    o.setAttribute('src', '../../images/d3_dechuanjiakang1.png');

    t.setAttribute('src', '../../images/d3_dechuanjiakang2.png');
    e.setAttribute('src', '../../images/d3_dechuanjiakang.png');
    r.setAttribute('src', '../../images/d3_dechuanjiakang.png');
};

function napolun() {
    var c = document.getElementById('g_cv');
    var n = document.getElementById('g_name');
    var i = document.getElementById('g_info');
    var h = document.getElementById('g_height');
    var w = document.getElementById('g_weapon');
    var o = document.getElementById('fangyu_first');

    var t = document.getElementById('fangyu_two');
    var e = document.getElementById('fangyu_three');
    var r = document.getElementById('fangyu_four');


    c.innerText = '日高里菜';
    n.innerText = '拿破仑';
    n.setAttribute('data-text', n.innerText);
    i.innerText = '以法兰西大帝拿破仑的名字为代号的火种战士没有辜负拿破仑之名的袖珍身材，娇小软萌萝莉一枚，爱吃甜食，尤其是马卡龙。讨厌别人把她当小孩子逗弄，不过也仅仅是鼓起包子脸生闷气的程度。尤其讨厌别人说她小（身高意义上），被说小的时候会愤怒爆发，不过也只是用粉拳给别人按摩罢了。';
    h.innerText = '140cm';
    w.innerText = '';
    o.setAttribute('src', '../../images/d4_napolun1.png');

    t.setAttribute('src', '../../images/d4_napolun2.png');
    e.setAttribute('src', '../../images/d4_napolun.png');
    r.setAttribute('src', '../../images/d4_napolun.png');
};

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
 * 种火模块
 * -点击刚开始最初始的状态
 */
$('.characters_list li').on('click',function(){
    $('.characters_list').fadeOut();
    $('.characters_detail').fadeIn();
})

/**
 * 人物立绘模块
 * 内部两个人物切换
 */
$('.Detail .d_con ul li').each(function (index) {
    $(this).on('click', function () {
        console.log(index);
        $(this).addClass('active').siblings().removeClass('active');
        $('.img_tab img').eq(index).show().siblings().hide();
    })
})

/**
 * 人物立绘模块
 * 右上角关闭按钮
 */
$('.top_close').on('click', function () {
    $(this).parents('.Detail').hide().siblings().show();
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