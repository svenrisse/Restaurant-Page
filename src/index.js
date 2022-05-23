import pageLoad from "./mainpage"
import pizzaLoad from "./pizzaimg"
import pizzaMenu from "./pizzapage"


pizzaLoad()
pageLoad()

const pizzaButton = document.querySelector(".pizzaButton")
pizzaButton.addEventListener("click", () => {
    pizzaMenu()
})

