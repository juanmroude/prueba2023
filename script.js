$(document).ready(function() {

	$('#categoria-select').change(function() {
	  var categoria = $(this).val();
	  if (categoria !== 'todos') {
		$('.producto-card').each(function() {
		  if ($(this).data('categoria') === categoria) {
			$(this).show();
		  } else {
			$(this).hide();
		  }
		});
	  } else {
		$('.producto-card').show();
	  }
	});
  
  });
  