// Defend your towers in this replayable challenge level!
// Step on an X if you have 20 gold to build a soldier.

function collectCoins() {
    var items = hero.findItems();
    var bestItem = null;
    var bestDistance = 0;
    var itemIndex = 0;
    
    while(itemIndex < items.length) {
        var item = items[itemIndex];
        var itemDistance = hero.distanceTo(item);
        
        if (item.value / itemDistance > bestDistance) {
            bestItem = item;
            bestDistance = item.value / itemDistance;
        }
        
        itemIndex++;
    }
    
    hero.moveXY(bestItem.pos.x, bestItem.pos.y);
}

function seekAndDestroy() {
    var enemies = hero.findEnemies();
    var enemyIndex = 0;
    
    while(enemyIndex < enemies.length) {
        var enemy = enemies[enemyIndex];
        
        if (enemy.type == "shaman") {
            while(enemy.health > 0) {
                hero.attack(enemy);
            }
        } else {
            hero.attack(hero.findNearestEnemy());
        }
        
        enemyIndex++;
    }
}

while(true) {
    var friends = hero.findFriends();
    
    if (friends.length === 4) {
        seekAndDestroy();
    }
   
    if (hero.gold < 20) {
        collectCoins();
    } else {
       hero.moveXY(84, 51); 
    }
}