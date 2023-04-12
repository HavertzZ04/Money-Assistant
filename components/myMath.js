export function mathFunction(){
    let fullAmount = 0; //Big number
    let income = 0; //Money gotten
    let expenses = 0; //Money lost
    let percentageMain = 0;  //% of expenses 

    let send = document.querySelector("#send");

    send.addEventListener('click', function() { //When users click the button "send" the code will calculate the values
        let select = document.querySelector("#selectValue");
        let price = parseInt(document.querySelector("#price").value);
        let amount = 0;
        let percentage = 0;

        //plus option allow us to add value to the variable "income" and "amount", also it adds the amount to the "tableIncome" within the description for each row
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

        //less option allow us to add value to the variable "expenses" and rest to the variable "amount", also it adds the amount to the "tableExpenses" within the description for each row
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
            let deleteBtn = document.createElement("td");

            //Add values to the new elements
            cell1.textContent = description;
            cell2.textContent = `$ ${price}`;
            cell3.textContent = `${(price * 100) / expenses}%`;
            deleteBtn.classList.add("delete-btn");

            //Add the new elements to the table
            row.appendChild(cell1);
            row.appendChild(cell2);
            row.appendChild(cell3);
            row.appendChild(deleteBtn);
            tableExpenses.appendChild(row);

            //This function updates the percentage of each price from the "tableExpenses"
            function updatePercentage() {
                let rows = document.querySelectorAll("#tableExpenses tbody tr");
                let totalPercentage = 0;
                expenses = 0;
                
                //This forEach calculates the % of the variable "price" from each row
                rows.forEach((row) => {
                    let price = parseFloat(row.querySelector("td:nth-child(2)").textContent.slice(2));
                    expenses += price;
                    totalPercentage += (price * 100) / income;
                });
            
                //This conditional allow us to calculuate the % of each row about the variable "percentageMain"
                if (expenses > 0) {
                    rows.forEach((row) => {
                        let price = parseFloat(row.querySelector("td:nth-child(2)").textContent.slice(2));
                        let percentage = (price * 100) / expenses;
                        let cell3 = row.querySelector("td:nth-child(3)");
                        cell3.textContent = `${percentage.toFixed(1)}%`;
                    });
                    percentageMain = totalPercentage;
                }else {
                    rows.forEach((row) => {
                        let cell3 = row.querySelector("td:nth-child(3)");
                        cell3.textContent = `0%`;
                    });
                    percentageMain = 0;
                }
                
                //Here we share the new values of each variable
                fullAmount = income - expenses;
                document.querySelector("#fullAmount").innerHTML = fullAmount;
                document.querySelector("#expenses").innerHTML = `$${expenses}`;
                document.querySelector("#percentageMain").innerHTML = `%${percentageMain.toFixed(1)}`;

                //This function allow us to delete a row when users use the button "delete-btn"

                tableExpenses.addEventListener('click', function(event) {
                    Swal.fire({
                        title: 'Are you sure?',
                        text: "You won't be able to revert this!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, delete it!'
                      }).then((result) => {
                        if (result.isConfirmed) {
                          Swal.fire(
                            'Deleted!',
                            'Your expent has been deleted.',
                            'success'
                          );
                          if (event.target.className === "delete-btn") {
                            let row = event.target.parentElement;
                            let price = parseFloat(row.querySelector("td:nth-child(2)").textContent.slice(2));
                            expenses -= price;
                            row.remove();
                            //Then to delete the row, the code calls again the function updatePercetange to calculate the % for each row and the "percentageMain"
                            updatePercentage();
                            updateChart();
                            }
                        }
                        
                    })
                }); 
            }   
            updatePercentage();
            
        }
        //Here we are sending the updated variables values to the DOM
        document.querySelector("#fullAmount").innerHTML = amount;
        document.querySelector("#income").innerHTML = `$${income}`;
        document.querySelector("#expenses").innerHTML = `$${expenses}`;
        document.querySelector("#percentageMain").innerHTML = `%${percentage.toFixed(1)}`;
        
    });

    let incomeData = {
        label: "Income",
        data: income,
        backgroundColor: 'rgba(0, 116, 255, 0.9)',
        borderColor: 'rgb(0, 123, 255)',
        strokeWidth: 1,
    }
            
    let expensesData = {
        label: "Expenses",
        data: expenses,
        backgroundColor: '#e8164a',
        borderColor: 'rgba(255, 99, 132)',
        strokeWidth: 1,
    }
            
    let myChart = new Chart(document.getElementById('myChart'), {
        type: 'bar',
        data: {
            labels: ["Money"],
            datasets: [incomeData, expensesData]
        },
        options: {
            barThickness: 350,
        }
    });
             
    function updateChart() {
        myChart.data.datasets[0].data = [income];
        myChart.data.datasets[1].data = [expenses];
        myChart.update();
    }
            
    send.addEventListener('click', function() {
        updateChart();
    });


}