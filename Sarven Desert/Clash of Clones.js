// You'll need good strategy to win this one!
// Your clone will have the same equipment you have!
// But, they're not very skilled at using special powers.

while(true) {
    var enemies = hero.findEnemies();
    var enemyIndex = 0;
    var furthestEnemy = null;
    var bestDistance = 0;
    
    while(enemyIndex < enemies.length) {
        var enemy = enemies[enemyIndex];
        var enemyDistance = hero.distanceTo(enemy);
        
        if (enemyDistance > bestDistance && enemy.type != "sand-yak") {
            furthestEnemy = enemy;
            bestDistance = enemyDistance;
        }
        
        enemyIndex++;
    }
    
    if (furthestEnemy) {
        if (hero.canCast("chain-lightning")) {
            hero.cast("chain-lightning", furthestEnemy);
        } else if (hero.isReady("cleave")){
            hero.cleave(furthestEnemy);
        } else {
            while(furthestEnemy.health > 0) {
                hero.attack(furthestEnemy);
            }
        }
    }
}