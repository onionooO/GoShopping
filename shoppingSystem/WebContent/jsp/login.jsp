<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Insert title here</title>
</head>
<body bgcolor=#CED3FF>
	<center>
		<hr>
		<h1>登录界面</h1>
		<hr>
		<!-- 跳出jsp目录
		也可以/shoppingSystem/DispatcherServlet
		 -->
		<form
			action="/shoppingSystem/FrontController?service=userService&method=login"
			method="post">
			用户名<input type="text" name="username"><br> <br>
			密&nbsp;码<input type="password" name="password"><br> <br>
			<input type="submit" value="登录"> <input type="reset"
				value="重设"><br>
		</form>
		<hr>
	</center>
</body>
</html>