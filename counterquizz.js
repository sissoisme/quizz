function startTimer(duration, display) {
    let timeOutMsg = 'SORRY, TIME OUT';
    let timeOutMsgh2 = 'Better Luck Next Time. Click Here To Exit ';
    let timer = duration,
        minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        if (minutes == 0 && seconds == 0) {
            document.getElementById('popupText').innerText = timeOutMsg;
            document.getElementById('selector1').style.display = "none";
            document.getElementById('selector2').style.display = "none";
            document.getElementById('selector3').style.display = "none";
            document.getElementById('selector4').style.display = "none";
            document.getElementById('popupTexth2').innerText = timeOutMsgh2;
            document.getElementById('popup').style.display = "block";
            document.getElementById('popup').style.background = "yellow";
            document.getElementById('returnBtn').style.display = "none";
            document.getElementById('popup').addEventListener('click', function () {
                // location.href = "quiz.html"
                

                window.close();
                location.href = "index.html";
            })
            
        }
        if (--timer < 0) {
            timer = 0;
        }
    }, 1000);

}

window.onload = function () {
    let twoMinutes = 60 * 2,
        display = document.querySelector('#time');
    startTimer(twoMinutes, display);
};
