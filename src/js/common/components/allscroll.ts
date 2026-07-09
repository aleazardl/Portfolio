declare var Lenis: any;

const smoothScroll = (): void => {
  const lenis = new Lenis({
    duration: 0.65, // speeeeeeed
    easing: (t: number) => 1 - Math.pow(1 - t, 3),
    smoothWheel: true,
    smoothTouch: false,
  });

  const raf = (time: number): void => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };

  requestAnimationFrame(raf);
};

export default smoothScroll;
