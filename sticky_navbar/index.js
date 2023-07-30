const navEl = document.querySelector(".nav");

const bottomContainerEl = document.querySelector(".bottom-container");

console.log(navEl.offsetHeight);
console.log(bottomContainerEl.offsetTop);

window.addEventListener("scroll", () => {
  if (window.scrollY > bottomContainerEl.offsetTop - navEl.offsetHeight - 50) {
    navEl.classList.add("active");
  } else {
    navEl.classList.remove("active");
  }
});