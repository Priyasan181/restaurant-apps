import RestaurantDbSource from '../../data/Restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <section class="content">
    <div class="restaurant">
      <h1 class="restaurant_label">Explore Restaurant</h1>
      <div class="posts" id="tes">
      </div>
    </div>
  </section>
      `;
  },

  async afterRender() {
    const Restaurant = await RestaurantDbSource.listRestaurant();
    console.log(Restaurant);

    const RestaurantContainer = document.querySelector('#tes');
    Restaurant.forEach((Restaurants) => {
      RestaurantContainer.innerHTML
        += createRestaurantItemTemplate(Restaurants);
    });
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Home;
