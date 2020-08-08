// If the peasant is damaged, the flowers will shrink!

function summonSoldiers() {
    if (hero.gold >= hero.costOf("soldier")) {
        hero.summon("soldier");
    }
}

// Define the function: commandSoldiers
function commandSoldiers() {
    var friends = hero.findFriends();
    
    for(var i = 0; i < friends.length; i++) {
        var friend = friends[i];
        var enemy = friend.findNearest(hero.findEnemies());
        
        if (friend.type != peasant.type) {
            hero.command(friend, "attack", enemy);
        }
    }
}

// Define the function: pickUpNearestCoin
function pickUpNearestCoin() {
    var coin = hero.findNearest(hero.findItems());
    
    if (coin) {
        hero.move(coin.pos);
    }
}

var peasant = hero.findByType("peasant")[0];

while(true) {
    summonSoldiers();
    
    // commandSoldiers();
    commandSoldiers();
    
    // pickUpNearestCoin();
    pickUpNearestCoin();
}