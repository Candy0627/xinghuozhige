import $ from 'jquery';
import fullpage from 'fullpage.js';
// import fullpage from 'fullpage.js';
// import '../index/pc.js';
// import "@babel/polyfill";

// import '../../css/index/pc.css';
import '../../css/index/fullpage.css';
import '../../css/index/normalize.css';
import '../../css/index/main.css';
import '../../css/index/index.css';

import '../../images/video.mp4'
// import '../../css/index/index.css';
// import helloWorld from './index1.js'
// var height = document.documentElement.clientHeight;
// var fullDiv = document.getElementsByTd("fullpage");
// fullDiv.height(height);
var fullPageInstance = new fullpage('#fullpage', {
    navigation: 'true',
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
    menu: '#myMenu',
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE'
});


$('.one_con a.btn').hover(function() {
    $(this).children().css('top','0px');
},function() {
    $(this).children().css('top','6px');
})

// $('.factions-link-1').hover(function() {
//     // $('.factions-link-1:after').css('opacity','1!important');
//     // $('.factions-link-1:after').css('margin-left','10%')
//     $(this).css({'background':'url(images/l1.png) no-repeat','opacity':'1'});
// },function(){
//     $(this).css({'background':'url(images/a1.png) no-repeat','opacity':'1'});
// })
