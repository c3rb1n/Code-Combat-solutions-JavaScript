// Stay alive for two minutes.
// If you win, it gets harder (and more rewarding).
// If you lose, you must wait a day before you can resubmit.
// Remember, each submission gets a new random seed.

while(true) {
    var enemies = hero.findEnemies();
    var enemyIndex = 0;
    var furthestEnemy = null;
    var bestDistance = 0;
    
    while(enemyIndex < enemies.length) {
        var enemy = enemies[enemyIndex];
        
        if (hero.distanceTo(enemy) > bestDistance && enemy.type != "sand-yak") {
            furthestEnemy = enemy;
            bestDistance = hero.distanceTo(enemy);
        }
        
        enemyIndex++;
    }
    
    if (furthestEnemy) {
        while(furthestEnemy.health > 0) {
            hero.attack(furthestEnemy);
        }
    }
}