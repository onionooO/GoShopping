window.onload = function () {
	var bodyW = document.getElementsByTagName('body')[0].offsetWidth;
    $('#signBox').css('margin-left', (bodyW-354)/2 + 'px');
    $(function(){
        $('#signinbtn').on('click', function(){
            $('#signBox').css('display', 'block');
            $('body').css('position','fixed');
        })
        $('#signupbtn').on('click',function() {
        	$('body').css('position','fixed');
        	$('#signBox').css('display','block');
        	$('.signin').removeClass('active');
        	$('.signup').addClass('active');
        	$('#signin').removeClass('active');
        	$('#signup').addClass('active');
        })
        $('.button').on('click', function(){
            $('#signBox').css('display', 'none');
            location.reload();
        })
        $('.clickhere').on('click',function(){
        	$('#signupbtn').click();
        })
        $('.submit').on('click',function(){
            var username = $('#inputUsername').val();
            var password = $('#inputPassword').val();
            var data = {
                username: username,
                password: password
            }
            $.ajax({
                url:      '/login',
                type:     'post',
                data:     data,
                dataType: 'json',
                success:  function(result){
                    if(result.status === 1){
                        $('#nav1 .sign').css('display','none');
                        $('#nav1 .sel').css('display','block');
                    }
                    else if(result.status === 0){
                        alert("密码错误！");
                    }
                    else{
                        alert("用户名不存在！");
                    }
                },
                error: function(){
                    alert("请求失败，请稍后重试！");
                }
            })
        })
    })
}