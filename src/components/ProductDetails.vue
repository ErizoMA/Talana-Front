<template>
  <div class="backdrop">
    <div v-if="product" class="product">
      <div class="product__header">
        <h2>Producto Agregado</h2>
        <p @click="toggle">X</p>
      </div>
      <div class="information">
        <div class="information__principal">
          <img :src="product.photo" alt="" />
          <div>
            <p>Nombre : {{ product.name }}</p>
            <p>Codigo : {{ product.code }}</p>
            <p>Stock : {{ product.stock }}</p>
            <p>Precio : $ {{ product.price }}</p>
          </div>
        </div>
        <div class="information__secondary">
          <p>
            Descripcion: <span>{{ product.description }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product", "toggle"],
  setup() {},
};
</script>

<style scoped>
@import url("../styles/ProductDetails.css");
</style>
