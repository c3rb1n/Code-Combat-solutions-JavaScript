// This level introduces the % operator, also known as the modulo operator.
// a % b returns the remainder of a divided by b
// This can be used to wrap around to the beginning of an array when an index might be greater than the length

// You need to change the coordinates in the line below, otherwise you will not complete the bonus task
var defendPoints = [{x: 36, y: 60}, {x: 60, y: 60}, {x: 36, y: 30}, {x: 60, y: 30}];

var summonTypes = ["soldier", "soldier", "soldier", "soldier", "archer", "archer", "archer", "archer"];

// You start with 360 gold to build a mixture of soldiers and archers.
// this.built is an array of the troops you have built, ever.
// Here we use "this.built.length % summonTypes.length" to wrap around the summonTypes array
function summonTroops() {
    var type = summonTypes[hero.built.length % summonTypes.length];
    
    if (hero.gold >= hero.costOf(type)) {
        hero.summon(type);
    }
}

function commandTroops() {
    var friends = hero.findFriends();
    
    for(var friendIndex = 0; friendIndex < friends.length; friendIndex++) {
        var friend = friends[friendIndex];
        
        // Use % to wrap around defendPoints based on friendIndex
        var defendPoint = defendPoints[friendIndex % defendPoints.length];
        
        // Command your minion to defend the defendPoint
        hero.command(friend, "defend", defendPoint);
    }
}

while(true) {
    summonTroops();
    
    commandTroops();

    // Also, you need to add the code below, otherwise you will not complete the bonus task
    var enemy = hero.findNearest(hero.findEnemies());
    
    if (enemy) {
        if (hero.canCast("chain-lightning")) {
            hero.cast("chain-lightning", enemy);
        } else {
            hero.attack(enemy);
        }
    }
    
    hero.moveXY(47, 45);
}