// Gather coins to summon soldiers and have them attack the enemy.

while(true) {
    // Move to the nearest coin.
    // Use move instead of moveXY so you can command constantly.

    // We need to delete hero.say("I need coins!");
    
    var item = hero.findNearest(hero.findItems());
    
    if (item) {
        hero.move(item.pos);
    }
    
    // If you have funds for a soldier, summon one.
    if (hero.gold > hero.costOf("soldier")) {
        // We need to delete hero.say("I should summon something here!");
        
        hero.summon("soldier");
    }
    
    var enemy = hero.findNearest(hero.findEnemies());
    
    if (enemy) {     
        var soldiers = hero.findFriends();
        var soldierIndex = 0;
        
        // Loop over all your soldiers and order them to attack.
        while(soldierIndex < soldiers.length) {
            var soldier = soldiers[soldierIndex];
            
            // Use the 'attack' command to make your soldiers attack.
            // hero.command(soldier, "attack", enemy);
            hero.command(soldier, "attack", enemy);
            
            soldierIndex++;
        }
    }
}