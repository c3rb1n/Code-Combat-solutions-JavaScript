// Use your cleverest programming tricks to outwit and overpower your opponent!

while(true) {
    var enemies = hero.findEnemies();
    var furthestEnemy = null;
    var bestDistance = 0;
    var enemyIndex = 0;
    
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