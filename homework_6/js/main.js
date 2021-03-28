var cart;
var wishlist;

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
  getCart()
  console.log("Clicked cart");
	var breadcrumb = document.getElementById('breadcrumb').innerText;
  var title = breadcrumb.split(">")[1].trim();
	if (bunAdded.quant != null && bunAdded.glaze != null){
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
  getCart();
	var cartTotal = document.getElementById("cart-number");
	// cartTotal.appendChild(document.createTextNode(getCart.length));
	document.getElementById("cart-number").innerHTML = cart.length;
}

function getCart() {
  if (localStorage.getItem("cart") == "undefined") {
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    cart = JSON.parse(localStorage.getItem("cart"));
  }
}

function getWishlist() {
  if (localStorage.getItem("wishlist") == "undefined") {
    wishlist = [];
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  } else {
    wishlist = JSON.parse(localStorage.getItem("wishlist"));
  }
}

// Store product details in cart //
function updateCart() {

	// Getting the cart stored in local storage 
	getCart();
	console.log(cart, cart.length)

	// Resetting the .all-cart-items div every time function is called 
  var emptyFrame = document.getElementById("empty-cart-frame")
	var allCartItems = document.getElementById("cart-items");
  var totalPriceFrame = document.getElementById("total-price");
  emptyFrame.innerHTML = "";
  allCartItems.innerHTML = "";
  totalPriceFrame.innerHTML = "";

	console.log("pre-if");
	// when nothing is in the cart  
	if (cart.length == 0) {
    console.log("empty cart");
    var emptyCart = document.createElement("div");
    emptyCart.setAttribute("class", "empty-cart");

    var emptyHeader = document.createElement("div");
    emptyHeader.setAttribute("class", "header");
    emptyHeader.appendChild(document.createTextNode("Your Cart Is Empty"));

    var orderLink = document.createElement("a");
    orderLink.setAttribute("href", "order.html");

    var orderOnline = document.createElement("div");
    orderOnline.setAttribute("class", "order-btn");
    orderOnline.appendChild(document.createTextNode("Order Online"));

    orderLink.appendChild(orderOnline);

    emptyCart.appendChild(emptyHeader);
    emptyCart.appendChild(orderLink);

    emptyFrame.appendChild(emptyCart);
	} else {
		// initialize total price
		var totalPrice = 0;
		for (var i = 0; i < cart.length; i++) {
      console.log("here");
			// creating div element for each cart row 
			var cartItem = document.createElement("div");
			cartItem.setAttribute("class", "cart-item-grid");
			// set index of cart item for deletion later
			cartItem.setAttribute("index", i);

			// adding image to the row
			var img = document.createElement("img");
			img.setAttribute("src", "assets/images/original.png");
			img.setAttribute("class", "cart-tn");
			cartItem.append(img);

      var itemInfo = document.createElement("div");
			itemInfo.setAttribute("class", "cart-item-info");

			// div for item title
			var itemTitle = document.createElement("div");
			itemTitle.setAttribute("class", "cart-item-title");
      var titleLabel = document.createElement("div");
      titleLabel.setAttribute("class", "label");
      titleLabel.appendChild(document.createTextNode(cart[i][0]));
      itemTitle.appendChild(titleLabel);
      itemInfo.append(itemTitle);

			// div for item title 
			var itemDetails = document.createElement("div");
			itemDetails.setAttribute("class", "cart-item-details");

      // Glaze
      var glazeDetails = document.createElement("div");
			glazeDetails.setAttribute("class", "cart-item-det");
      glazeDetails.appendChild(document.createTextNode("Glaze: " + cart[i][2]));
      itemDetails.appendChild(glazeDetails);

      // Quantity
      var quantDetails = document.createElement("div");
			quantDetails.setAttribute("class", "cart-item-det");
      quantDetails.appendChild(document.createTextNode("Quantity: " + cart[i][1]));
      itemDetails.appendChild(quantDetails);

      // Subtotal
      var priceDetails = document.createElement("div");
			priceDetails.setAttribute("class", "cart-item-det");
      priceDetails.appendChild(document.createTextNode("Subtotal: $" + cart[i][3]));
      itemDetails.appendChild(priceDetails);
      itemInfo.append(itemDetails);

      cartItem.append(itemInfo);

			// remove button 
			var remove = document.createElement("button");
			remove.setAttribute("type", "button");
			remove.setAttribute("class", "remove-btn remove-action");
			remove.setAttribute("onclick", "removeCartItem(this);");
			remove.appendChild(document.createTextNode("Remove"));
      cartItem.append(remove);

			// add to total price
			totalPrice += cart[i][3]
			allCartItems.appendChild(cartItem);
		}
    console.log(totalPrice)
    var totalPriceLabel = document.createElement("div");
    totalPriceLabel.setAttribute("class", "label");
    totalPriceLabel.appendChild(document.createTextNode("Total Price: $" + totalPrice));
    var checkoutBtn = document.createElement("div");
    checkoutBtn.setAttribute("class", "checkout-btn");
    checkoutBtn.appendChild(document.createTextNode("Checkout"));
		
    totalPriceFrame.appendChild(totalPriceLabel);
    totalPriceFrame.appendChild(checkoutBtn);
	}
	displayCartNumber();
}


