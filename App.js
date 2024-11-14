const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("h1", { id: "heading", className: "heading" }, " swiggy.com"),
  React.createElement("h2", { id: "heading", className: "heading" }, " swiggy "),
]);

// const heading = React.createElement(
//     "h1",
//     { id: "heading", className: "heading" }, // Updated `id` and added `className`
//     "Hello world from React!"
//   );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
