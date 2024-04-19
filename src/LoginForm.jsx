import { useState, useEffect } from "react";
import ProjectList from "./hooks/ProjectElement";
import { useAuthContext } from "./hooks/useAuthContext";

const SearchParams = () => {
    const  [projects, setProjects] = useState([]);
    const { user } = useAuthContext();
    useEffect(() => {
        requestProjects();
    }, [projects]) ;

    async function requestProjects() {
        const res = await fetch(
            'http://localhost:3510/projects',
            {
                headers: {
                    'Authorization': 'Bearer ' + user.accessToken
                }
            }
        );
        
        const json = await res.json();
        
        setProjects(json);
    }

    return (
      <div className="">
                <ProjectList projects={projects} />
            </div>
            );
        };
  
  export default SearchParams;