import React, { useState } from "react";
import DataTable from "../components/Table";
import Modal from "../components/Modal";
import Button from "@material-ui/core/Button";
import ProductoForm from "../components/Form";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { createProduct, updateProduct,deleteProducts } from "../../services/products";

const Products = (props) => {
	const { products,updateData } = props;
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
			field: "created_at",
			headerName: "Creado",
			width: 200
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

	const deleteProd = () => {
		Swal.fire({
			title: "¿Desea Eliminar los productos seleccionados?",
			showCancelButton: true,
			confirmButtonText: "Eliminar"
		}).then(async (result) => {
			/* Read more about isConfirmed, isDenied below */
			if (result.isConfirmed) {
				let res = await deleteProducts(productsSelected)
				if(res.status == 200){
					Swal.fire("Eliminados!", "", "success");
					updateData()
				}
			}
		});
	};
	const createProd = async (product) => {
		let res = await createProduct(product);
		if (res.status == 201) {
			Swal.fire("Producto añadido!", "", "success");
			setModal(false)
			updateData()
		} else {
			Swal.fire("Error Creando Producto!", "", "error");
		}
	};

	const updateProd = async (product) => {
		console.log(product);
		let res = await updateProduct({
			...product.row,
			[product.field]: product.value
		});
		if (res.status == 200) {
			Swal.fire("Producto Modificado!", "", "success");
			updateData()
		} else {
			Swal.fire("Error Modificando Producto!", "", "error");
		}
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
						createProduct={createProd}
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
						onClick={deleteProd}
					>
						Eliminar Productos
					</Button>
				)}
			</div>
			<DataTable
				rows={products}
				columns={columns}
				productsSelected={setProductsSelected}
				updateProduct={updateProd}
			/>
		</>
	);
};

export default Products;
