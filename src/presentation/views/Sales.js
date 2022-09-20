import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import SaleForm from "../components/SaleForm";
import DataTable from "../components/Table";
import * as Yup from "yup";
import Swal from "sweetalert2";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1)
		}
	}
}));
const Sales = (props) => {
	const { products } = props;
	const [adding, setAdding] = useState(false);
	const [cart, setCart] = useState([]);
	const [productsSelected, setProductsSelected] = useState(false);

	const columns = [
		{ field: "product", headerName: "Producto", width: 300 },
		{ field: "qty", headerName: "Cantidad", width: 300 },
		{
			field: "total",
			headerName: "Total",
			width: 300,
			valueGetter: (params) =>
				`$ ${
					params.getValue(params.id, "qty") *
					params.getValue(params.id, "price")
				}`
		}
	];
	const initialStateSale = {
		product: "",
		qty: 0
	};

	const validations = Yup.object().shape({
		qty: Yup.number().positive().integer().required("Required")
	});

	const addCart = (data) => {
		setAdding(true);
		if (data.qty > data.product_stock) {
			Swal.fire(
				"No hay Stock diponible",
				"Verifica de nuevo la cantidad",
				"error"
			);
		} else {
			let newCart = [data, ...cart];
			setCart(newCart);
		}
		const myTimeout = setTimeout(() => setAdding(false), 500);
	};

	const getCart = (items) => {
		return items.map((item) => ({
			id: item.id,
			product: item.product_name,
			price: item.product_price,
			qty: item.qty
		}));
	};

	const getTotal = (items) => {
		let totales = items.map((item) => {
			return item.product_price * item.qty;
		});
		return totales.reduce((part, a) => part + a);
	};
	const deleteProducts = () => {
		Swal.fire({
			title: "¿Desea Eliminar los productos seleccionados?",
			showCancelButton: true,
			confirmButtonText: "Eliminar"
		}).then((result) => {
			/* Read more about isConfirmed, isDenied below */
			if (result.isConfirmed) {
				productsSelected.forEach((item) => {
					setCart(cart.filter((it) => it.id != item));
				});
				Swal.fire("Eliminados!", "", "success");
			}
		});
	};

	return (
		<>
			{!adding && (
				<SaleForm
					initialState={initialStateSale}
					products={products}
					title={"Nueva Venta"}
					addCart={addCart}
					validations={validations}
				/>
			)}
			{cart.length > 0 && (
				<>
					<Button
						style={{ margin: "1em" }}
						variant="contained"
						color="primary"
						size={"medium"}
					>
						Terminar Venta ${getTotal(cart)}
					</Button>
					{productsSelected.length > 0 && (
						<Button
							style={{ margin: "1em" }}
							variant="contained"
							color="primary"
							size={"medium"}
							onClick={deleteProducts}
						>
							Eliminar Productos
						</Button>
					)}
					<DataTable
						rows={getCart(cart)}
						columns={columns}
						productsSelected={setProductsSelected}
					/>
				</>
			)}
		</>
	);
};

export default Sales;
