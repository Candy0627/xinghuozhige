import $ from 'jquery';
import fullpage from 'fullpage.js';
// import fullpage from 'fullpage.js';
// import '../index/pc.js';
// import "@babel/polyfill";

// import '../../css/index/pc.css';
import '../../css/index/fullpage.css';
import '../../css/index/normalize.css';
import '../../css/index/main.css';
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