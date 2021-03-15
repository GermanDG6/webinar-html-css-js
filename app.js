


let count= 1

function renderImage(){
    let pokemonContainer = document.getElementById('pokemon')
pokemonContainer.innerHTML = `<img id="poke" src="https://tinyurl.com/ironhack-pokemons/${count}.svg" alt="Pokemon image"></img>`
}

let prev =  document.getElementById('previous')

let next = document.getElementById('next')

prev.onclick = function (){
    if (count>1){
        count= count -1; 
    } else{
        count=649
    }
renderImage();
}


next.onclick = function (){
    if(count<649){
        count= count +1; 
    } else {
        count = 1
    }
renderImage();
}

renderImage()