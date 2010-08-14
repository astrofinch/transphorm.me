$(document).ready(
	function() {
		$('.edit-milestone').not('.last').each(
			function() {
				var panel = $(this);
				panel.find('.panel').hide();
				panel.find('h3 a').bind('click',
					function(e) {
						e.preventDefault();
						panel.find('.panel').slideToggle();
					}
				);
			}
		);
	}
);