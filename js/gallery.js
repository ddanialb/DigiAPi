// #region Gallery Section
export async function loadGallery() {
  try {
    const response = await fetch('./api/Api.json');
    const data = await response.json();

    const widgets = data.data.widgets;
    const topBanners = widgets.find(item => item.name === 'banners_home_web_zone_top');
    const topSecondBanners = widgets.find(item => item.name === 'banners_home_web_zone_top_second');

    const galleryContainers = document.querySelectorAll('.gallery .gallery-center');

    if (topBanners && galleryContainers[0]) {
      const firstGallery = galleryContainers[0];
      firstGallery.innerHTML = '';
      
      topBanners.data.forEach(banner => {
        const bannerUri = banner.url?.uri || "";
        const bannerUrl = bannerUri ? `https://www.digikala.com${bannerUri}` : "#";
        const galleryItem = `
          <div class="gallery-center-img">
            <a href="${bannerUrl}" class="gallery-center-link" target="_blank">
              <img src="${banner.image}" alt="${banner.title}" />
            </a>
          </div>
        `;
        firstGallery.innerHTML += galleryItem;
      });
    }

    if (topSecondBanners && galleryContainers[1]) {
      const secondGallery = galleryContainers[1];
      secondGallery.innerHTML = '';
      
      topSecondBanners.data.forEach(banner => {
        const bannerUri = banner.url?.uri || "";
        const bannerUrl = bannerUri ? `https://www.digikala.com${bannerUri}` : "#";
        const galleryItem = `
          <div class="gallery-center-img">
            <a href="${bannerUrl}" class="gallery-center-link" target="_blank">
              <img src="${banner.image}" alt="${banner.title}" />
            </a>
          </div>
        `;
        secondGallery.innerHTML += galleryItem;
      });
    }
  } catch (error) {
    console.error('Error loading gallery:', error);
  }
}
// #endregion
