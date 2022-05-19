import pizza from "./components/imgs/pizza.jpg"
import "./components/styles/mainpage.css"

function mainPage() {
    
    const container = document.querySelector("#content")
    // image for left side of screen
    const image = new Image()
    image.src = pizza
    image.classList.add("image")
    container.appendChild(image)

    // title and welcome message

    const title = document.createElement("div")
    title.classList.add("title")
    title.textContent = "Welcome to The Cal Zone"
    container.appendChild(title)

    // navigation bar with buttons to items on the menu list

    const navBar = document.createElement("div")
    navBar.classList.add("navBar")

    const pizzaButton = document.createElement("button")
    pizzaButton.classList.add("pizzaButton")
    pizzaButton.textContent = "Pizza"
    navBar.appendChild(pizzaButton)

    const pastaButton = document.createElement("button")
    pastaButton.classList.add("pastaButton")
    pastaButton.textContent = "Pasta"
    navBar.appendChild(pastaButton)

    const drinksButton = document.createElement("button")
    drinksButton.classList.add("drinksButton")
    drinksButton.textContent = "Drinks"
    navBar.appendChild(drinksButton)

    container.appendChild(navBar)

    // restaurant description

    const description = document.createElement("div")
    description.classList.add("description")
    description.textContent = "The Cal Zone combines flavors & inspiration from the Far East & the West to create what we think is the best! Home to the original strawberry-pizza, we specialize in pizzas, as well as handmade appetizers, sandwiches, salads, and gluten friendly, vegetarian, & vegan selections. Feel free to indulge in a tiki drink or craft beer with our fantastic unique cuisine. Cheers!"
    container.appendChild(description) 


    // contact 

    const contact = document.createElement("div")
    contact.classList.add("contact")
    contact.textContent = "Want to reserve a table or have a question? Just give us a call at: 0123 45678900"
    container.appendChild(contact)

}


export default mainPage