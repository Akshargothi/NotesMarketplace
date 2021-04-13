function validateform(){  
var password1=document.signupform.password1.value; 
var password2=document.signupform.password2.value; 
var email = document.signupform.email.value;
  
if(password1.length<6){  
  alert("Password must be at least 6 characters long.");  
  return false;  
  }  
    
else if(password1 != password2){
    alert("password not match");
    return false;
}
    
else if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
  {
    return (true)
  }

else{
    alert("You have entered an invalid email address!")
    return false;
}
    
}  
/*
function show(){
    var btn = document.getElementById("signupbtn");
    var model = document.getElementById("successnote");
    btn.onclick(function(){
        model.style.display="block";
    });
}*/

/*$(function () {
    
    $("#signupbtn").onclick(function(){
       $("#successnote").display("show"); 
    });
    
});*/