// Your goal is to protect Reynaldo

// Find the paladin with the lowest health.
function lowestHealthPaladin() {
    var lowestHealth = 99999;
    var lowestFriend = null;
    var friends = hero.findFriends();
    
    for(var f = 0; f < friends.length; f++) {
        var friend = friends[f];
        
        if (friend.type != "paladin") { 
            continue; 
        }
        
        if (friend.health < lowestHealth && friend.health < friend.maxHealth) {
            lowestHealth = friend.health;
            lowestFriend = friend;
        }
    }
    
    return lowestFriend;
}

function commandPeasant(peasant) {
    var item = peasant.findNearestItem();
    
    if (item) {
        hero.command(peasant, "move", item.pos);
    }
}

function commandGriffin(griffin) {
    hero.command(griffin, "defend", {x: 75, y: 35});
}

function commandPaladin(paladin) {
    // Heal the paladin with the lowest health using lowestHealthPaladin()
    // You can use paladin.canCast("heal") and command(paladin, "cast", "heal", target)
    // Paladins can also shield: command(paladin, "shield")
    // And don't forget, they can attack, too!
    var healTarget = lowestHealthPaladin();
    
    hero.command(paladin, "defend", {x: 75, y: 35});
    
    if (healTarget && paladin.canCast("heal")) {
        hero.command(paladin, "cast", "heal", healTarget);
    }  
}

function commandFriends() {
    // Command your friends.
    var friends = hero.findFriends();
    
    for(var i = 0; i < friends.length; i++) {
        var friend = friends[i];
        
        if (friend.type == "peasant") {
            // commandPeasant(friend);
            commandPeasant(friend);
        } else if (friend.type == "griffin-rider") {
            // commandGriffin(friend);
            commandGriffin(friend);
        } else if (friend.type == "paladin") {
            commandPaladin(friend);
        }
    }
}

while(true) {
    commandFriends();
    
    // Summon griffin riders!
    if (hero.gold > hero.costOf("griffin-rider")) {
        hero.summon("griffin-rider");
    }
}