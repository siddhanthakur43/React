import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const JsxHeading = () =>(
    <h1 id="heading" className="sid" tabIndex='5'>
        Namaste React 🚀 using JSX
    </h1>);

//React Functional Component
const FunctionalComponent1 = () => (
    <div id="container">
        {JsxHeading()}
        <JsxHeading />
        <JsxHeading></JsxHeading>
        <h1 id="heading1">Functional Component1</h1>
    </div>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FunctionalComponent1 />);