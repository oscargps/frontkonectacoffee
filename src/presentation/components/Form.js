import React from "react";
import {
	Grid,
	makeStyles,
	Card,
	CardContent,
	CardActions,
	Button,
	CardHeader,
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



const ProductoForm = (props) => {
	const { initialState, fields, title, validations } = props;
	const classes = useStyle();

	const onSubmit = (values) => {
		console.log(values);
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
											{fields.map((field, key) => {
												return (
													<Grid key={key} item xs={12}>
														<Field
															label={field.label}
															variant="outlined"
															fullWidth
															name={field.field}
															value={values[field.field]}
															component={TextField}
														/>
													</Grid>
												);
											})}
										</Grid>
									</CardContent>
									<CardActions>
										<Button
											disabled={!dirty || !isValid}
											variant="contained"
											color="primary"
											type="Submit"
											className={classes.button}
										>
											Crear
										</Button>
									</CardActions>
								</Form>
							);
						}}
					</Formik>
				</Card>
			</Grid>
		</Grid>
	);
};

export default ProductoForm;
