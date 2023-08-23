"use strict";

"use strict";

// Working with classes

const modal = document.querySelector(".modal"); // modal window selection
const overlay = document.querySelector(".overlay"); // overlay element
const btnCloseModel = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelector(".show-modal");
const btnsSubmit = document.querySelectorAll(".buttons");
// The above selects only the first modal

console.log(btnsOpenModal);

const btnsOpenModalAll = document.querySelectorAll(".show-modal");
console.log(btnsOpenModalAll); // List of html nodes

const openModal = function () {
  // console.log("button clicked");
  modal.classList.remove("hidden"); // No . for removing classes
  overlay.classList.remove("hidden");
};

for (let i = 0; i < btnsOpenModalAll.length; i++) {
  btnsOpenModalAll[i].addEventListener("click", openModal); // the function is attached to all of the 3 buttons
}

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
console.log(btnsSubmit);
btnsSubmit.forEach((btn)=>{
  btn.addEventListener('click',closeModal);
})

btnCloseModel.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// Keyboard events

//keydown--->event happens when key is pressed
//keypress--->event keeps happening when key is pressed
//keyup---> event happens when key is not pressed
document.addEventListener("keydown", function (e) {
  // event object
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    // Modal is not hidden
    closeModal();
  }
  // Here we need to look in the event unlike click events
});
