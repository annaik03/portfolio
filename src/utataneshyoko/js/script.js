/*おすすめメニューのスライダー*/
$('.slider').slick({
		infinite: true,//スライドをループさせるかどうか。初期値はtrue。
		slidesToShow: 1,//スライドを画面に3枚見せる
		slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
		arrows: true,
		prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
		nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
		dots: false,//下部ドットナビゲーションの表示
	});


/*上に戻るボタンをスクロールしたら表示*/
$('#page_top').hide();
 $(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
   $('#page_top').fadeIn();
  } else {
   $('#page_top').fadeOut();
  }
});
 
$('#page_top').click(function () {
 $('body,html').animate({
  scrollTop: 0
 }, 700);
 return false;
	
});


/*ハンバーガーメニュー*/
$(".openbtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});