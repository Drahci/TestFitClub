const getStartedBtn = document.querySelector(".header__content .btn");
getStartedBtn.addEventListener("click", () => {
  alert("Let's Go!!!");
});
document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(".section__container");
  const scrollTop = window.scrollY;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (sectionTop + sectionHeight < scrollTop) {
      section.style.opacity = "0.3";
    } else {
      section.style.opacity = "1";
    }
  });
});
