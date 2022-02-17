import { computed, ref } from "vue";
import cart from "../store/cart";

const cartActions = () => {
  const items = ref(cart);
  const addOne = (item) => {
    item.counter += 1;
  };
  const subtractOne = (item) => {
    if (item.counter === 0) return;
    item.counter -= 1;
  };

  const itemsFiltered = computed(() => {
    return items.value.filter((e) => e.counter !== 0);
  });
  const total = computed(() => {
    return items.value
      .map((product) => product.counter * product.price)
      .reduce((a, b) => a + b, 0);
  });

  return {
    items,
    addOne,
    subtractOne,
    itemsFiltered,
    total,
  };
};

export default cartActions;
