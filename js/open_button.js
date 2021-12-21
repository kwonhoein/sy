$(document).ready(function(){


	$("a.open-sns").toggle(
		function() {
		$("div.block-sns > ul").stop().animate({"height":"365px"},500); //stop을 걸어두는 것이 좋음.
		},
		function() {
		$("div.block-sns > ul")
		});

});