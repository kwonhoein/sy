//<![CDATA[
$(document).ready(function(){
	
	var $container = $("div.menu-wrap > ul");

	var $button = $("div.menu-wrap > ol.slides-pagenation > li");
			
				
	$button.on("click", function() {

		var tg = $(this);
		var idx = tg.index();

		$button.removeClass();
		$(this).addClass("on");
		$container.stop().animate({"left":-228 * idx},1000);

		return false;

	});

});
//]]>