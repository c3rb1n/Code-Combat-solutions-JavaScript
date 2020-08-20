// Fight your way into the Inner Sanctum of the ogre chieftain, and defeat her.

function seekAndDestroy() {
    var enemies = hero.findEnemies();
    var target = null;
    
    for (var k = 0; k < enemies.length; k++) {
        var enemy = enemies[k];
        
        if (enemy.type === "catapult" || enemy.type === "tower" || enemy.type === "warlock") {
            target = enemy;
            
            break;
        } else {
            target = enemy;
        }
    }
        
    if (target) {
        var friends = hero.findFriends();
    
        for(var i = 0; i < friends.length; i++) {
            var friend = friends[i];
        
            hero.command(friend, "defend", hero.pos);
        }
        
        while(target.health > 0) {
            if (hero.canCast("chain-lightning")) {
                hero.cast("chain-lightning", target);

                while(target.health > 0) {
                    hero.attack(target);
                }
            } else {
                while(target.health > 0) {
                    hero.attack(target);
                }
            }
        }
    }
}

while(true) {   
    if (hero.gold > hero.costOf("archer")) {
        hero.summon("archer");
    }
    
    if (hero.time > 69) {
        hero.moveXY(275, 35);
    } else if (hero.time > 60) {
        hero.moveXY(220, 60);
    } else if (hero.time > 50) {
        hero.moveXY(165, 35);
    } else {
        hero.move({x: 90, y: 30});
    }

    seekAndDestroy();
}