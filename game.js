function setup() {
    myImage = loadImage("ship.png");
    background("white")
    ship = {};
    ship.x = 60;
    ship.y = 490;
    objects = {}

    enemyPositions = [{
        id: "EP1",
        x: 10,
        y: 20,
    }, {
        id: "EP2",
        x: 400,
        y: 20,
    }, ]
}

function draw() {
    ship.x = mousePos.x - 27;
    text("hello", 0, 30, "30px Arial", "yellow");
    if (ship.x > 450) {
        ship.x = 450;
    }

    sprite(myImage, ship.x, ship.y, 50, 100),


    Array.each(enemyPositions, function (data) {
        data.y = data.y + 10;
        sprite(myImage, data.x, data.y, 50, 100);
        if (data.y == 500) {
            data.y = 0;
            data.x =

            //Remove from array
            //pos = Array.find(enemyPositions, data.id);
            //enemyPositions.splice(pos, 1);
        }
    })
}
//if (shape1.x < shape2.x + shape2.width && shape1.x + shape1.width > shape2.x &&
//    shape1.y < shape2.y + shape2.height && shape1.y + shape1.height > shape2.y) {
// The objects are touching
//    console.log("collision")
//}
function keyEvent(e) {
    console.log(e);

    if (e.keyCode = 39) {
        shape1.x += 2;
        shape2.x -= 2;
    }
}