import API_ENDPOINT from '../global/api-endpoint';

class RestaurantSource {
  static async getListRestaurant() {
    const response = await fetch(API_ENDPOINT.GET_LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async getDetailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.GET_DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async getSearchRestaurant(query) {
    const response = await fetch(API_ENDPOINT.GET_SEARCH(query));
    const responseJson = await response.json();
    return responseJson;
  }

  static async addReviewRestaurant({ name, review }) {
    const response = await fetch(API_ENDPOINT.ADD_REVIEW, {
      method: 'POST',
      headers: 'Content-Type: application/json',
      body: JSON.stringify({
        id: String(+new Date()),
        name,
        review,
      }),
    });
    const responseJson = await response.json();
    return responseJson;
  }
}

export default RestaurantSource;
