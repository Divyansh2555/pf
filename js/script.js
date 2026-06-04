const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

// mobile menu toggle
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("show");
});

// form submit
document.getElementById("form").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Message sent successfully!");
});