import pizza from "./components/imgs/pizza.jpg"

function loadPizzaImage() {

    const container = document.querySelector("#content")
    const image = new Image()
    image.src = pizza
    image.classList.add("image")
    container.appendChild(image)
}

export default loadPizzaImage