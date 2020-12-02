let burger = document.getElementById("nav-burger");
let close = document.getElementById("close");
let aside = document.getElementById("sidemenu");

burger.addEventListener("click", openNav);
close.addEventListener("click", closeNav);

function openNav() {
  aside.style.width = "83%";
  aside.style.padding = "10% 5%";    
}

function closeNav() {
  aside.style.width = "0";
  aside.style.padding = "0";
} 