// #region Banner-2 Section
export async function loadBanner2() {
  try {
    const response = await fetch("./api/Api.json");
    const data = await response.json();

    const middleBannerWidget = data.data.widgets.find(
      (widget) => widget.type === "simple_banner" && widget.name === "banners_home_web_zone_middle"
    );

    if (!middleBannerWidget || !middleBannerWidget.data || middleBannerWidget.data.length === 0) return;

    const banner2Section = document.querySelector(".banner-2");
    if (!banner2Section) return;

    banner2Section.innerHTML = "";

    const banners = middleBannerWidget.data.slice(0, 2);

    banners.forEach((banner, index) => {
      const imageUrl = banner.webp_image || banner.image;
      const bannerUri = banner.url?.uri || "";
      const url = bannerUri ? `https://www.digikala.com${bannerUri}` : "#";
      const title = banner.title || "";

      const bannerLink = document.createElement("a");
      bannerLink.href = url;
      bannerLink.target = "_blank";
      bannerLink.className = `banner-2-image-${index + 1}`;
      bannerLink.innerHTML = `<img src="${imageUrl}" alt="${title}" />`;

      banner2Section.appendChild(bannerLink);
    });
  } catch (error) {
    console.error("Error loading banner-2:", error);
  }
}
// #endregion
