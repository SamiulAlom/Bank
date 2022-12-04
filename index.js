const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click',function(){
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block';
    document.body.style.background = "white";
})

const deposit = document.getElementById('deposit');
deposit.addEventListener('click', (e) => {
    const depositAmount = document.getElementById('depositAmount').value;
    const depositNumber = parseFloat(depositAmount);

    // const currentDeposit = document.getElementById('cDeposit').innerText;
    // const currentDepositNumber = parseFloat(currentDeposit);
    // const totalDeposit = depositNumber + currentDepositNumber;
    // document.getElementById('cDeposit').innerText = totalDeposit;
    updateSpan("cDeposit",depositNumber);
    updateSpan("cBalance",depositNumber);
    // const currentBalance = document.getElementById('cBalance').innerText;
    // const currentBalanceNumber = parseFloat(currentBalance);
    // const totalBalance = depositNumber + currentBalanceNumber;
    // document.getElementById('cBalance').innerText = totalBalance;

    document.getElementById('depositAmount').value = "";
})

function updateSpan(id,number){
    const A = document.getElementById(id).innerText;
    const B = parseFloat(A);
    const total = number + B;
    document.getElementById(id).innerText = total;
}

const withdraw = document.getElementById('withdraw');
withdraw.addEventListener('click', (e) => {
    const withdrawAmount = document.getElementById('withdrawAmount').value;
    const withdrawAmountNumber = parseFloat(withdrawAmount);

    // const currentWithdraw = document.getElementById('cWithdraw').innerText;
    // const currentWithdrawNumber = parseFloat(currentWithdraw);
    // const totalWithdraw = withdrawAmountNumber + currentWithdrawNumber;
    // document.getElementById('cWithdraw').innerText =totalWithdraw;
    updateSpan("cWithdraw",withdrawAmountNumber);
    updateSpan2("cBalance", withdrawAmountNumber);
    // const currentBalance = document.getElementById('cBalance').innerText;
    // const currentBalanceNumber = parseFloat(currentBalance);
    // const totalBalance = currentBalanceNumber - withdrawAmountNumber;
    // document.getElementById('cBalance').innerText =totalBalance;

    document.getElementById('withdrawAmount').value="";

})
function updateSpan2(id,number){
    const A = document.getElementById(id).innerText;
    const B = parseFloat(A);
    const total =  B - number;
    const pTotal = Math.abs(total);
    document.getElementById(id).innerText = pTotal;
}