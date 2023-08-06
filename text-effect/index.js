const containerEl = document.querySelector(".container")
const careers = ["Student", "Web Developer", "human?", "Instructor"]

let caIndex = 0
let chIndex = 0


update();
function update() {
  chIndex++;
  containerEl.innerHTML = `
    <h1>I am ${careers[caIndex].slice(0, 1) === "I" ? "an" : "a"} ${careers[
    caIndex
  ].slice(0, chIndex)}</h1>
    `

  if (chIndex === careers[caIndex].length) {
    caIndex++
    chIndex = 0
  }
  if (caIndex === careers.length) {
    caIndex = 0
  }
  setTimeout(update, 250)
}