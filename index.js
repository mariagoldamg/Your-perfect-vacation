const buttonOne = document.querySelector(`#One`);
const buttonTwo = document.querySelector(`#Two`);
const img = document.querySelector(`#myImage`);
const text = document.querySelector(`h2`);

buttonOne.addEventListener(`click`, beach);
buttonTwo.addEventListener(`click`, mountains);

function mountains(){
    img.setAttribute("src", "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
    text.innerHTML = "Would you prefer to stay at the cabins or go camping?"
    buttonOne.innerHTML = "CABINS";
    buttonTwo.innerHTML = "CAMPING";

    buttonOne.addEventListener(`click`, cabins);
    buttonTwo.addEventListener(`click`, camping);
}

function cabins(){
    img.setAttribute("src", "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
    text.innerHTML = "ENJOY YOUR VIEW WITH COMFORT"
    buttonOne.style = "display:none";
    buttonTwo.style = "display:none";
}

function camping (){
    img.setAttribute('src', 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80');
    text.innerHTML = "ENJOY THE WILDERNESS";
    buttonOne.style = "display:none";
    buttonTwo.style = "display:none";
}

function beach(){
    img.setAttribute("src", "https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
    text.innerHTML = "WOULD YOU PREFER A BIG RESORT OR QUIET HUTS ON THE SHORE?"
    buttonOne.innerHTML = "RESORT";
    buttonTwo.innerHTML = "QUIET HUTS";
    buttonOne.addEventListener(`click`, resort);
    buttonTwo.addEventListener(`click`, huts);
}

function resort() {
    img.setAttribute("src", "https://images.unsplash.com/photo-1623718649591-311775a30c43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
    text.innerHTML = "ENJOY THE RESTAURANTS & POOL PARTIES";
    buttonOne.style = "display:none";
    buttonTwo.style = "display:none";
}

function huts(){
    img.setAttribute("src", "https://images.unsplash.com/photo-1541666282672-5f4aad922c63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
    text.innerHTML = "ENJOY YOUR SOLITUDE AND PIECE";
    buttonOne.style = "display:none";
    buttonTwo.style = "display:none";
}