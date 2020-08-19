// Your goal is to collect coins / gems.
// This level is repeatable. If you win, the difficulty and rewards will increase.
// If you fail, you have to wait a day to resubmit.
// This level is an optional challenge level. You don't need to beat it to continue the campaign!

while(true) {
    var friends = hero.findFriends();
    var enemy = hero.findNearestEnemy();
    
    if (hero.gold > hero.costOf("griffin-rider")) {
        hero.summon("griffin-rider");
    }
    
    for(var i = 0; i < friends.length; i++) {
        var friend = friends[i];
        
        if (friend.type == "peasant") {
            var coin = friend.findNearestItem();
            
            hero.command(friend, "move", coin.pos);           
        } else {
            hero.command(friend, "defend", {x: 76, y: 65});
        }
    }
    
    if (enemy) {
        while(enemy.health > 0) {
            hero.attack(enemy);
        }
    }
}