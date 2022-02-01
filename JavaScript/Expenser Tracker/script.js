var title=document.createElement("h2");
title.innerHTML="Expense Tracker";
title.style=`
text-align:center;
`;

var container=document.createElement("div");
container.style=`
    margin: 30px auto;
    width:350px;
`;

var balance=document.createElement("h4");
balance.innerHTML="Your balance";
balance.style=`
    text-transform:uppercase;
    margin:0;
`;

var balanceNo=document.createElement("h1");
balanceNo.id='balance';
balanceNo.innerHTML="$0.00";
balanceNo.style.margin="0";

var balanceDiv=document.createElement("div");
balanceDiv.appendChild(balance);
balanceDiv.appendChild(balanceNo);

container.appendChild(balanceDiv);
document.body.appendChild(title);
document.body.appendChild(container);

var mainIncExp=document.createElement("div");
mainIncExp.classList.add("clearfix");
mainIncExp.style=`
background-color:white;
margin: 30px auto;
padding:20px;
box-shadow:1px 2px 5px #888888;;
`;
 
var income=document.createElement("div");
income.style=`
text-align:center;
background-color:white;
float:left;
border-right:1px solid #dedede;
margin-left:50px;
padding-right:50px;
`;

var income_text=document.createElement("h4");
income_text.innerHTML="income";
income_text.style=`
text-transform:uppercase;
background-color:white;
margin:0;
`;
var income_amount=document.createElement("p");
income_amount.id='income';
income_amount.innerHTML="$0.00";
income_amount.style=`
color:green;
background-color:white;
margin:0;
font-size:20px;
`;

income.appendChild(income_text);
income.appendChild(income_amount);

mainIncExp.appendChild(income);

var expense=document.createElement("div");
expense.style=`
background-color:white;
text-align:center;
float:right;
margin-right:50px;

`;

var expense_text=document.createElement("h4");
expense_text.innerHTML="expense";
expense_text.style=`
text-transform:uppercase;
background-color:white;
margin:0;
`;
var expense_amount=document.createElement("p");
expense_amount.id='expense';
expense_amount.innerHTML="$0.00";
expense_amount.style=`
color:red;
background-color:white;
margin:0;
font-size:20px;
`;

expense.appendChild(expense_text);
expense.appendChild(expense_amount);
mainIncExp.appendChild(expense);
container.appendChild(mainIncExp);

var historyDiv=document.createElement("div");
historyDiv.style=`
margin-bottom:30px;
`;

var history_title=document.createElement("h3");
history_title.innerHTML="History";
history_title.style=`
margin:0;
`;

var history_hr=document.createElement("hr");

var history_ul=document.createElement("div");
history_ul.id='list';

// var buttonDelete=document.createElement("button");
// buttonDelete.classList.add('buttonDelete');
// buttonDelete.innerHTML="X";
// buttonDelete.style=`
// color:white;
// border:none;
// font-size:20px;
// background-color:#c0392b;;
// line-height:20px;
// padding:2px 5px;
// position:absolute;
// top:50%;
// left:0;
// transform:translate(-120%,-50%);
// opacity:1;
// `;


// var historyList=document.createElement("li");
// historyList.classList.add('historyList');
// historyList.innerHTML="Cash";
// historyList.style=`
// list-style-type: none;
// font-size:18px;
// background-color:white;
// padding:10px;
// position:relative;
// `;

// var historySpan=document.createElement("span");
// historySpan.classList.add('history-span');
// historySpan.innerHTML="$400";
// historySpan.style=`
// float:right;
// font-size:18px;
// background-color:white;
// `;

// historyList.appendChild(historySpan);
// historyList.appendChild(buttonDelete);
// history_ul.appendChild(historyList);

historyDiv.appendChild(history_title);
historyDiv.appendChild(history_hr);
historyDiv.appendChild(history_ul);
container.appendChild(historyDiv);

var newTransaction=document.createElement("h3");
newTransaction.innerHTML="Add new transaction";
newTransaction.style=`
    margin:0;
`;

var Transaction_hr=document.createElement("hr");

container.appendChild(newTransaction);
container.appendChild(Transaction_hr);

var form=document.createElement("form");
form.classList.add('form');

var text=document.createElement("label");
text.innerHTML="Text";
text.style=`
    margin:10px 0;
    font-size:18px;
`;
var br=document.createElement("br");
var textField=document.createElement("input");
textField.setAttribute("type","text");
textField.placeholder="Enter text";
textField.id="text";
textField.style=`
    border: 1px solid #dedede;
    border-radius: 2px;
    display: block;
    font-size: 16px;
    padding: 10px;
    width: 95%;
    margin:10px 0 10px;
`;

var amount=document.createElement("label");
amount.innerHTML="Amount <br>(negative - expense, positive - income)";
amount.style=`
    margin:10px 0;
    font-size:18px;
`;

var amountField=document.createElement("input");
amountField.classList.add('amountField');
amountField.setAttribute("type","number");
amountField.id="amount";
amountField.placeholder="Enter amount.."
amountField.style=`
    border: 1px solid #dedede;
    border-radius: 2px;
    display: block;
    font-size: 16px;
    padding: 10px;
    width: 95%;
    margin:10px 0 20px 0;
`;

var button=document.createElement("submit");
button.id='button';
button.classList.add('btn');
button.innerHTML="Add transaction";

form.appendChild(text);
form.appendChild(br);
form.appendChild(textField);
form.appendChild(amount);
form.appendChild(amountField);
form.appendChild(button);
container.appendChild(form);
