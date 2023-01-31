count = 0;
var display = setInterval(function () {
    count++;
    alert("Hii Everyone");
    if (count == 6) {
        clearInterval(display);
    }
}, 4000);