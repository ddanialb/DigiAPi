import { getDB } from "../api.js";
import Swiper from "swiper";
import "swiper/css";

async function Services() {
  const res = await getDB();

  try {
    const services = res.services.map((item) => {
      return `
    <div style="width: 68px; height: 66px;" class="swiper-slide services-items flex flex-col py-2 box-border rounded-lg border border-[#d7d7d7] justify-between items-center  ${item.active ? "bg-[#e40138]" : "bg-white"}">
      <img src="${item.Simg}" alt="" class="w-10 shrink-0">
      <span class="font-Iran text-[12px] font-normal text-center px-1 leading-tight line-clamp-2 w-full overflow-hidden ${item.active ? "text-white" : "text-black"}">
        ${item.Stitle}
      </span>
    </div>
  `;
    });

    document.querySelector(".services").innerHTML = services.join(" ");

    new Swiper(".MServices-swiper", {
      slidesPerView: "auto",
      spaceBetween: 8,
      freeMode: true,
    });
  } catch (error) {
    console.error(error.message);
  }
}
Services();
export default Services;
