// Find the hidden number in the agent's message to escape.
// Count the number of trailing and leading whitespaces.

// This function returns the coordinates of the n-th passage.
function passagePosByNum(n) {
    return {x: 60, y: n * 12 + 8};
}

function onHear(event) {
    // The original message.
    var message = event.message;
    
    // Trim the message:
    var trimmedMessage = message.trim();
    
    // The hidden number is the difference of lengths:
    var number = message.length - trimmedMessage.length;
    
    // Use passagePosByNum to find the passage to enter:
    var passage = passagePosByNum(number);
    
    // Move the pet to the entrance of the passage:
    pet.moveXY(passage.x, passage.y);
    
    // Move the pet to the left edge of the map:
    pet.moveXY(passage.x - 58, passage.y);
}

pet.on("hear", onHear);

// The hero should follow the pet.
while(true) {
    hero.move(pet.pos);
}