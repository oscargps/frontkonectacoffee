import React from "react";
import { DataGrid } from "@material-ui/data-grid";

export default function DataTable(props) {
	return (
		<div style={{ height: 400, width: "100%" }}>
			<DataGrid
				rows={props.rows}
				columns={props.columns}
				pageSize={10}
				disableSelectionOnClick
				checkboxSelection
				onCellEditCommit={(e) => {
					console.log(e);
				}}
				onSelectionModelChange={(e) => props.productsSelected(e)}
			/>
		</div>
	);
}
