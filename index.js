const ratingELs = document.querySelectorAll(".rating");
const btnEl = document.getElementById("btn");
const containerEl = document.getElementById("container");
let selectedRating = "";

ratingELs.forEach((ratingELs) => {
  ratingELs.addEventListener("click", (event) => {
    removeActive();
    selectedRating =
      event.target.innerText || event.target.parentNode.innerText;
    event.target.classList.add("active");
    event.target.parentNode.classList.add("active");
  });
});

btnEl.addEventListener("click", () => {
  if (selectedRating !== "") {
    containerEl.innerHTML = `
        <strong>Thank you!</strong>
        <br>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>we'll use your feedback to improve our customer support<p>
        `;
  }
});

function removeActive() {
  ratingELs.forEach((ratingELs) => {
    ratingELs.classList.remove("active");
  });
}
