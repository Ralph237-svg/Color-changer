let changer = document.querySelector(".changer");
let red = document.querySelector(".red");
let blue = document.querySelector(".blue");
let green = document.querySelector(".green");
let purple = document.querySelector(".purple");
let pink = document.querySelector(".pink");
let button = document.querySelector(".button");
let resets = document.querySelector(".resets");


red.addEventListener("click", () =>{
    changer.classList.add("Red");
});
blue.addEventListener("click", () =>{
    changer.classList.add("Blue");
});
green.addEventListener("click", () =>{
    changer.classList.add("Green");
});
purple.addEventListener("click", () =>{
    changer.classList.add("Purple");
});
pink.addEventListener("click", () =>{
    changer.classList.add("Pink");
});

resets.addEventListener("click", () =>{
    changer.classList.add("back")
});

