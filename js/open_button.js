$(document).ready(function(){


	$("a.open-sns").toggle(
		function() {
		$("div.block-sns > ul").stop().animate({"height":"365px"},500); //stop�� �ɾ�δ� ���� ����.
		},
		function() {
		$("div.block-sns > ul")
		});

});