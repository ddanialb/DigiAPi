import { fetchAPI, digiUrl } from "../api.js";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

async function Brands() {
  try {
    const data = await fetchAPI("brands.json");

    const brandsWidget = data.data.widgets.find(widget => widget.type === "popular_brands_grid");

    if (!brandsWidget || !brandsWidget.data || !brandsWidget.data.brands) {
      console.error("Brands data not found");
      return;
    }

    const brands = brandsWidget.data.brands;


    const brandsDesktop = brands.map((brand) => {
      const logoUrl = brand.logo?.url?.[0] || "";
      const title = brand.title_fa || "";
      const brandUri = brand.url?.uri || "";
      const url = brandUri ? digiUrl(brandUri) : "#";


      return `
        <div class="swiper-slide">
          <a href="${url}" target="_blank" rel="noopener noreferrer" title="${title}" class="brands-card">
            <span class="brands-logo"><img src="${logoUrl}" alt="${title}" class="mix-blend-multiply" /></span>
            <h4 class="brands-name">${title}</h4>
          </a>
        </div>
      `;
    });

    document.querySelector(".brands-wrapper").innerHTML = brandsDesktop.join("");


    const brandsMobile = brands.map((brand) => {
      const logoUrl = brand.logo?.url?.[0] || "";
      const title = brand.title_fa || "";
      const brandUri = brand.url?.uri || "";
      const url = brandUri ? digiUrl(brandUri) : "#";

      return `
        <a href="${url}" target="_blank" rel="noopener noreferrer" title="${title}" class="swiper-slide shrink-0 w-[80px] h-[100px] rounded-lg border border-[#e0e0e2] bg-[#f5f5f5] flex flex-col justify-center items-center gap-2 px-1">
          <img src="${logoUrl}" alt="${title}" class="w-[75%] object-contain mix-blend-multiply" />
          <span class="font-Iran text-[12px] text-[#3f4064] text-center w-full truncate">${title}</span>
        </a>
      `;
    });


    const mobileWrapper = document.querySelector(".brands-mobile .swiper-wrapper");
    if (mobileWrapper) mobileWrapper.innerHTML = brandsMobile.join("");
  } catch (error) {
    console.error("Error loading brands:", error);
  }

  new Swiper(".brands-mobile", {
    slidesPerView: "auto",
    spaceBetween: 13,
    watchOverflow: true,
    grabCursor: true,
  });

  new Swiper(".brands-swiper", {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 8,
    watchOverflow: true,
    freeMode: true,
    navigation: {
      nextEl: ".brands-next",
      prevEl: ".brands-prev",
    },
  });
}

export default Brands;
