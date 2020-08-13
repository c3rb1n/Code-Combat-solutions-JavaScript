// Practice using modulo to loop over an array

// Choose the mix and order of units you want to summon by populating this array:
var summonTypes = ["soldier", "archer"];

function summonTroops() {
    // Use % to wrap around the summonTypes array based on hero.built.length
    // var type = summonTypes[???];
    // You need to delete this line hero.say("I should summon troops!");   
    var type = summonTypes[hero.built.length % summonTypes.length];
    
    if (hero.gold > hero.costOf(type)) {
        hero.summon(type);
    }
}

while(true) {
    var coin = hero.findNearestItem();
    var friends = hero.findFriends();
    
    if (coin) {
        hero.moveXY(coin.pos.x, coin.pos.y);
    }
    
    summonTroops();
    
    for(var i = 0; i < friends.length; i++) {
        var friend = friends[i];
        
        if (friend.type === "soldier") {
            hero.command(friend, "defend", {x: 42, y: 40});
        } else if (friend.type === "archer") {
            hero.command(friend, "defend", {x: 38, y: 40});
        }
    }
}