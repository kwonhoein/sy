$(function(){
    var menu = $('#gnb>li'); //ū�޴�
	var wrap = $('#gnbWrap'); //gnb��ü�� ���ΰ� �ִ�
	var pageURL = location.href; //��ũ�ּ�
	var activeMenu;
	menu.on({ //ū�޴�
		mouseover:function(){ //���콺 �����ϸ�?
			var tg = $(this); //������ li
				menu.removeClass('on'); //���li
				tg.addClass('on');// li�� ������ li��
			var th = 68 + tg.children('.sGnbArea').height();
				//li>a�� ���̿� li>.sGnbArea�� ���̸� ����.
				wrap.stop().animate({height:th}); //th�� ��ŭ ���� �����϶�(�����)

		},
		mouseout:function(){
			var tg = $(this);
			tg.removeClass('on'); //onŬ���� ����
			var th = 68; //th�� a�� ���� ����
			wrap.stop().animate({height:th}); //a�� ���� ���̰� �Ǿ� ������� ��ó�� ����	
		}
	});
	menu.each(function(i){
		var tg = $(this); //������ li
		var sub = tg.find('> .sGnbArea > ul > li');
		var menuURL = tg.children('a').attr('href');
		var active = pageURL.indexOf(menuURL); //indexOf: ��ġ���� �˾Ƴ��� �޼ҵ�(menuURL�� ��ġ���� �˷���.)
		if(active > -1) activeMenu = tg; //acitve�� -1���� ũ�ٴ� ���� "������"�� ����.
		//-1���� ũ�ٸ� activeMEnu�� tg���� �־��ֶ�
		//ã�ٰ� ������ -1���� �����Ѵ�. 
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