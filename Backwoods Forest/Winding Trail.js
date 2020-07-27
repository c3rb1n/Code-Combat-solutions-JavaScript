// Go to the end of the path and build a fence on the X
// Use your moveXY(x, y) function.

// It's the first point of the path.
hero.moveXY(36, 59);

// Move at the next points of the path.
hero.moveXY(72, 25);
hero.moveXY(42, 33);
hero.moveXY(72, 22);
hero.moveXY(73, 61);
hero.moveXY(72, 22);

// Build a fence to stop the ogre.
hero.buildXY("fence", 72, 25);

hero.moveXY(37, 13);