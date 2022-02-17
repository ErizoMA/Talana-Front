<template>
  <div class="categories">
    <h1 class="title">Categories</h1>
    <p v-if="error">Something went wrong ...</p>
    <div v-if="!loading" id="nav">
      <div v-for="category in categories" :key="category.id">
        <router-link
          :to="{
            name: 'Category',
            params: { name: category.name },
          }"
          >{{ category.name }}</router-link
        >
      </div>
    </div>
    <div v-else>Loading</div>
  </div>
</template>

<script>
import getCategories from "../composables/getCategories";

export default {
  setup() {
    const { categories, loading, error, fetchCategories } = getCategories();
    fetchCategories();
    return { categories, loading, error };
  },
};
</script>

<style scoped>
@import url("../styles/Categories.css");
</style>
