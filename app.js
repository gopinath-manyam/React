import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement("h1", { id: "h1" }, "React");
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(heading);
