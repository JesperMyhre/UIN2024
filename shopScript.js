console.log(products)

function buildHTML() {
let productsHTML = "<h2>Ninjago</h2>";
    products.map(
        (product) => productsHTML += `
        <article>
        <img src="website_images/PROD_${product.imagefile}" alt="${product.title}"/>
        <a href="#">${product.category}</a>
        <h3>${product.title}</h3>
        <span>Kr. ${product.price}</span>
        <button onclick="addToCart(${product.prodid})">Legg i handlekurv</button>
    </article>
        `
    )
    document.getElementById("main").innerHTML = productsHTML;
}

buildHTML();

function addToCart(prodid) {
    console.log("test");
}

function showCart() {
    const cartStyle = document.getElementById("cart");

    if(cartStyle.style.display === "none") {
        cartStyle.style.display = "block"
    } else {
        cartStyle.style.display = "none"
    }


}