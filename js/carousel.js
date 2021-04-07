// Carousel in the details page //

var carousel = document.getElementById("carousel");
var carouselContent = document.getElementById("carousel-content");
var prev = document.getElementById("prev");
var next = document.getElementById("next");

next.addEventListener("click", e => {
	// scroll by 900 px when clicked 
	carousel.scrollBy(900, 0);
	//console.log('next clicked');
	if (carousel.scrollWidth !== 0){
		prev.style.display = "flex";
	}
	if (carouselContent.scrollWidth - 900 <= carousel.scrollLeft + 900) {
		next.style.display = "none";
	}

});

prev.addEventListener("click", e => {
	carousel.scrollBy(-900, 0);
	if (carousel.scrollLeft - 900 <= 0){
		prev.style.display = "none";
	}
	if (!carouselContent.scrollWidth - 900 <= carousel.scrollLeft + 900) {
		next.style.display = "flex";
	}
});