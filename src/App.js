const Project = (props) => {
  return React.createElement("div", null, [
    React.createElement("h2", null, props.title || "Project Title"),
    React.createElement(
      "p",
      null,
      props.shortDescription || "Project Short Description"
    ),
  ]);
};

const App = () => {
  return React.createElement(
    "divALL",
    null, // css place
    [
      React.createElement("h1", null, "Project List"),
      React.createElement(Project, {
        title: "Project 1",
        shortDescription: "Project 1 Short Description",
      }),
      React.createElement(Project, {
        title: "Project 2",
        shortDescription: "Project 2 Short Description",
      }),
      React.createElement(Project, {
        title: "Project 3",
        shortDescription: "Project 3 Short Description",
      }),
    ]
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
