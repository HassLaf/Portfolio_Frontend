import { Link } from "react-router-dom";

const Project = ({projectID,title,shortDescription,description,period,thumbnail,ImagesList,Tags,createdAt}) => {
  let hero = "https://via.placeholder.com/150"
  if (thumbnail) {
    hero = thumbnail;
  }
  return (
      <Link to={`/Home/${projectID}`} className="project">  
        <div className="project-hero">
          <img src={hero} alt={title} />
        </div>
        <div className="project-info">
          <h2 class="text-3xl font-bold">{title}</h2>
          <p>{shortDescription}</p>
          <p>{description}</p>
          <p>{period}</p>
          <p>{Tags}</p>
        </div>
      </Link>

    );
  };
export default Project;

