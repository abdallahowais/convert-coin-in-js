var registerForm =document.querySelector(".registerForm");
var para = document.querySelector(".result");
var amounts=[];
registerForm.onsubmit = function(e){
    e.preventDefault();
    var elements =e.target.elements
    var amount ={
        amountss:elements['amount'].value,
        exchange:elements['exchange'].value,
    };
    amounts.push(amount)
    if(amount.exchange == "dollar"){
        amount.amountss/=3.7;
    } 
    else if(amount.exchange == "nis") {
        amount.amountss/=1;

    }
    else if(amount.exchange == "dinar") {
        amount.amountss/=5;

    }
    printData();
    function printData(){
        var data="";
        data+=`${amount.amountss} `
        para.innerHTML=data;
    }
    }

     
