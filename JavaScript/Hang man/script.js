var dictionary = ['application', 'coding', 'javascript', 'array', 'validation','human','nepal','computer'];
var selectedWords = dictionary[Math.floor(Math.random() * dictionary.length)];
console.log(selectedWords);
var splitSelectedWord=selectedWords.split("");

var correct = [];
var wrong = [];

var gameContainer=document.getElementById("container");

var wrongLetter = document.createElement("div");
wrongLetter.style=`
    position: absolute;
    top: 20px;
    right: 20px;
    display: flex;
    flex-direction: column;
    text-align: right;
`;

gameContainer.appendChild(wrongLetter);

function updateWrongLetters() {
    if(wrong.length==1){
    var wrongTitle = document.createElement("p");
    wrongTitle.style.margin="0 0 5px";
    wrongTitle.innerHTML = "Wrong Letters";
    wrongSpan=document.createElement("span");
    wrongSpan.style.fontSize="24px";
    wrongLetter.appendChild(wrongTitle);
    wrongLetter.appendChild(wrongSpan);
    }
    wrongSpan.innerHTML=wrong.join(", ");
}

var figurePart=document.querySelectorAll(".figure-part");
var count=0;

function updateFigPart(){
    if(wrong.length<figurePart.length){
        figurePart[count].style.display="block";
        count++;
    }
    else{
        figurePart[count].style.display="block";
        setTimeout(function (){
            alert("You lost it.");
            },200);
    
    }
}

var wordDiv=document.createElement("div");
wordDiv.style.marginLeft="100px";

gameContainer.appendChild(wordDiv);

var letterSpan = [];
    for (var i = 0; i < splitSelectedWord.length; i++) {
            letterSpan[i] = document.createElement("span");
            letterSpan[i].style = `
            border-bottom: 3px solid #2980b9;
            display: inline-flex;
            font-size: 30px;
            align-items: center;
            justify-content: center;
            margin: 0 3px;
            height: 25px;
            width: 20px;
        `;
            wordDiv.appendChild(letterSpan[i]);
        }
        
function win(){
    if(selectedWords.length==correct.length){
        setTimeout(function (){
        alert("Congratulations");
        },200);
    }
}
document.addEventListener("keypress", function (event) {
    var keyPressed = event.key;
    if (selectedWords.match(keyPressed)) {
        if (!correct.includes(keyPressed)) {       
            for(var i=0; i < splitSelectedWord.length;i++){
                if(keyPressed==splitSelectedWord[i]){
                    letterSpan[i].innerHTML=splitSelectedWord[i];
                    correct.push(keyPressed);
                }
            }  
            win();
        }
        else {
            alert("Already Entered");
        }
    }
    else {
        if (wrong.includes(keyPressed)) {
            alert("Already Entered");
        }
        else {
            wrong.push(keyPressed);
            updateWrongLetters();
            updateFigPart();
        }
    }
});