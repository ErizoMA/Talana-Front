<template>
  <Header />
  <div class="main">
    <Categories />
    <router-view />
  </div>
</template>
<script>
import Header from "./components/Header.vue";
import Categories from "./components/Categories.vue";
export default {
  components: { Header, Categories },
};
</script>

<style>
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main {
  width: 100%;
  height: 100vh;
  display: flex;
}
</style>
