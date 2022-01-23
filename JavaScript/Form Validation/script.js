var container = document.createElement("div");
container.classList.add("container");
container.style.border = "none";
container.style.padding = "1%";
container.style.width = "400px";
container.style.boxShadow = "0 2px 10px rgb(0 0 0 / 30%)";
container.style.borderRadius = "5px";
container.style.margin = "3% 35% 0 35%"

var heading = document.createElement("h2");
heading.innerHTML = "Register with us";
heading.classList.add("heading");
heading.style.textTransform = "Capitalize";
heading.style.textAlign = "center";
heading.style.fontFamily = "Arial, Helvetica, sans-serif";

var userName = document.createElement("span");
userName.classList.add("userName");
userName.innerHTML = "Username";
userName.style = `
color:rgb(124, 111, 111);
font-size:18px;
font-family:Arial, Helvetica, sans-serif;
`;

var userField = document.createElement("input");
userField.type = "text";
userField.classList.add("userField");
userField.placeholder = "Enter username";
userField.style = `
border:2px solid #f0f0f0;
width:100%;
padding:10px;
margin-bottom:20px;
`;

var userSpan = document.createElement("span");
userSpan.innerHTML = "Username must be at least 3 characters";
userSpan.style=`
    font-size:14px;
    color:red;
`;

var userWarn = document.createElement("div");
userWarn.style=`
    margin-top : -20px;
    margin-bottom : 10px;
    display:none;
`;

userWarn.appendChild(userSpan);

var email = document.createElement("span");
email.classList.add("email");
email.innerHTML = "Email";
email.style=`
    color:rgb(124, 111, 111);
    font-size:18px;
    font-family:Arial, Helvetica, sans-serif;
`;

var emailField = document.createElement("input");
emailField.type = "email";
emailField.classList.add("emailField");
emailField.placeholder = "Enter email";
emailField.style=`
    border:2px solid #f0f0f0;
    width:100%;
    padding :10px;
    margin-bottom:20px;
`;

var emailSpan = document.createElement("span");
emailSpan.innerHTML = "Email is not valid";
emailSpan.style=`
    font-size:14px;
    color:red;
`;

var emailWarn = document.createElement("div");
emailWarn.style=`
    margin:-20px 0 10px 0;
    display:none;
`;

emailWarn.appendChild(emailSpan);

var password = document.createElement("span");
password.classList.add("password");
password.innerHTML = "Password";
password.style=`
    color :rgb(124, 111, 111);
    font-size :18px;
    font-family:Arial, Helvetica, sans-serif;
`;

var passwordField = document.createElement("input");
passwordField.type = "password";
passwordField.classList.add("passwordField");
passwordField.placeholder = "Enter password";
passwordField.style=`
    border:2px solid #f0f0f0;
    width:100%;
    padding:10px;
    margin-bottom :20px;
`;

var passwordSpan = document.createElement("span");
passwordSpan.innerHTML = "Password must be at least 6 characters";
passwordSpan.style=`
    color:red;
    font-size:14px;
`;

var passwordWarn = document.createElement("div");
passwordWarn.style=`
    margin:-20px 0 10px 0;
    display:none;   
`;

passwordWarn.appendChild(passwordSpan);

var passwordCon = document.createElement("span");
passwordCon.classList.add("password");
passwordCon.innerHTML = "Confirm Password";
passwordCon.style=`
    color:rgb(124, 111, 111);
    font-size:18px";
    font-family:Arial, Helvetica, sans-serif;
`;

var passwordConField = document.createElement("input");
passwordConField.type = "password";
passwordConField.classList.add("passwordConField");
passwordConField.placeholder = "Enter password again";
passwordConField.style=`
    border:2px solid #f0f0f0;
    width :100%;
    padding:10px;
    margin-bottom :20px;
`;

var passwordConSpan = document.createElement("span");
passwordConSpan.innerHTML = "Confirm password is required";
passwordConSpan.style=`
color :red;
font-size:14px;
`;

var passwordConWarn = document.createElement("div");
passwordConWarn.style=`
margin:-20px 0 10px 0;
display:none;   
`;

passwordConWarn.appendChild(passwordConSpan);

var passwordNotMatch = document.createElement("span");
passwordNotMatch.innerHTML = "Password do not match";
passwordNotMatch.style=`
    color :red;
    font-size:14px;
`;

var NotMatchWarn = document.createElement("div");
NotMatchWarn.style=`
margin:-20px 0 10px 0;
display:none;   
`;

NotMatchWarn.appendChild(passwordNotMatch);

var button = document.createElement("button");
button.classList.add("button");
button.innerHTML = "Submit";
button.style=`
    width:320px;
    padding :10px;
    background-color:#3498db;
    border:2px solid #3498db;
    border-radius:4px;
    color :white;
    margin-top :20px;
    font-size :16px;
`;

var divMain = document.createElement("div");
divMain.style.margin = "40px 60px 40px 40px";

divMain.appendChild(heading);
divMain.appendChild(userName);
divMain.appendChild(userField);
divMain.appendChild(userWarn);
divMain.appendChild(email);
divMain.appendChild(emailField);
divMain.appendChild(emailWarn);
divMain.appendChild(password);
divMain.appendChild(passwordField);
divMain.appendChild(passwordWarn);
divMain.appendChild(passwordCon);
divMain.appendChild(passwordConField);
divMain.appendChild(passwordConWarn);
divMain.appendChild(NotMatchWarn);
divMain.appendChild(button);
container.appendChild(divMain);

document.body.appendChild(container);

function userValidate() {
    if (userField.value == "" || userField.value.length < 3) {
        userField.style.borderColor = "#e74c3c";
        userWarn.style.display = "block";
    }
    else {
        userField.style.borderColor = "#2ecc71";
        userWarn.style.display = "none";
    }
}

function emailValidate() {
    if (emailField.value == "" || !emailField.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        emailField.style.borderColor = "#e74c3c";
        emailWarn.style.display = "block";
    }
    else {
        emailField.style.borderColor = "#2ecc71";
        emailWarn.style.display = "none";
    }
}

function passwordValidate() {
    if (passwordField.value == "" || passwordField.value.length < 6) {
        passwordField.style.borderColor = "#e74c3c";
        passwordWarn.style.display = "block";
    }
    else {
        passwordField.style.borderColor = "#2ecc71";
        passwordWarn.style.display = "none";
    }
}

function passwordConValidate() {
    if (passwordConField.value == "") {
        passwordConField.style.borderColor = "#e74c3c";
        passwordConWarn.style.display = "block";
        NotMatchWarn.style.display = "none";
    }
    else if (passwordField.value !== passwordConField.value) {
        passwordConField.style.borderColor = "#e74c3c";
        NotMatchWarn.style.display = "block";
        passwordConWarn.style.display = "none";
    }
    else {
        passwordConField.style.borderColor = "#2ecc71";
        passwordConWarn.style.display = "none";
        NotMatchWarn.style.display = "none";
    }
}

button.addEventListener("click", function (event) {
    userValidate();
    emailValidate();
    passwordValidate();
    passwordConValidate();
});