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

$(function(){
    var fullPageInstance = new fullpage('#fullpage', {
        navigation: 'true',
        navigationPosition:'right',
        anchors: ['首頁', '預約', '種火', '世界', '資料','footer'],
        menu: '#myMenu',
        verticalCentered:'true',
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        afterRender: function () {
            $('#video').get(0).play();
        }
    });
    
    
    $('.one_con a.btn').hover(function() {
        $(this).children().css('top','0px');
    },function() {
        $(this).children().css('top','6px');
    })


    $('.corner').hover(function() {
        $(this).children().addClass('animated tada');
    },function(){
        $(this).children().removeClass('animated tada');
    })

    // 世界-浮层
    $(document).mousemove(function(e){
        var x = e.originalEvent.x || e.originalEvent.layerX || 0; 
        var y = e.originalEvent.y || e.originalEvent.layerY || 0; 
        var $page = $('.pageone');
        var $role = $page.find('.page-role');
        $role.css({
            webkitTransform: 'translate3d('+(x*0.01)+'px, '+(y*0.01)+'px, 0px)',
            transform: 'translate3d('+(x*0.01)+'px, '+(y*0.01)+'px, 0px)'
        });
    });

    $('#fullpage .three ul li img').hover(function() {
        $(this).hide().siblings('img').show();
    })

})


