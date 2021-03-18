jQuery(document).ready(function($){
	$.fn.textToggle = function(cls, str) {
		return this.each(function(i) {
			$(this).click(function() {
				var c = 0, el = $(cls).eq(i), arr = [str,el.text()];
				return function() {
					el.text(arr[c++ % arr.length]);
				}}());
		})};
		$(function(){
			$('.sh_nmr').textToggle(".sh_nmr","").click();
			$('.sh_nmr').textToggle(".num_hide","ХХ-ХХ").click();
		});
	});

jQuery(function($){
	$("#InputTel1").mask("+7(999) 999-9999");
	$("input[data-bme='Ваше имя']").mask("+7(999) 999-9999");
	console.log($("input[data-bme='Ваше имя']"))

	});


