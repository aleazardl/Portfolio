import hedmenu from './components/hedmenu';
import mousie from './components/mouse';
// import mvmainie from './components/mainscroll';
import smoothScroll from './components/allscroll';
import jisapanim from './components/jisap';
import zkage from './components/zarkage';

document.addEventListener(
  'DOMContentLoaded',
  () => {
    hedmenu();
    mousie();
    // mvmainie();
    smoothScroll();
    jisapanim();
    zkage();
  },
  false
);
