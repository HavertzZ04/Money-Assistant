export default {

    show(){
        document.querySelector(".divChart").insertAdjacentHTML("beforeend",
        `
        <canvas id="myChart" class="container"></canvas>
        `
        )
    }
}