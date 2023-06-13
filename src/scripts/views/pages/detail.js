import RestaurantDbSource from '../../data/Restaurantdb-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import {
  createLikeButtonTemplate,
  createRestaurantDetailTemplate,
} from '../templates/template-creator';

const Detail = {
  async render() {
    return `
    <section class="content">
    <div class="restaurant">
      <h1 class="restaurant_label">Detail Restaurant</h1>
      <div class="pos">
      </div>
      <div id="likeButtonContainer"></div>
    </div>
  </section>
  
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const Restaurant = await RestaurantDbSource.detailRestaurant(url.id);
    const RestaurantContainer = document.querySelector('.pos');
    const likeButtonContainer = document.querySelector('#likeButtonContainer');
    likeButtonContainer.innerHTML = createLikeButtonTemplate();
    RestaurantContainer.innerHTML = createRestaurantDetailTemplate(Restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      Restaurant: {
        id: Restaurant.id,
        name: Restaurant.name,
        description: Restaurant.description,
        pictureId: Restaurant.pictureId,
        rating: Restaurant.rating,
        city: Restaurant.city,
      },
    });
  },
};

export default Detail;
