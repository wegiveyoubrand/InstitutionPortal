document.querySelector(".menu").addEventListener("click", () => {
  menuToggle();
});

const aside = document.querySelector("aside");

const MenuContent = document.querySelector(".aside");
const menuToggle = function () {
  aside.classList.toggle("active");
  MenuContent.classList.toggle("active");
};
