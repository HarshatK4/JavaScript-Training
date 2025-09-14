// Simple Calculator
// Features: Basic operations (+, −, ×, ÷).
// Add More to do complex operations

function calculate(){
    const exp = document.getElementById("expression").value;
    const result = eval(exp);
    document.getElementById("result").textContent = "Result = " + result;
}

function clearAll(){
    document.getElementById('expression').value = '';
    document.getElementById('result').textContent = '';
}


// Digital Clock
// Features: Show real-time hours, minutes, seconds.
// hint : setInterval, Date object, DOM updates

function realTimeClock(){
    const now = new Date();
    let hr = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    hr = hr < 10 ? '0' + hr : hr;
    min = min < 10 ? '0' + min : min;
    sec = sec < 10 ? '0' + sec : sec;

    const startTime = ` ${hr} : ${min} : ${sec} `;
    document.getElementById('realTimeClock').textContent = startTime;
}

setInterval(realTimeClock, 1000);