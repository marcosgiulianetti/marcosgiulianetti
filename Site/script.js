function send(){
	var name=document.getElementById('username');
	var pass=document.getElementById('password');
	var num=0;

	if(name.value==""){
		alert("Nome de usuário não informado.");
	}
	else if(pass.value==""){
		alert("Senha não informada.");
	}
	else{
		window.location='principal.html';
	}
}
