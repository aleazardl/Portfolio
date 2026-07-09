const works = (): void => {
  const workItems = document.querySelectorAll<HTMLElement>('.js-works-item');
  const workImages = document.querySelectorAll<HTMLElement>('.js-works-img');
  const container = document.querySelector<HTMLElement>('.js-works__imc');

  let mouseX = 0, mouseY = 0;
  let currentX = 0, currentY = 0;
  const speed = 0.1;
  let activeIndex: number | null = null;
  let hideTimeout: number | null = null;
  let isHovering = false;

  const offsetX = 20;
  const offsetY = 20;

  document.addEventListener('mousemove', (e: MouseEvent) => {
    // clientX/clientY are viewport-based → perfect for fixed positioning
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  const animate = () => {
    if (isHovering && container) {
      currentX += (mouseX + offsetX - currentX) * speed;
      currentY += (mouseY + offsetY - currentY) * speed;

      // ✅ Use fixed positioning instead of transform
      container.style.left = `${currentX}px`;
      container.style.top = `${currentY}px`;
    }

    requestAnimationFrame(animate);
  };

  animate();

  workItems.forEach((item, index) => {
    const targetImage = workImages[index];

    item.addEventListener('mouseenter', () => {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
        hideTimeout = null;
      }

      if (container) container.classList.add('active');
      isHovering = true;

      if (activeIndex !== index) {
        workImages.forEach(img => img.classList.remove('active'));
        targetImage.classList.add('active');
        activeIndex = index;
      }
    });

    item.addEventListener('mouseleave', () => {
      hideTimeout = window.setTimeout(() => {
        container?.classList.remove('active');
        workImages.forEach(img => img.classList.remove('active'));
        activeIndex = null;
        isHovering = false;
      }, 300);
    });
  });
};

export default works;
