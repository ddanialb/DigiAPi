// #region Brand Section
export async function loadPopularBrands() {
  try {
    const response = await fetch("./api/Api.json");
    const data = await response.json();

    const brandsWidget = data.data.widgets.find(
      (widget) => widget.type === "popular_brands_grid"
    );

    if (!brandsWidget) return;

    const brands = brandsWidget.data.brands;
    const swiperWrapper = document.querySelector(".mybrand .swiper-wrapper");

    if (!swiperWrapper) return;

    swiperWrapper.innerHTML = "";

    brands.forEach((brand) => {
      const slide = createBrandSlide(brand);
      swiperWrapper.appendChild(slide);
    });

    initializeBrandSwiper();
  } catch (error) {
    console.error("Error loading popular brands:", error);
  }
}

function createBrandSlide(brand) {
  const slide = document.createElement("div");
  slide.className = "swiper-slide";

  const logoUrl = brand.logo?.url?.[0] || "";
  const title = brand.title_fa || "";
  const brandUri = brand.url?.uri || "";
  const url = brandUri ? `https://www.digikala.com${brandUri}` : "#";

  slide.innerHTML = `
    <a href="${url}" class="brand-slide-link" target="_blank">
      <div class="swiper-slide-item">
        <img src="${logoUrl}" alt="${title}" />
      </div>
    </a>
  `;

  return slide;
}

function initializeBrandSwiper() {
  new Swiper(".mybrand", {
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: {
      nextEl: ".brand-next",
      prevEl: ".brand-prev",
    },
    breakpoints: {
      640: { slidesPerView: 4, spaceBetween: 15 },
      768: { slidesPerView: 6, spaceBetween: 15 },
      1024: { slidesPerView: 8, spaceBetween: 20 },
      1280: { slidesPerView: 10, spaceBetween: 20 },
    },
  });
}
// #endregion
