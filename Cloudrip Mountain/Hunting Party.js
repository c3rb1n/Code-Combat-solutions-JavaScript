// You can use findNearestEnemy() on your soldiers to get their nearest enemy instead of yours.
while (true) {
    var friends = hero.findFriends();
    
    // Use for-loop and for each friend:
    for(var i = 0; i < friends.length; i++) {
        // If they see an enemy then command to attack.
        var enemy = friends[i].findNearest(friends[i].findEnemies());
        
        if (enemy) {
            hero.command(friends[i], "attack", enemy);
        
        // Command to move east by small steps.
        } else {
            hero.command(friends[i], "move", {x: friends[i].pos.x + 0.45, y: friends[i].pos.y});
        }
    }
}