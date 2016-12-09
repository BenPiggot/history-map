import React from "react";  
import ReactDOM from 'react-dom';
import Explainer from "./components/Explainer.jsx"

$('.carousel').carousel();

if (document.getElementById('explainer'))
  ReactDOM.render(<Explainer />, document.getElementById('explainer'));