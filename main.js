const cube = document.querySelector('.cube');

let dragging = false;
let startX, startY;
let rotationX = -30;
let rotationY = 15;

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

document.addEventListener('touchstart', (e) => {
  dragging = true;
  startX = e.clientX;
  startY = e.clientY;
});

document.addEventListener('touchend', () => {
  dragging = false;
});

document.addEventListener('touchmove', (e) => {
  if (!dragging) return;

  let endX = e.clientX - startX;
  let endY = e.clientY - startY;

  rotationY += endX * 0.3;
  rotationX -= endY * 0.3;

  cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;

  startX = e.clientX;
  startY = e.clientY;
});

function animate() {
  if (!dragging) {
    rotationX += 0.2;
    rotationY += 0.2;
    cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
  }
  requestAnimationFrame(animate);
}

animate();