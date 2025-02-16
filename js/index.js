document.addEventListener("DOMContentLoaded", function() {
    // Selecciona todos los elementos a animar al hacer scroll
    const scrollElements = document.querySelectorAll(".animate-on-scroll");
  
    const elementInView = (el, dividend = 1) => {
      const elementTop = el.getBoundingClientRect().top;
      return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
      );
    };
  
    const displayScrollElement = (element) => {
      element.classList.add("scrolled");
    };
  
    const hideScrollElement = (element) => {
      element.classList.remove("scrolled");
    };
  
    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
          displayScrollElement(el);
        } else {
          hideScrollElement(el);
        }
      });
    };
  
    window.addEventListener("scroll", handleScrollAnimation);
    // Ejecuta al cargar la página para animar elementos ya visibles
    handleScrollAnimation();
  });
  