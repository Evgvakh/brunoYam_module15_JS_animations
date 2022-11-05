const div1 = document.querySelector("div.first");
const div2 = document.querySelector("div.second");
const div3 = document.querySelector("div.third");

let position1 = 0;
let position2 = 0;
let position3 = 0;

function animate1() {
    position1 += 2;

    div1.style.transform = `translateX(${position1}px)`;

    if (position1 < 250) {
        requestAnimationFrame(animate1);
    }
}

function animate2() {
    position2 += 3;

    div2.style.transform = `translateX(${position2}px)`;

    if (position2 < 350) {
        requestAnimationFrame(animate2);
    }
}

function animate3() {
    position3 += 4;

    div3.style.transform = `translateX(${position3}px)`;

    if (position3 < 450) {
        requestAnimationFrame(animate3);
    }
}

animate1();
animate2();
animate3();
