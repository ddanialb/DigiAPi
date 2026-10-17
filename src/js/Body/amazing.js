import { fetchAPI, productHref } from "../api.js";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";


const CARD = (product) => {
  const price = product.default_variant?.price || {};
  const image = product.images?.main?.url?.[0] || "";
  const title = product.title_fa || "";
  const sold = Math.floor((price.selling_price || 0) / 10).toLocaleString("fa-IR");
  const rrp = Math.floor((price.rrp_price || 0) / 10).toLocaleString("fa-IR");
  const discount = Number(price.discount_percent || 0).toLocaleString("fa-IR");

  return `
    <div class="swiper-slide amazing-product-slide cursor-pointer overflow-hidden !w-[152px]">
      <a href="${productHref(product)}" target="_blank" rel="noopener noreferrer" class="w-full h-full flex flex-col bg-white justify-center items-center gap-1 p-2">
        <img src="${image}" alt="${title}" class="w-full h-[140px] object-contain" />
        <p class="font-Iran text-[#777b81] text-[12px] text-right w-full line-clamp-2">
          ${title}
        </p>
        <div class="flex justify-between items-end w-full gap-1">
          <div class="flex flex-col justify-center items-start gap-1 w-full">
            <div class="w-full flex justify-start items-center gap-1">
              <span class="font-number text-[12px] text-[#cdced1] line-through">
                ${rrp}
              </span>
              <div class="font-number text-[12px] font-bold text-white bg-[#d32f2f] px-1.5 py-0.5 rounded-full shrink-0">
                ${discount}٪
              </div>
            </div>
            <div class="w-full flex justify-start items-center gap-1">
              <span class="font-number">${sold}</span>
              <img src="./src/img/inc/toman.svg" alt="" class="w-4 h-4">
            </div>
          </div>
        </div>
      </a>
    </div>
  `;
};

async function Amazing() {
  try {
    const data = await fetchAPI("fresh.json");
    const widget = data.data.widgets.find((item) => item.type === "fresh_shortcut");
    if (!widget) return;

    const fresh = widget.data;
    const seeMore = fresh.see_more_url?.uri || "https://www.digikala.com/supermarket/products/custom/amazing";

    const wrapper = document.querySelector(".amazing-wrapper");
    if (wrapper) {
      wrapper.innerHTML += fresh.products.map(CARD).join("") + `
        <div class="swiper-slide amazing-end-slide !w-[160px] pl-4">
          <div class="bg-white w-full h-[260px] rounded-tl-lg rounded-bl-lg flex flex-col justify-center items-center">
            <a href="${seeMore}" target="_blank" rel="noopener noreferrer" class="flex flex-col justify-center items-center">
              <div class="p-2 rounded-full border-2 border-[#19bfd3]">
                <img src="./src/img/inc/blueleft.svg" alt="" />
              </div>
              <span class="font-Iran text-[14px] text-[#574a6d] leading-6 my-2">
                مشاهده همه
              </span>
            </a>
          </div>
        </div>
      `;

      new Swiper(".amazing-swiper", {
        modules: [Navigation], slidesPerView: "auto", spaceBetween: 2,
        navigation: { nextEl: ".amazing-next", prevEl: ".amazing-prev" },
        allowTouchMove: true,
        breakpoints: {
          0: { navigation: { enabled: false } },
          1024: { navigation: { enabled: true } }
        }
      });
    }

  } catch (error) {
    console.error("Error loading supermarket offers:", error);
  }
}

export default Amazing;
