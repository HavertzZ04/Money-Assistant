export function chartBar(){
    
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