/*=========================================
#ハンバーガーメニュー
=========================================*/
const hamburger = document.querySelector(".js-hamburger");
const drawer = document.querySelector(".js-drawer");
const drawerLinks = document.querySelectorAll(".js-drawer a");

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-active');
  drawer.classList.toggle('is-active');
});

drawerLinks.forEach(drawerLink => {
  drawerLink.addEventListener('click', () => {
    hamburger.classList.remove('is-active');
    drawer.classList.remove('is-active');
  });
});

drawer.addEventListener('click', () => {
  hamburger.classList.remove('is-active');
  drawer.classList.remove('is-active');
});


/*アコーディオン*/
jQuery(function ($) {
    $(function () {
      $(".js-accordion-title").on("click", function() {
        $(this).next().slideToggle(200);
        $(this).toggleClass("open",200);
      });
    });
  });