import React from "react";
import Sales from "../../presentation/views/Sales";
import Products from "../../presentation/views/Products";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import FastfoodIcon from '@material-ui/icons/Fastfood';
function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}
TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`
	};
}

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper
	}
}));
const Dashboard = () => {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const products = [
		{
			id:1,
			product_name :"asd",
			product_reference :"asd",
			product_price  :1000,
			product_weigth :0,
			product_category :"qweqwe",
			product_stock:1000,
			product_created_at :"",
		},
		{
			id:2,
			product_name :"asd",
			product_reference :"asd",
			product_price  :1001,
			product_weigth :0,
			product_category :"qweqwe",
			product_stock:1001,
			product_created_at :"",
		},
		{
			id:3 ,
			product_name :"asd",
			product_reference :"asd",
			product_price  :1002,
			product_weigth :0,
			product_category :"qweqwe",
			product_stock:1002,
			product_created_at :"",
		},
		{
			id:4,
			product_name :"asd",
			product_reference :"asd",
			product_price  :1003,
			product_weigth :0,
			product_category :"qweqwe",
			product_stock:1003,
			product_created_at :"",
		},
		{
			id:5,
			product_name :"asd",
			product_reference :"asd",
			product_price  :1004,
			product_weigth :0,
			product_category :"qweqwe",
			product_stock:1004,
			product_created_at :"",
		},
		{
			id:6 ,
			product_name :"asd",
			product_reference :"asd",
			product_price  :1005,
			product_weigth :0,
			product_category :"qweqwe",
			product_stock:1005,
			product_created_at :"",
		},
	]

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<div className={classes.root}>
            <h1>Konecta Coffee - Sales Module</h1>
			<AppBar position="static">
				<Tabs
					value={value}
					onChange={handleChange}
					aria-label="simple tabs example"
					centered
				>
					<Tab icon={<AttachMoneyIcon />} label="Ventas" {...a11yProps(0)} />
					<Tab  icon={<FastfoodIcon />} label="Productos" {...a11yProps(1)} />
				</Tabs>
			</AppBar>
			<TabPanel value={value} index={0}>
				<Sales products = {products}/>
			</TabPanel>
			<TabPanel value={value} index={1}>
				<Products products = {products} />
			</TabPanel>
		</div>
	);
};

export default Dashboard;
