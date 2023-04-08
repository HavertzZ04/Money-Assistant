export default {
    income: "Income",
    expenses: "Expenses",

    show(){
        document.querySelector(".down").insertAdjacentHTML("beforeend",
        `
        <div class="container bgDown">
            <div class="row">
                <div class="col-6">
                    <table class="table" id="tableIncome">
                        <thead class="income">
                        <tr class="text-primary">
                            <th scope="col">${this.income}</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
                <div class="col-6">
                    <table class="table" id="tableExpenses">
                        <thead class="expenses">
                        <tr class="text-danger">
                            <th scope="col">${this.expenses}</th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>  
        `
    )}
}