import axios from "axios";

export const createProduct = async (product) => {
	return axios.post("http://localhost:8000/api/products", product);
};
export const deleteProducts = async (products) => {
	return axios.post("http://localhost:8000/api/products/delete", {products : products});
};
export const updateProduct = async (product) => {
	return axios.put(`http://localhost:8000/api/products/${product.id}`, product);
};

export const getProducts = async () => {
	return axios.get("http://localhost:8000/api/products");
};
