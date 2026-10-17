import { fetchAPI, digiUrl } from "../api.js";

async function Blog() {
  try {
    const data = await fetchAPI("magazine.json");

    const magazineWidget = data.data.widgets.find(
      (widget) => widget.type === "magazine_posts"
    );

    if (!magazineWidget) return;

    const news = magazineWidget.data.news;


    const blogItems = news.slice(0, 4).map((item) => {
      const fullUrl = digiUrl(item.url);

      return `
        <div class="flex-col gap-2 rounded-xl overflow-hidden border border-[#eaeaec] desktop:h-75 mobile:h-60 mobile:block desktop:block">
          <a href="${fullUrl}" target="_blank" rel="noopener noreferrer" class="block h-full">
            <img src="${item.image}" alt="${item.title}" class="w-full object-cover">
            <div class="px-4 py-2">
              <span class="font-Iran desktop:text-[13px] mobile:text-[13px]">${item.title}</span>
            </div>
          </a>
        </div>
      `;
    });

    const blogContainer = document.querySelector(".blog-items");
    if (blogContainer) {
      blogContainer.innerHTML = blogItems.join("");
    }
  } catch (error) {
    console.error("Error loading blog:", error);
  }
}

export default Blog;
