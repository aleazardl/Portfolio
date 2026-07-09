const zkage = () => {
  const z1 = document.querySelector('.js-z1') as HTMLElement | null;
  const z2 = document.querySelector('.js-z2') as HTMLElement | null;
  const z3 = document.querySelector('.js-z3') as HTMLElement | null;

  if (!z1 || !z2 || !z3) return;

  const maxOffset = window.innerWidth * 0.35;
  const centerSnapRadiusX = window.innerWidth * 0.4;
  const centerSnapRadiusY = window.innerHeight * 1;

  let targetOffset = maxOffset;
  let currentOffset = 0;

  let targetScale = 1;
  let currentScale = 1;

  let isScrolling = false;

  const handleMouseMove = (e: MouseEvent) => {
    if (isScrolling) return;

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;

    const ellipseRatio =
      (dx * dx) / (centerSnapRadiusX * centerSnapRadiusX) +
      (dy * dy) / (centerSnapRadiusY * centerSnapRadiusY);

    if (ellipseRatio < 1) {
      const distanceToCenter = Math.sqrt(dx * dx + dy * dy);
      const maxSnapDistance = Math.sqrt(
        centerSnapRadiusX ** 2 + centerSnapRadiusY ** 2
      );

      const normalized = 1 - distanceToCenter / maxSnapDistance;

      targetOffset = normalized * maxOffset;
      targetScale = 1;
    } else {
      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxDistance = Math.sqrt(centerX ** 2 + centerY ** 2);
      const snapDistance = Math.sqrt(
        (centerSnapRadiusX ** 2 + centerSnapRadiusY ** 2) / 2
      );

      const normalized = Math.min(
        (distance - snapDistance) / (maxDistance - snapDistance),
        1
      );

      targetOffset = 0;
      targetScale = 1 + normalized * 0.1;
    }
  };

  if (window.innerWidth > 980) {
    window.addEventListener('mousemove', handleMouseMove);
  }

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || window.pageYOffset;
    const isSP = window.innerWidth <= 980;

    if (scrollTop > 0) {
      isScrolling = true;
      targetOffset = 0;
      targetScale = 1;
    } else {
      isScrolling = false;
      if (isSP) {
        targetOffset = maxOffset;
        targetScale = 1;
      }
    }
  });

  const animate = () => {
    const offsetSpeed = isScrolling ? 0.05 : 0.1;
    const scaleSpeed = 0.1;

    currentOffset += (targetOffset - currentOffset) * offsetSpeed;
    currentScale += (targetScale - currentScale) * scaleSpeed;

    const zOpacity = currentOffset === 0 ? 0 : 1;

    z1.style.filter = `invert(${Math.abs(currentOffset) * 0.02}%)`;
    z1.style.transform = `translate(-50%, -50%) scale(${currentScale})`;

    z2.style.transform = `translate(calc(-50% + ${currentOffset}px), -50%) scale(${currentScale})`;
    z2.style.opacity = `${zOpacity}`;

    z3.style.transform = `translate(calc(-50% - ${currentOffset}px), -50%) scale(${currentScale})`;
    z3.style.opacity = `${zOpacity}`;

    requestAnimationFrame(animate);
  };

  animate();
};

export default zkage;
