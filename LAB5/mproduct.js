function shop() {
    return fetch("product.json")
    .then((response)=>response.json())
    .then((json) => json.product);
}


shop().then((product)=>{
    console.log(product);
    shoppd(product)
})


function shoppd(product){
    const mainproduct = document.querySelector(".imagecontent");
    mainproduct.innerHTML = product.map((product)=>mahtml(product)).join("");
    let search = document.getElementById("search").value.toLowerCase();
    
    
}


function mahtml(product){
    return `<div class="div" id="${product.name}"><img class="bigger" src="${product.image}" alt="${product.name}"></div>`;
}
