import { useState, useEffect } from "react";
import ProjectList from "./hooks/ProjectElement";
// import { Button } from "@/components/ui/button"
// const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
    // const [location,setLocation] = useState("");
    // const [animal, updateAnimal] = useState("");
    // const [breed, setBreed] = useState("");
    const  [projects, setProjects] = useState([]);
    // const breeds = ["bird", "cat", "dog", "rabbit", "reptile"];


    useEffect(() => {
        requesttPets();
    }, [projects]) ;

    async function requesttPets() {
        const res = await fetch(
            `http://localhost:3510/projects`
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