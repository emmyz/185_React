//back to top button
const bttButton = document.getElementById("btt_btn");
//window listen for scroll over quarter and display
window.addEventListener("scroll", displayButton);

function displayButton() {
  if (
    document.body.scrollTop > document.body.scrollHeight / 4 ||
    document.documentElement.scrollTop > document.body.scrollHeight / 4
  ) {
    bttButton.style.display = "block";
  } else {
    bttButton.style.display = "none";
  }
}
//click bttButton and go back to top
bttButton.addEventListener("click", backFunction);

function backFunction() {
  window.scroll(0, 0);
}
