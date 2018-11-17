(function () {
  const burger = document.querySelector(".burger");
  const iconBurger = document.querySelector(".fa-bars");
  const iconX = document.querySelector(".fa-times");
  const column = document.querySelector(".top-menu__nav");

  if (window.screen.availWidth <= 425) {
    iconBurger.classList.add("show");
  } else {
    iconBurger.style.display = "none";
  }

  burger.addEventListener("click", function () {
    iconBurger.classList.toggle("show");
    iconX.classList.toggle("show");
    column.classList.toggle("show");

  })
})();