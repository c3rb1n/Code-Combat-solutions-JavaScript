// Stay alive longer than the enemy hero!
while (true) {
    // Devise your own strategy. Be creative!
    var enemy = hero.findNearestEnemy();
    
    if (enemy) {
        hero.attack(enemy);    
    } 
}