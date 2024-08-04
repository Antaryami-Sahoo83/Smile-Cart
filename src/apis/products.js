import axios from "axios";

const show = () =>
  axios.get(
    "https://smile-cart-backend-staging.neetodeployapp.com/products/infinix-inbook-2"
  );

const fetch = () => axios.get("products");

const productsApi = { show, fetch };
export default productsApi;
