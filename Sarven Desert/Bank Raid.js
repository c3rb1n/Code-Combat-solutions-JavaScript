// Wait for ogres, defeat them and collect gold.

while(true) {
    var enemies = hero.findEnemies();
    
    // enemyIndex is used to iterate the enemies array.
    var enemyIndex = 0;
    
    // While enemyIndex is less than enemies.length
    while(enemyIndex < enemies.length) {
        // Attack the enemy at enemyIndex
        var enemy = enemies[enemyIndex];
        
        hero.attack(enemy);

        // Increase enemyIndex by one.
        enemyIndex++;
        
        // This line fixes a bug of this level
        break;
    }
    
    var coins = hero.findItems();
    
    // coinIndex is used to iterate the coins array.
    var coinIndex = 0;
    
    while(coinIndex < coins.length) {
        // Get a coin from the coins array using coinIndex
        var coin = coins[coinIndex];
        
        // Collect that coin.
        hero.moveXY(coin.pos.x, coin.pos.y);
        
        // Increase coinIndex by one.
        coinIndex++;
    }
}