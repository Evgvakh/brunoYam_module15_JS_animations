const ball = document.querySelector("img");

const ballMove = [   
        { transform: "translateY(0) translateX(0) rotate(0deg)"}, 
        { transform: "translateY(50) translateX(40) rotate(90deg)"},         
        { transform: "translateY(170px) translateX(100px) rotate(180deg)" },
        { transform: "translateY(150px) translateX(130px) rotate(360deg)" }, 
        { transform: "translateY(170px) translateX(150px) rotate(540deg)" },     
        { transform: "translateY(150px) translateX(160px) rotate(720deg)" },
        { transform: "translateY(170px) translateX(170px) rotate(900deg)" },
        { transform: "translateY(170px) translateX(170px) rotate(900deg)" },
        { transform: "translateY(170px) translateX(170px) rotate(900deg)" },
];

const ballTiming = {
    duration: 2000, easing: "cubic-bezier(.49,.37,.61,.32)"
} ;


ball.addEventListener('click', () => {
    const ballAnimation = ball.animate(
        ballMove,
        ballTiming
    );
});

// 