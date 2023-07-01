var btn = document.querySelector(".no");
var positionX, positionY;

btn.addEventListener("click", function() {
  positionX = getRandomPosition(-200, 200);
  positionY = getRandomPosition(-200, 200);
  btn.style.transform = `translate(${positionX}px, ${positionY}px)`;
  btn.style.transition = "all 0.2s ease";
});

btn.addEventListener("mouseover", function() {
  positionX = getRandomPosition(-200, 200);
  positionY = getRandomPosition(-200, 200);
  btn.style.transform = `translate(${positionX}px, ${positionY}px)`;
  btn.style.transition = "all 0.2s ease";
});

function getRandomPosition(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
