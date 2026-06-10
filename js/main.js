// #region Imports
import { loadFreshBanner } from './banner.js';
import { loadBanner2 } from './banner2.js';
import { loadPopularBrands } from './brand.js';
import { loadBuyCategories } from './buy.js';
import { loadGallery } from './gallery.js';
import { loadMagazinePosts } from './read.js';
import { loadSelectedProducts, loadTrendingProducts } from './selected.js';
import { loadBestSellingProducts } from './seller.js';
import { loadStories } from './story.js';
import { initWidgets } from './widget.js';
import { loadWonderfullProducts } from './wonderfull.js';
// #endregion

// #region Countdown Timer
class CountdownTimer {
  constructor(targetDate) {
    this.targetDate = new Date(targetDate).getTime();
    this.hoursElement = document.querySelector(".hours");
    this.minutesElement = document.querySelector(".minutes");
    this.secondsElement = document.querySelector(".seconds");
    this.interval = null;
    this.init();
  }

  init() {
    this.updateCountdown();
    this.interval = setInterval(() => this.updateCountdown(), 1000);
  }

  updateCountdown() {
    const now = new Date().getTime();
    const distance = this.targetDate - now;

    if (distance < 0) {
      this.hoursElement.textContent = "۰۰";
      this.minutesElement.textContent = "۰۰";
      this.secondsElement.textContent = "۰۰";
      clearInterval(this.interval);
      return;
    }

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    this.hoursElement.textContent = this.toPersianNumeral(hours.toString().padStart(2, "0"));
    this.minutesElement.textContent = this.toPersianNumeral(minutes.toString().padStart(2, "0"));
    this.secondsElement.textContent = this.toPersianNumeral(seconds.toString().padStart(2, "0"));
  }

  toPersianNumeral(str) {
    const persianNumbers = { 0: "۰", 1: "۱", 2: "۲", 3: "۳", 4: "۴", 5: "۵", 6: "۶", 7: "۷", 8: "۸", 9: "۹" };
    return str.replace(/[0-9]/g, (match) => persianNumbers[match]);
  }

  stop() {
    if (this.interval) clearInterval(this.interval);
  }

  reset(newTargetDate) {
    this.stop();
    this.targetDate = new Date(newTargetDate).getTime();
    this.init();
  }
}
// #endregion

// #region Mega Menu
function initMegaMenu() {
  const sidebarItems = document.querySelectorAll(".mega-menu-sidebar ul li");
  const contentSections = document.querySelectorAll(".mega-menu-content");

  if (sidebarItems.length > 0) {
    sidebarItems[0].classList.add("active");
    const mobileContent = document.querySelector(".mega-menu-content-mobile");
    if (mobileContent) {
      mobileContent.classList.add("active");
      mobileContent.style.display = "flex";
    }
  }

  sidebarItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      const contentType = this.getAttribute("data-content");

      sidebarItems.forEach((sidebarItem) => sidebarItem.classList.remove("active"));
      this.classList.add("active");

      contentSections.forEach((section) => {
        section.classList.remove("active");
        section.style.display = "none";
      });

      if (contentType) {
        const targetContent = document.querySelector(`.mega-menu-content-${contentType}`);
        if (targetContent) {
          targetContent.classList.add("active");
          targetContent.style.display = "flex";
        }
      }
    });
  });
}
// #endregion

// #region Slider Data Loader
async function fetchSliderData() {
  try {
    let data = await fetch("./api/Api.json");
    let res = await data.json();
    
    const sliderSection = res.data.widgets.find(item => item.type === 'full_slider');
    
    if (sliderSection && sliderSection.data) {
      const slides = sliderSection.data.map((item) => `
        <div class="swiper-slide">
          <a href="https://www.digikala.com${item.url.uri}" class="swiper-slide-link" target="_blank">
            <img src="${item.image}" alt="${item.title}" />
          </a>
        </div>
      `);
      
      document.querySelector(".mySlider .swiper-wrapper").innerHTML = slides.join("");
      
      if (window.mySlider) window.mySlider.update();
    }
  } catch (error) {
    console.log('Error loading slider:', error.message);
  }
}
// #endregion

// #region Category Manager
class CategoryManager {
  constructor() {
    this.apiUrl = './api/Api.json';
    this.container = null;
  }

  async init() {
    this.container = document.querySelector('.category-container');
    if (!this.container) return;
    await this.loadCategories();
  }

  async loadCategories() {
    try {
      const response = await fetch(this.apiUrl);
      const data = await response.json();
      
      const deepLinksWidget = data.data.widgets.find(widget => widget.type === 'deep_links');
      
      if (!deepLinksWidget || !deepLinksWidget.data) return;
      
      this.renderCategories(deepLinksWidget.data);
    } catch (error) {
      console.error('Error loading categories:', error);
    }
  }

  renderCategories(categories) {
    this.container.innerHTML = '';
    const displayCategories = categories.slice(0, 9);
    
    displayCategories.forEach(category => {
      const categoryItem = this.createCategoryItem(category);
      this.container.appendChild(categoryItem);
    });
    
    this.container.appendChild(this.createMoreButton());
  }

  createCategoryItem(category) {
    const div = document.createElement('div');
    div.className = 'category-item';
    div.setAttribute('data-cro-id', category.title);
    
    const imageUrl = category.icon.webp_url?.[0] || category.icon.url?.[0] || '';
    const url = category.url.base 
      ? `${category.url.base}${category.url.uri}` 
      : `https://www.digikala.com${category.url.uri}`;
    
    div.innerHTML = `
      <a href="${url}" class="category-item-link" target="_blank">
        <div class="category-item-image">
          <img src="${imageUrl}" width="52" height="52" alt="${category.title}" />
        </div>
        <span class="category-item-text">${category.title}</span>
      </a>
    `;
    
    return div;
  }

  createMoreButton() {
    const div = document.createElement('div');
    div.className = 'category-item-more';
    div.setAttribute('data-cro-id', 'بیشتر');
    
    div.innerHTML = `
      <a href="https://www.digikala.com" class="category-item-link" target="_blank">
        <div class="category-item-image">
          <img src="./images/svgs/more.svg" width="32" height="32" alt="بیشتر" />
        </div>
        <span class="category-item-text">بیشتر</span>
      </a>
    `;
    
    return div;
  }
}
// #endregion

// #region Initialize Everything
document.addEventListener('DOMContentLoaded', () => {
  const targetDate = new Date();
  targetDate.setHours(targetDate.getHours() + 24);
  const countdown = new CountdownTimer(targetDate);
  window.countdownTimer = countdown;
  
  initMegaMenu();
  
  const categoryManager = new CategoryManager();
  categoryManager.init();
  
  fetchSliderData();
  
  loadFreshBanner();
  loadBanner2();
  loadPopularBrands();
  loadBuyCategories();
  loadGallery();
  loadMagazinePosts();
  loadSelectedProducts();
  loadTrendingProducts();
  loadBestSellingProducts();
  loadStories();
  initWidgets();
  loadWonderfullProducts();
});
// #endregion
