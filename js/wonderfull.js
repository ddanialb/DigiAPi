// #region Wonderfull Section
export async function loadWonderfullProducts() {
  try {
    const response = await fetch("./api/Api.json");
    const data = await response.json();

    const wonderfullWidget = data.data.widgets.find(
      (widget) => widget.type === "products_cart"
    );

    if (!wonderfullWidget) return;

    const products = wonderfullWidget.data.products;
    const swiperWrapper = document.querySelector(".myWonderfull .swiper-wrapper");

    if (!swiperWrapper) return;

    const firstSlide = swiperWrapper.querySelector(".deactive-wonderfull-first");

    swiperWrapper.innerHTML = "";
    if (firstSlide) {
      swiperWrapper.appendChild(firstSlide);
    }

    products.forEach((product) => {
      const slide = createWonderfullSlide(product);
      swiperWrapper.appendChild(slide);
    });

    const seeAllSlide = createSeeAllSlide();
    swiperWrapper.appendChild(seeAllSlide);

    if (window.myWonderfull) {
      window.myWonderfull.update();
    }
  } catch (error) {
    console.error("Error loading wonderfull products:", error);
  }
}

function createWonderfullSlide(product) {
  const slide = document.createElement("div");
  slide.className = "swiper-slide";

  const imageUrl = product.images?.main?.url?.[0] || "";
  const title = product.title_fa || "";
  const sellingPrice = product.default_variant?.price?.selling_price || 0;
  const rrpPrice = product.default_variant?.price?.rrp_price || 0;
  const discountPercent = product.default_variant?.price?.discount_percent || 0;
  const productUri = product.url?.uri || "";
  const productUrl = productUri ? `https://www.digikala.com${productUri}` : "#";

  const formattedSellingPrice = formatPrice(sellingPrice / 10);
  const formattedRrpPrice = formatPrice(rrpPrice / 10);

  slide.innerHTML = `
    <a href="${productUrl}" class="wonderfull-slide-link" target="_blank">
      <div class="swiper-slide-item-inner">
        <img src="${imageUrl}" alt="${title}" />
        <h3>${title}</h3>
        <div class="price">
          <div class="price-toman">
            ${formattedSellingPrice}
            <img src="./images/svgs/toman.svg" alt="" />
          </div>
          <div class="price-discount">${discountPercent}٪</div>
        </div>
        <div class="price-origin">
          <span>${formattedRrpPrice}</span>
        </div>
      </div>
    </a>
  `;

  return slide;
}

function createSeeAllSlide() {
  const slide = document.createElement("div");
  slide.className = "swiper-slide";

  slide.innerHTML = `
    <a href="https://www.digikala.com/incredible-offers/" class="wonderfull-slide-link" target="_blank">
      <div class="swiper-slide-item-inner-last">
        <img src="./images/svgs/arrowLeft.svg" alt="" />
        <span>مشاهده همه</span>
      </div>
    </a>
  `;

  return slide;
}

function formatPrice(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "٬");
}
// #endregion
