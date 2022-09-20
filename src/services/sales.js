import axios from "axios";

export const createSales = async (sale) => {
	return axios.post("http://localhost:8000/api/sales", sale);
};

