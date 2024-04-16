const Project = (props) => {
    return (
      <div>
        <h2>{props.title || "Project Title"}</h2>
        <p>{props.shortDescription || "Project Short Description"}</p>
      </div>
    );
  };
export default Project;