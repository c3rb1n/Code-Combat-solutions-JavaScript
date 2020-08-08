// This level shows how to define your own functions.
// The code inside a function is not executed immediately. It's saved for later.

// This function has your hero collect the nearest coin.
function pickUpNearestCoin() {
    var items = hero.findItems();
    var nearestCoin = hero.findNearest(items);
    
    if (nearestCoin) {
        hero.move(nearestCoin.pos);
    }
}

// This function has your hero summon a soldier.
function summonSoldier() {
    // If hero.gold is greater than the cost of the "soldier":
    if (hero.gold > hero.costOf("soldier")) {
        // Then summon a "soldier":
        hero.summon("soldier");
    } 
}

// This function commands your soldiers to attack their nearest enemy.
function commandSoldiers() {
    var friends = hero.findFriends();
    
    for(var i = 0; i < friends.length; i++) {
        var enemy = friends[i].findNearestEnemy();
        
        if (enemy) {
            hero.command(friends[i],"attack", enemy);
        }
    }
}

function seekAndDestroy() {
    var enemies = hero.findEnemies();
    
    for(var i = 0; i < enemies.length; i++) {
        var enemy = enemies[i];
        
        if (enemy) {
            if (enemy.type == "shaman" ||
                enemy.type == "ogre") {
                if (hero.canCast("chain-lightning")) {
                    hero.cast("chain-lightning", enemy);
                } else {
                    while(enemy.health > 0) {
                        hero.attack(enemy);
                    }
                }
            } else if (hero.canCast("chain-lightning")) {
                hero.cast("chain-lightning", enemy);
            }
        }
    }
}

while(true) {
    // In your loop, you can "call" the functions defined above.
    var friends = hero.findFriends();

    // The following line causes the code inside the "pickUpNearestCoin" function to be executed.
    pickUpNearestCoin();
    
    // Call summonSoldier here
    summonSoldier();
    
    // Call commandSoldiers here
    commandSoldiers();
    
    if (friends.length < 3) {
        continue;
    } else {
        seekAndDestroy();
    }
}