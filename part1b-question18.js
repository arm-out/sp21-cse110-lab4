const callback = () => {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time)
}

var timerID = setInterval(callback, 1000);