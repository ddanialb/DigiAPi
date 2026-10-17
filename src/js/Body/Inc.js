import { fetchAPI, digiUrl, productHref } from "../api.js";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

async function Incredible() {


  function clock(scope, seconds) {
    const root = document.querySelector(scope);
    if (!root || seconds === null) return;
    const fa = (value) => Math.max(Math.floor(value), 0)
      .toLocaleString("fa-IR", { minimumIntegerDigits: 2, useGrouping: false });

    const hours = root.querySelector(".hour");
    const minutes = root.querySelector(".minute");
    const secs = root.querySelector(".second");
    if (hours) hours.textContent = fa(seconds / 3600);
    if (minutes) minutes.textContent = fa((seconds % 3600) / 60);
    if (secs) secs.textContent = fa(seconds % 60);
  }

  const RED_SCOPES = [".inc-desktop-intro .time", ".inc-mobile-countdown"];
  const GREEN_SCOPES = [".amazing .time", ".amazing .inc-mobile-countdown"];
  let red = null;                                        
  let green = null;                                              

  const paint = () => {
    RED_SCOPES.forEach((scope) => clock(scope, red));
    GREEN_SCOPES.forEach((scope) => clock(scope, green));
  };

  fetchAPI("fresh.json").then((fresh) => {
    const offers = fresh.data.widgets[0]?.data?.products || [];
    green = Number(offers[0]?.default_variant?.price?.timer) || 24 * 3600 - 1;
    paint();
  }).catch(() => {});

  fetchAPI("incredible.json").then((data) => {
    const offers = data.data.widgets.find((w) => w.type === "products_cart")?.data?.products || [];
    const timers = offers
      .map((product) => Number(product.default_variant?.price?.timer))
      .filter((value) => Number.isFinite(value) && value > 0);
    red = timers.length ? Math.min(...timers) : 4 * 3600;
    paint();
  }).catch(() => {});

  setInterval(() => {
    red = red === null ? null : Math.max(red - 1, 0);
    green = green === null ? null : Math.max(green - 1, 0);
    paint();
  }, 1000);


  try {
    const data = await fetchAPI("incredible.json");

    const wonderfullWidget = data.data.widgets.find(
      (widget) => widget.type === "products_cart"
    );

    if (!wonderfullWidget) return;

    const products = wonderfullWidget.data.products;
    paint();


    let incSwiper = products.slice(0, 12).map((product, index) => {
      const imageUrl = product.images?.main?.url?.[0] || "";
      const title = product.title_fa || "";
      const sellingPrice = product.default_variant?.price?.selling_price || 0;
      const rrpPrice = product.default_variant?.price?.rrp_price || 0;
      const discountPercent = product.default_variant?.price?.discount_percent || 0;
      const productUrl = productHref(product);

      const formattedSellingPrice = Math.floor(sellingPrice / 10).toLocaleString('fa-IR');
      const formattedRrpPrice = Math.floor(rrpPrice / 10).toLocaleString('fa-IR');
      const isLast = index === 11;

      return `
        <div class="swiper-slide inc-product-slide cursor-pointer ${isLast ? "rounded-tr-lg rounded-br-lg" : ""} overflow-hidden !w-[152px]">
          <a href="${productUrl}" target="_blank" rel="noopener noreferrer" class="w-full h-full flex flex-col bg-white justify-center items-center gap-1 p-2">
            <img src="${imageUrl}" alt="${title}" class="w-full h-[140px] object-contain" />
            <p class="font-Iran text-[#777b81] text-[12px] text-right w-full line-clamp-2">
              ${title}
            </p>
            <div class="flex justify-between items-end w-full gap-1">
              <div class="flex flex-col justify-center items-start gap-1 w-full">
                <div class="w-full flex justify-start items-center gap-1">
                  <span class="font-number text-[12px] text-[#cdced1] line-through">
                    ${formattedRrpPrice}
                  </span>
                  <div class="font-number text-[12px] font-bold text-white bg-[#d32f2f] px-1.5 py-0.5 rounded-full shrink-0">
                    ${Number(discountPercent).toLocaleString("fa-IR")}٪
                  </div>
                </div>
                <div class="w-full flex justify-start items-center gap-1">
                  <span class="font-number">${formattedSellingPrice}</span>
                  <img src="./src/img/inc/toman.svg" alt="" class="w-4 h-4">
                </div>
              </div>
            </div>
          </a>
        </div>
      `;
    });

    const lastSlide = `
      <div class="swiper-slide inc-end-slide !w-[160px] pl-4">
        <div class="bg-white w-full h-[260px] rounded-tl-lg rounded-bl-lg flex flex-col justify-center items-center">
          <a href="https://www.digikala.com/incredible-offers/" target="_blank" rel="noopener noreferrer" class="flex flex-col justify-center items-center">
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

    const incWrapper = document.querySelector(".inc-wrapper");
    if (incWrapper) {
      incWrapper.innerHTML += incSwiper.join("") + lastSlide;
    }

    new Swiper(".inc-swiper", {
      modules: [Navigation], slidesPerView: "auto", spaceBetween: 2,
      navigation: { nextEl: ".inc-next", prevEl: ".inc-prev" },
      allowTouchMove: true,
      breakpoints: {
        0: { navigation: { enabled: false } },
        1024: { navigation: { enabled: true } }
      }
    });
  } catch (error) {
    console.error("Error loading incredible offers:", error);
  }
}

export default Incredible;