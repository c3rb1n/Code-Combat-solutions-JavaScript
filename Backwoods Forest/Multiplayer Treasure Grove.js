// Be the first to 100 gold!
// If you are defeated, you will respawn at 67% gold.

while(true) {
    // Find coins and/or attack the enemy.
    // Use flags and your special moves to win!
    var flag = hero.findFlag();
    var item = hero.findNearestItem();
    var enemy = hero.findNearestEnemy();

    if (flag) {
        hero.pickUpFlag(flag);
    } else if (enemy) {
        hero.attack(enemy);
    } else {
        hero.moveXY(item.pos.x, item.pos.y);
    }
}