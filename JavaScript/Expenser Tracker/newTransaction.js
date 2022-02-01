var balanceEl = document.getElementById('balance');
var incomeEl = document.getElementById('income');
var expenseEl = document.getElementById('expense');
var transactionsEl = document.getElementById('list');
var textEl = document.getElementById('text');
var amountField = document.getElementById('amount');
var button = document.getElementById('button');
var state = {
    balance: 0,
    income: 0,
    expense: 0,
    transactions: [
    ]
}

function init() {
    updateState();
    initListener();
    render();
}

function uniqueId() {
    return Math.round(Math.random() * 100000);
}
function initListener() {
    button.addEventListener('click', function (event) {
        if (textField.value == '' || amountField.value == '') {
            alert("Please add a text and amount");
        }
        else {
            if (amountField.value > 0) {
                incomeClick();
            }
            else {
                expenseClick();
            }
        }
    })
}

function incomeClick() {
    console.log("Income");
    addTransaction(textEl.value, amountField .value, 'income');
}

function addTransaction(text, amount, type) {
    var transaction = {
        id: uniqueId(),
        text: text,
        amount: parseInt(amount),
        type: type
    };
    state.transactions.push(transaction);
    updateState();
    textEl.value = "";
    amountField .value = "";
}
function expenseClick() {
    console.log('Expense')
    var expenseInt = amountField .value * -1;
    console.log(expenseInt);
    addTransaction(textEl.value, expenseInt, 'expense');
}

function deleteButton(event) {
    console.log(event.target);
    var id = parseInt(event.target.getAttribute('data-id'));
    var deleteIndex;
    for (var i = 0; i < state.transactions.length; i++) {
        if (state.transactions[i].id === id) {
            deleteIndex = i;
            break;
        }
    }
    state.transactions.splice(deleteIndex, 1);
    updateState();
}
function updateState() {
    var balance = 0, income = 0, expense = 0;
    var item;
    for (var i = 0; i < state.transactions.length; i++) {
        item = state.transactions[i];
        if (item.type === 'income') {
            income += item.amount;
        } else if (item.type === 'expense') {
            expense += item.amount;
        }
    }
    balance = income - expense;
    state.balance = balance;
    state.income = income;
    state.expense = expense;
    render();
}
function render() {
    balanceEl.innerHTML = `$${state.balance}`;
    incomeEl.innerHTML = `$${state.income}`;
    expenseEl.innerHTML = `$${state.expense}`;
    var transactionEl, containerEl, amountEl, item, btnEl;
    transactionsEl.innerHTML = '';
    for (var i = 0; i < state.transactions.length; i++) {
        item = state.transactions[i];
        transactionEl = document.createElement("li");
        transactionEl.classList.add('historyList');
        transactionEl.append(state.transactions[i].text);
        console.log(state.transactions[i].text);
        transactionsEl.appendChild(transactionEl);

        // containerEl=document.createElement("div");
        amountEl = document.createElement('span');
        amountEl.classList.add('history-span');
        if (item.type == 'income') {
            transactionEl.classList.add('income-amt');
        }
        else if (item.type == 'expense') {
            transactionEl.classList.add('expense-amt');
        }
        amountEl.innerHTML = `$${item.amount}`;

        btnEl = document.createElement("button");
        btnEl.setAttribute("data-id", item.id)
        btnEl.classList.add('buttonDelete');
        btnEl.innerHTML = 'X';
        btnEl.addEventListener("click", deleteButton);
        // containerEl.appendChild(amountEl);

        transactionEl.appendChild(amountEl);
        transactionEl.appendChild(btnEl);
    }
}
init();
