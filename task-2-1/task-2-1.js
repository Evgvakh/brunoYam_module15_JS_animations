const ball = document.querySelector("img");

const ballMove =  [               
    { transform: "translateY(0px)"},        
    { transform: "translateY(-180px)" },
    { transform: "translateY(0px)" },     
    { transform: "translateY(-90px)" },                    
    { transform: "translateY(0px)" },        
    { transform: "translateY(-50px)" },
    { transform: "translateY(0px)" },        
    { transform: "translateY(-20px)" },
    { transform: "translateY(0px)" },        
    { transform: "translateY(-7px)" },
    { transform: "translateY(0px)" }       
];

const ballTiming = {
    duration: 4000
};

ball.addEventListener('click', () => {const ballAnimation = ball.animate(
    ballMove,
    ballTiming
 );});