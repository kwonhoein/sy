//<![CDATA[
$(document).ready(function(){
	
	var visual = $("div.product-new > ul > li");
	var button = $("div.product-new > ol.control > li");
	var setIntervalId;
	var current=0;
			
	button.on({		//버튼
		click:function(){		//버튼을 클릭하면
			var tg = $(this);	//지금 내가 선택한 button(li)
			var i = tg.index();	//button.index()
			button.removeClass('on');	//button을 클릭하면 on클레스를 삭제				(원래 li는 배경이 -16px인데 on클레스를 사용하여 0으로 돌아가라는 내용)
			tg.addClass('on');		//클릭한 button에만 on클레스를 추가.
			move(i); //클릭한 버튼의 index가 움직임(하단function에 값을 보내줌)
			return false;
		}
	});
	

	$('div.product-new').on({		
		mouseover:function(){		//wrap에 마우스 오버시
			clearInterval(setIntervalId)	//인터벌 메서드 삭제
		},
		mouseout:function(){	//마우스 아웃시에는
			timer();			//timer를 다시 실행
		}
	});
	timer();	//timer에 대한 정의
	function timer(){	//timer는 자동으로 화면이 슬라이드 되는 내용 ↓
		setIntervalId = setInterval(function(){	//setIntervalId은 반복함수에 대하 내용
			var n = current + 1;	//+1 반복(= current++)
			if(n == visual.size()){		//만약에 n의 값이 li 갯수와 같아진다면
				n = 0; //n은 다시 0
		}
		//button.eq(n).trigger('click'); 또는↓				(.trigger:강제실행)
		button.eq(n).click();	//클릭하지 않았지만 강제로 클릭한것처럼 만들어줌.
								//왜 그래야 하냐면 위에서 클릭시 on클래스가 변경 되도록 하였는데. 클릭되지 않아서 클래스가 변경되지 않기 때문.
		}, 2000);// 5초에 한번 반복
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