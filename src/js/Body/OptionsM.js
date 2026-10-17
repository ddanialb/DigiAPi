import { fetchAPI, digiUrl, productHref, destinationUrl } from "../api.js";
import { seeAllInner, initSeeAll } from "./seeAll.js";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function makeOptionCards(products, seeMore) {
  const cards = products.map((product) => {
    const imageUrl = product.images?.main?.webp_url?.[0] || product.images?.main?.url?.[0] || "";
    const title = product.title_fa || "";
    const sellingPrice = product.default_variant?.price?.selling_price || 0;
    const rrpPrice = product.default_variant?.price?.rrp_price || 0;
    const discountPercent = product.default_variant?.price?.discount_percent || 0;
    const productUrl = productHref(product);

    const formattedSellingPrice = Math.floor(sellingPrice / 10).toLocaleString('fa-IR');
    const formattedRrpPrice = Math.floor(rrpPrice / 10).toLocaleString('fa-IR');


    const hasDiscount = discountPercent > 0 && rrpPrice > sellingPrice;

    return `
      <a href="${productUrl}" target="_blank" rel="noopener noreferrer" class="swiper-slide bg-white border border-[#e0e0e2] rounded-lg flex flex-col justify-start items-center gap-2 shrink-0">
        <div class="w-full p-3 pb-0">
          <img src="${imageUrl}" alt="${title}" class="w-full object-contain card-img" />
        </div>
        <div class="w-full px-3 pb-3 flex flex-col justify-start items-start gap-2">
          <div class="w-full flex flex-col justify-start items-start gap-1">
            <p class="font-Iran text-[14px] text-[#3f4064] line-clamp-2">${title}</p>
          </div>
          <div class="w-full flex justify-between items-end gap-1">
            <div class="w-full flex flex-col justify-center items-start gap-1">
              <div class="w-full flex justify-start items-center gap-1">
                <span class="font-number text-[#b4b6ba] text-[12px] line-through ${hasDiscount ? "block" : "hidden"}">${formattedRrpPrice}</span>
                <span class="font-number text-white bg-[#d32f2f] rounded-full px-2 py-0.5 text-[12px] shrink-0 ${hasDiscount ? "block" : "hidden"}">${Number(discountPercent).toLocaleString("fa-IR")}٪</span>
              </div>
              <div class="w-full flex justify-start items-center gap-1">
                <span class="font-number text-[22px] text-[#3f4064] font-bold">${formattedSellingPrice}</span>
                <img src="./src/img/inc/toman.svg" alt="" class="w-4 h-4 shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </a>
    `;
  });


  const lastSlide = `
    <a href="${digiUrl(seeMore)}" target="_blank" rel="noopener noreferrer" class="swiper-slide bg-white border border-[#e0e0e2] rounded-lg flex flex-col justify-center items-center gap-2 shrink-0">
      ${seeAllInner(products.slice(0, 3).map((product) => product.images?.main?.url?.[0] || ""))}
    </a>
  `;

  return cards.join("") + lastSlide;
}

async function OptionsM() {
  try {
    const data = await fetchAPI("personalized.json");

    if (data.status === 200 && data.data.categories) {
      const categories = data.data.categories;


      const order = [6, 0, 4, 1, 2, 3, 5, 7];
      const sections = [
        { root: ".options-mobile-1", title: ".options-mobile-1-title", className: ".optionsM1", categoryIndex: order[0] },
        { root: ".options-mobile-2", title: ".options-mobile-2-title", className: ".optionsM2", categoryIndex: order[1] },
        { root: ".options-mobile-3", title: ".options-mobile-3-title", className: ".optionsM3", categoryIndex: order[2] },
        { root: ".options-mobile-4", title: ".options-mobile-4-title", className: ".optionsM4", categoryIndex: order[3] },
        { root: ".options-mobile-5", title: ".options-mobile-5-title", className: ".optionsM5", categoryIndex: order[4] },
        { root: ".options-mobile-6", title: ".options-mobile-6-title", className: ".optionsM6", categoryIndex: order[5] },
        { root: ".options-mobile-7", title: ".options-mobile-7-title", className: ".optionsM7", categoryIndex: order[6] },
        { root: ".options-mobile-8", title: ".options-mobile-8-title", className: ".optionsM8", categoryIndex: order[7] },
        { root: ".personalized-desktop-1", title: ".personalized-desktop-1-title", className: ".personalizedD1", categoryIndex: 6 },
        { root: ".personalized-desktop-2", title: ".personalized-desktop-2-title", className: ".personalizedD2", categoryIndex: 0 },
        { root: ".personalized-desktop-3", title: ".personalized-desktop-3-title", className: ".personalizedD3", categoryIndex: 4 },
        { root: ".personalized-desktop-4", title: ".personalized-desktop-4-title", className: ".personalizedD4", categoryIndex: 1 },
        { root: ".personalized-desktop-5", title: ".personalized-desktop-5-title", className: ".personalizedD5", categoryIndex: 2 },
        { root: ".personalized-desktop-6", title: ".personalized-desktop-6-title", className: ".personalizedD6", categoryIndex: 3 },
        { root: ".personalized-desktop-7", title: ".personalized-desktop-7-title", className: ".personalizedD7", categoryIndex: 5 },
        { root: ".personalized-desktop-8", title: ".personalized-desktop-8-title", className: ".personalizedD8", categoryIndex: 7 },
      ];

      const fill = (section) => {
        const category = categories[section.categoryIndex];
        const root = document.querySelector(section.root);
        if (!category || !root) return;
        if (root.getAttribute("data-filled") === "yes") return;
        const heading = root?.querySelector(section.title);
        const title = heading?.querySelector("span");
        const description = title?.nextElementSibling;
        if (title) title.innerHTML = category.title;
        if (description) description.innerHTML = category.description || "";
        const link = heading?.querySelector("a");
        if (link) { link.href = destinationUrl(category.url); link.target = "_blank"; link.rel = "noopener noreferrer"; }
        if (category && category.products) {
          const el = document.querySelector(section.className);
          if (el) {
            el.innerHTML = makeOptionCards(category.products.slice(0, 10), category.url);
          }

          const row = section.className.match(/personalizedD(\d+)/);
          if (row) {
            new Swiper(`.personalized-swiper-${row[1]}`, {
              modules: [Navigation],
              slidesPerView: "auto",
              spaceBetween: 12,                                            
              watchOverflow: true,
              freeMode: true,
              navigation: {
                nextEl: `.personalized-next-${row[1]}`,
                prevEl: `.personalized-prev-${row[1]}`,
              },
            });
          }
        }
        root.setAttribute("data-filled", "yes");
      };

      const fillAll = () => sections.forEach((section) => {
        try {
          fill(section);
        } catch (error) {

          console.error("Row failed:", section.root, error);
        }
      });

      fillAll();
      initSeeAll();

      setTimeout(() => {
        const empty = sections.some((section) => {
          const el = document.querySelector(section.className);
          return el && !el.children.length;
        });
        if (empty) fillAll();
        initSeeAll();
      }, 900);
    }
  } catch (error) {
    console.error("Error loading mobile options:", error);
  }
}

export default OptionsM;
