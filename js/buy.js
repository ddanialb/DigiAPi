// #region Buy Section
export async function loadBuyCategories() {
  try {
    const response = await fetch("./api/Api.json");
    const data = await response.json();

    const categoriesWidget = data.data.widgets.find(
      (widget) => widget.type === "main_categories_grid"
    );

    if (!categoriesWidget) return;

    const categories = categoriesWidget.data.categories;
    const swiperWrapper = document.querySelector(".mybuy .swiper-wrapper");

    if (!swiperWrapper) return;

    swiperWrapper.innerHTML = "";

    categories.forEach((category) => {
      const slide = createCategorySlide(category);
      swiperWrapper.appendChild(slide);
    });

    const swiperEl = document.querySelector(".mybuy");
    if (swiperEl && swiperEl.swiper) {
      swiperEl.swiper.update();
    }
  } catch (error) {
    console.error("Error loading buy categories:", error);
  }
}

function createCategorySlide(category) {
  const slide = document.createElement("div");
  slide.className = "swiper-slide";

  const imageUrl = category.image || "";
  const title = category.title || "";
  const categoryUri = category.url?.uri || "";
  const url = categoryUri ? `https://www.digikala.com${categoryUri}` : "#";

  slide.innerHTML = `
    <a href="${url}" class="buy-center-link" target="_blank">
      <img src="${imageUrl}" alt="${title}" />
    </a>
    <h3>${title}</h3>
  `;

  return slide;
}
// #endregion
