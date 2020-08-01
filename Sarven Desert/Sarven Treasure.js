// Collect 150 gold while evading ogres with teleporters.
// If you win, it gets harder (and more rewarding).
// If you lose, you must wait a day before you can resubmit.
// Remember, each submission gets a new random seed.

while(true) { 
    var coin = hero.findNearestItem();

    if (coin) {
        hero.moveXY(coin.pos.x, coin.pos.y);
    }
}