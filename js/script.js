// Script para a Navegação Mobile
document
  .getElementById("menu-toggle")
  .addEventListener("click", function () {
    document.getElementById("mobile-menu").classList.toggle("hidden");
  });

// Script para Lazy Loading (Melhora o LCP - Largest Contentful Paint)
document.addEventListener("DOMContentLoaded", function () {
  // Lazy Load para iFrame do Google Maps
  const lazyMap = document.querySelector(".lazy-map");
  if (lazyMap && lazyMap.dataset.src) {
    lazyMap.src = lazyMap.dataset.src;
  }

  // Você pode aplicar Lazy Load a todas as imagens que não estão no primeiro bloco (above-the-fold)
  const lazyImages = [].slice.call(
    document.querySelectorAll("img[loading='lazy']")
  );

  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function (
      entries,
      observer
    ) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          if (lazyImage.dataset.src) {
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.removeAttribute("data-src");
          }
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function (lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
    // Fallback simples para navegadores antigos
    lazyImages.forEach(function (lazyImage) {
      if (lazyImage.dataset.src) {
        lazyImage.src = lazyImage.dataset.src;
        lazyImage.removeAttribute("data-src");
      }
    });
  }
});

// **NOTA:** A funcionalidade de envio do Formulário de Cadastro será implementada no Back-end (Node.js/Python)
// O JavaScript aqui serviria apenas para validação e envio via fetch/axios para a API.
