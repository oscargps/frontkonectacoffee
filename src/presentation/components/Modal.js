import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";



function getModalStyle() {
	const top = 50 
	const left = 50

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`
	};
}

const useStyles = makeStyles((theme) => ({
	paper: {
		position: "absolute",
		width: 400,
		backgroundColor: theme.palette.background.paper,
		border: "2px solid #000",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3)
	}
}));

export default function SimpleModal(props) {
	const classes = useStyles();
	const { open, handleClose } = props;
	// getModalStyle is not a pure function, we roll the style only on the first render
	const [modalStyle] = React.useState(getModalStyle);
	// const [open, setOpen] = React.useState(stateModal);

	// const body = (
	// 	<div style={modalStyle} className={classes.paper}>
	// 		<h2 id="simple-modal-title">Text in a modal</h2>
	// 		<p id="simple-modal-description">
	// 			Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
	// 		</p>
	// 		<SimpleModal />
	// 	</div>
	// );

	return (
		<div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
			>
				
				<div style={modalStyle} className={classes.paper}>
					{props.children}
				</div>
			</Modal>
		</div>
	);
}
