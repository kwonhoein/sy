$(function(){
    var menu = $('#gnb>li'); //큰메뉴
	var wrap = $('#gnbWrap'); //gnb전체를 감싸고 있는
	var pageURL = location.href; //링크주소
	var activeMenu;
	menu.on({ //큰메뉴
		mouseover:function(){ //마우스 오버하면?
			var tg = $(this); //선택한 li
				menu.removeClass('on'); //모든li
				tg.addClass('on');// li중 선택한 li만
			var th = 68 + tg.children('.sGnbArea').height();
				//li>a의 높이와 li>.sGnbArea의 높이를 더함.
				wrap.stop().animate({height:th}); //th값 만큼 값을 변경하라(길어짐)

		},
		mouseout:function(){
			var tg = $(this);
			tg.removeClass('on'); //on클레스 지움
			var th = 68; //th는 a와 같은 높이
			wrap.stop().animate({height:th}); //a와 같은 높이가 되어 사라지는 것처럼 보임	
		}
	});
	menu.each(function(i){
		var tg = $(this); //선택한 li
		var sub = tg.find('> .sGnbArea > ul > li');
		var menuURL = tg.children('a').attr('href');
		var active = pageURL.indexOf(menuURL); //indexOf: 위치값을 알아내는 메소드(menuURL의 위치값을 알려줌.)
		if(active > -1) activeMenu = tg; //acitve가 -1보다 크다는 얘기는 "있으면"을 뜻함.
		//-1보다 크다면 activeMEnu에 tg값을 넣어주라
		//찾다가 없으면 -1값을 리턴한다. 
		sub.each(function(j){
			var tg = $(this);
			var subURL = tg.children('a').attr('href');
			active = pageURL.indexOf(subURL);
			if(active > -1) activeMenu = tg;
		});

		sub.on({
				mouseover:function(event){
					var tg = $(this);
					sub.removeClass('on');
					tg.addClass('on');
				},
				mouseout:function(){
					var tg = $(this);
					tg.removeClass('on');

					 
				}
		});

	});

});