const cube = document.querySelector('.cube');

let dragging = false;
let startX, startY;
let rotationX = 0;
let rotationY = 0;

document.addEventListener('mousedown', (e) => {
  dragging = true;
  startX = e.clientX;
  startY = e.clientY;
});

document.addEventListener('mouseup', () => {
  dragging = false;
});

document.addEventListener('mousemove', (e) => {
  if (!dragging) return;

  let endX = e.clientX - startX;
  let endY = e.clientY - startY;

  rotationY += endX * 0.3;
  rotationX -= endY * 0.3;

  cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;

  startX = e.clientX;
  startY = e.clientY;
});
