window.onload = function () {
  const menu_btn = document.querySelector(".header__hamburger");
  const mobile_menu = document.querySelector(".mobile-navbar");
  menu_btn.addEventListener("click", function () {
    menu_btn.classList.toggle("header__hamburger_active");
    mobile_menu.classList.toggle("mobile-navbar_active");
  });
  let screenContainerFirst = document.querySelector(".screen__cards__item_hover-1");
  let imgFirst = document.querySelector('.screen__image-container__screen_active-1')
  let screenContainerSecond = document.querySelector(".screen__cards__item_hover-2");
  let imgSecond = document.querySelector('.screen__image-container__screen_active-2')
  let screenContainerThird = document.querySelector(".screen__cards__item_hover-3");
  let imgThird = document.querySelector('.screen__image-container__screen_active-3')

  console.log(window.matchMedia("(min-width: 1200px)"));

  if (window.matchMedia("(min-width: 1200px)").matches) {

    screenContainerFirst.addEventListener("mouseover", function () {
      imgFirst.style.display = "block";})

    screenContainerFirst.addEventListener("mouseleave", function () {
      imgFirst.style.display = "";})

    screenContainerSecond.addEventListener("mouseover", function () {
      imgSecond.style.display = "block";})

    screenContainerSecond.addEventListener("mouseleave", function () {
      imgSecond.style.display = "";})

    screenContainerThird.addEventListener("mouseover", function () {
      imgThird.style.display = "block";})

    screenContainerThird.addEventListener("mouseleave", function () {
      imgThird.style.display = "";})
  }
}

  



