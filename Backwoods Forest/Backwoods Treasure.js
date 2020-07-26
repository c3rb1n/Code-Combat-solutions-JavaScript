// Collect 100 gold from two or three groves.
// If you win, it gets harder (and more rewarding).
// If you lose, you must wait a day before you can resubmit.
// Remember, each submission gets a new random seed.

while(true) {
    var flag = hero.findFlag();
    var enemy = hero.findNearestEnemy();
    var item = hero.findNearestItem();
    
    if (flag) {
        hero.pickUpFlag(flag);
    } else if (enemy) {
        hero.attack(enemy);
    } else if (item) {
        hero.moveXY(item.pos.x, item.pos.y);
    }
}