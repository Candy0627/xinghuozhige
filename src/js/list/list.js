import "@babel/polyfill";
// import '../../css/index/index.css'
// import helloWorld1 from './list1.js'

// console.log('1',helloWorld1);
// const arr = [
//     new Promise(() => {}),
//     new Promise(() => {})
// ];

// arr.map(item => {
//     console.log(item);
// })
/*
 * func: 实现页面滚动到顶部的效果，
 * 离顶部越近滚动速度越慢
 * @acceleration: 滑动的加速度
 * @time: 延迟时间 
 */
function goTop(acceleration, time) {
    let xScroll = document.documentElement.scrollLeft || document.body.scrollLeft || window.scrollLeft || 0, // 获取水平滚动坐标
        yScroll = document.documentElement.scrollTop || document.body.scrollTop || window.scrollTop || 0, // 获取垂直滚动坐标
        speed = 1 + acceleration; // 滚动速度

    window.scrollTo(Math.floor(xScroll / speed), Math.floor(yScroll / speed)); // 屏幕滚动到某个坐标，因为speed大于1，所以x、y轴的坐标越来越小


    if (xScroll > 0 || yScroll > 0) { // 如果没有滚动到顶部就设置延迟time后继续滚动
        setTimeout(() => {
            goTop(acceleration, time);
        }, time);
    }
}


let scrollBtn = document.getElementById('scroll2Top-btn');
window.addEventListener('scroll', () => {
    // 获取当前可视窗口的高度 以及 获取垂直滚动条距离页面顶部的距离
    let contentTop = document.documentElement.clientHeight || window.innerHeight,
        scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    // 如果可视窗口的高度小于垂直滚动的距离，说明已经向下滚动超过一个可视窗口的距离，也就是说看不到顶部了，于是就设置按钮可见
    if (contentTop < scrollTop) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
})

scrollBtn.addEventListener('click', () => {
    goTop();
})