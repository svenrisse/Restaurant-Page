import "./components/styles/menupage.css"
import waterDrink from "./components/imgs/waterDrink.jpg"
import beerDrink from "./components/imgs/beerDrink.jpg"
import mintDrink from "./components/imgs/mintDrink.jpg"


function drinkPage() {


    // container
    const recipeContainer = document.createElement("div")
    recipeContainer.classList.add("recipeContainer")

    // water drink
    const waterImage = new Image()
    waterImage.src = waterDrink
    waterImage.classList.add("menuImage")
    recipeContainer.appendChild(waterImage)
    const waterDescription = document.createElement("div")
    waterDescription.textContent = "Tap Water. Free of charge of course!" 
    waterDescription.classList.add("menuDescription")
    recipeContainer.appendChild(waterDescription)

    // beer drink
    const beerImage = new Image()
    beerImage.src = beerDrink
    beerImage.classList.add("menuImage")
    recipeContainer.appendChild(beerImage)
    const beerDescription = document.createElement("div")
    beerDescription.textContent = "Beer. The classic go to. For 2.99"
    beerDescription.classList.add("menuDescription")
    recipeContainer.appendChild(beerDescription)
    
    // mint drink
    const mintImage = new Image()
    mintImage.src = mintDrink
    mintImage.classList.add("menuImage")
    recipeContainer.appendChild(mintImage)
    const mintDescription = document.createElement("div")
    mintDescription.textContent = "Secret Mint Drink. For 4.99"
    mintDescription.classList.add("menuDescription")
    recipeContainer.appendChild(mintDescription)


    document.querySelector("#content").appendChild(recipeContainer)


    
}

export default drinkPage