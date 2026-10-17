


export function seeAllInner(images = [], label = "مشاهده همه") {
  const imgs = (images || []).filter(Boolean).slice(0, 3);
  const cards = [1, 2, 3].map((n) => {
    const img = imgs[n - 1]
      ? `<img src="${imgs[n - 1]}" alt="" loading="eager" decoding="async" />`
      : "";
    return `<span class="dk-seeall-card dk-seeall-s${n}">${img}</span>`;
  }).join("");
  return `
    <span class="dk-seeall-art">${cards}</span>
    <span class="dk-seeall-label font-Iran">${label}</span>`;
}


export function initSeeAll() {
  if (typeof IntersectionObserver !== "function") {
    document.querySelectorAll(".dk-seeall-card").forEach((card) => card.classList.add("is-play"));
    return;
  }
  const player = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const slide = entry.target;
      if (!entry.isIntersecting || slide.dataset.dkPlayed === "yes") return;
      slide.dataset.dkPlayed = "yes";
      slide.querySelectorAll(".dk-seeall-card").forEach((card) => card.classList.add("is-play"));
    });
  }, { threshold: 0.5 });
  document.querySelectorAll(".swiper-slide").forEach((slide) => {
    if (slide.querySelector(".dk-seeall-art")) player.observe(slide);
  });
}
