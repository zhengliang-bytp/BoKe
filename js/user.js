function fn(){
	var obj=localStorage.getItem("user")
	if(obj){
	var json=JSON.parse(obj)
	return  json.token;
	console.log(json.token)
	}
}
function user(){
	// var str;
	var defer=$.Deferred();
	$.ajax({
		url:"http://localhost/user/getUser",
		type:"post",
		headers:{
		token:fn()
		},
		success:function(d){
			return defer.resolve(d)
		}
	})
	return defer.promise();
	
}