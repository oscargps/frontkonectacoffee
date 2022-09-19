import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import UserForm	 from "../components/Form"
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1)
		}
	}
}));
const Dashboard = (props) => {

	return (
		<>
			<UserForm/>
		</>
	);
};

export default Dashboard;
