import { useState } from 'react';


export const useUpdate = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading,] = useState(false);

    const updateProject = async ({projectID, title, shortDescription, description, period, thumbnail, ImagesList, Tags }) => {
        setIsLoading(true);
        try {
            const response = await fetch(`http://localhost:3510/projects/${projectID}/manageProject`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "projectID": projectID,
                    "title": title,
                    "shortDescription": shortDescription,
                    "description": description,
                    "period" : period,
                    "thumbnail": thumbnail,
                    "ImagesList": ImagesList,
                    "Tags": Tags
                }),
            });
            
            if (response.ok) {
                console.log('Le projet a été mis à jour avec succès.');
            } else {
                const error = await response.json();
                setError(error);
            }
        } catch (error) {
            setError({ message: error.message });
        } finally {
            setIsLoading(false);
        }
    };

    return { updateProject, isLoading, error };
};
