// #region Selected & Trending Products Section
function toPersianNum(num) {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return num.toString().replace(/\d/g, (d) => persianDigits[d]);
}

function formatPrice(price) {
  const toman = Math.floor(price / 10);
  const formatted = toman.toLocaleString("fa-IR");
  return formatted;
}

export async function loadSelectedProducts() {
  try {
    const response = await fetch("./api/selling-and-sales.json");
    const data = await response.json();

    const container = document.getElementById("selected-products-container");
    const titleEl = document.getElementById("selected-title-text");

    if (!container) return;

    if (titleEl && data.data.title) {
      titleEl.textContent = data.data.title;
    }

    const products = data.data.products;
    container.innerHTML = "";

    products.forEach((product) => {
      const price = product.default_variant?.price;
      if (!price) return;

      const sellingPrice = formatPrice(price.selling_price);
      const oldPrice = formatPrice(price.rrp_price);
      const discount = price.discount_percent;
      const imageUrl = product.images?.main?.webp_url?.[0] || product.images?.main?.url?.[0] || "";
      const productUri = product.url?.uri || "";
      const productUrl = productUri ? `https://www.digikala.com${productUri}` : "#";

      const productEl = document.createElement("a");
      productEl.href = productUrl;
      productEl.className = "selected-link";
      productEl.target = "_blank";
      productEl.innerHTML = `
        <div class="selected-product">
          <img src="${imageUrl}" alt="${product.title_fa}" class="selected-picture" />
          <div class="selected-price">
            <div class="price-toman">
              ${sellingPrice}
              <img src="./images/svgs/toman.svg" alt="تومان" />
            </div>
            <div class="selected-discount">${toPersianNum(discount)}٪</div>
          </div>
          <div class="selected-old-price">${oldPrice}</div>
        </div>
      `;
      container.appendChild(productEl);
    });
  } catch (error) {
    console.error("Error loading selected products:", error);
  }
}

export async function loadTrendingProducts() {
  try {
    const response = await fetch("./api/trending.json");
    const data = await response.json();

    const swiperWrapper = document.querySelector(".myTrending .swiper-wrapper");
    const titleEl = document.getElementById("trending-title-text");

    if (!swiperWrapper) return;

    if (titleEl && data.data.title) {
      titleEl.textContent = data.data.title;
    }

    const products = data.data.products;
    swiperWrapper.innerHTML = "";

    const slide = document.createElement("div");
    slide.className = "swiper-slide";

    const productsPerColumn = 3;
    const totalColumns = Math.ceil(products.length / productsPerColumn);

    for (let col = 0; col < totalColumns; col++) {
      const slideItem = document.createElement("div");
      slideItem.className = "swiper-slide-item";

      for (let row = 0; row < productsPerColumn; row++) {
        const productIndex = col * productsPerColumn + row;
        if (productIndex >= products.length) break;

        const product = products[productIndex];
        const imageUrl = product.images?.main?.webp_url?.[0] || product.images?.main?.url?.[0] || "";
        const productUri = product.url?.uri || "";
        const productUrl = productUri ? `https://www.digikala.com${productUri}` : "#";
        const title = product.title_fa || "";
        const rank = toPersianNum(productIndex + 1);

        const link = document.createElement("a");
        link.href = productUrl;
        link.className = "seller-link";
        link.target = "_blank";
        link.innerHTML = `
          <div class="swiper-slide-item-product">
            <img src="${imageUrl}" alt="${title}" />
            <span>${rank}</span>
            <p>${title}</p>
          </div>
        `;
        slideItem.appendChild(link);
      }

      slide.appendChild(slideItem);
    }

    swiperWrapper.appendChild(slide);

    const trendingSwiper = document.querySelector(".myTrending")?.swiper;
    if (trendingSwiper) {
      trendingSwiper.update();
    }
  } catch (error) {
    console.error("Error loading trending products:", error);
  }
}
// #endregion
