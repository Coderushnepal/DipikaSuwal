var wrapper=document.createElement("div");
wrapper.style=`
 width:800px;
 height:500px;
 border:1px solid black;
 position:relative;
 margin:0 auto;
`;

var ball=document.createElement("div");
ball.style=`
    width:50px;
    height:50px;
    border-radius:50%;
    border:1px solid black;
    position:absolute;
    top:150px;
    left:80px;
    background-color:red;
`;

wrapper.appendChild(ball);
document.body.appendChild(wrapper);

var direction=1;
ball.addEventListener("click", function(event){

    var interval=setInterval(function(){
        var oldTop=event.target.style.top;
        var newTop = parseInt(oldTop)+1*direction+"px";
        event.target.style.top=newTop;
        if(parseInt(newTop)>=(wrapper.clientHeight-ball.clientHeight)){
            direction*=-1;
        }
        if(parseInt(newTop)<=0){
            direction=1;
        }

    },100/60);
});
