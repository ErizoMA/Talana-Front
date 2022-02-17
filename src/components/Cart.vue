<template>
  <div class="cart">
    <h1 class="cart__title">Shopping Resume</h1>
    <div v-for="item in itemsFiltered" :key="item">
      <div class="cart__item">
        <div class="details">
          <p>{{ item.name }}</p>
          <p>Price: S/.{{ item.price }}</p>
        </div>
        <div class="card__amount">
          <span @click="subtractOne(item)">-</span>
          <p>{{ item.counter }}</p>
          <span @click="addOne(item)">+</span>
        </div>
        <div class="sub-total">
          Sub-total: $ {{ item.price * item.counter }}
        </div>
      </div>
    </div>
    <h2>Total = $ {{ total }}</h2>
  </div>
</template>

<script>
import cartActions from "../composables/cartActions";
export default {
  setup() {
    const { addOne, subtractOne, itemsFiltered, total } = cartActions();
    return { total, addOne, subtractOne, itemsFiltered };
  },
};
</script>

<style scoped>
@import url("../styles/Cart.css");
</style>
