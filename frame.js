//Starting the Game
function start() {
    //Gets Canvas Element
    c = document.getElementById("myCanvas");
    ctx = c.getContext("2d");

    //Sets up event Listeners
    window.addEventListener("keypress", keyEvent, false)

    //Constantly Updates Mouse Pos.
    mousePos = {};
    mousePos.x = 0;
    mousePos.y = 0;

    window.onmousemove = handleMouseMove;
    setInterval(getMousePosition, 100); // setInterval repeats every X ms

    //Begins Game
    setup();

    frameHeight = document.getElementById("myCanvas").style.height;
    frameWidth = document.getElementById("myCanvas").style.width;


    //Gets Frame Color
    frameColor = document.getElementById("myCanvas").style.backgroundColor;

    //Starts Loop
    looper();
}

//The Action Loop
function looper() {
    //Draw over old elements
    ctx.fillStyle = frameColor;
    ctx.fillRect(0, 0, 600, 600)

    //Draws the player's code
    draw();

    //Draw
    ctx.stroke();

    //Sets timeout of loop
    setTimeout(looper, 35);
}

//Sets Rectangle Drawer
function fillRect(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

function text(string, x, y, font, color) {
    ctx.font = font;
    ctx.font = "30px Arial";
    ctx.strokeStyle = color;
    ctx.fillText(string, x, y);
}

//Background Color Setter
function background(color) {
    document.getElementById("myCanvas").style.backgroundColor = color;
}

//Mouse Shiz..
function handleMouseMove(event) {
    event = event || window.event; // IE-ism
    mousePos = {
        x: event.clientX,
        y: event.clientY
    };
}

function getMousePosition() {
    var pos = mousePos;
    if (!pos) {
        // We haven't seen any movement yet
    } else {
        // Use pos.x and pox.y
    }
}

//Tweening :D - What a fun subject.
function glideX(time, x, targetx) {
    offsetX = x - targetx;

    perFrameX = offsetX / time;

    tweenFrame = 0;

    var changed = x - perFrameX;

    console.log(perFrameX);
    return changed;
}

//Saving Local Game Data...
//makeCookie(name, value, days)
saveLocalData = function (name, value, days) {
    var expires = "",
        date;
    if (days) {
        date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}


//readLocal Data.
readLocalData = function (name) {
    var nameEQ = name + "=",
        ca = document.cookie.split(';'),
        i,
        c;
    i = ca.length;
    while (i--) {
        c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) === 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
}

//delete local data
deleteLocalData = function (name) {
    makeCookie(name, '', -1);
}

//openURL
function openURL(url) {
    window.open(url, '_blank');
}

//Play Sound
function playSound(url) {
    var snd = new Audio(url); // buffers automatically when created
    snd.play();
}

//http request
http = {};
http.request = function (url, successHandler, errorHandler) {
    var xhr = typeof XMLHttpRequest != 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    xhr.open('get', url, true);
    xhr.onreadystatechange = function () {
        var status;
        var data;
        if (xhr.readyState == 4) { // `DONE`
            status = xhr.status;
            if (status == 200) {
                data = JSON.parse(xhr.responseText);
                successHandler && successHandler(data);
            } else {
                errorHandler && errorHandler(status);
            }
        }
    };
    xhr.send();
};

//==============
// To Implement Image Add:
//myImage = loadImage("logo.png"); in init.
// and drawImage(myImage, 0, 0); in drawing.

//Image Handling
function loadImage(name) {
    // create new image object
    var image = new Image();
    // load image
    image.src = name;
    // return image object
    return image;
}
// [imageObject] this is image object which is returned loadImage
// [x] screen x coordinate
// [y] screen y coordinate
function sprite(imageObject, x, y, height, width) {
    ctx.drawImage(imageObject, x, y, height, width);
}

Array = {
    //Goes through 1 by 1
    each: function (array, handler) {
        if (array.length > 0) {
            for (i = 0; i < array.length; i++) {
                data = array[i];
                console.log("Ah Fuck Nuggests")
                handler(data)
            }
        }
    },
    //Adds array to position, default 0,
    add: function (array, data, position) {
        array.splice(position, 0, data);
    },
    //Pushed data to end of an array
    push: function (array, data) {
        array.push("data");
    },
    //Finds position of specified data.
    find: function (array, key, start) {
        for (var ik = 0; i < array.length; i++) {
            if (array[i].id === key) {
                return i;
            }
        }
    },
};