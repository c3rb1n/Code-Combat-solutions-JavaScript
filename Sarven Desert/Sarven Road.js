// Get to the oasis. Watch out for new enemies: ogre scouts!
// Go up and right by adding to the current X and Y position.

while(true) {
    var enemy = hero.findNearestEnemy();
    
    // If there's an enemy, attack.
    if (enemy) {
        hero.attack(enemy);
        
    // Else, keep moving up and to the right. 
    } else {
        hero.moveXY(hero.pos.x + 10, hero.pos.y + 10);
    }
}