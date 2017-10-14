/*
 * author: 黄仰纯
 * 未经允许不得私自直接使用
 * 有问题请联系：QQ：951813006；  WeChat：13416141219；  email：yangchun6868@163.com
 */

window.onload = function(){
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
		// var data = {
		// 	data: $('input#proText').val()
		// };
		// console.log(data);
		// $.ajax({
		// 	url:      '/path/to/file',
		// 	type:     'post',
		// 	dataType: 'json',
		// 	data:     data,
		// 	success:  function(result){
		// 		showMerchandise(result);
		// 	},
		// 	error:    function(result) {
		// 		alert('服务器繁忙，请稍后重试！');
		// 	}
		// })
	})
	//点击图片或文字说明跳转至商品详情页面
    $('.pro img').on('click',function(){
        window.location.href = "GoDetails.html";
    })
    $('.pro p.description').on('click',function(){
        window.location.href = "GoDetails.html";
    })
}