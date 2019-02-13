'use strict'

const main = () => {
  const buildDom = (html) =>{
    const main = document.querySelector('main');
    main.innerHTML = html;
    return main;
  };

  const buildSplashScreen = () => {
    const  splashScreen = buildDom(`
    <section class="splash_screen"></section>
    <h1>Eternal Enemies</h1>
    <button>Start</button>
    `);
    
  };
  buildSplashScreen();
};

window.addEventListener('load',main);