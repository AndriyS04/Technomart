var write_btn = document.querySelector('.btn-write-us');
var popup_write_us = document.querySelector('.popup-write-us');
var login = popup_write_us.querySelector('[name=name]');
var email = popup_write_us.querySelector("[name=email]");
var text = popup_write_us.querySelector("[name=text]"); 
var close_btn = popup_write_us.querySelector('.popup-close');
var form = popup_write_us.querySelector('.write-us');
var storage_name = localStorage.getItem("login");
var storage_email = localStorage.getItem("email");
var popup = document.querySelector('.popup');
write_btn.addEventListener("click", function(write_us) {
	write_us.preventDefault();
	popup_write_us.classList.remove('non_display');
	if (storage_name && storage_email) {
 		email.value = storage_email;
 		login.value = storage_name;
 		text.focus();
 	} else {
 		login.focus();
 	}
});
close_btn.addEventListener("click", function(close) {
	close.preventDefault();
	popup_write_us.classList.add('non_display');
	popup_write_us.classList.remove('popup-error');
});
form.addEventListener("submit", function (evt) {
 if (!login.value || !email.value) {
	 evt.preventDefault();
	 popup_write_us.classList.remove('popup-error');
	 popup_write_us.offsetWidth = popup_write_us.offsetWidth;
 	 popup_write_us.classList.add('popup-error');
 } else if (!text.value) {
 	 evt.preventDefault();
 	 popup_write_us.classList.remove('popup-error');
	 popup_write_us.offsetWidth = popup_write_us.offsetWidth;
 	 popup_write_us.classList.add('popup-error');
 } else {
	 localStorage.setItem("login", login.value);
	 localStorage.setItem("email", email.value);
 }
 });


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

var map = document.querySelector('.map');
var	map_link = document.querySelector('.our-company-map');
var close_btn = map.querySelector('.popup-close');
map_link.addEventListener('click', function(close) {
	close.preventDefault();
	map.classList.remove('non_display');
});
close_btn.addEventListener("click", function(close) {
	close.preventDefault();
	map.classList.add('non_display');
});
map.addEventListener('click', function(event){
	if (event=!true) {
		map.classList.add('non_display');
	}
});

window.addEventListener("keydown", function(event) { 
	if (event.keyCode === 27) {
		if (!popup_write_us.classList.contains('non_display') || !add_to_cart.classList.contains('non_display') || !map.classList.contains('non_display')) {
		popup_write_us.classList.add('non_display');
		popup_write_us.classList.remove('popup-error');
		add_to_cart.classList.add('non_display');
		map.classList.add('non_display');

		}
	}
});

var advantages_col = document.querySelector('.advantages-left-column');
var advantage = advantages_col.querySelectorAll('a');
var advantage_description = document.querySelectorAll('.advantages-right-column section');
var i=0;

for (i = 0; i < advantage.length; ++i) {
	advantage[i].addEventListener("click", function (event) {
		event.preventDefault();
        for (j = 0; j < advantage.length; ++j) {
            advantage[j].classList.remove("active");        
        }
        for (h = 0; h < advantage.length; ++h) {
            if (advantage[h] == this) {
                advantage[h].classList.add("active");
                for (k = 0; k < advantage_description.length; ++k) {
                    advantage_description[k].classList.remove("active");
                }
                advantage_description[h].classList.add("active");
            }
        }
	})
}
