app.component("product-display", {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  template:
    /*html*/
    `<div class="product-display">
        <div class="product-container">
            <div class="product-image">
                <img
                :src="[ inStock ? image : 'assets/images/out.png' ]"
                alt="black"
                />
                <a :href="url">dolbaebki</a>
            </div>
            <div class="product-info">
              <h1>{{ title }}</h1>
              <p v-if="inventory > 10">In stock</p>
              <p v-else-if="inventory <= 10 && inventory > 0">Poshel ty</p>
              <p v-else>Out of stock</p>
              <p>Shipping {{ shipping }}</p>
              <product-details :arr="details"></product-details>
              <ul>
                  <li
                  v-for="(variant, index) in variants"
                  :key="variant.id"
                  @mouseover="updateVariant(index)"
                  class="color-circle"
                  :style="{ backgroundColor: variant.color }"
                  >
                      {{ }}
                  </li>
              </ul>
              <button
                  class="button"
                  :class="{ disabledButton: !inStock}"
                  v-on:click="addToCart()"
                  :disabled="!inStock"
              >
                  Add to Cart
              </button>
              <button
                  class="button"
                  :class="{ disabledButton: !inStock}"
                  v-on:click="clearCart()"
              >
                  Clear Cart
              </button>
              
            </div>
        </div>
        <review-list v-if="reviews.length" :reviews="reviews"></review-list>
        <review-form @review-submitted="addReview"></review-form>
        
      </div>`,
  data() {
    return {
      product: "Socks",
      brand: "Vue Mastery",
      desc: "Best socks",
      selected: 0,
      url: "https://www.hltv.org/",
      inventory: 100,
      details: ["50% cotton", "30% wool", "20% polyester"],

      variants: [
        {
          id: 123,
          color: "black",
          image: "./assets/images/IMG_3626.jpg",
          quantity: 50,
        },
        {
          id: 345,
          color: "green",
          image: "./assets/images/IMG_36262.jpg",
          quantity: 0,
        },
      ],
      reviews: []
    };
  },
  methods: {
    addToCart() {
      this.$emit("add-to-cart", this.variants[this.selected].id);
    },
    updateVariant(variant) {
      this.selected = variant;
    },
    clearCart() {
      this.$emit("clear-cart");
    },
    addReview(review){
      this.reviews.push(review)
    }
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selected].image;
    },
    inStock() {
      return this.variants[this.selected].quantity;
    },
    shipping() {
      if (this.premium) {
        return "Free";
      }
      return "5$";
    },
  },
});
