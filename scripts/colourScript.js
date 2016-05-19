$(document).ready(function () {
    //functions need consolidating
    var startRed = Math.floor(Math.random() * 256);
    var startGreen = Math.floor(Math.random() * 256);
    var startBlue = Math.floor(Math.random() * 256);
    var colour = '#' + startRed.toString(16) + startGreen.toString(16) + startBlue.toString(16);
    $("body").css("background-color", colour)
    setInterval(
        function () {
            startRed += Math.floor((Math.random() * 5) - 2)
            if (startRed < 0)
            {
                startRed = -startRed;
            }
            var startRedHex = startRed.toString(16);
            if (startRedHex.length === 1)
            {
                startRedHex = '0' + startRedHex;
            }
            startGreen += Math.floor((Math.random() * 5) - 2)
            if (startGreen < 0) {
                startGreen = -startGreen;
            }
            var startGreenHex = startGreen.toString(16);
            if (startGreenHex.length === 1) {
                startGreenHex = '0' + startGreenHex;
            }
            startBlue += Math.floor((Math.random() * 5) - 2)
            if (startBlue < 0) {
                startBlue = -startBlue;
            }
            var startBlueHex = startBlue.toString(16);
            if (startBlueHex.length === 1) {
                startBlueHex = '0' + startBlueHex;
            }
            var hex = startRedHex + startGreenHex + startBlueHex;
            var colour = '#' + hex;
            $("body").css("background-color", colour);
        },
    10);
});
