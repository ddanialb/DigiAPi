// #region Story Section
let storySwiper = null;

export async function loadStories() {
  try {
    const response = await fetch("./api/story.json");
    const data = await response.json();

    if (!data.data || !data.data.posts) {
      console.error("Story data not found");
      return;
    }

    const posts = data.data.posts;
    const swiperWrapper = document.querySelector(".myStory .swiper-wrapper");

    if (!swiperWrapper) return;

    swiperWrapper.innerHTML = "";

    const displayPosts = posts.slice(0, 18);

    displayPosts.forEach((post) => {
      const slide = createStorySlide(post);
      swiperWrapper.appendChild(slide);
    });

    if (storySwiper) {
      storySwiper.update();
    } else {
      initStorySwiper();
    }
  } catch (error) {
    console.error("Error loading stories:", error);
  }
}

function createStorySlide(post) {
  const slide = document.createElement("div");
  slide.className = "swiper-slide";

  const imageUrl = post.circle_cover || post.media?.[0]?.cover_medium || "";
  const title = post.title || "";
  const postUrl = `https://www.digikala.com/magnet/posts/${post.id}/`;

  slide.innerHTML = `
    <a href="${postUrl}" class="swiper-slide-item-link" target="_blank">
      <div class="swiper-slide-item">
        <img src="${imageUrl}" alt="${title}" />
        <p>${title}</p>
      </div>
    </a>
  `;

  return slide;
}

function initStorySwiper() {
  storySwiper = new Swiper(".myStory", {
    slidesPerView: 12.4,
    spaceBetween: 0,
    loop: true,
    navigation: {
      nextEl: ".story-next",
      prevEl: ".story-prev",
    },
    breakpoints: {
      0: { slidesPerView: 4, spaceBetween: 5 },
      640: { slidesPerView: 6, spaceBetween: 5 },
      768: { slidesPerView: 8, spaceBetween: 5 },
      1024: { slidesPerView: 10, spaceBetween: 5 },
      1280: { slidesPerView: 12.4, spaceBetween: 0 },
    },
  });
  window.myStory = storySwiper;
}
// #endregion
