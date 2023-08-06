const inputEl = document.querySelector(".input");
const bodyEl = document.querySelector("body");


inputEl.checked = JSON.parse(localStorage.getItem("mode") );

update();

function update() {
  if (inputEl.checked) {
    bodyEl.style.background = "black";
  } else {
    bodyEl.style.background = "white";
  }
}

inputEl.addEventListener("input", () => {
  update();
  updateStorage();
});

function updateStorage() {
  localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}