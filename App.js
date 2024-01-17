import React from "react";
import ReactDOM from "react-dom";

//const heading = React.createElement("h1",{id:"heading"},"Hello World from React!!!");
// JSX : its html like syntax but not html , babel tanspile this code to html

// React Element

// const heading = (
//   <h1 className="head">
//      Namaste React using JSX 
//   </h1>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


const Title = () => (
  <h1 className="head">
     Namaste React using JSX 
  </h1>
);
// React Functional Component
// Component composition 
const HeadingComponent = () => (
    <div id="container">
        <Title />
         <h1 className="heading">Namaste React using Functional Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);