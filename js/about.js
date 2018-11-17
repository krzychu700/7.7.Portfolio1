(function () {
  const aboutPos = document.querySelector(".about").offsetTop;
  const boxesAbout = document.querySelectorAll(".about__date");
  const boxesPortfolio = document.querySelectorAll(".portfolio__box");
  const boxLine = document.querySelector(".about__line");

  window.addEventListener('scroll', function () {
    let windowScroll = window.scrollY;

    boxesAbout.forEach(function (boxAbout) {
      if (windowScroll > aboutPos + boxAbout.offsetTop - window.innerHeight * .7) {
        boxAbout.style.opacity = 1;
      } else {
        boxAbout.style.opacity = 0;
      }
    })

    function showLine() {
      let lineHeight = 0;
      if ((windowScroll - aboutPos > 0) && (window.screen.availWidth > 426)) {
        boxLine.style.opacity = 1;
        boxLine.style.height = `${lineHeight+windowScroll-aboutPos}px`;
      } else {
        boxLine.style.height = 0;
        boxLine.style.opacity = 0;
      }
    }

    showLine()

    boxesPortfolio.forEach(function (boxPortfolio) {
      if (windowScroll > boxPortfolio.offsetTop - window.innerHeight * .7) {
        boxPortfolio.style.opacity = 1
      } else {
        boxPortfolio.style.opacity = 0
      }
    })
  });
})();