let fullAmount = 0; //Big number
let income = 0; //Money gotten
let expenses = 0; //Money lost
let percentageMain = 0; 


let send = document.querySelector("#send");
let select = document.querySelector("#selectValue");


send.addEventListener('click', function() {
    let select = document.querySelector("#selectValue");
    let price = parseInt(document.querySelector("#price").value);
    let amount = 0;
    let percentage = 0;
    

    if(select.value === "plus"){

        fullAmount = parseInt(document.querySelector("#fullAmount").innerHTML);
        amount = fullAmount + price;
        income = income + price;
        percentage = (expenses * 100) / income;


        let tableIncome = document.querySelector("#tableIncome tbody");
        let description = document.querySelector("#description").value;

        let row = document.createElement("tr");
        let cell1 = document.createElement("td");
        let cell2 = document.createElement("td");

        cell1.textContent = description;
        cell2.textContent = `$ ${price}`;

        row.appendChild(cell1);
        row.appendChild(cell2);
        tableIncome.appendChild(row);

    }


    if(select.value === "less"){
        fullAmount = parseInt(document.querySelector("#fullAmount").innerHTML);
        amount = fullAmount - price;
        expenses = expenses + price;
        percentage = (expenses * 100) / income;

        let tableExpenses = document.querySelector("#tableExpenses tbody");
        let description = document.querySelector("#description").value;

        let row = document.createElement("tr");
        let cell1 = document.createElement("td");
        let cell2 = document.createElement("td");
        let cell3 = document.createElement("td");

        cell1.textContent = description;
        cell2.textContent = `$ ${price}`;
        //cell3.textContent = (price * 100) / expenses

        row.appendChild(cell1);
        row.appendChild(cell2);
        //row.appendChild(cell3);
        tableExpenses.appendChild(row);
    }

    

    document.querySelector("#fullAmount").innerHTML = amount;
    document.querySelector("#income").innerHTML = `$${income}`;
    document.querySelector("#expenses").innerHTML = `$${expenses}`;
    document.querySelector("#percentageMain").innerHTML = `%${percentage.toFixed(1)}` ;

});




