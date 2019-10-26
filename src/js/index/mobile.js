function Page() {
	this.body = $('body');
	this.header = $(".one");
	this.video = $(".video");
	this.mask = $(".mask");
}

Page.prototype.init = function() {
	this.openVideo();
	this.closeVideo();
}

Page.prototype.openVideo = function() {
	var that = this;
	$(".play",this.header).on('click',function() {
		showOrHide.call(that, 1);
        bodyHidden.call(that, 1);
	})

}

Page.prototype.closeVideo = function() {
	var that = this;
	$('i', this.video).on('click', function (e) {
        showOrHide.call(that, 0);
        bodyHidden.call(that, 0);
    });
}

/**
 * 展示消失弹框，视频
 * @param  flag  1:show 0:hide
 */
function showOrHide(flag) {
    if (flag === 0) {
    	$("iframe").remove();
        this.video.hide();
        this.mask.hide();
        $(".video").append('<iframe src="../video/video.mp4"></iframe>');

    } else if (flag === 1) {

        this.video.show();
        this.mask.show();

    }
}

/**
 * 将body进行限制滚动
 * 将取消body进行限制滚动
 * @param  flag  1:show 0:hide
 */
function bodyHidden(flag) {
    if (flag === 0) {
        // this.body.css({
        //     overflow: 'scroll'
        // });
    } else if (flag === 1) {
        this.body.css({
            overflow: 'hidden'
        });
    }
}

new Page().init();
