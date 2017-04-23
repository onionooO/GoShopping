window.onload = function(){
	$('nav .logo').on('click', function(){
		window.location.href = "Go.html";
	})
	var data = {
		data: $('input').val()
	};
	$('.searchbtn').on('click', function(){
		$.ajax({
			url:      '/path/to/file',
			type:     'post',
			dataType: 'json',
			data:     data,
			success:  function(result){
				showMerchandise(result);
			},
			error:    function(result) {
				alert('服务器繁忙，请稍后重试！');
			}
		})
	})
	
}