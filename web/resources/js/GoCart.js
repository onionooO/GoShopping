/*
 * author: 黄仰纯
 * 未经允许不得私自直接使用
 * 有问题请联系：QQ：951813006；  WeChat：13416141219；  email：yangchun6868@163.com
 */

window.onload = function(){
	var bodyW = document.getElementsByTagName('body')[0].offsetWidth;
	// console.log(bodyW);
    $('#settle').css('margin-left', (bodyW-354)/2 + 'px');
    var contentH = document.getElementById('content').offsetHeight+20;
    // console.log(contentH);
    $('#footer').css('margin-top', contentH);

	//点击导航栏前面的"Go"logo
	$('#header .logo').on('click',function(){
		window.location.href = "Gwy_home.html";
	})
	//点击“注销”
	$('.signout').on('click',function(){
		window.location.href="Gwy_home.html";
	})
	//点击“搜索”
	$('.searchbtn').on('click', function(){
		var data = $('input#proText').val();
        if(data.indexOf('裙') != -1){
            location.href="GoFemaleClothes.html";
        }
        else if(data.indexOf('女') != -1){
            if(data.indexOf('鞋') != -1 || data.indexOf('靴') != -1){
                location.href="GoFemaleShoes.html";
            }
            else{
                location.href="GoFemaleClothes.html";
            }
        }
        else if(data.indexOf('男') != -1){
            if(data.indexOf('衣') != -1 || data.indexOf('裤') != -1){
                location.href="GoMaleClothes.html";
            }
            else{
                location.href="GoMaleShoes.html";
            }
        }
        else if (data.indexOf('花') != -1) {
            location.href="GoFlowers.html";
        }
        else{
            location.href="GoSnack.html";
        }
	// 	var data = {
	// 		data: $('input#proText').val()
	// 	};
	// 	console.log(data);
	// 	$.ajax({
	// 		url:      '/path/to/file',
	// 		type:     'post',
	// 		dataType: 'json',
	// 		data:     data,
	// 		success:  function(result){
	// 			showMerchandise(result);
	// 		},
	// 		error:    function(result) {
	// 			alert('服务器繁忙，请稍后重试！');
	// 		}
	// 	})
	})
	// Vue.component('counter', {
	// 	template: '<p>{{ count }}</p>',
	// 	data: function() {
	// 			return {
	// 				count: 1
	// 			}
	// 		}
	// })
	// new Vue({
	// 	el: '#app1',
	// 	data: {
	// 		count: 1
	// 	}
	// })
	// new Vue({
	// 	el: '#app2',
	// 	data: {
	// 		count: 1
	// 	}
	// })
	
	//点击“删除”
	var pros = document.getElementsByName('image');
	var number = pros.length;
	$('.delete').on('click',function(){
		$(this).parent('p').parent('td').parent('tr').css('display', 'none');
		number--;
		if(number == 0) {
			$('.empty').css('display', 'block');
			$('button.settle').attr('disabled', 'disabled');
		}
	})
	//点击“结算”
	var pros = document.getElementsByName('image');
	if(pros.length === 0) {
		$('button.settle').attr('disabled', 'disabled');
	}
	else{
		$('button.settle').removeAttr('disabled');
	}
	$('button.settle').on('click',function(){
		var pros = document.getElementsByName('image');
		var flag = false;
		for(var i=0;i<pros.length;i++){
			if(pros[i].checked){
				flag = true;
			}
		}
		if(flag){
			$('#settle').css('display','block');
			$('body').addClass('set_position');
		}
		else{
			alert("请选择商品！");
		}
	})
	//结算时点击“确认”
	$('button.submit').on('click',function(){
		alert('支付成功！');
		$('body').removeClass('set_position');
		$('#settle').css('display','none');
		$('tr').css('display', 'none');
		$('.empty').css('display', 'block');
		$('button.settle').attr('disabled', 'disabled');
	})
	//结算时点击“取消”
	$('button.button').on('click',function(){
		$('#settle').css('display','none');
		$('body').removeClass('set_position');
	})
}