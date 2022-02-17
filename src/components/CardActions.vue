<template>
  <div class="amount">
    <span @click="addLess">-</span>
    <p>{{ amount }}</p>
    <span @click="addMore">+</span>
  </div>
  <img
    src="../assets/cart.svg"
    alt="cart"
    class="card__cart"
    @click="addToCart"
  />
</template>

<script>
import { ref } from "vue";
import cart from "../store/cart";

export default {
  props: ["product"],
  setup(props) {
    const amount = ref(1);
    const addMore = () => {
      amount.value += 1;
    };
    const addLess = () => {
      if (amount.value === 1) return;
      amount.value -= 1;
    };
    const addToCart = () => {
      const index = cart.findIndex(
        (product) => product.id === props.product.id
      );
      if (index < 0) {
        cart.push({ ...props.product, counter: amount.value });
      } else {
        cart[index].counter += amount.value;
      }
    };

    return { amount, addMore, addLess, addToCart };
  },
};
</script>

<style scoped>
@import url("../styles/CardActions.css");
</style>
