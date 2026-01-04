// #region Banner Section
export async function loadFreshBanner() {
  try {
    const response = await fetch("./api/Api.json");
    const data = await response.json();

    const freshWidget = data.data.widgets.find(
      (widget) => widget.type === "fresh_shortcut"
    );

    if (!freshWidget) return;

    const bannerSection = document.querySelector(".banner");
    if (!bannerSection) return;

    const freshData = freshWidget.data;
    const products = freshData.products.slice(0, 6);

    const discountElement = bannerSection.querySelector(".discount");
    if (discountElement) {
      discountElement.textContent = `تا ٪${freshData.discount_percent} تخفیف`;
    }

    const productsContainer = bannerSection.querySelector(".products");
    if (!productsContainer) return;

    productsContainer.innerHTML = "";

    products.forEach((product) => {
      const imageUrl = product.images?.main?.url?.[0] || "";
      const productUri = product.url?.uri || "";
      const productUrl = productUri ? `https://www.digikala.com${productUri}` : "#";
      const discountPercent =
        product.default_variant?.price?.discount_percent || 0;

      const productItem = document.createElement("div");
      productItem.className = "product";
      productItem.innerHTML = `
        <a href="${productUrl}" class="product-link" target="_blank">
          <img src="${imageUrl}" alt="${product.title_fa}" />
        </a>
        <div class="discount-tag">${discountPercent}٪</div>
      `;

      productsContainer.appendChild(productItem);
    });

    const moreBtn = bannerSection.querySelector(".more-btn");
    if (moreBtn && freshData.see_more_url) {
      moreBtn.href = `https://www.digikala.com${freshData.see_more_url.uri}`;
      moreBtn.target = "_blank";
    }
  } catch (error) {
    console.error("Error loading fresh banner:", error);
  }
}
// #endregion
