import { getDB } from "../api.js";

async function Services() {
  const res = await getDB();

  try {
    const services = res.services.map((item) => {
      return `
    <div class="services-items flex flex-col py-2 box-border rounded-lg border border-[#d7d7d7] justify-between items-center w-1/6 h-18 ${item.active ? "bg-[#e40138]" : "bg-white"}">

      <img src="${item.Simg}" alt="" class="w-10 shrink-0">

      <span class="font-Iran text-[12px] font-normal text-center px-1 leading-tight line-clamp-2 w-full overflow-hidden
        ${item.active ? "text-white" : "text-black"}">
        ${item.Stitle}
      </span>

    </div>
  `;
    });

    document.querySelector(".services").innerHTML = services.join(" ");
  } catch (error) {
    console.error(error.message);
  }
}
Services();
export default Services;
