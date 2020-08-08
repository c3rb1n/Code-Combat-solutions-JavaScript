// Stay alive for one minute.
// If you win, the next time you play will be more difficult and more rewarding!
// If you lose, you must wait a day before submitting again.

while(true) {
    var coins = hero.findItems();
    var coin = hero.findNearest(coins);
    var friends = hero.findFriends();
    var enemies = hero.findEnemies();
    var enemy = hero.findNearest(enemies);
    
    if (hero.gold < hero.costOf("soldier")) {
        hero.move({x: coin.pos.x, y: coin.pos.y});
    } else {
        hero.summon("soldier");
    }
    
    for(var i = 0; i < friends.length; i++) {
        var friend = friends[i];     
        var enemy = friend.findNearest(enemies);
        
        if (enemy) {
            hero.command(friend, 'attack', enemy);
        }
    }
    
    if (friends.length > 4) {
        if (enemy) {
            hero.attack(enemy);
        }
    }
}