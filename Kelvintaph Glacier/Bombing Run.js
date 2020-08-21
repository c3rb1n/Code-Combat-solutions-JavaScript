// Incoming oscars! (That's military speak for ogres).
// You will need to calculate their angle of attack.
// Use that angle to command your Griffin Bombers!

while(true) {
    var enemy = hero.findNearestEnemy();
    
    if (enemy) {
        // Find the vector of attack
        var vector = Vector.subtract(enemy.pos, hero.pos);
        
        // Use trigonometry to find the the angle in Radians!
        var radian = Math.atan2(vector.y, vector.x);
        
        // The answer must be in Degrees!
        // To convert Radians to Degrees multiply by (180 / Math.PI)
        var angle = radian * (180 / Math.PI);
        
        // Say the angle!
        hero.say(angle);
    }
}