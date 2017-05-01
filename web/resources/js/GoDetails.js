window.onload = function(){
	$('#header .logo').on('click',function(){
		window.location.href = "Gwy_home.html";
	})
	$('.signout').on('click',function(){
		window.location.href="Gwy_home.html";
	})
	//点击“搜索”
	$('.searchbtn').on('click', function(){
		var data = {
			data: $('input#proText').val()
		};
		console.log(data);
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

	var vm = new Vue({
		el: '#amount',
		data: {
			count: 1
		}
	})

	//点击“加入购物车”
	$('button.button').on('click', function(event) {
		event.preventDefault();
		
	});
}