//removes cart item 
function removeCartItem(item) {
  getCart()
	// item is the remove button
  console.log("remove")
  console.log(item.parentElement)
	// get index of the cart item /row
	var index = item.parentElement.getAttribute("index");

	// remove item at index from cart
	cart.splice(index, 1);

	localStorage.setItem("cart", JSON.stringify(cart));
	updateCart();
}

// Store product details in cart //
function updateWishlist() {

	// Getting the cart stored in local storage 
	getWishlist();
	console.log(wishlist, wishlist.length)

	// Resetting the .all-cart-items div every time function is called 
  var emptyFrame = document.getElementById("empty-wish-frame")
	var allWishItems = document.getElementById("wish-items");
  emptyFrame.innerHTML = "";
  allWishItems.innerHTML = "";

	console.log("pre-if");
	// when nothing is in the cart  
	if (wishlist.length == 0) {
    console.log("empty wishlist");
    var emptyWish = document.createElement("div");
    emptyWish.setAttribute("class", "empty-wish");

    var emptyHeader = document.createElement("div");
    emptyHeader.setAttribute("class", "header");
    emptyHeader.appendChild(document.createTextNode("Your Wishlist Is Empty"));

    var orderLink = document.createElement("a");
    orderLink.setAttribute("href", "order.html");

    var orderOnline = document.createElement("div");
    orderOnline.setAttribute("class", "order-btn");
    orderOnline.appendChild(document.createTextNode("Order Online"));

    orderLink.appendChild(orderOnline);

    emptyCart.appendChild(emptyHeader);
    emptyCart.appendChild(orderLink);

    emptyFrame.appendChild(emptyCart);
	} else {
		// initialize total price
		var totalPrice = 0;
		for (var i = 0; i < cart.length; i++) {
      console.log("here");
			// creating div element for each cart row 
			var cartItem = document.createElement("div");
			cartItem.setAttribute("class", "cart-item-grid");
			// set index of cart item for deletion later
			cartItem.setAttribute("index", i);

			// adding image to the row
			var img = document.createElement("img");
			img.setAttribute("src", "assets/images/original.png");
			img.setAttribute("class", "cart-tn");
			cartItem.append(img);

      var itemInfo = document.createElement("div");
			itemInfo.setAttribute("class", "cart-item-info");

			// div for item title
			var itemTitle = document.createElement("div");
			itemTitle.setAttribute("class", "cart-item-title");
      var titleLabel = document.createElement("div");
      titleLabel.setAttribute("class", "label");
      titleLabel.appendChild(document.createTextNode(cart[i][0]));
      itemTitle.appendChild(titleLabel);
      itemInfo.append(itemTitle);

			// div for item title 
			var itemDetails = document.createElement("div");
			itemDetails.setAttribute("class", "cart-item-details");

      // Glaze
      var glazeDetails = document.createElement("div");
			glazeDetails.setAttribute("class", "cart-item-det");
      glazeDetails.appendChild(document.createTextNode("Glaze: " + cart[i][2]));
      itemDetails.appendChild(glazeDetails);

      // Quantity
      var quantDetails = document.createElement("div");
			quantDetails.setAttribute("class", "cart-item-det");
      quantDetails.appendChild(document.createTextNode("Quantity: " + cart[i][1]));
      itemDetails.appendChild(quantDetails);

      // Subtotal
      var priceDetails = document.createElement("div");
			priceDetails.setAttribute("class", "cart-item-det");
      priceDetails.appendChild(document.createTextNode("Subtotal: $" + cart[i][3]));
      itemDetails.appendChild(priceDetails);
      itemInfo.append(itemDetails);

      cartItem.append(itemInfo);

			// remove button 
			var remove = document.createElement("button");
			remove.setAttribute("type", "button");
			remove.setAttribute("class", "remove-btn remove-action");
			remove.setAttribute("onclick", "removeCartItem(this);");
			remove.appendChild(document.createTextNode("Remove"));
      cartItem.append(remove);

			// add to total price
			totalPrice += cart[i][3]
			allCartItems.appendChild(cartItem);
		}
    console.log(totalPrice)
    var totalPriceLabel = document.createElement("div");
    totalPriceLabel.setAttribute("class", "label");
    totalPriceLabel.appendChild(document.createTextNode("Total Price: $" + totalPrice));
    var checkoutBtn = document.createElement("div");
    checkoutBtn.setAttribute("class", "checkout-btn");
    checkoutBtn.appendChild(document.createTextNode("Checkout"));
		
    totalPriceFrame.appendChild(totalPriceLabel);
    totalPriceFrame.appendChild(checkoutBtn);
	}
	displayCartNumber();
}

function removeWishList(item) {

  getWishlist()
	// get index of the cart item /row
	var index = item.parentElement.getAttribute("index");

	// remove item at index from cart
	wishlist.splice(index, 1);

	localStorage.setItem("wishlist", JSON.stringify(wishlist));
	updateWishlist();
}