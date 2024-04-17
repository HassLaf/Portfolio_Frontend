import { useState, useEffect } from "react";
import ProjectList from "./ProjectElement";
import { Button } from "@/components/ui/button"
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
    const [location,setLocation] = useState("");
    const [animal, updateAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const  [projects, setProjects] = useState([]);
    const breeds = ["bird", "cat", "dog", "rabbit", "reptile"];


    useEffect(() => {
        requesttPets();
    }, []) ;

    async function requesttPets() {
        const res = await fetch(
            `http://localhost:3510/projects`
        );
        const json = await res.json();
        
        setProjects(json);
    }

    return (
      <div>
        <form onSubmit={(e) => {
            e.preventDefault();
            requesttPets();
        }
        }>
          <label htmlFor="location">
            Location
            <input onChange={e => setLocation(e.target.value)} 
            id="location" value={location} placeholder="Location" />
          </label>
          <label htmlFor="animal">
            Animal
            <select
                id="animal"
                value={animal}
                onChange={(e) => {
                updateAnimal(e.target.value);
                setBreed("");
                }}
            >
                <option />
                {ANIMALS.map((animal) => (
                <option key={animal} value={animal}>
                    {animal}
                </option>
                ))}
            </select>
            </label>
            <label htmlFor="Breed">
            Breed
            <select
                id="breed"
                disabled={breeds.length===0}
                value={breed}
                onChange={(e) => {
                setBreed(e.target.value);
                }}
            >
                <option />
                {breeds.map((breed) => (
                <option key={breed} value={breed}>
                    {breed}
                </option>
                ))}
            </select>
            </label>
            <Button>Submit</Button>
                </form>
                <ProjectList projects={projects} />
            </div>
            );
        };
  
  export default SearchParams;