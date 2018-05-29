var navMain = document.querySelectorAll(".main-nav__list");
var navToggle = document.querySelector(".page-header__btn");
var headerNojs = document.querySelector(".page-header--nojs");

if (headerNojs) {
  headerNojs.classList.remove("page-header--nojs");
}

navToggle.addEventListener("click", function() {
  
  navMain.forEach(function(item, i, navMain) {
    if (item.classList.contains("main-nav__list--closed")) {
        item.classList.remove("main-nav__list--closed");
        item.classList.add("main-nav__list--opened");
        navToggle.classList.add("menu-opened");
      } else {
        item.classList.add("main-nav__list--closed");
        item.classList.remove("main-nav__list--opened");
        navToggle.classList.remove("menu-opened");
      }
  });
    
});


