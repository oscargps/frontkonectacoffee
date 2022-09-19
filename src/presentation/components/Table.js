import React from "react";
import { DataGrid } from "@material-ui/data-grid";

const columns = [
	{ field: "id", headerName: "ID", width: 90 },
	{
		field: "product_name ",
		headerName: "Nombre",
		width: 150
	},
	{
		field: "product_reference ",
		headerName: "Referencia",
		width: 150
	},
	{
		field: "product_price  ",
		headerName: "Precio",
		width: 150
	},
	{
		field: "product_weigth ",
		headerName: "Peso",
		width: 150
	},
	{
		field: "product_category ",
		headerName: "Categoria",
		width: 150
	},
	{
		field: "product_stock",
		headerName: "Stock",
		type: "number",
		width: 150
	},
	{
		field: "product_created_at ",
		headerName: "Creado",
		width: 150
	}
];



export default function DataTable(props) {
	return (
		<div style={{ height: 400, width: "100%" }}>
			<DataGrid
				rows={props.products}
				columns={columns}
				pageSize={5}
				checkboxSelection
				disableSelectionOnClick
			/>
		</div>
	);
}
