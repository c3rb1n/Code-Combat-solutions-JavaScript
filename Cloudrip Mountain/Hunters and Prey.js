// Ogres are trying to take out your reindeer!
// Keep your archers back while summoning soldiers to attack.

hero.pickUpCoin = function() {
    // Collect coins.
    var nearestCoin = hero.findNearest(hero.findItems());
    
    if (nearestCoin) {
        hero.move(nearestCoin.pos);
    }
};

hero.summonTroops = function() {
    // Summon soldiers if you have the gold.
    if (hero.gold > hero.costOf("soldier")) {
        hero.summon("soldier");
    }
};

// This function has an argument named soldier.
// Arguments are like variables.
// The value of an argument is determined when the function is called.
hero.commandSoldier = function(soldier) {
    // Soldiers should attack enemies.
    var enemy = soldier.findNearest(soldier.findEnemies());
    
    if (enemy) {
        hero.command(soldier, "attack", enemy);
    }
};

// Write a commandArcher function to tell your archers what to do!
// It should take one argument that will represent the archer passed to the function when it's called.
// Archers should only attack enemies who are closer than 25 meters, otherwise, stay still.
hero.commandArcher = function(archer) {
    var enemy = archer.findNearest(archer.findEnemies());
    
    if (enemy && archer.distanceTo(enemy) < 25) {
        hero.command(archer, "attack", enemy);
    }
};

while(true) {
    hero.pickUpCoin();
    
    hero.summonTroops();
    
    var friends = hero.findFriends();
    
    for(var i = 0; i < friends.length; i++) {
        var friend = friends[i];
        
        if (friend.type == "soldier") {
            // This friend will be assigned to the variable soldier in commandSoldier
            hero.commandSoldier(friend);
        } else if (friend.type == "archer") {
            // Be sure to command your archers.
            hero.commandArcher(friend);
        }
    }
}