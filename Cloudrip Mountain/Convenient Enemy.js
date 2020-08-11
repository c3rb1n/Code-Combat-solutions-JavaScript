// Ogres are hiding in woods. Protect the peasants.
// The last word in the peasants' messages are a hint.

for(var x = 8; x <= 72; x += 16) {
    hero.moveXY(x, 22);
    
    // Peasants know whom to summon.
    var peasant = hero.findNearest(hero.findFriends());
    var message = peasant.message;
    
    if (message) {
        // Words are seaparated by whitespaces.
        var words = message.split(" ");
        
        // "words" is an array of words from the "message".
        // Get the last word. It's the required unit type.
        var unitType = words[words.length - 1];
        
        // Summon the required unit type.
        hero.summon(unitType);
    }
}

for(var i = 0; i < hero.built.length; i++) {
    var unit = hero.built[i];
    
    // Command the unit to defend the unit's position.
    hero.command(unit, "defend", unit.pos);
}

// Defend the last point yourself:
while(true) {
    hero.moveXY(72, 22);
    
    var enemy = hero.findNearestEnemy();
    
    if (enemy) {
        while(enemy.health > 0) {
            hero.attack(enemy);
        }
    }
}