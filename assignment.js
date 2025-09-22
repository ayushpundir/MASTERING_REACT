import React from "react";
import ReactDOM from "react-dom/client"
// we have to create h1, h2, h3 inside div using React.createElement
const div = React.createElement(
    "div",
    {className:"title"},
    React.createElement(
        "h1",
        {},
        "I'm h1"),
        React.createElement(
            "h2",
            {}, 
            "I'm h2"),
            React.createElement(
                "h3",
                {},
                "Hii I'm h3"
            )
        );
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(div);

//Now we have to do the same thing using JSX
const smartDiv = (
<div>
    <h1>Hii I'm h1</h1>
    <h2>Hii I'm h2</h2>
    <h3>Hii I'm h3</h3>
</div>
);
//root.render(smartDiv);

//using functional component

const DivComponent = () => 
(<div>
    <h1>Hii I'm h1</h1>
    <h2>Hii I'm h2</h2>
    <h3>Hii I'm h3</h3>
</div>)
;
root.render(<DivComponent></DivComponent>); 

const Header = () => (
    <header id = "header">
            <img id = "logo" src = "https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png"></img>
            <input id = "search" type="text" placeholder="Search here"></input>
            <img id = "user" src = "https://img.freepik.com/premium-vector/user-icon-icon_1076610-59410.jpg"></img>
    </header>
);
root.render(<Header/>)