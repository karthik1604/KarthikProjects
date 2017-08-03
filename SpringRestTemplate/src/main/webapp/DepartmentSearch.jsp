<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body>
<div class="container">
<div class="jumbotron">
<h2 align="center">Department Search</h2>
</div>

		
		<form action="departmentSearch" class="form-horizontal">
		<div class="form-group">
		<label for="departmentName">Department Name: </label>
		 <input type="text" class="form-control" id="departmentName" name="departmentName">
		</div>
		<button type="submit" class="btn-btn-info">
		<span class="glyphicon glyphicon-search"></span> Search		
		</button>
			
			
			
		</form>
</div>
</body>
</html>