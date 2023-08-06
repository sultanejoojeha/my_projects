const nextEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev");
const imgsEl = document.querySelectorAll("img");
const imgCEl = document.querySelector(".image-container");


let CImg = 1;
let timeout;


nextEl.addEventListener("click", () => {
  CImg++;
  clearTimeout(timeout);
  updateImg();
});
prevEl.addEventListener("click", () => {
  CImg--;
  clearTimeout(timeout);
  updateImg();
});
updateImg();


function updateImg() {
  if (CImg > imgsEl.length) {
    CImg = 1;
  } else if (CImg < 1) {
    CImg =imgsEl.length;
  }
  imgCEl.style.transform =`translateX(-${ (CImg - 1) * 500}px)`
  timeout = setTimeout(() => {
    CImg++;
    updateImg()
  }, 3000);
}