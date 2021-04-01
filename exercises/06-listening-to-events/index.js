import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const clickHandler = e => {
	console.log("I was clicked!", e);
};

const Alert = props => {
	return (
		<button className="btn btn-success btn-lg" onClick={clickHandler}>
			{props.text}
		</button>
	);
};

Alert.propTypes = {
	text: PropTypes.string
};

// here is where the alert component is being used, you don't have to edit this part,
// but it helps you understand what properties is the component using
ReactDOM.render(<Alert text="Click Me" />, document.querySelector("#myDiv"));
