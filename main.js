const cube = document.querySelector('.cube');
const pause = document.querySelector('.container-pause')

let dragging = false;
let startX, startY;
let rotationX = -30;
let rotationY = 15;
let auto = true;

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
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
}, { passive: false });

document.addEventListener('touchend', () => {
  dragging = false;
}, { passive: false });

document.addEventListener('touchmove', (e) => {
  if (!dragging) return;

  e.preventDefault();

  let currentX = e.touches[0].clientX;
  let currentY = e.touches[0].clientY;

  let endX = currentX - startX;
  let endY = currentY - startY;

  rotationY += endX * 0.3;
  rotationX -= endY * 0.3;

  cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;

  startX = currentX;
  startY = currentY;
}, { passive: false });

function animate() {
  if (!dragging) {
    if (auto) {
      rotationX += 0.2;
      rotationY += 0.2;
      cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
    }
  }
  requestAnimationFrame(animate);
}

pause.addEventListener("click" , (e) => {
  if (auto) {
    auto = false;
    document.getElementById("pause").style.display = "none";
    document.getElementById("play").style.display = "block";
  } else {
    auto = true;
    document.getElementById("pause").style.display = "block";
    document.getElementById("play").style.display = "none";
  }
});

animate();