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


//Handlevognfunksjonalitet
function addToCart(prodid) {
  let exist = cart.findIndex(p => prodid === p.product)

if(exist === -1) {
  cart.push({ product: prodid, quantity: 1 });
} else {
  cart[exist].quantity++
  cart[exist].price++
}

  console.log("Exists: " + exist)
  console.log(cart)
  updateCartDisplay();
}


function updateCartDisplay() {

  let cartCount = 0;

  cart.map(p => cartCount += p.quantity);
  document.getElementById("cartCount").innerHTML = cartCount;

  let cartHTML = "";

  if (cart.length === 0) {
    cartHTML += "<li>Du har ingen produkter i handlevognen</li>"
  } else {
    cart.map((prod, index) => {
      let filteredProduct = products.filter(filterprod => prod.product === filterprod.prodid);
      console.log(filteredProduct)
      cartHTML += `<li>
    <span class="title">${filteredProduct[0].title}</span>
    <span class="price">${filteredProduct[0].price},-</span>
    <span class="quantity">x${prod.quantity}</span>
    <span class="functions">
    <button style=background-color:green onclick="addToCart(${filteredProduct.prodid})">+</button>
    <button onclick="removeFromCart(${index})">-</button>
    </span>
    </li>`})
  }
  document.getElementById("cartList").innerHTML = cartHTML;
}

function removeFromCart(index) {
  console.log("Removing " + index);

  if(cart[index].quantity > 1) {
      cart[index].quantity -= 1
  } else {
    cart.splice(index, 1)
  }
  updateCartDisplay();
}

function showCart() {
  const cartStyle = document.getElementById("cart");

  if (cartStyle.style.display === "none") {
    cartStyle.style.display = "block"
  } else {
    cartStyle.style.display = "none"
  }
}
updateCartDisplay();