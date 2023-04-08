export default {
    fullAmout: "0",
    income: "Income",
    incomeAmount: "$ 0",
    expenses: "Expenses",
    expensesAmount: "$ 0",
    expensesPercentage: "%0.0",


    show(){
        document.querySelector(".top").insertAdjacentHTML("beforeend",
        `
        <div class="sub-top">
            <div class="groupTitle">
                <h1 class="text-center">Available</h1>
                <div class="amount text-center" id="fullAmount">${this.fullAmout}</div>

                <div class="bg-primary topIncome info-top">
                    <div class="row">
                        <div class="col-6">${this.income}</div>
                        <div class="col-6"  id="income">${this.incomeAmount}</div>
                    </div>
                </div>
                
                <div class= "topExpenses info-top">
                    <div class="row">
                        <div class="col-6">${this.expenses}</div>
                        <div class="col-3" id="expenses">${this.expensesAmount}</div>
                        <div class="col-3" id="percentageMain">${this.expensesPercentage}</div>
                    </div>
                </div>
            </div>
        </div>
        `
        )
    }
}