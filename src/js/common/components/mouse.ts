const mousie = () => {
  const overlay = document.querySelector('.mouse-overlay') as HTMLElement;
  const trailContainer = document.createElement('div');
  trailContainer.classList.add('mouse-trail-container');
  document.body.appendChild(trailContainer);

  let mouseX = 0, mouseY = 0;
  let currentX = 0, currentY = 0;
  const speed = 0.2;
  const offset = 25;

  function createTrail(x: number, y: number) {
    const ghost = document.createElement('div');
    ghost.classList.add('mouse-trail');
    ghost.style.left = `${x}px`;
    ghost.style.top = `${y}px`;
    ghost.style.transform = 'translate(-50%, -50%)';
    trailContainer.appendChild(ghost);

    setTimeout(() => {
      ghost.style.opacity = '0';
      setTimeout(() => ghost.remove(), 500);
    }, 50);
  }

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    createTrail(mouseX, mouseY);
  });

  function animate() {
    currentX += (mouseX - offset - currentX) * speed;
    currentY += (mouseY - offset - currentY) * speed;

    overlay.style.transform = `translate(${currentX}px, ${currentY}px)`;

    requestAnimationFrame(animate);
  }

  animate();
};

export default mousie;
