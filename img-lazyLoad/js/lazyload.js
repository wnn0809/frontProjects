// onload是等所有的资源文件加载完毕以后再绑定事件
window.onload = function(){
	// 获取图片列表，即img标签列表
	var imgs = document.querySelectorAll('img');

	// 获取到浏览器顶部的距离
	function getTop(e){
		return e.offsetTop;
	}

	// 懒加载实现
	function lazyload(imgs){
		// 
		var h = window.innerHeight;
		var s = document.documentElement.scrollTop || document.body.scrollTop;
		for(var i=0;i<imgs.length;i++){

			if ((h+s)>getTop(imgs[i])) {
				// 真实情况是页面开始有1-2秒空白，所以使用setTimeout定时1s
				(function(i){
					setTimeout(function(){
						// 不加立即执行函数i会等于9
						// 隐形加载图片或其他资源
						var temp = new Image();
						temp.src = imgs[i].getAttribute('data-src');
						// onload判断图片加载完毕
						temp.onload = function(){
							// 获取自定义属性data-src，用真图片替换假图片
							imgs[i].src = imgs[i].getAttribute('data-src')
						}
					},1000)
				})(i)
			}
		}
	}
	lazyload(imgs);

	// 滚屏函数
	window.onscroll =function(){
		lazyload(imgs);
	}
}