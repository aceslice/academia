// ALL VARIABLES ARE DECLARED HERE

let toggle = document.getElementById("toggle");
let body = document.querySelector(".body");
let nav = document.querySelector(".nav");
toggle.addEventListener("click", function(){
    body.classList.toggle("darkmode");
});