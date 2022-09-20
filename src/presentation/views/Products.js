import React, { useState } from "react";
import DataTable from "../components/Table";
import Modal from "../components/Modal";
import Button from "@material-ui/core/Button";
import ProductoForm from "../components/Form";
import * as Yup from "yup";
import Swal from "sweetalert2";

const Products = (props) => {
	const { products } = props;
	const [modal, setModal] = useState(false);
	const [productsSelected, setProductsSelected] = useState(false);

	const handleClose = () => {
		setModal(false);
	};

	const initialStateProduct = {
		id: "",
		product_name: "",
		product_reference: "",
		product_price: "",
		product_weigth: "",
		product_category: "",
		product_stock: "",
		product_created_at: ""
	};

	const fields = [
		{
			field: "product_name",
			label: "Nombre Producto",
			type: "TextField"
		},
		{
			field: "product_reference",
			label: "Referencia",
			type: "TextField"
		},
		{
			field: "product_price",
			label: "Precio",
			type: "TextField"
		},
		{
			field: "product_weigth",
			label: "Peso",
			type: "TextField"
		},
		{
			field: "product_category",
			label: "Categoria Producto",
			type: "TextField"
		},
		{
			field: "product_stock",
			label: "Stock",
			type: "TextField"
		}
	];

	const columns = [
		{ field: "id", headerName: "ID", width: 90 },
		{
			field: "product_name",
			headerName: "Nombre",
			width: 150,
			editable: true
		},
		{
			field: "product_reference",
			headerName: "Referencia",
			width: 150,
			editable: true
		},
		{
			field: "product_price",
			headerName: "Precio",
			width: 150,
			editable: true
		},
		{
			field: "product_weigth",
			headerName: "Peso",
			width: 150,
			editable: true
		},
		{
			field: "product_category",
			headerName: "Categoria",
			width: 150,
			editable: true
		},
		{
			field: "product_stock",
			headerName: "Stock",
			type: "number",
			width: 150,
			editable: true
		},
		{
			field: "product_created_at ",
			headerName: "Creado",
			width: 150
		}
	];

	const validations = Yup.object().shape({
		product_name: Yup.string().required("Required"),
		product_reference: Yup.string().required("Required"),
		product_price: Yup.number().positive().integer().required("Required"),
		product_weigth: Yup.number().positive().integer().required("Required"),
		product_category: Yup.string().required("Required"),
		product_stock: Yup.number().positive().integer().required("Required")
	});

	const deleteProducts = () => {
		Swal.fire({
			title: "¿Desea Eliminar los productos seleccionados?",
			showCancelButton: true,
			confirmButtonText: "Eliminar",
		}).then((result) => {
			/* Read more about isConfirmed, isDenied below */
			if (result.isConfirmed) {
				Swal.fire("Eliminados!", "", "success");
			}
		});
	};

	return (
		<>
			<Modal open={modal} handleClose={handleClose}>
				<>
					<ProductoForm
						initialState={initialStateProduct}
						fields={fields}
						title={"Crear Producto"}
						validations={validations}
					/>
				</>
			</Modal>
			<div>
				<Button
					style={{ margin: "1em" }}
					variant="contained"
					color="primary"
					size={"medium"}
					onClick={() => setModal(true)}
				>
					Crear Producto
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
			</div>
			<DataTable
				rows={products}
				columns={columns}
				productsSelected={setProductsSelected}
			/>
		</>
	);
};

export default Products;
