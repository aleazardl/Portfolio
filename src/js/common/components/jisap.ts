declare const gsap: any;
declare const ScrollTrigger: any;

const jisapanim = () => {
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.js-my-mv',
      start: 'top top',
      scrub: 0.5,
      markers: false,
    }
  });

  tl.to('.js-box', {
    top: '-20vh',
  }, 0.7)

  .to('.js-t1', {
    filter: 'blur(80px)',
  }, 0.1);

  // Timeline animations
  // tl.to('.js-my-mv__main-1', {
  //     rotationX: 0,
  //     duration: 0.2,
  //   }, 0)

    // .to('.js-zar', {
    //   y: 150,
    //   duration: 0.25,
    // }, 0)

    // .to('.js-bgd', {
    //   opacity: 0,
    //   scale: 1.5,
    //   duration: 0.3,
    // }, 0.2)
    
    // .to('.js-spaces', {
    //   opacity: 1,
    //   duration: 0.3,
    // }, 0.2);

  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: '.js-works',
      start: 'top top',
      end: '+=1000',
      scrub: true,
      pin: '.js-works',
    }
  });

  tl2.to('.js-zar', {
    top: '3vh',
    scale: 0.4,
  }, 0)

  .to('.js-zar-main', {
    rotationX: 80,
  }, 0)

  .to('.js-works-content', {
    top: '20%',
  }, 0)
  
  .to('.js-st', {
    top: '0',
  }, 0)
  
  .to('.js-st-2', {
    bottom: '0',
  }, 0);

  const tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: '.js-footer',
      start: 'top bottom',
      end: '+=600',
      scrub: true,
    }
  });
  
  tl3.to('.js-zar-main', {
    rotationX: 98,
  }, 0)
  
  .to('.js-logo', {
    opacity: 0,
    filter: 'invert(1) blur(10px)',
    duration: 0.2,
  }, 0)

  .to('.js-works-content', {
    top: 'calc(100% - 58vh)',
    gap: '20px',
  }, 0);
};

export default jisapanim;