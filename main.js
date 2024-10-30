burgerMenuIcon = document.getElementById("burgerIcon");
closeMenuIcon = document.getElementById("closeIcon");
hiddenNavBar = document.querySelector(".header__menu__mobile--open");
menu = document.querySelector(".header__menu__mobile__list-container");

burgerMenuIcon.addEventListener("click", function () {
  hiddenNavBar.classList.remove("hidden");
  setTimeout(() => {
    menu.classList.add("visible");
    hiddenNavBar.classList.add("visible");
    hiddenNavBar.setAttribute("aria-hidden", "false");
    burgerMenuIcon.setAttribute("aria-hiiden", "false");
  }, 10);
  console.log("menu open");
});

closeMenuIcon.addEventListener("click", function () {
  menu.classList.remove("visible");
  hiddenNavBar.classList.remove("visible");
  hiddenNavBar.addEventListener(
    "transitionend",
    function () {
      hiddenNavBar.classList.add("hidden");
      hiddenNavBar.setAttribute("aria-hidden", "true");
      burgerMenuIcon.setAttribute("aria-hiiden", "true");
    },
    { once: true }
  );
  console.log("Menu closed");
});
