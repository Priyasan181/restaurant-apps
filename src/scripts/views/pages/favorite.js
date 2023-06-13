import FavoriteRestaurantIdb from '../../data/favorite-Restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <section class="content">
    <div class="restaurant">
      <h1 class="restaurant_label">Favorite Restaurant</h1>
      <div class="posts" id="tes">
      </div>
    </div>
  </section>
      `;
  },

  async afterRender() {
    const Restaurant = await FavoriteRestaurantIdb.getAllRestaurant();
    console.log(Restaurant);

    const RestaurantContainer = document.querySelector('#tes');
    if (Restaurant.length) {
      Restaurant.forEach((Restaurants) => {
        RestaurantContainer.innerHTML += createRestaurantItemTemplate(Restaurants);
      });
    } else {
      RestaurantContainer.innerHTML = `<div">Tidak ada restaurant untuk ditampilkan</div>
    `;
    // Fungsi ini akan dipanggil setelah render()
    }
  },
};

export default Favorite;
