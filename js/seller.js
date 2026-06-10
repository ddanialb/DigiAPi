// #region Seller Section
export async function loadBestSellingProducts() {
  try {
    const response = await fetch("./api/Api.json");
    const data = await response.json();

    const sellerWidget = data.data.widgets.find(
      (widget) => widget.type === "products_ordered"
    );

    if (!sellerWidget) return;

    const products = sellerWidget.data.products;
    const swiperWrapper = document.querySelector(".mySeller .swiper-wrapper");

    if (!swiperWrapper) return;

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
        const productElement = createProductElement(product, productIndex + 1);
        slideItem.appendChild(productElement);
      }

      slide.appendChild(slideItem);
    }

    swiperWrapper.appendChild(slide);
    initializeSellerSwiper();
  } catch (error) {
    console.error("Error loading best selling products:", error);
  }
}

function toPersianNumber(num) {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return num.toString().replace(/\d/g, (d) => persianDigits[d]);
}

function createProductElement(product, rank) {
  const link = document.createElement("a");
  const productUri = product.url?.uri || "";
  link.href = productUri ? `https://www.digikala.com${productUri}` : "#";
  link.className = "seller-link";
  link.target = "_blank";

  const imageUrl = product.images?.main?.webp_url?.[0] || product.images?.main?.url?.[0] || "";
  const title = product.title_fa || "";
  const persianRank = toPersianNumber(rank);

  link.innerHTML = `
    <div class="swiper-slide-item-product">
      <img src="${imageUrl}" alt="${title}" />
      <span>${persianRank}</span>
      <p>${title}</p>
    </div>
  `;

  return link;
}

function initializeSellerSwiper() {
  new Swiper(".mySeller", {
    slidesPerView: "auto",
    spaceBetween: 0,
    freeMode: true,
    navigation: {
      nextEl: ".seller-next",
      prevEl: ".seller-prev",
    },
  });
}
// #endregion
