import React from "react";
import ReactDOM from "react-dom/client"

const heading = React.createElement("h1",
     {}, // it contains attributes
      "Hello from React" // this is a children
    ); // creates an object and not h1 tag
    //React.creatElement returns an object which contains props which store attributes and children
//{} the empty object here is used to give attributes
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading); // takes this obj and convert it to h1 tag and put it in the react

//using jsx
const heading2 = <h1>hey there I'm JSX</h1>; // js engine can't understand this code 
// as js underderstands ecmmaScript, the above line is not pure js but thid code still works
//how ?..... Parcels is working behind the scene as parcel (Babel) transpiles this into js

// how to create nested elements by classical way
const div = React.createElement("div",
    {id:"parent"}, 
    React.createElement("div",
        {id:"child"},
        [React.createElement("h1", {}, "hello I'm H1 updated"),
         React.createElement("h2", {}, "hello I'm h2")
        ]));//create an array if you want to create siblings

root.render(div);

//library (we can use in specific part of project) vs framework()