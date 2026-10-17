import { fetchAPI, digiUrl } from "../api.js";

export default async function Partner() {
  try {
    const { data } = await fetchAPI('partners.json');
    const banners = name => data.widgets.find(w => w.name === name)?.data || [];
    const first = banners('banners_home_web_zone_middle');
    const second = banners('banners_home_web_zone_middle_third');
    const card = (b, cls) => `<a href="${digiUrl(b.url)}" target="_blank" rel="noopener noreferrer" class="${cls}" title="${b.title}"><img src="${b.webp_image || b.image}" alt="${b.title}" class="w-full h-full object-cover" loading="lazy" /></a>`;
    const render = (selector, html) => {
      const root = document.querySelector(selector);
      if (!root) return;

      if (html && !root.querySelector('a')) root.innerHTML = html;
      if (!html && !root.querySelector('a')) root.style.display = 'none';
    };
    render('.partnership', first.map(b => card(b, 'desktop:block mobile:hidden rounded-2xl overflow-hidden desktop:w-[49%]')).join('') + (first[0] ? card(first[0], 'mobile:block desktop:hidden w-[95%] rounded-lg overflow-hidden') : ''));
    render('.partnership2', first.map(b => card(b, 'rounded-2xl overflow-hidden w-[49%]')).join(''));


    const promo = [...first, ...second].slice(0, 4);
    render('.partner-promo-bottom', promo.map((b, i) => {
      const href = digiUrl(b.url), title = b.title || '';


      const src = b.webp_image || b.image;
      return `<a href="${href}" target="_blank" rel="noopener noreferrer" class="partner-promo-card rounded-2xl overflow-hidden w-[49%]" title="${title}"><img src="${src}" alt="${title}" class="w-full h-full object-cover" loading="eager" /></a>`;
    }).join(''));
    render('.partner-mobile-1', [second[1], second[3]].filter(Boolean).map(b => card(b, 'block w-[95%] rounded-lg overflow-hidden')).join(''));
    render('.partner-mobile-2', [first[1]].filter(Boolean).map(b => card(b, 'block w-[95%] rounded-lg overflow-hidden')).join(''));
    render('.partner-brands', [second[0]].filter(Boolean).map(b => card(b, 'block w-[95%] rounded-lg overflow-hidden')).join(''));
    render('.partner-hot', [second[1]].filter(Boolean).map(b => card(b, 'block w-[95%] rounded-lg overflow-hidden')).join(''));
  } catch (error) { console.error('Error loading partnership banners:', error); }
}
