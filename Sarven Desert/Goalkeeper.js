// Command the peasants to prevent the ogres from scoring.
// The fireball is type "ball".

while(true) {
    var friends = hero.findFriends();
    var ball = hero.findByType("ball");
    
    
    for(var i = 0; i < friends.length; i++) {
        var friend = friends[i];
        
        if (i % 2 === 0) {
            if (ball[0].pos.y > 35) {
                hero.command(friend, "move", {x: 16, y: 37});
            } else {
                hero.command(friend, "move", {x: 16, y: 30});
            }
        } else {
            if (ball[0].pos.y > 35) {
                hero.command(friend, "move", {x: 16, y: 42});
            } else {
                hero.command(friend, "move", {x: 16, y: 36});
            } 
        }
    }
}