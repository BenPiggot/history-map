import React from "react";  
import ReactDOM from 'react-dom';
import Explainer from "./components/Explainer.jsx"

$('.carousel').carousel();

ReactDOM.render(<Explainer />, document.getElementById('explainer'));