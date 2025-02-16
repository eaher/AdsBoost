document.addEventListener("DOMContentLoaded", function () {
    const scrollElements = document.querySelectorAll(".animate-on-scroll");
  
    // Función que determina si un elemento está visible según un umbral (en este caso, 10%)
    const elementInView = (el, threshold = 0.1) => {
      const rect = el.getBoundingClientRect();
      const elementHeight = rect.height;
      const visiblePart = Math.min(window.innerHeight, rect.bottom) - Math.max(0, rect.top);
      return visiblePart / elementHeight > threshold;
    };
  
    // Función que añade o remueve la clase "scrolled" según la visibilidad del elemento
    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (elementInView(el)) {
          el.classList.add("scrolled");
        } else {
          el.classList.remove("scrolled");
        }
      });
    };
  
    window.addEventListener("scroll", handleScrollAnimation);
    // Ejecuta al cargar la página para que los elementos ya visibles se animen correctamente
    handleScrollAnimation();
  });
  