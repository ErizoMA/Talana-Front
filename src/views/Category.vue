<template>
  <div class="category">
    <h1 class="category__title">Categoria {{ name }}</h1>
    <h2>Home > Products > {{ name }}</h2>
    <p v-if="error">Something went wrong ...</p>
    <div v-if="!loading" class="products">
      <ProductCard
        v-for="product in matchCategory"
        :key="product.id"
        :product="product"
      />
    </div>
    <div v-else>Loading</div>
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";
import getProducts from "../composables/getProducts";

export default {
  name: "Category",
  components: { ProductCard },
  props: ["name"],
  setup(props) {
    const { products, loading, error, fetchProducts, matchCategory } =
      getProducts(props);
    fetchProducts();
    return { products, loading, error, matchCategory };
  },
};
</script>

<style scoped>
@import url("../styles/CategoryView.css");
</style>
