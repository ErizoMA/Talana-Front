<template>
  <div v-if="product" class="card">
    <div class="card__img" @click="toggleInfo">
      <img :src="product.photo" alt="card image" />
      <div v-if="product.stock > 0" class="stock">Disponible</div>
    </div>
    <div class="info">
      <div class="card__information">
        <h3 class="card__info">{{ shortName }}</h3>
        <p class="card__info">Precio: $ {{ product.price }}</p>
      </div>

      <div class="card__action">
        <CardActions :product="product" />
      </div>
    </div>
    <ProductDetails v-if="info" :product="product" :toggle="toggleInfo" />
  </div>
  <div v-else>Loading</div>
</template>

<script>
import { computed, ref } from "vue";
import CardActions from "./CardActions.vue";

import ProductDetails from "./ProductDetails.vue";

export default {
  props: ["product"],
  components: { ProductDetails, CardActions },
  setup(props) {
    const info = ref(false);
    const toggleInfo = () => {
      info.value = !info.value;
    };
    const shortName = computed(() => {
      if (props.product.name.length >= 30)
        return props.product.name.slice(0, 30) + " ...";
      return props.product.name;
    });

    return { shortName, toggleInfo, info };
  },
};
</script>

<style scoped>
@import url("../styles/ProductCard.css");
</style>
