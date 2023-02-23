document.onreadystatechange = function() {
    let lastScrollPosition = 0;
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function(e) {
      lastScrollPosition = window.scrollY;
      
      if (lastScrollPosition > 1)
        navbar.classList.add('stuck');
      else
        navbar.classList.remove('stuck');
    });
  }