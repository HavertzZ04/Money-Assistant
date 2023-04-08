export default {
  span: "by: ",
  name: "HavertzZ",
  image: "images/github.png",

  show(){
    document.querySelector("#footer").insertAdjacentHTML("beforeend",
    `
    <a href="https://github.com/HavertzZ04" class="text-white" target="_blank">
      <span>${this.span}</span>${this.name}<img src=${this.image} alt="github-icon" id="github">
    </a>
    `
    )
  }
}