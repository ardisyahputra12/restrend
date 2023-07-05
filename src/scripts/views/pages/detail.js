import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import ReviewInitiator from '../../utils/review-initiator';
import {
  createCatalogDetailTemplate,
  createDetailCategoryTemplate,
  createDetailMenuTemplate,
  createDetailReviewTemplate,
} from '../templates/template-creator';

class Detail extends HTMLElement {
  connectedCallback() {
    this.render();
    this._insertData();
    this._insertDataCategory();
    this._insertDataMenuFood();
    this._insertDataMenuDrink();
    this._insertDataReview();
  }

  render() {
    this.innerHTML = `
      <div class="container-detail-restaurant"></div>
    `;
  }

  async _insertData() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.getDetail(url.id);
    const containerDetailRestaurant = this.querySelector('.container-detail-restaurant');
    containerDetailRestaurant.innerHTML += createCatalogDetailTemplate(restaurant);
    this._handleAddReview();
  }

  async _insertDataCategory() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.getDetail(url.id);
    const restaurantDetailCategoriContent = this.querySelector('.restaurant-detail__categori__content');
    restaurant.categories.forEach((category) => {
      restaurantDetailCategoriContent.innerHTML += createDetailCategoryTemplate(category.name);
    });
  }

  async _insertDataMenuFood() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.getDetail(url.id);
    const restaurantDetailMenuFood = this.querySelector('.restaurant-detail__menu__food');
    restaurant.menus.foods.forEach((food) => {
      restaurantDetailMenuFood.innerHTML += createDetailMenuTemplate(food.name);
    });
  }

  async _insertDataMenuDrink() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.getDetail(url.id);
    const restaurantDetailMenuDrink = this.querySelector('.restaurant-detail__menu__drink');
    restaurant.menus.drinks.forEach((drink) => {
      restaurantDetailMenuDrink.innerHTML += createDetailMenuTemplate(drink.name);
    });
  }

  async _insertDataReview() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.getDetail(url.id);
    const restaurantDetailReviewContent = this.querySelector('.restaurant-detail__review__content');
    restaurant.customerReviews.forEach((review) => {
      restaurantDetailReviewContent.innerHTML += createDetailReviewTemplate(review);
    });
  }

  _handleAddReview() {
    ReviewInitiator.init({
      form: this.querySelector('.restaurant-detail__review__form'),
      id: this.querySelector('.restaurant-detail__review__form__id'),
      name: this.querySelector('.restaurant-detail__review__form__name'),
      review: this.querySelector('.restaurant-detail__review__form__content'),
    });
  }
}

customElements.define('detail-page', Detail);
const detail = '<detail-page></detail-page>';
export default detail;
