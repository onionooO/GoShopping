window.onload = function(){
	var bodyW = document.getElementsByTagName('body')[0].offsetWidth;
	// console.log(bodyW);
    $('#settle').css('margin-left', (bodyW-354)/2 + 'px');
	var contentH = document.getElementById('content').offsetHeight;
    // console.log(contentH);
    $('#footer').css('margin-top', contentH);

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
		// console.log(data);
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
			count: 0
		}
	})

	//点击“加入购物车”
	$('button.button').on('click', function(event) {
		event.preventDefault();
		var sizes = document.getElementsByName('size');
		var size = "blank";
		for(var i=0;i<sizes.length;i++){
			if(sizes[i].checked){
				size = sizes[i].value;
			}
		}
		var colors = document.getElementsByName('color');
		var color = 'blank';
		for(var i=0;i<colors.length;i++){
			if(colors[i].checked){
				color = colors[i].value;
			}
		}
		var amount = $('#amount .cnt p').text();
		var data = {
			size:   size,
			color:  color,
			amount: amount
		}
		if(size === 'blank'){
			alert("请选择尺寸！");
		}
		else if(color === 'blank'){
			alert("请选择颜色！");
		}
		else if(amount == 0){
			alert("请选择数量！");
		}
		else{
			$.ajax({
				url:      '/path/to/file',
				type:     'post',
				dataType: 'json',
				data:     data,
				success:  function(result){
					alert("已成功加入购物车！");
				},
				error:    function(result) {
					alert('服务器繁忙，请稍后重试！');
					// alert("已成功加入购物车！");
				}
			})
		}
		
	});
	//点击“立即购买”
	$('button.buy').on('click',function(evnet){
		event.preventDefault();
		$('#settle').css('display','block');
		$('body').addClass('set_position');
	})
	//结算时点击“确认”
	$('button.submit').on('click',function(){
		alert('支付成功！');
		location.reload();
	})
	//结算时点击“取消”
	$('button.button').on('click',function(){
		$('#settle').css('display','none');
		$('body').removeClass('set_position');
	})
}