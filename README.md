# TuringRobot
> 此项目是使用了图灵机器人API开发的一款网页聊天应用，可以与图灵机器人进行文字聊天。

该应用采用前端开发技术，使用了jquery-easyui作为前端页面模板，采用AJAX请求图灵机器人API数据，然后对数据进行简单的解析，完成聊天。

> 图灵机器人API [http://www.tuling123.com/openapi/api](http://www.tuling123.com/openapi/api)    

- 接口地址   
[http://www.tuling123.com/openapi/api](http://www.tuling123.com/openapi/api)      

- 请求方式    
HTTP GET 

- 请求参数    

		{
			"key": "APIKEY",
			"info": "hello",
			"loc": "北京",
			"userid“： "123456"
		}
key和info是必要参数，loc和userid是可选参数。

- 返回数据

		{
			"code": 10000,
			"text": "你也非常好"
		}

code：文本类标识码    
text：结果
