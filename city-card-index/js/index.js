/*
 * @Author: Caesar 
 * @Date: 2019-03-13 17:40:05 
 * @Last Modified by: Caesar
 * @Last Modified time: 2019-03-13 18:02:13
 */
//如果不能写在HTML内容的后面，则需要在页面加载完成后再初始化。
$(document).ready(function () {
  var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
  })

  //我的卡包
  var mySwiper = new Swiper('.travel-card-box', {
    slidesOffsetBefore: 8,
    slidesPerView: 'auto', //设置slider容器能够同时显示的slides数量
    loop: 'auto',
    centeredSlides: true, //设置为true后 居中
  })

  // 热门景点  精选推荐
  var mySwiper = new Swiper('.hv-box', {
    slidesOffsetBefore: 10,
    slidesPerView: 'auto',
    loop: 'auto',
    // centeredSlides: true,
  })

})


//判断屏幕滚动的高度，向下滚动，右上角的省略号内容消失


$(".icon-shenglvehao").on("click", function (e) {
  if ($(".selectbox").is(":hidden")) {
    $(".selectbox").show();
  } else {
    $(".selectbox").hide();
  }
  $(document).on("click", function () {
    $(".selectbox").hide();
  });
  e.stopPropagation();
});
$(".selectbox").on("click", function (e) {
  e.stopPropagation();
});


//当滚动条的高度大于 轮播图的高度时候，让下拉框消失的 操作
// $(function () {
//   var banOffTop = $(".swiper-container").offset().top; //获取到距离顶部的垂直距离
//   // console.log(banOffTop);
//   var scTop = 0; //初始化垂直滚动的距离
//   $(document).scroll(function () {
//     scTop = $(this).scrollTop(); //获取到滚动条拉动的距离
//     //console.log(scTop);//查看滚动时，垂直方向上，滚动条滚动的距离
//     if (scTop >= banOffTop) {
//       //核心部分：当滚动条拉动的距离大于等于导航栏距离顶部的距离时，添加指定的样式
//       $(".selectbox").css('display','none');
//     }else {
//       console.log('当页面向下滚动，省略号的框消失')
//     }
//   })
// })

// 底部导航栏的tab切换  需要实现页面的跳转
// $('.bottom-nav div').click(function () {
//   var i = $(this).index();
//   $(this).addClass('select').siblings().removeClass('select');
// })