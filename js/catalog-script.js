var buy = document.querySelectorAll('.catalog-btn-buy');
var add_to_cart = document.querySelector('.popup-addedto-cart');
var close_btn = add_to_cart.querySelector('.popup-close');
var continue_buy = add_to_cart.querySelector('.btn-continue');
for (i=0; i<buy.length; i++) {
buy[i].addEventListener('click', function(event){
	event.preventDefault();
	add_to_cart.classList.remove('non_display');
});
}
close_btn.addEventListener("click", function(close) {
	close.preventDefault();
	add_to_cart.classList.add('non_display');
});
continue_buy.addEventListener('click', function(event){
	add_to_cart.classList.add('non_display');
})

window.addEventListener("keydown", function(event) { 
	if (event.keyCode === 27) {
		if (!add_to_cart.classList.contains('non_display')) {
		add_to_cart.classList.add('non_display');
		}
	}
});