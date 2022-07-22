// let splicedArray = pokemons.splice(0, 90);

// let elList = document.querySelector("#list");
// elList.innerHTML = null
// function renderPokemons(array) {
//     for (let i = 0; i < array.length; i++) {
//         let newLi = document.createElement("li");
//         let newImg = document.createElement("img");
//         let newh3 = document.createElement("h3");
//         let newP = document.createElement("p");
//         let newP1 = document.createElement("p");
//         let newP2 = document.createElement("p");
//         let newRasm = array[i]["img"];
//         let newSrc1 = array[i]["name"];
//         let newSrc2 = array[i]["type"];
//         let newSrc3 = array[i]["height"];
//         let newSrc4 = array[i]["weight"];

//         for (let j = 0; j < array.length; j++) {
//             elList.appendChild(newLi);  
//             newLi.classList.add("mb-2", "col-lg-3", "col-4" ,"align-items-center" ,"d-flex" ,"flex-column","justify-content-center", "mb-3", "bg-light", "rounded-5", "shadow-lg",); 

//             newLi.appendChild(newImg);
//             newImg.classList.add("mb-3", "pt-3");
//             newImg.src = newRasm;
//             newLi.appendChild(newh3);
//             newh3.classList.add("heading");
//             newh3.textContent = newSrc1;
//             newLi.appendChild(newP);
//             newP.classList.add("text");
//             newP.textContent = newSrc2;
//             newLi.appendChild(newP1);
//             newP1.classList.add("text1");
//             newP1.textContent = (newSrc3);
//             newLi.appendChild(newP2);
//             newP2.classList.add("text3");
//             newP2.textContent = newSrc4;
//         }
//     }
// }

// renderPokemons(splicedArray)

let splicedArray = pokemons.slice(0, 90);

let elList = document.querySelector("#list");
function renderPokemons(array) {
    for (let item of array) {
        let newLi = document.createElement("li");
        let newh3 = document.createElement("h3");
        let newImg = document.createElement("img");
        let newP = document.createElement("p");
        let newP1 = document.createElement("p");
        let newP2 = document.createElement("p");



        elList.appendChild(newLi);
        newLi.classList.add("mb-2", "col-lg-3", "col-4" ,"align-items-center" ,"d-flex" ,"flex-column","justify-content-center", "mb-3", "bg-light", "rounded-5", "shadow-lg",); 

        newLi.appendChild(newImg);
        newImg.classList.add("pokemons__img")
        newImg.src = item.img;

        newLi.appendChild(newh3);
        newh3.classList.add("heading")
        newh3.textContent = item.name;

        newLi.appendChild(newP);
        newP.classList.add("text");
        newP.textContent = item.type;

        newLi.appendChild(newP1);
        newP1.classList.add("text1");
        newP1.textContent = item.height;

        newLi.appendChild(newP2);
        newP2.classList.add("text3");
        newP2.textContent = item.weight
    }
}

renderPokemons(splicedArray);

// Ikki hil uslub