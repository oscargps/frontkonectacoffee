import React, { useState } from "react";
import {
	Grid,
	makeStyles,
	Card,
	CardContent,
	MenuItem,
	InputLabel,
	Select,
	Button,
	CardHeader,
	FormControl
} from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";

const useStyle = makeStyles((theme) => ({
	padding: {
		padding: theme.spacing(3)
	},
	button: {
		margin: theme.spacing(1)
	}
}));

const SaleForm = (props) => {
	const { initialState, products, title, validations, addCart } = props;
	const classes = useStyle();

	const onSubmit = (values) => {
		addCart({ ...values.product, qty: values.qty });
	};

	return (
		<Grid container justify="center" spacing={1}>
			<Grid item md={12}>
				<Card className={classes.padding}>
					<CardHeader title={title}></CardHeader>
					<Formik
						initialValues={initialState}
						validationSchema={validations}
						onSubmit={onSubmit}
					>
						{({ dirty, isValid, values, handleChange, handleBlur }) => {
							return (
								<Form>
									<CardContent>
										<Grid item container spacing={1} justify="center">
											<Grid item xs={4}>
												<FormControl fullWidth variant="outlined">
													<InputLabel id="demo-simple-select-outlined-label">
														Producto
													</InputLabel>
													<Select
														labelId="demo-simple-select-outlined-label"
														id="demo-simple-select-outlined"
														label="Productos"
														onChange={handleChange}
														onBlur={handleBlur}
														value={values.product}
														name="product"
													>
														<MenuItem>None</MenuItem>
														{products.map((item) => (
															<MenuItem key={item.value} value={item}>
																{item.product_name}
															</MenuItem>
														))}
													</Select>
												</FormControl>
											</Grid>
											<Grid item xs={3}>
												<Field
													variant="outlined"
													fullWidth
													name={"stock"}
													value={values["product"].product_stock}
													component={TextField}
													disabled
												/>
											</Grid>
											<Grid item xs={3}>
												<Field
													label={"Cantidad"}
													variant="outlined"
													fullWidth
													name={"qty"}
													value={values["qty"]}
													component={TextField}
												/>
											</Grid>
											<Button
												xs={2}
												disabled={!dirty || !isValid}
												variant="contained"
												color="primary"
												type="Submit"
												className={classes.button}
											>
												Añadir
											</Button>
										</Grid>
									</CardContent>
								</Form>
							);
						}}
					</Formik>
				</Card>
			</Grid>
		</Grid>
	);
};

export default SaleForm;
