// Defeat the enemy hero in two minutes.
while(true) {
    var enemies = hero.findEnemies();
    var nearestEnemy = hero.findNearest(enemies);
    var corpses = hero.findCorpses();
    
    // Your hero can collect coins and summon troops.
    if (hero.gold > hero.costOf("soldier")) {
        hero.summon("soldier");
    }
    
    // She also commands your allies in battle.
    var friends = hero.findFriends();
    
    for (var friendIndex = 0; friendIndex < friends.length; ++friendIndex) {
        var friend = friends[friendIndex];
        hero.command(friend, "attack", friend.findNearest(enemies));
    }
    
    // Use your hero's abilities to turn the tide.
    if (corpses.length > 4 && hero.canCast("raise-dead")) {
        hero.cast("raise-dead");
    }
    
    if (nearestEnemy) {
        if (hero.health < hero.maxHealth / 2 && hero.canCast("drain-life") && hero.canCast("fear")) {
            hero.cast("drain-life", nearestEnemy);
            hero.cast("fear", nearestEnemy);
        } else {
            hero.attack(nearestEnemy);
        }
    }
}