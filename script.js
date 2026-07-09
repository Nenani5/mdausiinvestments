// MDAUSI Investments Interactive Features

document.addEventListener("DOMContentLoaded", function(){

const cards = document.querySelectorAll(".card");


cards.forEach(card => {

card.addEventListener("mouseenter", function(){

card.style.transform = "translateY(-12px)";

});


card.addEventListener("mouseleave", function(){

card.style.transform = "translateY(0)";

});

});


});