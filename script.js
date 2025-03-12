"use strict";
var typed = new Typed(".auto-type", {
  strings: ["Two-Wheelers", "Three-Wheelers", "Four-Wheelers", "Mini-Trucks"],
  typeSpeed: 80,
  backSpeed: 80,
  loop: true,
  loopCount: Infinity,
  customElements: false,
});

let startbtn = document.getElementById("startbtn");
let mainbox = document.getElementById("maininputbox");
let typedtext = document.getElementById("typedtext");
let xmark = document.getElementById("xmark");
let phonediv = document.getElementById("jhakaas");
let lastpara = document.getElementById("lastpara");
startbtn.addEventListener("click", () => {
  phonediv.style.animationName = "bounceInLeft";
  mainbox.style.display = "block";
  typedtext.style.display = "none";
});
xmark.addEventListener("click", () => {
  phonediv.style.animationName = "bounceOutRight";
  mainbox.style.display = "none";
  typedtext.style.display = "block";
});

const scriptURL =
  "https://script.google.com/macros/s/AKfycbxkOCBYK75oPRYT6-MMiMDkfyeVAtdkHe7f_pWQHxZGnHDL7JgsriCnpLvxi5syT0VGiQ/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
  showfinalmsg();
    document.getElementById("fullname").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("address").value = "";
    document.getElementById("model").value = "";
    mainbox.style.display = "none";
});

lastpara.addEventListener("dblclick", () => {
  let mypas = prompt("enter password");
  if (mypas === "2004") {
    alert(`Creater - Rishabh yadav 
  linkedIN - https://www.linkedin.com/in/risabh-yadav-455963261/`);
  } else {
    alert("Wrong Password");
  }
});

let showfinalmsg = () => { 
alert(
  `THANK YOU, ${
    document.getElementById("fullname").value
  } Your details have been successfully submitted. We appreciate your time and will get back to you shortly.`
);
}