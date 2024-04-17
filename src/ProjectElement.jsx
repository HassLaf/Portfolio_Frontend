import Project from "./Project";

const ProjectList = ({projects}) => {
    return (
        <div className="search">
            {!projects.length ? (
                <h1>No Projects Found</h1>
            ) : (
                projects.map((project) => (
                    <Project 
                        key={project.projectID} 
                        projectID={project.projectID}
                        title={project.title} 
                        shortDescription={project.shortDescription} 
                        description={project.description} />

                ))
            )}
        </div>
    );
            }
export default ProjectList;
