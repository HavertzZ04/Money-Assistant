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

        //Create the new elements when people add expenses
        let row = document.createElement("tr");
        let cell1 = document.createElement("td");
        let cell2 = document.createElement("td");

        //Add values to the new elements
        cell1.textContent = description;
        cell2.textContent = `$ ${price}`;

        //Add the new elements to the table
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

        //Create the new elements when people add expenses
        let row = document.createElement("tr");
        let cell1 = document.createElement("td");
        let cell2 = document.createElement("td");
        let cell3 = document.createElement("td");
        let deleteBtn = document.createElement("button");

        //Add values to the new elements
        cell1.textContent = description;
        cell2.textContent = `$ ${price}`;
        cell3.textContent = `${(price * 100) / expenses}%`;
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn")

        //Add the new elements to the table
        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
        row.appendChild(deleteBtn);
        tableExpenses.appendChild(row);

        //Verify this function very well because this one is updating the % of each row
        function updatePercentage() {

            let rows = document.querySelectorAll("#tableExpenses tbody tr");

            let totalPercentage = 0;

            rows.forEach((row) => {
              let price = parseFloat(row.querySelector("td:nth-child(2)").textContent.slice(2));
              totalPercentage += (price * 100) / expenses;
            });

            let tableExpenses = document.querySelector("#tableExpenses tbody");
            tableExpenses.addEventListener("click", function(e){
                if (e.target.classList.contains("delete-btn")){
                    let row = e.target.closest("tr");
                    let price = parseFloat(row.querySelector("td:nth-child(2)").textContent.slice(2));
                    expenses -= price;
                    row.remove();

                    rows = document.querySelectorAll("#tableExpenses tbody tr");
                    if (rows.length > 0) {
                        totalPercentage = 0;
                        rows.forEach((row) => {
                            let price = parseFloat(row.querySelector("td:nth-child(2)").textContent.slice(2));
                            totalPercentage += (price * 100) / expenses;
                            let cell3 = row.querySelector("td:nth-child(3)");
                            cell3.textContent = `${(price * 100) / expenses}%`;
                        });
                    }else {
                        totalPercentage = 0;
                    }
                    document.querySelector("#expenses").innerHTML = `$${expenses}`;
                    document.querySelector("#percentageMain").innerHTML = `%${totalPercentage.toFixed(1)}`;
                }
            });
            rows.forEach((row) => {
                let price = parseFloat(row.querySelector("td:nth-child(2)").textContent.slice(2));
                let percentage = (price * 100) / expenses;
                let cell3 = row.querySelector("td:nth-child(3)");
        
                cell3.textContent = `${percentage.toFixed(1)}%`;
            });

            document.querySelector("#expenses").innerHTML = `$${expenses}`;
            document.querySelector("#percentageMain").innerHTML = `%${totalPercentage.toFixed(1)}`;
        }
        updatePercentage();
    }

    //Here we are sending the updated variables values to the DOM
    document.querySelector("#fullAmount").innerHTML = amount;
    document.querySelector("#income").innerHTML = `$${income}`;
    document.querySelector("#expenses").innerHTML = `$${expenses}`;
    document.querySelector("#percentageMain").innerHTML = `%${percentage.toFixed(1)}`;

});






