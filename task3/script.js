const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

const timer = setInterval(function() {
    let date = new Date();
    let hrs = date.getHours();
    let mnts = date.getMinutes();
    let scnds = date.getSeconds();
    
    hours.style.transform = `rotate(${(hrs * 30) + (mnts/12+12)}deg)`;
    minutes.style.transform = `rotate(${(mnts * 6) + (scnds/12)}deg)`;
    seconds.style.transform = `rotate(${scnds * 6}deg)`;
}, 1000);



