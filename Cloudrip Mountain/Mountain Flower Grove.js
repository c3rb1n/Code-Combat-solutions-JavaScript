// This level is a place for making flower art.
// The real goal is to experiment and have fun!
// If you draw something with at least 1000 flowers, you will "succeed" at the level.

function drawSquare(x, y, size, color) {
    hero.toggleFlowers(false);
    
    hero.setFlowerColor(color);
    
    hero.moveXY(x, y);
    
    hero.toggleFlowers(true);
    
    hero.moveXY(x, y - size);
    hero.moveXY(x + size, y - size);
    hero.moveXY(x + size, y);
    hero.moveXY(x, y);
    
}

drawSquare(25, 125, 100, "white");
drawSquare(37, 113, 75, "blue");