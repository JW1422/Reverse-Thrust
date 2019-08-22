function timer(){
    var startTime = new Date().getTime();
    tInterval = setInterval(function() {
        var hours = Math.floor((startTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((startTime % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((startTime % (1000 * 60)) / 1000);
        var milliseconds = Math.floor((startTime % (1000 * 60)) / 100);
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
        milliseconds = (milliseconds < 100) ? (milliseconds < 10) ? "00" + milliseconds : "0" + milliseconds : milliseconds;
    }, 1);
    
}
