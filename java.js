

const box = document.querySelector(".box_1");
const overlay = document.querySelector(".overlay_1");
const image = document.querySelector(".image_1");

window.addEventListener("load", sidenVises);


function sidenVises() {
    console.log("sidenVises");
    box.addEventListener("click", klik);
    overlay.classList.toggle("hide");
}

// function klik() {
//     console.log("klik");
//     overlay.classList.remove("hide");
// }

function myFunction() {
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }