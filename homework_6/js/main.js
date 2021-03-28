var cart;

function bunAdded(quant, glaze, price){
	this.buntitle = title;
	this.quant = quant;
	this.glaze = glaze;
	this.price = price;
}

//Options from product detail //
function addGlazeOne() {
	bunAdded.glaze= document.getElementById("glaze1").value;
}

function addGlazeTwo() {
	bunAdded.glaze= document.getElementById("glaze2").value;
}

function addGlazeThree() {
	bunAdded.glaze= document.getElementById("glaze3").value;
}

function addGlazeFour() {
	bunAdded.glaze= document.getElementById("glaze4").value;
}

function addQuantOne() {
	bunAdded.quant= document.getElementById("price1").value;
	bunAdded.price = 2;
}

function addQuantTwo() {
	bunAdded.quant= document.getElementById("price2").value;
	bunAdded.price = 6;
}

function addQuantThree() {
	bunAdded.quant= document.getElementById("price3").value;
	bunAdded.price = 10;
}

function addQuantFour() {
	bunAdded.quant= document.getElementById("price4").value;
	bunAdded.price = 20;
}

var cartBtn = document.getElementsByClassName('cart-btn');
for (var i = 0; i < cartBtn.length; i++){
	var button = cartBtn[i]
	button.addEventListener('click', addToCartClicked);
}

// add name, price, quantity in cart //
function addToCartClicked(event){
  console.log("Clicked cart");
	// add to cart button 
	var button = event.target; 
	// modal-bg div
	var title = getElementsByClassName('breadcrumbs')[1].innerText;
	if(quant !== null && glaze !== null){
        cart.push([title, bunSelection.quant, bunSelection.glaze, bunSelection.price]);
        //console.log(cart)

        //store it to local storage
        var JSONcart = JSON.stringify(cart);
        localStorage.setItem("cart", JSONcart);
    }
    displayCartNumber();	
}

function addToCart(){
  console.log("Clicked cart");
	var breadcrumb = document.getElementById('breadcrumb').innerText;
  var title = breadcrumb.split(">")[1].trim();
	if (bunAdded.quant !== null && bunAdded.glaze !== null){
        cart.push([title, bunAdded.quant, bunAdded.glaze, bunAdded.price]);
        //console.log(cart)

        //store it to local storage
        var JSONcart = JSON.stringify(cart);
        localStorage.setItem("cart", JSONcart);
    }
    displayCartNumber();	
}

// Show number of items in the cart icon //
function displayCartNumber() {
  getCart()
	var cartTotal = document.getElementById("cart-number");
	// cartTotal.appendChild(document.createTextNode(getCart.length));
	document.getElementById("cart-number").innerHTML = cart.length;
}

function getCart() {
  if (JSON.parse(localStorage.getItem("cart")) != null) {
    cart = JSON.parse(localStorage.getItem("cart"));
  } else {
    cart = [];
  }
}