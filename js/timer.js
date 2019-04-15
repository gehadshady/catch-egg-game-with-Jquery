
var min1 = 0;
var min2 = 0;
var sec1 = 0;
var sec2 = 0;
var flag;
var stopTimer;
var timer;
theTimer = function(){
    timer = document.getElementsByClassName('timer')[0];
    timer.innerText = "" + min2 + min1 + ":" + sec2 + sec1;
    flag = true;
    if (flag) {
        stopTimer = setInterval(function() {
        sec1++;
        if (sec1 == 10) {
            sec1 = 0;
            sec2++;
        }
        if (sec2 == 6) {
            sec2 = 0;
            sec1 = 0;
            min1++;
        }
        if (min1 == 2) {
            min1 = 0;
            sec1 = 0;
            sec2 = 0;
            clearInterval(stopTimer);
            confirm();
            clearInterval(egganime);
        }
        timer.innerText = "" + min2 + min1 + ":" + sec2 + sec1;
    }, 1000);
    flag = false;
}
}
window.addEventListener('load', function() {
    // theTimer();
});//load
