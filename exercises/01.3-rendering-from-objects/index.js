import React from "react";
import ReactDOM from "react-dom";

const customer = {
	first_name: "Bob",
	last_name: "Dylan"
};

//              your code inside these <div> tags
const output = (
	<div>
		<h1>My name is Bob</h1>
		<h2>My last name is Dylan</h2>
	</div>
);

//              what     where
ReactDOM.render(output, document.querySelector("#myDiv"));
