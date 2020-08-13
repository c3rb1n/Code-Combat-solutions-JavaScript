// The goal is to survive for 30 seconds, and keep the mines intact for at least 30 seconds.

function chooseStrategy() {
    var enemies = hero.findEnemies();
    
    // If you can summon a griffin-rider, return "griffin-rider"
    if (hero.gold > hero.costOf("griffin-rider")) {
        return "griffin-rider";
    }
    
    // If there is a fangrider on your side of the mines, return "fight-back"
    for(var i = 0; i < enemies.length; i++) {
        var enemy = enemies[i];
        
        if (enemy && enemy.pos.x < 30 && enemy.type == "fangrider") {
            return "fight-back";
        }
    }
    
    // Otherwise, return "collect-coins"
    return "collect-coins";
}

function commandAttack() {
    // Command your griffin riders to attack ogres.
    var friends = hero.findFriends();
    
    for(var j = 0; j < friends.length; j++) {
        var friend = friends[j];
        
        hero.command(friend, "defend", {x: 65, y: 40});
    }
}

function pickUpCoin() {
    // Collect coins
    var coin = hero.findNearestItem();
    
    if (coin) {
        hero.moveXY(coin.pos.x, coin.pos.y);
    }
}

function heroAttack() {
    // Your hero should attack fang riders that cross the minefield.
    var nearestEnemy = hero.findNearestEnemy();
    
    if (nearestEnemy) {
        while(nearestEnemy.health > 0) {
            hero.attack(nearestEnemy);
        }
    }
}

while(true) {
    commandAttack();
    
    var strategy = chooseStrategy();
    
    // Call a function, depending on what the current strategy is.
    if (strategy == "griffin-rider") {
        hero.summon("griffin-rider");
    } else if (strategy == "fight-back") {
        heroAttack();
    } else {
        pickUpCoin();
    }
}