const content = document.getElementById("contentBox");
const envelope = document.getElementById("envelopeClick");

if (content && envelope) {
  envelope.addEventListener("click", () => {
    content.classList.add("opened");   // envelope hide, letter show
  });
}
const nextBtn = document.getElementById("nextButton");

nextBtn.addEventListener("click", () => {
  window.location.href = "page3.html";   // yaha apna next page naam
});
