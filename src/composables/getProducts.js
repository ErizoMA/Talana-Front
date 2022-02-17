import { ref, computed } from "vue";
import endpoints from "../api/endpoints";
const getProducts = (props) => {
  const products = ref([]);
  const loading = ref(true);
  const error = ref(false);
  const fetchProducts = async () => {
    loading.value = true;
    error.value = false;
    try {
      const response = await fetch(endpoints.products);
      if (!response.ok) throw Error("Can not get data from this URL");
      const data = await response.json();
      products.value = data;
    } catch (err) {
      error.value = true;
      console.error(err.message);
    }
    loading.value = false;
  };

  const matchCategory = computed(() => {
    return products.value.filter(
      (product) => product.category.name === props.name
    );
  });
  return {
    products,
    loading,
    error,
    fetchProducts,
    matchCategory,
  };
};

export default getProducts;
