"use strict";
var typed = new Typed(".auto-type", {
  strings: ["Two-Wheelers", "Three-Wheelers", "Four-Wheelers", "Mini-Trucks"],
  typeSpeed: 80,
  backSpeed: 80,
  loop: true,
  loopCount: Infinity,
  customElements: false
}); 

let startbtn = document.getElementById('startbtn');
let mainbox = document.getElementById('maininputbox');
let typedtext = document.getElementById("typedtext");
let xmark = document.getElementById("xmark");
startbtn.addEventListener('click',()=>{
  mainbox.style.display = 'block';
  typedtext.style.display = 'none';

})
xmark.addEventListener('click',()=>{
  mainbox.style.display = "none";
  typedtext.style.display = "block";
})

const scriptURL =
  "https://script.google.com/macros/s/AKfycbxkOCBYK75oPRYT6-MMiMDkfyeVAtdkHe7f_pWQHxZGnHDL7JgsriCnpLvxi5syT0VGiQ/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
    document.getElementById('fullname').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('address').value = '';
    document.getElementById('model').value = '';
});