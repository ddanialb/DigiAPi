// #region Widget Products Loader
class WidgetManager {
  constructor() {
    this.apiUrl = './api/recommendation.json';
    this.baseUrl = 'https://www.digikala.com';
  }

  async init() {
    await this.loadWidgets();
  }

  async loadWidgets() {
    try {
      const response = await fetch(this.apiUrl);
      const data = await response.json();

      if (data.status === 200 && data.data.categories) {
        const categories = data.data.categories;
        this.renderWidget('widget-1-container', categories.slice(0, 4));
        this.renderWidget('widget-2-container', categories.slice(4, 8));
      }
    } catch (error) {
      console.error('Error loading widgets:', error);
    }
  }

  renderWidget(containerId, categories) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    
    categories.forEach((category, index) => {
      const widgetItem = this.createWidgetItem(category, index === categories.length - 1);
      container.appendChild(widgetItem);
    });
  }

  createWidgetItem(category, isLast) {
    const div = document.createElement('div');
    div.className = isLast ? 'widget-center-item' : 'widget-center-item border-left';

    const products = category.products || [];
    const categoryUrl = `${this.baseUrl}${category.url?.uri || ''}`;

    div.innerHTML = `
      <div class="widget-center-item-top">
        <h2>${category.title}</h2>
        <p>${category.description}</p>
      </div>
      <div class="widget-center-item-center">
        <div class="widget-center-item-center-top">
          <div class="border-left">
            <a href="${this.getProductUrl(products[0])}" class="widget-center-item-link" target="_blank">
              <img src="${this.getProductImage(products[0])}" alt="${products[0]?.title_fa || ''}" />
            </a>
          </div>
          <div>
            <a href="${this.getProductUrl(products[1])}" class="widget-center-item-link" target="_blank">
              <img src="${this.getProductImage(products[1])}" alt="${products[1]?.title_fa || ''}" />
            </a>
          </div>
        </div>
        <div class="widget-center-item-center-bottom">
          <div class="border-top border-left">
            <a href="${this.getProductUrl(products[2])}" class="widget-center-item-link" target="_blank">
              <img src="${this.getProductImage(products[2])}" alt="${products[2]?.title_fa || ''}" />
            </a>
          </div>
          <div class="border-top">
            <a href="${this.getProductUrl(products[3])}" class="widget-center-item-link" target="_blank">
              <img src="${this.getProductImage(products[3])}" alt="${products[3]?.title_fa || ''}" />
            </a>
          </div>
        </div>
      </div>
      <div class="widget-center-item-bottom">
        <a href="${categoryUrl}" class="widget-center-item-bottom-link" target="_blank">مشاهده</a>
      </div>
    `;

    return div;
  }

  getProductUrl(product) {
    if (!product || !product.url) return '#';
    return `${this.baseUrl}${product.url.uri}`;
  }

  getProductImage(product) {
    if (!product || !product.images || !product.images.main) return '';
    return product.images.main.webp_url?.[0] || product.images.main.url?.[0] || '';
  }
}

export function initWidgets() {
  const widgetManager = new WidgetManager();
  widgetManager.init();
}
// #endregion
