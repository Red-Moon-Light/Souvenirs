"use sctrict";

// function showTemporaryPopUp(popUpId) {
//   let popUp = document.getElementById(popUpId);
//   popUp.style.display = "flex";
//   setTimeout(() => {
//     popUp.style.display = "none";
//   }, 7000);
// }


(function () {
    var blockLeft = document.querySelector('.arrive-on-left_opacity');
    
    var observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
  
        if (entry.isIntersecting) {
          entry.target.classList.add('categories-animation-left');
        }
      });
    });
  
    observer.observe(blockLeft);
  })();



  (function () {
    var blockRight = document.querySelector('.arrive-on-right_opacity');
    
    var observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
  
        if (entry.isIntersecting) {
          entry.target.classList.add('categories-animation-right');
        }
      });
    });
  
    observer.observe(blockRight);
  })();



  (function () {
    var blockLeft = document.querySelector('.arrive-on-left_opacity_2');
    
    var observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
  
        if (entry.isIntersecting) {
          entry.target.classList.add('categories-animation-left');
        }
      });
    });
  
    observer.observe(blockLeft);
  })();

  (function () {
    var blockLeft = document.querySelector('.arrive-on-left_opacity_3');
    
    var observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
  
        if (entry.isIntersecting) {
          entry.target.classList.add('categories-animation-left');
        }
      });
    });
  
    observer.observe(blockLeft);
  })();

  (function () {
    var blockLeft = document.querySelector('.order_opacity');
    
    var observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
  
        if (entry.isIntersecting) {
          entry.target.classList.add('order-form-animation');
        }
      });
    });
  
    observer.observe(blockLeft);
  })();


