// create input tag
var password=document.createElement("input");
password.type="password";
password.placeholder="Enter your password";
password.classList.add("password");
password.id="pass";

// create i tag
var icon1=document.createElement("i");
icon1.classList.add("fa");
icon1.classList.add("fa-eye");
icon1.classList.add("myicon");
icon1.classList.add("eye");

var icon2=document.createElement("i");
icon2.classList.add("fa");
icon2.classList.add("fa-eye-slash");
icon2.classList.add("myicon");
icon2.classList.add("eyeClose");

//create div for "input" and "i" 
var upside=document.createElement("div");
upside.classList.add("upside");
upside.appendChild(password);
upside.appendChild(icon1);
upside.appendChild(icon2);

//create br tag
var breakLine=document.createElement("br");

//create span tag
var forgot=document.createElement("span");
forgot.classList.add("forgot");
forgot.innerHTML="Forgot password?";


//create a tag
var anchor=document.createElement("a");
anchor.href="#";
anchor.appendChild(forgot);

//create button 
var button=document.createElement("button");
button.classList.add("button");
button.innerHTML="Next";
// document.body.appendChild(button);

//div for "forgot" and "button"
var downside=document.createElement("div");
downside.classList.add("downside");
downside.appendChild(anchor);
downside.appendChild(button);

//create div tag
var wrapper=document.createElement("div");
wrapper.classList.add("wrapper");
wrapper.appendChild(upside);
wrapper.appendChild(breakLine);
wrapper.appendChild(downside);

document.body.appendChild(wrapper);

icon2.addEventListener("click", function(event){
    if(password.type=="password"){
        password.type="text";
        event.target.style.display="none";
        icon1.style.display="block";
    }
});

icon1.addEventListener("click", function(event){
    if(password.type=="text"){
        password.type="password";
        event.target.style.display="none";
        icon2.style.display="block";
    }
});

button.addEventListener("click", function(event){
    document.write("Welcome to this world");
})