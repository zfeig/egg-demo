<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>egg view</title>
</head>
<body>
	<style type="text/css">
		a{text-decoration: none;color:red;}
	</style>
	<div class="news-view view">
      {% for item in list %}
        <div class="item">
          <a href="{{ item.id }}">[title]:{{ item.title }}&nbsp;&nbsp;[author]:{{item.author}}&nbsp;&nbsp;[time]:{{helper.ftime(item.time)}}</a>
        </div>
      {% endfor %}
    </div>
</body>
</html>