import { fetchAPI, digiUrl, productHref } from "../api.js";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";


async function Nearby() {
  try {
    const data = await fetchAPI("nearby.json");
    const section = data.data;
    if (!section) return;

    const setText = (selector, value) => {
      const el = document.querySelector(selector);
      if (el && value) el.textContent = value;
    };
    setText("[data-nearby-title]", section.title);
    setText("[data-nearby-notice]", section.notice);
    setText("[data-nearby-address]", section.address_label);

    const more = document.querySelector("[data-nearby-more]");
    if (more && section.see_more) more.href = digiUrl(section.see_more);

    const cards = (section.products || []).map((product) => {
      const price = product.price || {};
      const sold = Math.floor((price.selling_price || 0) / 10).toLocaleString("fa-IR");
      const rrp = Math.floor((price.rrp_price || 0) / 10).toLocaleString("fa-IR");
      const discount = Number(price.discount_percent || 0);
      const rating = product.rating?.rate ? (product.rating.rate / 20).toLocaleString("fa-IR", { maximumFractionDigits: 1 }) : "";

      return `
        <div class="swiper-slide !w-[164px]">
          <a href="${productHref(product)}" target="_blank" rel="noopener noreferrer"
            class="w-full flex flex-col justify-between items-center bg-white p-2 rounded-md gap-1">
            <img src="${product.image?.url || ""}" alt="${product.title_fa || ""}" class="w-full aspect-square object-contain" />
            <p class="font-Iran text-[12px] text-[#3f4064] text-right w-full line-clamp-2 leading-5">
              ${product.title_fa || ""}
            </p>
            <div class="w-full flex justify-start items-center gap-1">
              ${rating ? `<span class="font-number text-[11px] text-[#b1b3b8]">${rating}</span>` : ""}
            </div>
            <div class="w-full flex flex-col justify-center items-end">
              <div class="flex justify-center items-center gap-1">
                <span class="font-number text-[#cdced1] text-[12px] line-through ${price.rrp_price ? "" : "hidden"}">${rrp}</span>
                <span class="font-number text-[12px] text-white bg-[#d32f2f] px-1.5 py-0.5 rounded-full shrink-0 ${discount ? "" : "hidden"}">
                  ${discount.toLocaleString("fa-IR")}٪
                </span>
              </div>
              <div class="flex justify-center items-center gap-1">
                <span class="font-number text-[15px] text-[#3f4064] font-bold">${sold}</span>
                <img src="./src/img/inc/toman.svg" alt="تومان" />
              </div>
            </div>
            <span class="font-Iran text-[11px] text-[#62666d] w-full text-right">${product.badge?.text || ""}</span>
          </a>
        </div>
      `;
    });

    const wrapper = document.querySelector(".nearby-wrapper");
    if (wrapper) wrapper.innerHTML = cards.join("");

    new Swiper(".nearby-swiper", {
      modules: [Navigation],
      slidesPerView: "auto",
      spaceBetween: 12,
      navigation: { nextEl: ".nearby-next", prevEl: ".nearby-prev" },
    });
  } catch (error) {
    console.error("Error loading nearby products:", error);
  }
}

export default Nearby;
