var loader = document.getElementById("pit-loader");

var square = loader.getAttribute("data-size");
var gap = square / 4;
var canvas = square * 2 + gap;

var color = loader.getAttribute("data-color");
var duration = loader.getAttribute("data-duration");

// Set CSS variables
loader.style.setProperty("--primary", color);
loader.style.setProperty("--square", square);
loader.style.setProperty("--gap", gap);
loader.style.setProperty("--canvas", canvas);
loader.style.setProperty("--animation-duration", duration);

var canvasRealSize =
  Math.sqrt(Math.pow(square, 2) * 2) * 2 + Math.sqrt(Math.pow(gap, 2) * 2);

// Display logo
loader.style.top = (canvasRealSize - canvas) / 2 + "px";
loader.style.left = (canvasRealSize - canvas) / 2 + "px";

// Add sub elements
const squareCount = 4;

for (var i = 0; i < squareCount; i++) {
  var squareNode = document.createElement("div");
  squareNode.classList.add("pit-square");
  loader.appendChild(squareNode);
}
