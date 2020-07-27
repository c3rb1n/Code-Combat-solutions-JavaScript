// Defeat as many ogres as you can.
// Use 'cast' and 'canCast' for spells.

while(true) {
    var enemy = hero.findNearestEnemy();
    
    if (enemy) {
        if (enemy.type == "catapult") {
            if (hero.canCast("lightning-bolt")) {
                hero.cast("lightning-bolt", enemy);
            }
        } else if (enemy.type == "ogre") {
            hero.moveXY(6, 43);
        } else if (hero.canCast("chain-lightning")) {
            hero.cast("chain-lightning", enemy);
        } else {
            hero.attack(enemy);
        }
    } else if (hero.canCast("regen")) {
        hero.cast("regen", hero);
    }
}