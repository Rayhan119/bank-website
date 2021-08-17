




document.getElementById('deposit-button').addEventListener('click',function(){
    //get the deposited amount:
    const deposite = document.getElementById('deposit-input');
    const depositeValue = deposite.value;
    //showing deposit ammount:
    const depositTotal = document.getElementById('deposit-total-amount');
    depositTotal.innerText = depositeValue;
    //clear the value:
    deposite.value = '';
})
document.getElementById('withdraw-button').addEventListener('click',function(){
    //get the withdrawal amount:
    const withdraw = document.getElementById('withdraw-input');
    const withdrawValue = withdraw.value;

})