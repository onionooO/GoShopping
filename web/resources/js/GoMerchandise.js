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
	var images = [];
	for(var i=1;i<20;i++){
		images.push(i+'.jpg');
	}
	//点击“加载更多”之后，再显示12个图片
	$('#content .more').on('click',function(){
		// var pros = [];
		// for(var i=20;i>8;i--){
		// 	pros.push('<img src="../resources/Images/flowers/'+i+'.jpg" alt="图片无法显示">\
		// 						<p class="description">2017夏季新款女装 气质长裙 这个可能适合我</p>\
		// 						<p class="price">￥168.00</p>')
		// }
		// console.log(pros);
		// Vue.component('todo-item',{
		// 	props: ['todo'],
		// 	template: '<div class="pro">\
		// 	{{ pro }}\
		// 	</div>'
		// })
		// var vm = new Vue({
		// 	el: "#imgBox",
		// 	data: {
		// 		pros: pros
		// 	}
		// })
		for(var i=12;i>0;i--){
			var k = parseInt(Math.random()*33+1);
			var parent = document.getElementsByClassName('tab-pane active')[0];
			var box = document.createElement('div');
			box.className = "pro";
			parent.appendChild(box);
			var img = document.createElement('img');
			var folder = "";
			if(parent.id === "all"){
				var div = document.getElementsByClassName('images tab-pane');
				// console.log(div);
				var index = parseInt(Math.random()*div.length);
				// console.log(index);
				if(index === 0){
					index += 1;
				}
				folder = div[index].id;
			}
			else{
				folder = parent.id;
			}
			console.log(folder);
			img.src = "../resources/Images/"+folder+"/"+k+".jpg";
			box.appendChild(img);
			var p1 = document.createElement('p');
			p1.className = "description add";
			box.appendChild(p1);
			$("p.description.add").html("夏季时尚气质雪纺衬衫 我可以试试");
			var p2 = document.createElement('p');
			p2.className = "price add";
			box.appendChild(p2);
			$('p.price.add').text('￥109.00');

			//点击图片或文字说明跳转至商品详情页面
			GoDetails();
		}
	})
	//点击图片或文字说明跳转至商品详情页面
	GoDetails();
}
function showMerchandise(src) {
	
}
function GoDetails(){
	//点击图片或文字说明跳转至商品详情页面
	$('.pro img').on('click',function(){
		window.location.href = "GoDetails.html";
	})
	$('.pro p.description').on('click',function(){
		window.location.href = "GoDetails.html";
	})
}