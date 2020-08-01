// Use your new skill to choose what to do: hero.time

while(true) {
    var enemy = hero.findNearestEnemy();
    var coin = hero.findNearestItem();
    
    // If it's the first 10 seconds, attack.
    if (enemy && hero.time < 10) {
        hero.attack(enemy);
    
    // Else, if it's the first 35 seconds, collect coins.
    } else if (coin && hero.time < 35) {
        hero.moveXY(coin.pos.x, coin.pos.y);

    // After 35 seconds, attack again!
    } else {
       hero.attack(enemy); 
    }
}