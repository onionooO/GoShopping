window.onload = function(){
	var bodyW = document.getElementsByTagName('body')[0].offsetWidth;
	console.log(bodyW);
    $('#settle').css('margin-left', (bodyW-354)/2 + 'px');
    var contentH = document.getElementById('content').offsetHeight+20;
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
	// Vue.component('counter', {
	// 	template: '<p>{{ count }}</p>',
	// 	data: function() {
	// 			return {
	// 				count: 1
	// 			}
	// 		}
	// })
	new Vue({
		el: '#v_app',
		data: {
			count: 1
		}
	})
	//点击“删除”
	$('.delete').on('click',function(){
		$(this).parent('p').parent('td').parent('tr').css('display', 'none');
	})
	//点击“结算”
	$('button.settle').on('click',function(){
		$('#settle').css('display','block');
		$('body').addClass('set_position');
	})
	//结算时点击“确认”
	$('button.submit').on('click',function(){
		alert('支付成功！');
		window.location.href="GoCart.html";
	})
	//结算时点击“取消”
	$('button.button').on('click',function(){
		$('#settle').css('display','none');
		$('body').removeClass('set_position');
	})
}