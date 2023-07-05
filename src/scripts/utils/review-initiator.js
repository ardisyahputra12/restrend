/* eslint-disable no-param-reassign */
import RestaurantSource from '../data/restaurant-source';

const ReviewInitiator = {
  init({
    form, id, name, review,
  }) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = {
        id: id.value,
        name: name.value,
        review: review.value,
      };
      this._addReview(data);
      location.reload();
    });
  },

  async _addReview(data) {
    const response = await RestaurantSource.addReview(data);
    // eslint-disable-next-line no-alert
    alert(response.message);
  },
};

export default ReviewInitiator;
