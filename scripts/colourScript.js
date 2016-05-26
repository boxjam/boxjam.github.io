$(document).ready(function () {
            var red = randomColour();
            var green = randomColour();
            var blue = randomColour();

            var colour = '#' + red.toString(16) + green.toString(16) + blue.toString(16);
            $("body").css("background-color", colour);
            $("div").css("background-color", colour);

            var divTotal = Math.floor(Math.random() * 100);
            for (var a = 0; a <= divTotal; a++) {
                var i = a;
                var divsize = ((Math.random() * 100)).toFixed();
                $newdiv = $('<div/>').css({
                    'width': divsize + 'px',
                    'height': divsize + 'px',
                    'background-color': colour,
                    'border-radius' : 50
            });

            var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
            var posy = (Math.random() * ($(document).height() - divsize)).toFixed();
            $newdiv.attr("id", i);
            $newdiv.css({
                'position': 'fixed',
                'left': posx + 'px',
                'top': posy + 'px'
                }).appendTo('body');
            }

            $('div').each(function() {
                var $div = $(this);

            })

        setInterval(function () {
                red = alterColour(red);
                var redHex = hexify(red);
                green = alterColour(green);
                var greenHex = hexify(green);
                blue = alterColour(blue);
                var blueHex = hexify(blue);
                var hex = redHex + greenHex + blueHex;
                var colour = '#' + hex;
                $("body").css("background-color", colour);
        }, 20);

    function randomColour() 
    {
        return Math.floor(Math.random() * 256);
    }

    function alterColour(startColour)
    {
        startColour += Math.floor((Math.random() * 5) - 2)
        if (startColour < 0) {
            startColour = -startColour;
        }
        return startColour;
    }

    function hexify(colour)
    {
        var colourHex = colour.toString(16);
        if (colourHex.length === 1) {
            colourHex = '0' + colourHex;
        }
        return colourHex;
    }
});
