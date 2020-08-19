// Your goal is to keep at least one flower alive for 60 seconds.
// This is an optional challenge level, intended to be difficult. Be creative with your code!
// It gets harder (and more lucrative) each time you succeed. If you fail, you must wait a day to resubmit.

while(true) {
    hero.moveXY(49, 46);
    
    var item = hero.findNearestItem();
    var friends = hero.findFriends();
    var peasants = hero.findByType("peasant");
    var griffinRider = hero.findByType("griffin-rider");
    
    if (item) {
        hero.moveXY(item.pos.x, item.pos.y);
    }
    
    if (hero.gold > hero.costOf("griffin-rider") && griffinRider.length < 2) {
        hero.summon("griffin-rider");
    } else if (hero.gold > hero.costOf("peasant") && peasants.length < 4) {
        hero.summon("peasant");
    } else if (hero.gold > hero.costOf("griffin-rider")) {
        hero.summon("griffin-rider");
    }
    
    for(var i = 0; i < friends.length; i++) {
        var friend = friends[i];
        
        if (friend.type == "peasant") {
            if (i % 2 === 0) {
                hero.command(friend, "move", {x: 47, y: 67});

                var coinTop = friend.findNearestItem();

                hero.command(friend, "move", coinTop.pos);
            } else {
                hero.command(friend, "move", {x: 47, y: 23});

                var coinBottom = friend.findNearestItem();

                hero.command(friend, "move", coinBottom.pos);
            }
        } else if (friend.type == "griffin-rider") {
            if (griffinRider.length < 3) {
                hero.command(friend, "defend", {x: 75, y: 40});
            } else if (i % 2 === 0) {
                hero.command(friend, "defend", {x: 75, y: 40});
            } else {
                hero.command(friend, "defend", {x: 25, y: 55});
            }
        }
    }
}