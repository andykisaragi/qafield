(function ($) {
	$(document).ready(function(){
		$(".qafield-reveal a").click(function(){
			var id = $(this).data("id");
			var answerid = '#answer-' + id;
			$(answerid).css('opacity',1	);
			$(this).fadeOut();
		});
	});
})(jQuery);