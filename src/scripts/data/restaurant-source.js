import API_ENDPOINT from '../global/api-endpoint';

class RestaurantSource {
  static async getList() {
    const response = await fetch(API_ENDPOINT.GET_LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async getDetail(id) {
    const response = await fetch(API_ENDPOINT.GET_DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async getSearch(query) {
    const response = await fetch(API_ENDPOINT.GET_SEARCH(query));
    const responseJson = await response.json();
    return responseJson;
  }

  static async addReview({ id, name, review }) {
    const response = await fetch(API_ENDPOINT.ADD_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        name,
        review,
      }),
    });
    const responseJson = await response.json();
    return responseJson;
  }
}

export default RestaurantSource;
