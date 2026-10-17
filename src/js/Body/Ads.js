import { fetchAPI, digiUrl } from "../api.js";


const CARD = (banner, attr) => `
  <div ${attr} class="desktop:min-w-60 desktop:w-[24%] mobile:w-[45%] mobile:h-30 desktop:h-auto desktop:rounded-2xl mobile:rounded-lg overflow-hidden">
    <a href="${digiUrl(banner.url)}" target="_blank" rel="noopener noreferrer">
      <img src="${banner.image}" alt="${banner.title}" title="${banner.title}" loading="eager" decoding="async" class="w-full h-full object-cover" />
    </a>
  </div>
`;

async function Ads() {
  try {
    const data = await fetchAPI("ads.json");
    const widgets = data.data.widgets;
    const zone = (name) => widgets.find((item) => item.name === name)?.data || [];

    [
      { name: "banners_home_web_zone_top", target: ".dk-strip" },
      { name: "banners_home_web_zone_top_second", target: ".dk-strip-2" },
    ].forEach(({ name, target }) => {
      const container = document.querySelector(target);
      const banners = zone(name);


      if (container && banners.length && !container.querySelector("[data-banner]")) {
        container.innerHTML = banners.map((b) => CARD(b, "data-banner")).join("");
      }
    });

  } catch (error) {
    console.error("Error loading ads:", error);
  }
}

export default Ads;
