window.onload = function () {
    var bodyW = document.getElementsByTagName('body')[0].offsetWidth;
    $('#signBox').css('margin-left', (bodyW-354)/2 + 'px');
    var contentH = document.getElementById('content').offsetHeight;
    // console.log(contentH);
    $('#footer').css('margin-top', contentH);

    $(function(){
        // 登录前 点击“登录”按钮
        $('.sign #signinbtn').on('click', function(){
            $('#signBox').css('display', 'block');
            $('body').addClass('set_position');
        })
        // 登录前 点击“注册”按钮
        $('.sign #signupbtn').on('click',function() {
            $('body').addClass('set_position');
            $('#signBox').css('display','block');
            $('.signin').removeClass('active');
            $('.signup').addClass('active');
            $('#signin').removeClass('active');
            $('#signup').addClass('active');
        })
        // 登录注册时点击“取消”按钮
        $('.button').on('click', function(){
            location.reload();
        })
        //登录时未注册点击“这里”链接
        $('.clickhere').on('click',function(){
            $('.sign #signupbtn').click();
        })
        //填完信息点击“登录”按钮
        $('.signinbtn').on('click',function(){
            var phone = $('#inputPhone').val();
            var password = $('#inputPassword').val();
            var remember;
            if($('#remember').attr('checked','checked')){
                remember = 1;
            }
            else{
                remember = 0;
            }
            var data = {
                phone: phone,
                password: password,
                remember: remember,
                service:  'userService',
                method:   'login'
            }
            $.ajax({
                url:      '/shoppingSystem/FrontController',
                type:     'post',
                data:     data,
                dataType: 'json',
                success:  function(result){
                    if(result === 1){
                        $('body').removeClass('set_position');
                        $('#nav .sign').css('display','none');
                        $('#nav .sel').css('display','block');
                        $('#signBox').css('display','none');
                        $('.navshow').css('display','block');
                        $('#content .showPro').css('display', 'block');
                        var contentH = document.getElementById('content').offsetHeight + 80;
                        $('#footer').css('margin-top', contentH);
                    }
                    else if(result === 0){
                        alert("密码错误！");
                    }
                    else{
                        alert("该用户不存在！");
                    }
                },
                error: function(){
                    // alert("请求失败，请稍后重试！");
                    $('body').removeClass('set_position');
                    $('#nav .sign').css('display','none');
                    $('#nav .sel').css('display','block');
                    $('#signBox').css('display','none');
                    $('.navshow').css('display','block');
                    $('#content .showPro').css('display', 'block');
                    var contentH = document.getElementById('content').offsetHeight + 80;
                    // console.log(contentH);
                    $('#footer').css('margin-top', contentH);
                }
            })
        })
        //注册时点击“注册”按钮
        $('.signupbtn').on('click',function(){
            var phone = $('#inputPhone').val();
            var username = $('#inputUsername').val();
            var password = $('#inputPassword').val();
            var again = $('#inputPwAgain').val();
            if (phone != again) {
                alert("两次输入密码不一致！");
            }
            else{
                var data = {
                    phone: phone,
                    username: username,
                    password: password,
                    service:  'userService',
                    method:   'register'
                }
                $.ajax({
                    url:      '/shoppingSystem/FrontController',
                    type:     'post',
                    data:     data,
                    dataType: 'json',
                    success:  function(result){
                        if(result === 1){
                            alert("注册成功！\n欢迎使用Go物缘，快来愉快购物吧~");
                            $('.sign #signinbtn').click();
                        }
                        else if(result === -1){
                            alert("该手机号已被注册！");
                        }
                        else{
                            alert("该用户名已被使用！");
                        }
                    },
                    error: function(){
                        alert("请求失败，请稍后重试！");
                        // alert("注册成功！\n欢迎使用Go物缘，快来愉快购物吧~");
                        // $('.sign #signinbtn').click();
                    }
                })
            }
        })
        //搜索商品
        $('.search .searchbtn').on('click',function(){
            var proText = $('#proText').val();
            var data = {
                proText: proText,
                service:  'CommodityService',
                method:   'getAllCommodityByClassName'
            }
            $$.ajax({
                url:      '/shoppingSystem/FrontController',
                type:     'post',
                dataType: 'json',
                data:     data,
                success: function(result){
                    window.location.href=result;    //转至该类商品所在页面
                },
                error: function() {
                    alert("请求失败，请稍后重试！");
                }
            })
        })
        //点击图片或文字说明跳转至商品详情页面
        $('.pro img').on('click',function(){
            window.location.href = "GoDetails.html";
        })
        $('.pro p.description').on('click',function(){
            window.location.href = "GoDetails.html";
        })
            //点击“注销”之后
            $('.signout').on('click', function(){
            window.location.href="Gwy_home.html";
        })
    })
}