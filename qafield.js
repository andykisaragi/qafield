(function ($) {
	$(document).ready(function(){
		$(".qafield-reveal a").click(function(){
			var id = $(this).data("id");
			var answerid = '#answer-' + id;
			$(answerid).fadeIn();
			$(this).fadeOut();
		});
	});
})(jQuery);