const imgEl = document.querySelector(".image-container")
const btnEl = document.querySelector(".btn")


btnEl.addEventListener("click", () => {
  imageNum = 9;
  addNewImages();
});


function addNewImages() {
  for (let index = 0; index < imageNum; index++) {
    const nImgEl = document.createElement("img");

    nImgEl.src = `https://picsum.photos/300?random=${Math.floor(
      Math.random() * 2000
    )}`;
    imgEl.appendChild(nImgEl);
  }
}