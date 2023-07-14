import API_ENDPOINT from '../../global/api-endpoint';

const createCatalogItemTemplate = ({
  id, name, description, pictureId, city, rating,
}) => `
  <article class="restaurant-item">
    <div class="restaurant-item__header">
      <h3 class="restaurant-item__header__title" tabindex="0">Kota. ${city}</h3>
      <picture>
        <source srcset="${API_ENDPOINT.IMAGE_SMALL(pictureId)}" media="(max-width: 600px)">
        <img
          class="restaurant-item__header__image lazyload"
          data-src="${API_ENDPOINT.IMAGE_LARGE(pictureId)}"
          alt="${name} in ${city}"
          tabindex="0"
        >
      </picture>
    </div>
    <div class="restaurant-item__body">
      <h2><a class="restaurant-item__body__title" href="/#/detail/${id}">${name}</a></h2>
      <h3 class="restaurant-item__body__subtitle" tabindex="0">Rating: ${rating}</h3>
      <p class="text-content" tabindex="0">${description.substring(0, 250)}...</p>
    </div>
  </article>
`;

const createCatalogDetailTemplate = ({
  id, name, description, city, address, pictureId, rating,
}) => `
  <article class="restaurant-detail">
    <div class="restaurant-detail__header">
      <h2 tabindex="0">${name}</h2>
      <p class="text-content" tabindex="0">Rating: ${rating}</p>
      <p class="text-content" tabindex="0">${address}, ${city}</p>
      <picture>
        <source srcset="${API_ENDPOINT.IMAGE_SMALL(pictureId)}" media="(max-width: 600px)">
        <img
          class="restaurant-detail__header__image lazyload"
          data-src="${API_ENDPOINT.IMAGE_LARGE(pictureId)}"
          alt="${name} in ${city}"
          tabindex="0"
        >
      </picture>
    </div>
    <div class="restaurant-detail__categori">
      <h3 tabindex="0">Categori</h3>
      <div class="restaurant-detail__categori__content"></div>
    </div>
    <div class="restaurant-detail__overview">
      <h3 tabindex="0">Overview</h3>
      <p class="restaurant-detail__overview__content text-content" tabindex="0">${description}</p>
    </div>
    <div class="restaurant-detail__menu">
      <h3 tabindex="0">Menu</h3>
      <div class="restaurant-detail__container">
        <div class="restaurant-detail__container-menu">
          <h4 tabindex="0">Food</h4>
          <ol class="restaurant-detail__menu__food"></ol>
        </div>
        <div class="restaurant-detail__container-menu">
          <h4 tabindex="0">Drink</h4>
          <ol class="restaurant-detail__menu__drink"></ol>
        </div>
      </div>
    </div>
    <div class="restaurant-detail__review">
      <h3 tabindex="0">Review</h3>
      <div class="restaurant-detail__review__content"></div>
      <form class="restaurant-detail__review__form">
        <input class="restaurant-detail__review__form__id" disabled hidden value="${id}">
        <input type="text" class="restaurant-detail__review__form__name text-content" placeholder="Your name..." required>
        <textarea rows="6" class="restaurant-detail__review__form__content text-content" placeholder="Type review..." required></textarea>
        <button type="submit" class="restaurant-detail__review__form__button text-content" aria-label="submit new review">Send</button>
      </form>
    </div>
  </article>
`;

const createDetailCategoryTemplate = (name) => `
  <p class="restaurant-detail__categori__content__item text-content" tabindex="0">${name}</p>
`;

const createDetailMenuTemplate = (name) => `
  <li class="text-content" tabindex="0">${name}</li>
`;

const createDetailReviewTemplate = ({ name, review, date }) => `
  <div class="restaurant-detail__review__item">
    <h4 tabindex="0">${name}</h4>
    <p class="text-content" tabindex="0">${review}</p>
    <p class="restaurant-detail__review__item__date text-content">
      <time tabindex="0">${date}</time>
    </p>
  </div>
`;

const createFavoriteButtonTemplate = () => `
  <button aria-label="favorite this restaurant" id="favorite-button" class="favorite">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createFavoritedButtonTemplate = () => `
  <button aria-label="unfavorite this restaurant" id="favorite-button" class="favorite">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createContentEmptyTemplate = () => `
  <div class="content-empty">
    <video class="content-empty__gif" aria-label="data is empty" autoplay loop muted playsinline>
      <source src="./images/empty-animation.webm" type="video/webm">
      <source src="./images/empty-animation.mp4" type="video/mp4">
    </video>
    <p class="content-empty__text text-content" tabindex="0">Favorite is empty! <br> Mark your favorite restaurant.</p>
  </div>
`;

const createContentFailedTemplate = () => `
  <div class="content-empty">
    <video class="content-empty__gif" aria-label="data is empty" autoplay loop muted playsinline>
      <source src="./images/failed-animation.webm" type="video/webm">
      <source src="./images/failed-animation.mp4" type="video/mp4">
    </video>
    <p class="content-empty__text text-content" tabindex="0">Something wrong. Failed to get data!</p>
  </div>
`;

export {
  createCatalogItemTemplate,
  createCatalogDetailTemplate,
  createDetailCategoryTemplate,
  createDetailMenuTemplate,
  createDetailReviewTemplate,
  createFavoriteButtonTemplate,
  createFavoritedButtonTemplate,
  createContentEmptyTemplate,
  createContentFailedTemplate,
};
