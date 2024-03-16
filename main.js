let overlay = document.querySelector(".overlay"), navOpen = document.querySelector(".nav-open"), navbar = 
    document.querySelector("nav"), navClose = document.querySelector(".nav-close"), navLinks = 
    document.querySelectorAll("nav ul li a");

const navEle = [navOpen, navClose, overlay];

const navEvent = function (ele) {
  for (let i = 0; i < ele.length; i++) {
    ele[i].onclick = () => {
        navbar.classList.toggle("active");
        overlay.classList.toggle("active");
    };
  }
}
navEvent(navEle);
navEvent(navLinks);

let header = document.querySelector("header"), goTop = document.querySelector(".go-top");

window.onscroll = () => {
  if (window.scrollY >= 200) {
        header.classList.add("active");
        goTop.classList.add("active");
  }
  else {
        header.classList.remove("active");
        goTop.classList.remove("active");
  }
}