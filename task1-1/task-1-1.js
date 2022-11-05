const hiddenDiv = document.querySelector(".hidden");
const burger = document.querySelector(".burger");
const cross = document.querySelector(".cross");

burger.addEventListener("click", () => {
    hiddenDiv.style.display = "initial";
    hiddenDiv.style.backgroundColor = "rgba(0, 0, 0, 0.274)";
    burger.style.display = "none";

});

// OR
// burger.addEventListener("mouseover", () => {
//     hiddenDiv.style.display = "initial"; 
//     hiddenDiv.style.backgroundColor = "rgba(0, 0, 0, 0.274)";   
// });

cross.addEventListener("click", () => {
    hiddenDiv.style.display = "none";
    burger.style.display = "initial";
});





