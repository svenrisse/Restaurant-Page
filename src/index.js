import pageLoad from "./mainpage"
import pizzaLoad from "./pizzaimg"
import pizzaMenu from "./pizzapage"
import pastaMenu from "./pastapage"
import drinkMenu from "./drinkpage"

pizzaLoad()
pageLoad()

const pizzaButton = document.querySelector(".pizzaButton")
pizzaButton.addEventListener("click", () => {
    pizzaMenu()
})

const pastaButton = document.querySelector(".pastaButton")
pastaButton.addEventListener("click", () => {
    pastaMenu()
})

const drinkButton = document.querySelector(".drinksButton")
drinkButton.addEventListener("click", () => {
    drinkMenu()
})