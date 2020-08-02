// You only have 20 seconds until the ogre horde arrives!
// Grab as much gold as you can, then retreat to your base and wall it off!

while(hero.time < 20) {
    // Collect coins
    
    // We need to delete hero.say("I should pick up a coin");
    
    var nearestCoin = hero.findNearest(hero.findItems());
    
    hero.move(nearestCoin.pos);  
}

while(hero.pos.x > 16) {
    // Retreat behind the fence
    
    // We need to delete hero.say("I should retreat");
    
    hero.move({"x": 14, "y": 37});
}

// Build a fence to keep the ogres out.
hero.buildXY("fence", 21, 37);