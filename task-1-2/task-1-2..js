const logoCOD = document.querySelector(".cod");
const logoMW = document.querySelector(".mw");
const number = document.querySelector(".ii");

const logoCODAnimation = logoCOD.animate(
    [
    { transform: "translateX(-600px)", opacity: "0" },
    { transform: "translateX(0px)", opacity: "1" },    
    ],
    {
        duration: 4000,
        easing: "ease-out"        
    }
);

const logoMWAnimation = logoMW.animate(
    [
    { transform: "translateY(400px)", opacity: "0" },
    { transform: "translateY(0px)", opacity: "1" }        
    ],
    {
        duration: 4000,
        easing: "ease-in"          
    }
);

const numberAnimation = number.animate(
    [
    {  opacity: "0" },    
    {  opacity: "1" }      
    ],
    {
        duration: 5500,
        easing: "ease-in"          
    }
);

window.onload = function() {
    numberAnimation.play();
    // logoMWAnimation.play(); 
    // logoCODAnimation.play();     
};