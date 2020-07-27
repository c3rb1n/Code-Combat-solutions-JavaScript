// Try to get the best grade (gold) at the magic exam.
// Move to each X mark, then use a spell.

function chooseAndCastCorrectSpell() {
    var friend = hero.findNearestFriend();
    var enemy = hero.findNearestEnemy();
    var item = hero.findNearestItem();
    
    if (friend) {
        if (friend.type == "soldier") {
            hero.cast("heal", friend);
        } else if (friend.type == "goliath") {
            hero.cast("grow", friend);
        } else {
            hero.cast("regen", friend);
        }
    } else if (enemy) {
        if (enemy.type == "ogre") {
            hero.cast("force-bolt", enemy);
        } else if (enemy.type == "brawler") {
            hero.cast("shrink", enemy);
        } else {
            hero.cast("poison-cloud", enemy);
        }
    } else if (item) {
        if (item.type == "poison") {
            hero.cast("grow", hero);
        }

        hero.moveXY(item.pos.x, item.pos.y);
    }
}

hero.moveXY(18, 40);
chooseAndCastCorrectSpell();

hero.moveXY(18, 24);
chooseAndCastCorrectSpell();

hero.moveXY(34, 40);
chooseAndCastCorrectSpell();

hero.moveXY(34, 24);
chooseAndCastCorrectSpell();

hero.moveXY(50, 40);
chooseAndCastCorrectSpell();

hero.moveXY(50, 24);
chooseAndCastCorrectSpell();

hero.moveXY(66, 40);
chooseAndCastCorrectSpell();

hero.moveXY(66, 24);
chooseAndCastCorrectSpell();