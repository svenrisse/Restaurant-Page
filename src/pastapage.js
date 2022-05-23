import "./components/styles/menupage.css"
import creamPasta from "./components/imgs/creamPasta.png"
import gyrosPasta from "./components/imgs/gyrosPasta.png"
import weltePasta from "./components/imgs/weltePasta.jpg"


function pastaPage() {


    // container
    const recipeContainer = document.createElement("div")
    recipeContainer.classList.add("recipeContainer")

    // cream pasta
    const creamImage = new Image()
    creamImage.src = creamPasta
    creamImage.classList.add("menuImage")
    recipeContainer.appendChild(creamImage)
    const creamDescription = document.createElement("div")
    creamDescription.textContent = "Our creamy fan favourite, with homegrown parsely and parmesan cheese. For 5.99" 
    creamDescription.classList.add("menuDescription")
    recipeContainer.appendChild(creamDescription)

    // gyros pasta
    const gyrosImage = new Image()
    gyrosImage.src = gyrosPasta
    gyrosImage.classList.add("menuImage")
    recipeContainer.appendChild(gyrosImage)
    const gyrosDescription = document.createElement("div")
    gyrosDescription.textContent = "Our gyros pasta, with the special recommendation of our head chef Tim! For 9.99"
    gyrosDescription.classList.add("menuDescription")
    recipeContainer.appendChild(gyrosDescription)
    
    // welte pasta
    const welteImage = new Image()
    welteImage.src = weltePasta
    welteImage.classList.add("menuImage")
    recipeContainer.appendChild(welteImage)
    const welteDescription = document.createElement("div")
    welteDescription.textContent = "Our secret tip Welte Pasta. It's like you could eat them every day. But you probably shouldn't. With store bought pesto and around a bucket full of pasta. For 2.99"
    welteDescription.classList.add("menuDescription")
    recipeContainer.appendChild(welteDescription)


    document.querySelector("#content").appendChild(recipeContainer)


    
}

export default pastaPage