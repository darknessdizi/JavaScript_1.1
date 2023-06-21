let strTimer = document.getElementById("timer");
let my_set_interval_id;

my_set_interval_id = setInterval(() => {
    hour = strTimer.textContent.slice(0, 2);
    minutes = strTimer.textContent.slice(3, 5);
    seconds = String(strTimer.textContent.slice(6) - 1);

    if (seconds.length < 2) seconds = "0" + seconds;

    if ((seconds == 0) && ((minutes > 0) || (hour > 0))) {
        seconds = "59";
        minutes = String(minutes - 1);
        if (minutes.length < 2) minutes = "0" + minutes;

        if ((minutes == 0) && (hour > 0)) {
            minutes = "59";
            hour = String(hour - 1);
            if (hour.length < 2) hour = "0" + hour;
        };
    };
   
    strTimer.textContent = hour + ":" + minutes + ":" + seconds;

    if (strTimer.textContent == "00:00:00") {
        clearInterval(my_set_interval_id);
        alert("Вы победили в конкурсе!!!");
        location = "file:///D:/Remezov/python/12.%20Html/04.%20Позиционирование%20блочных%20элементов/block-elements-positioning/our-experts-section/index.html";

        // const a = document.getElementsByClassName("next__link");
        // a.click();
        
    }; 
}, 100);