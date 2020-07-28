// First, defeat 6 ogres.
// Then collect coins until you have 30 gold.

// This variable is used for counting ogres.
var defeatedOgres = 0;

// This loop is executed while defeatedOgres is less than 6.
while(defeatedOgres < 6) {
    var enemy = hero.findNearestEnemy();
    
    if (enemy) {
        hero.attack(enemy);
        
        defeatedOgres += 1;
    } else {
        hero.say("Ogres!");
    }
}

// Move to the right side of the map.
hero.moveXY(49, 36);

// This loop is executed while you have less than 30 gold.
while(hero.gold < 30) {
    // Find and collect coins.
    var coin = hero.findNearestItem();
    
    hero.moveXY(coin.pos.x, coin.pos.y);
}

// Move to the exit.
hero.moveXY(76, 32);