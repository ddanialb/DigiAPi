import { fetchAPI, digiUrl } from "../api.js";


export default async function Services() {
  try {
    const { data } = await fetchAPI("mobile-services.json");
    const root = document.querySelector(".services");
    if (!root) return;
    root.setAttribute("aria-label", "سرویس‌های دیجی‌کالا");
    root.innerHTML = data.active_pillars.map(item => {
      const active = item.name === "digikala";
      const image = (active && item.focused_image?.url?.[0]) || item.image.url[0];
      return `<a href="${digiUrl(item.web_url)}" target="_blank" rel="noopener noreferrer" class="services-items mobile-service-tab${active ? " is-active" : ""}" data-service="${item.name}" ${active ? 'aria-current="page"' : ''}>
        <img src="${image}" alt="" width="40" height="40" draggable="false" />
        <span>${item.title}</span>
      </a>`;
    }).join("");
  } catch (error) {
    console.error("Error loading mobile superweb services:", error);
  }
}
