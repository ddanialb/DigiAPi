import { fetchAPI, productHref } from "../api.js";
import Swiper from "swiper";

import "swiper/css";

const toPersianNumber = (n) => String(n).replace(/\d/g, (d) => String.fromCharCode(0x06f0 + Number(d)));


function rankItem(product, index) {
  const title = product.title_fa || "";
  const image = product.images?.main?.webp_url?.[0] || product.images?.main?.url?.[0] || "";
  return `
      <a class="dk-rank-item" href="${productHref(product)}" target="_blank" rel="noopener noreferrer" title="${title}">
        <span class="dk-rank-img"><img src="${image}" alt="${title}" loading="eager" decoding="async" /></span>
        <span class="dk-rank-body">
          <span class="dk-rank-num">${toPersianNumber(index + 1)}</span>
          <span class="dk-rank-title">${title}</span>
        </span>
      </a>`;
}


function rankColumns(products, per = 3) {
  let out = "";
  for (let i = 0; i < products.length; i += per) {
    out += `<div class="swiper-slide dk-rank-col">${products.slice(i, i + per).map((p, k) => rankItem(p, i + k)).join("")}</div>`;
  }
  return out;
}

function initRankSwiper(selector) {
  const el = document.querySelector(selector);
  if (!el || el.swiper) return;
  new Swiper(selector, {
    slidesPerView: "auto",
    spaceBetween: 9,
    slidesOffsetBefore: 16,
    slidesOffsetAfter: 16,
    watchOverflow: true,
    grabCursor: true,
    observer: true,
    observeParents: true,
    breakpoints: {


      1024: { slidesPerView: 3, spaceBetween: 14, slidesOffsetBefore: 0, slidesOffsetAfter: 0 },
    },
  });
}

async function Hot() {
  try {
    const data = await fetchAPI("trending.json");
    const products = data.data?.products || [];
    const list = document.querySelector(".hot-list");
    if (list) list.innerHTML = products.map(rankItem).join("");
    const phone = document.querySelector(".hot-sw .dk-rank-cols");
    if (phone) phone.innerHTML = rankColumns(products);
    initRankSwiper(".hot-sw");
  } catch (error) { console.error("Error loading hot products:", error); }
}

export default Hot;
