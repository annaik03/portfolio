	$('.slider').slick({
		fade:true,//切り替えをフェードで行う。初期値はfalse。
		autoplay: true,//自動的に動き出すか。初期値はfalse。
		autoplaySpeed: 3000,//次のスライドに切り替わる待ち時間
		speed:1000,//スライドの動きのスピード。初期値は300。
		infinite: true,//スライドをループさせるかどうか。初期値はtrue。
		slidesToShow: 1,//スライドを画面に3枚見せる
		slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
		arrows: false,//左右の矢印あり
		dots: false,//下部ドットナビゲーションの表示
        pauseOnFocus: false,//フォーカスで一時停止を無効
        pauseOnHover: false,//マウスホバーで一時停止を無効
        pauseOnDotsHover: false,//ドットナビゲーションをマウスホバーで一時停止を無効
});




$('.slider02').slick({
		infinite: true,//スライドをループさせるかどうか。初期値はtrue。
		slidesToShow: 4,//スライドを画面に3枚見せる
		slidesToScroll: 4,//1回のスクロールで3枚の写真を移動して見せる
		arrows: true,
		prevArrow: '<img src="images/arrow_l.svg" class="slick-prev">',//矢印部分PreviewのHTMLを変更
		nextArrow: '<img src="images/arrow_r.svg" class="slick-next">',//矢印部分NextのHTMLを変更
		dots: false,//下部ドットナビゲーションの表示
		responsive: [
            {
			breakpoint: 1200,//モニターの横幅が1200px以下の見せ方
			settings: {
				slidesToShow: 4,//スライドを画面に2枚見せる
				slidesToScroll: 4,//1回のスクロールで2枚の写真を移動して見せる
			}
		},
			{
			breakpoint: 769,//モニターの横幅が769px以下の見せ方
			settings: {
				slidesToShow: 2,//スライドを画面に2枚見せる
				slidesToScroll: 2,//1回のスクロールで2枚の写真を移動して見せる
			}
		},
	]
	});