

openBtn.onclick = function () {
    search.style.display = 'flex';
};

closeBtn.onclick = function () {
    menu.style.display = 'none';
};

// ----------------------------------------------------------------------------------

function toggleLoginPopup() {
    const popup = document.getElementById("login-popup");
    popup.style.display = (popup.style.display === "none" || popup.style.display === "") ? "block" : "none";
}

function toggleLoginPopup() {
    const popup = document.getElementById("login-popup");
    const overlay = document.getElementById("overlay");
    const isVisible = popup.style.display === "block";
    popup.style.display = isVisible ? "none" : "block";
    overlay.style.display = isVisible ? "none" : "block";
}


// ----------------------------------------------------------------------------------

const products = [
    {
        image: "imgs/amplifers.jpg"
    },
    {
        image: "imgs/drums.jpg"
    },
    {
        image: "imgs/audio.jpg"
    },
    {
        image: "imgs/guitars.jpg"
    },
    {
        image: "imgs/organs.jpg"
    },
    {
        image: "imgs/piano.jpg"
    },
    {
        image: "imgs/strings.jpg"
    },
    {
        image: "imgs/synthesizers.jpg"
    },
    {
        image: "imgs/traditional percussion.jpg"
    },
    {
        image: "imgs/violins.jpg"
    },
    {
        image: "imgs/western instrments.jpg"
    },
];

products.forEach(product => {
  const img = new Image();
  img.src = product.image;
});

const productDiv = document.getElementById("product");

let currentIndex = 0;

function displayProduct() {
    const product = products[currentIndex];
    productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
    `;

    currentIndex = (currentIndex + 1) % products.length;
}

setInterval(displayProduct, 5000);

displayProduct();


// ---------------------------------------------------------------------------

const links = document.querySelectorAll('.header-links div a');

links.forEach(link => {
    link.addEventListener('mouseover', () => {
        links.forEach(otherLink => {
            if (otherLink !== link) {
                otherLink.style.filter = 'blur(4px)';
                otherLink.style.opacity = '0.6'; 
            }
        });
    });

    link.addEventListener('mouseout', () => {
        links.forEach(otherLink => {
            otherLink.style.filter = 'none';
            otherLink.style.opacity = '1'; 
        });
    });
});

// -------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  let backToTopBtn = document.getElementById("backToTop");

  window.onscroll = function () {
      if (window.scrollY > 300) { 
          backToTopBtn.style.display = "flex";
      } else {
          backToTopBtn.style.display = "none";
      }
  };

  backToTopBtn.addEventListener("click", function () {
      window.scrollTo({
          top: 0,
          behavior: "smooth"
      });
  });
});

