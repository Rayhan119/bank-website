




document.getElementById('deposit-button').addEventListener('click',function(){
    //get the deposited amount:
    const deposite = document.getElementById('deposit-input');
    const newDepositeAmount = deposite.value;
    //showing deposit ammount:
    const depositTotal = document.getElementById('deposit-total-amount');
    const PreviousDepositTotal = depositTotal.innerText;
    
    //add the new and current ammount:
    const newDepositeTotal = parseFloat(PreviousDepositTotal)+parseFloat(newDepositeAmount);
    depositTotal.innerText = newDepositeTotal;

    //Update Balance:

    const balance = document.getElementById('balance-total');
    const previousBalance = balance.innerText;
    const totalBalance = parseFloat(previousBalance)+newDepositeTotal;
    balance.innerText = totalBalance;

    //clear the value:
    deposite.value = '';


})
document.getElementById('withdraw-button').addEventListener('click',function(){
    //get the withdrawal amount:
    const withdraw = document.getElementById('withdraw-input');
    const withdrawValue = withdraw.value;
    const previousWithdraw = document.getElementById('withdraw-total');
    const previousWithdrawAmount = previousWithdraw.innerText;
    const totataWithdraw = parseFloat(withdrawValue)+parseFloat(previousWithdrawAmount);
    previousWithdraw.innerText = totataWithdraw;
    //clear withdraw input:
    withdraw.value = '';


    //Balance Reduce when Withdraw:
    const currentBalance = document.getElementById('balance-total');
    const currentBalanceText = currentBalance.innerText;
    const currentBalanceAmount = parseFloat(currentBalanceText);
    //Reduced current Balance:
    const newTotalBalance = currentBalanceAmount - parseFloat(withdrawValue );
    currentBalance.innerText = newTotalBalance;
})