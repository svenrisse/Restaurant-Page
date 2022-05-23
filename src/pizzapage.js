import "./components/styles/menupage.css"
import basicPizza from "./components/imgs/basicPizza.jpg"
import flamePizza from "./components/imgs/flamePizza.jpg"
import veganPizza from "./components/imgs/veganPizza.jpg"


function pizzaPage() {


    // container
    const recipeContainer = document.createElement("div")
    recipeContainer.classList.add("recipeContainer")

    // basic pizza
    const basicImage = new Image()
    basicImage.src = basicPizza
    basicImage.classList.add("menuImage")
    recipeContainer.appendChild(basicImage)
    const basicDescription = document.createElement("div")
    basicDescription.textContent = "Our Basic Pizza, with homemade tomato sauce and our favourite gouda. For 6.99" 
    basicDescription.classList.add("menuDescription")
    recipeContainer.appendChild(basicDescription)

    // flame pizza

    const flameImage = new Image()
    flameImage.src = flamePizza
    flameImage.classList.add("menuImage")
    recipeContainer.appendChild(flameImage)
    const flameDescription = document.createElement("div")
    flameDescription.textContent = "Our Flame Pizza, only if you can handle the heat! With fresh pepperoni straight from Italy for 8.99"
    flameDescription.classList.add("menuDescription")
    recipeContainer.appendChild(flameDescription)
    
    // vegan pizza

    const veganImage = new Image()
    veganImage.src = veganPizza
    veganImage.classList.add("menuImage")
    recipeContainer.appendChild(veganImage)
    const veganDescription = document.createElement("div")
    veganDescription.textContent = "Our Vegan Pizza, brand new and straight favourite with plant based meat and a clear conscience for 7.99"
    veganDescription.classList.add("menuDescription")
    recipeContainer.appendChild(veganDescription)


    document.querySelector("#content").appendChild(recipeContainer)


    
}

export default pizzaPage