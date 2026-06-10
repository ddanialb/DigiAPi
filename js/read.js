// #region Read Section
export async function loadMagazinePosts() {
  try {
    const response = await fetch("./api/Api.json");
    const data = await response.json();

    const magazineWidget = data.data.widgets.find(
      (widget) => widget.type === "magazine_posts"
    );

    if (!magazineWidget) return;

    const news = magazineWidget.data.news;
    const seeMoreUrl = magazineWidget.data.see_more_url?.uri || "/mag/";
    
    const readList = document.querySelector(".read-list");
    const readMore = document.querySelector(".read-more");

    if (!readList) return;

    if (readMore) {
      readMore.href = seeMoreUrl;
    }

    readList.innerHTML = "";

    const displayNews = news.slice(0, 4);
    displayNews.forEach((item) => {
      const readItem = createReadItem(item);
      readList.appendChild(readItem);
    });
  } catch (error) {
    console.error("Error loading magazine posts:", error);
  }
}

function createReadItem(item) {
  const link = document.createElement("a");
  link.className = "read-item";
  link.href = item.url?.uri || "#";

  link.innerHTML = `
    <div class="read-img">
      <img src="${item.image}" alt="${item.title}" />
    </div>
    <div class="read-text">${item.title}</div>
  `;

  return link;
}
// #endregion
