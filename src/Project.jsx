const Project = ({projectID,title,shortDescription,description,period,thumbnail,ImagesList,Tags,createdAt}) => {
  let hero = "https://via.placeholder.com/150"
  if (thumbnail) {
    hero = thumbnail;
  }
  return (
      <a href={`/project/${projectID}`} className="project">  
        <div className="project-hero">
          <img src={hero} alt={title} />
        </div>
        <div className="project-info">
          <h2>{title}</h2>
          <p>{shortDescription}</p>
          <p>{description}</p>
          <p>{period}</p>
          <p>{Tags}</p>
        </div>
      </a>

    );
  };
export default Project;


{/* <div>
        <h2>{props.title || "Project Title"}</h2>
        <p>{props.shortDescription || "Project Short Description"}</p>
        <p>{props.description || "Project Description"}</p>
        <p>{props.period || "Project Period"}</p>
        <p>{props.Tags || "Project Tags"}</p>
      </div> */}