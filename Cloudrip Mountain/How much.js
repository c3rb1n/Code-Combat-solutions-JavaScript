// Calculate the perimeter and the area of the garden
// and pay the fair price for that.

// The prices for fences and lawns.
var fencePrice = 3; // per meter.
var lawnPrice = 2; // per square meter.

// You need the foreman.
var foreman = hero.findNearest(hero.findFriends());
var corners = foreman.corners;

// Get the information about the garden.
var bottomLeft = corners.bottomLeft;
var topRight = corners.topRight;

// Calculate the size of the garden.
var width = topRight.x - bottomLeft.x;
var height = topRight.y - bottomLeft.y;

// Find the perimeter of the garden (meters):
var gardenPerimeter = (width + height) * 2;

// Use fencePrice and calculate the fence cost:
var fenceCost = gardenPerimeter * fencePrice;

// Find the area of the garden (square meters):
var gardenArea = width * height;

// Use lawnPrice and calculate the lawn cost:
var lawnCost = gardenArea * lawnPrice;

// The total cost is the sum of the fence and the lawn costs
var totalCost = fenceCost + lawnCost; // Δ Update this with the final price!

hero.say("The total price is " + totalCost);

// Pay the bill.
foreman.bill(totalCost);