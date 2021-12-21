$(function(){ 

	var visual = $('#main_slides > ul.slides_container > li'); //ū �̹���
	var button = $('#main_slides > ol.slides-pagenation > li');	//��ư��
	var current = 0;	//����
	var setIntervalId;					//on�� �������� �̺�Ʈ�� ���� ����Ҷ� ����ϴ� �޼ҵ�
	button.on({		//��ư
		click:function(){		//��ư�� Ŭ���ϸ�
			var tg = $(this);	//���� ���� ������ button(li)
			var i = tg.index();	//button.index()
			button.removeClass('on');	//button�� Ŭ���ϸ� onŬ������ ����				(���� li�� ����� -16px�ε� onŬ������ ����Ͽ� 0���� ���ư���� ����)
			tg.addClass('on');		//Ŭ���� button���� onŬ������ �߰�.
			move(i); //Ŭ���� ��ư�� index�� ������(�ϴ�function�� ���� ������)
		}
	});
	$('#prev').click(function(){
				var n = current -1;
				if(n == -1) n = visual.size()-1;
							move(n);
				button.eq(n).trigger('click');
						return false;
	});
	$('#next').click(function(){
				var n = current +1;
				if(n == visual.size()) n=0;
							move(n);
				button.eq(n).trigger('click');
						return false;
	});

	$('#main_slides').on({		
		mouseover:function(){		//wrap�� ���콺 ������
			clearInterval(setIntervalId)	//���͹� �޼��� ����
		},
		mouseout:function(){	//���콺 �ƿ��ÿ���
			timer();			//timer�� �ٽ� ����
		}
	});
	timer();	//timer�� ���� ����
	function timer(){	//timer�� �ڵ����� ȭ���� �����̵� �Ǵ� ���� ��
		setIntervalId = setInterval(function(){	//setIntervalId�� �ݺ��Լ��� ���� ����
			var n = current + 1;	//+1 �ݺ�(= current++)
			if(n == visual.size()){		//���࿡ n�� ���� li ������ �������ٸ�
				n = 0; //n�� �ٽ� 0
		}
		//button.eq(n).trigger('click'); �Ǵ¡�				(.trigger:��������)
		button.eq(n).click();	//Ŭ������ �ʾ����� ������ Ŭ���Ѱ�ó�� �������.
								//�� �׷��� �ϳĸ� ������ Ŭ���� onŬ������ ���� �ǵ��� �Ͽ��µ�. Ŭ������ �ʾƼ� Ŭ������ ������� �ʱ� ����.
		}, 5000);// 5�ʿ� �ѹ� �ݺ�
	}

	function move(i){
		if(current == i) return;

		var currentEl = visual.eq(current);
		var nextEl = visual.eq(i);

		currentEl.css({left:'0%'}).stop().animate({left:'-100%'});
		nextEl.css({left:'100%'}).stop().animate({left:'0%'});

		current = i;
	}
});