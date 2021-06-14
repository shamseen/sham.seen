import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import Main from "./main";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Main />
        </Router>
    </React.StrictMode >,
    rootElement
);