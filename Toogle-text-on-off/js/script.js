let toggle = document.querySelector(".toggle");
let on = document.querySelector(".on");
let off = document.querySelector(".off");
let state = false;

toggle.addEventListener("click", () => {
  if (!state) {
    off.style.display = "none";
    on.style.display = "block";
    state = !state;
  } else {
    off.style.display = "block";
    on.style.display = "none";
    state = !state;
  }
});
