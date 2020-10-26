<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './layouts/header.vue'
import Footer from './layouts/footer.vue'
// import mapState from 'vuex'
export default {
  name: 'app',
  components: {
    'app-footer': Footer,
    'app-header': Header,
  },
  data(){
    return {
      shopCategories: [
        {id: 1, name: 'Men', value: 'men', },
        {id: 2, name: 'Women', value: 'women',},
        {id: 3, name: 'New Arrivals', value: 'new_arrivals',},
        {id: 4, name: 'Contemporary', value: 'contemporary',},
        ],
      shopProducts: [
        { id: 34, name: 'ford mustang', market_price: 200, selling_price: 150, image: 'https://www.kimballstock.com/images/car-stock-photos/cutout-car-images.jpg', category: 1 },
        { id: 30, name: 'chevy surburban', market_price: 500, selling_price: 450, image: 'https://www.kimballstock.com/images/car-stock-photos/toyota-stock-photos.jpg', category: 2 },
        { id: 29, name: 'kia sonata', market_price: 200, selling_price: 150, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Stock_Car_V8_Brasil_2007_Peugeot_307_concept.jpg/1200px-Stock_Car_V8_Brasil_2007_Peugeot_307_concept.jpg', category: 3 },
        { id: 28, name: 'hyundai elantra', market_price: 200, selling_price: 150, image: 'https://media.istockphoto.com/photos/red-car-picture-id485492791?k=6&m=485492791&s=612x612&w=0&h=x3K3DJLqROwWbYIoMWUDCD32gtm4PnUFUw_8wj9eKKA=', category: 4 },
        { id: 20, name: 'toyota highlander', market_price: 200, selling_price: 150, image: 'http://vignette3.wikia.nocookie.net/hotwheels/images/1/11/Header_Dodge_Charger_Stock_Car_-_6515gf.jpg/revision/latest?cb=20081127184357', category: 1 },
        { id: 21, name: 'toyota crown', market_price: 200, selling_price: 150, image: 'http://vignette3.wikia.nocookie.net/hotwheels/images/1/11/Header_Dodge_Charger_Stock_Car_-_6515gf.jpg/revision/latest?cb=20081127184357', category: 2 },
        { id: 22, name: 'nissan president', market_price: 200, selling_price: 150, image: 'https://www.kimballstock.com/images/car-stock-photos/cutout-car-images.jpg', category: 3 },
        { id: 14, name: 'dodge khalifa', market_price: 200, selling_price: 150, image: 'https://www.kimballstock.com/images/car-stock-photos/cutout-car-images.jpg', category: 4 },
        { id: 54, name: 'kantaka mensah', market_price: 200, selling_price: 150, image: 'https://www.kimballstock.com/images/car-stock-photos/toyota-stock-photos.jpg', category: 1 },
        { id: 44, name: 'ford mustang', market_price: 200, selling_price: 150, image: 'https://www.kimballstock.com/images/car-stock-photos/toyota-stock-photos.jpg', category: 2 },
        { id: 50, name: 'chevy surburban', market_price: 500, selling_price: 450, image: 'https://www.kimballstock.com/images/car-stock-photos/toyota-stock-photos.jpg', category: 1 },
        { id: 9, name: 'kia sonata', market_price: 200, selling_price: 150, image: 'https://www.kimballstock.com/images/car-stock-photos/toyota-stock-photos.jpg', category: 2 },
        { id: 8, name: 'hyundai elantra', market_price: 200, selling_price: 150, image: 'https://www.kimballstock.com/images/car-stock-photos/toyota-stock-photos.jpg', category: 1 },
        { id: 2, name: 'toyota highlander', market_price: 200, selling_price: 150, image: 'https://www.kimballstock.com/images/car-stock-photos/toyota-stock-photos.jpg', category: 1 },
        { id: 1, name: 'toyota crown', market_price: 200, selling_price: 150, image: 'https://www.kimballstock.com/images/car-stock-photos/cutout-car-images.jpg', category: 2 },
        { id: 42, name: 'nissan president', market_price: 200, selling_price: 150, image: 'https://www.kimballstock.com/images/car-stock-photos/toyota-stock-photos.jpg', category: 4 },
        { id: 84, name: 'dodge khalifa', market_price: 200, selling_price: 150, image: 'https://www.kimballstock.com/images/car-stock-photos/cutout-car-images.jpg', category: 3 },
        { id: 64, name: 'kantaka mensah', market_price: 200, selling_price: 150, image: 'https://www.kimballstock.com/images/car-stock-photos/toyota-stock-photos.jpg', category: 1 },
      ]
    }
  },
  computed: {
    // ...mapState({
    //   products: 'products',
    //   categories: 'categories',
    // })
    products() {
      return this.$store.state.products.products
    },
    categories() {
      return this.$store.state.products.categories
    },
  },
  created() {
      this.$store.dispatch('setProducts', this.shopProducts)
    
      this.$store.dispatch('setCategories', this.shopCategories)
      this.$store.dispatch('loadCart')
  }
}
</script>

<style>
body {
  padding-top: 56px;
}
</style>