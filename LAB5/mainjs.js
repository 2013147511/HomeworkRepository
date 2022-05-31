function loadimage(){
    return fetch("product.json")
     .then((response)=>response.json())
     .then((json)=>json.pizza)

}

loadimage().then((pizza)=>{
         console.log(pizza);
         showpizza(pizza);
});

function showpizza(pizza){
    const container = document.querySelector(".pizza")
    container.innerHTML = pizza.map((pizza)=>createHTMLIMAGE(pizza)).join("");
}

function createHTMLIMAGE(pizza){
    return `<div class="imgbox"><img src="${pizza.image}" class="myimg" id="myimg1"></div> `;
}