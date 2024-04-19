import {useParams} from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import fetchProject from './fetchProject';
import Project from './Project';
const Home = () => {
    const {projectID} = useParams();
    const results = useQuery({
        queryKey: ["project", projectID],
        queryFn: fetchProject,
      });
    console.log(results);
    
    if (results.isLoading) {
        return (
            <div>Loading...</div>);
    }

    const project = results.data;
    console.log(project);
    return (
        <Project 
            key={project.projectID} 
            projectID={project.projectID}
            title={project.title} 
            shortDescription={project.shortDescription} 
            description={project.description} />
                
    )
}

export default Home;