const elements = document.querySelectorAll(".hole-game div"),
    dead = document.getElementById("dead"),
    valueMiss = document.getElementById("lost"),
    strTimer = document.getElementById("timer"),
    finish = (text) => {
        dead.textContent = 0;
        valueMiss.textContent = 0;
        strTimer.textContent = 11;
        alert(text);
    };

for (let elem of elements) {
    elem.onclick = () => {
        if (elem.classList.contains("hole_has-mole")) {
            dead.textContent = Number(dead.textContent) + 1;
        } else {
            valueMiss.textContent = Number(valueMiss.textContent) + 1;
        };

        if (dead.textContent == 10) {
            finish(`${dead.textContent} кротов. Вы победили!!!`);
        } else if (valueMiss.textContent == 5) {
            finish(`${valueMiss.textContent} промахов. Вы проиграли`);
        };
    };
};

// создание таймера для игры: 

my_set_interval_id = setInterval(() => {
    strTimer.textContent = Number(strTimer.textContent) - 1;

    if (strTimer.textContent == 0) {
        finish("Время вышло!!!");
    }; 
}, 1000);