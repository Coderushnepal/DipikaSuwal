var button = document.createElement("button");
button.classList.add("button");
button.innerHTML = "Generate Button";
button.style.width="150px";
button.style.height="40px";
button.style.margin="30px";
button.style.backgroundColor="aquamarine";
button.style.borderRadius="8px";
button.style.border="1px solid pink";

var divBtn = document.createElement("div");
divBtn.classList.add("divbtn");
// divBtn.style.width="10%";
// divBtn.style.border="1px solid black";

divBtn.appendChild(button);

var container = document.createElement("div");
container.classList.add('containerStyle');
container.id = "containerId";
container.style.width = "500px";
container.style.height = "300px";
container.style.border = "3px solid black";
container.style.position="relative";

var divMain = document.createElement("div");
divMain.classList.add("divmain");
divMain.style.marginLeft="80px";

divMain.appendChild(divBtn);
divMain.appendChild(container);
document.body.appendChild(divMain);

button.addEventListener("click", function (event) {
    var balloon = document.createElement("div");
    balloon.style.borderRadius = "50%";
    balloon.style.position = "absolute";
    balloon.style.backgroundColor = "cornflowerblue";
    balloon.style.width="10px";
    balloon.style.height="10px";
    balloon.style.margin="0px";

    var containerValue = document.getElementById("containerId");
    var height = containerValue.clientHeight -10 ;
    var width = containerValue.clientWidth -10;
    balloon.style.top = height * Math.random() + 'px';
    balloon.style.left =width * Math.random() + 'px';

    container.appendChild(balloon);
});

