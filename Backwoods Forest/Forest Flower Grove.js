// This level is a place for making flower art.
// The real goal is to experiment and have fun!
// If you draw something with at least 1000 flowers, you will *succeed* at the level.

function drawSquare(side, color) {
    hero.setFlowerColor(color);
    
    hero.toggleFlowers(true);
    
    hero.moveXY(hero.pos.x, hero.pos.y - side);
    hero.moveXY(hero.pos.x + side, hero.pos.y);
    hero.moveXY(hero.pos.x, hero.pos.y + side);
    hero.moveXY(hero.pos.x - side, hero.pos.y);
    
    hero.toggleFlowers(false);
}

hero.toggleFlowers(false);

hero.moveXY(40, 100);

drawSquare(80, "blue");

hero.moveXY(50, 90);

drawSquare(60, "purple");

hero.moveXY(60, 80);

drawSquare(40, "pink");