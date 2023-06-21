let img = document.getElementById("cookie");
let clicker = document.getElementById("clicker__counter");
let clickerSpeed = document.getElementById("clicker__speed");
let time = new Date();
let beginTime = time.getHours() * 3600000 + 
                time.getMinutes() * 60000 + 
                time.getSeconds() * 1000 + 
                time.getMilliseconds();

let statusIncrease = true;

img.onclick = () => {
    let time = new Date();
    buferTime = time.getHours() * 3600000 + 
                time.getMinutes() * 60000 + 
                time.getSeconds() * 1000 + 
                time.getMilliseconds();
    endTime = buferTime - beginTime;
    beginTime = buferTime;
    clicker.textContent = Number(clicker.textContent) + 1;
    clickerSpeed.textContent = (1/endTime * 1000).toFixed(2);
    if (statusIncrease) {
        img.width += 50;
        statusIncrease = false;
    } else {
        img.width -= 50;
        statusIncrease = true;
    };
};