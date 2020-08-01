// This level is intended to be for advanced players. The solution should be pretty complex with a lot of moving parts. It might also be a bit of a gear check unless you use creative methods.
// You need to make your way to the first trial (Oasis of Marr) defeating enemies along the way. When you reach it, pick all the mushrooms to trigger the trial to begin. If you survive the onslaught, make your way to the next Oasis for the second trial, then the Temple. When all trials are complete you will have to face the final boss. Good luck!
// HINT: Glasses with a high visual range help tremendously on this level so buy the best you can get.
// HINT: the unit 'type' for the oasis guardians is 'oasis-guardian'

while(true) {
    var enemy = hero.findNearestEnemy();
    var item = hero.findNearestItem();
    
    if (enemy) {
        while(enemy.health > 0) {
            hero.attack(enemy);
        }
        
        continue;
    } else if (item) {
        hero.moveXY(item.pos.x, item.pos.y);
        
        continue;
    }
    
    if (hero.time > 235) {
        hero.moveXY(43, 75);
    } else if (hero.time > 165) {
        hero.moveXY(120, 115);
    } else if (hero.time > 95) {
        hero.moveXY(15, 113);
    } else if (hero.time > 70) {
        hero.moveXY(13, 36);
    }
}