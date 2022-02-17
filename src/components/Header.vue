<template>
  <Cart v-if="cartDisplay" />

  <header class="header">
    <div class="header__logo">
      <img alt="Talana Logo" src="../assets/talana-logo.svg" />
    </div>
    <div class="header__search">
      <input
        type="text"
        placeholder="Buscador de Producto y Categorias"
        class="header__input"
      />
      <img
        src="../assets/bag-cart.svg"
        alt="Cart"
        class="header__cart"
        @click="showCart"
      />
    </div>
  </header>
</template>

<script>
import { ref } from "vue";

import Cart from "./Cart.vue";

export default {
  components: { Cart },

  setup() {
    const query = ref("");
    const cartDisplay = ref(false);
    const showCart = () => {
      cartDisplay.value = !cartDisplay.value;
    };

    return { showCart, cartDisplay, query };
  },
};
</script>

<style scoped>
@import url("../styles/Header.css");
</style>
