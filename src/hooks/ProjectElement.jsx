import Project from "./Project";
import { useEffect } from "react";

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
                        description={project.description}
                        thumbnail={project.thumbnail}
                        ImagesList={project.ImagesList}
                        Tags={project.Tags} />

                ))
            )}
        </div>
    );
            }
export default ProjectList;
