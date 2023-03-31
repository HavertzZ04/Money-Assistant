let fullAmount = 0;
let income = 0;
let expenses = 0;


let send = document.querySelector("#send");
let select = document.querySelector("#selectValue");


send.addEventListener('click', function() {
    let select = document.querySelector("#selectValue");
    let price = parseInt(document.querySelector("#price").value);
    let amount = 0;

    if(select.value === "plus"){
        fullAmount = parseInt(document.querySelector("#fullAmount").innerHTML);
        amount = fullAmount + price;
        income = income + price;
    }

    if(select.value === "less"){
        fullAmount = parseInt(document.querySelector("#fullAmount").innerHTML);
        amount = fullAmount - price;
        expenses = expenses + price;
    }
    document.querySelector("#expenses").innerHTML = expenses;
    document.querySelector("#income").innerHTML = income;
    document.querySelector("#fullAmount").innerHTML = amount;
});


