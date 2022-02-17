import { ref } from "vue";
import endpoints from "../api/endpoints";

const getCategories = () => {
  const categories = ref([]);
  const loading = ref(true);
  const error = ref(false);
  const fetchCategories = async () => {
    loading.value = true;
    error.value = false;
    try {
      const response = await fetch(endpoints.categories);
      if (!response.ok) throw Error("Can not get data from this URL");
      const data = await response.json();
      categories.value = data;
    } catch (err) {
      error.value = true;
      console.error(err.message);
    }
    loading.value = false;
  };
  return {
    categories,
    loading,
    error,
    fetchCategories,
  };
};
export default getCategories;
