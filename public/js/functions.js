function register () {

	var username  = document.getElementById('username').value;
	var name  = document.getElementById('name').value;
	var lastname  = document.getElementById('lastname').value;
	var password  = document.getElementById('pwd').value;
	//var password = md5(password_clean);
	var dob  = document.getElementById('dob').value;
	var email  = document.getElementById('email').value;	
	$.post('/register', {username: username, name: name,lastname: lastname, password:password, dob:dob, email:email},function(data){
		alert(data);
		
	});


}
