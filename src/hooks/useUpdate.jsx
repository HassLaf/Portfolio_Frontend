import { useState } from 'react';
import { useAuthContext } from "./useAuthContext";

export const useUpdate = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading,] = useState(false);
    const { user } = useAuthContext();
    const updateProject = async ({projectID, titleD, shortDescriptionD, descriptionD, periodD, thumbnailD, ImagesListD, TagsD}) => {
        setIsLoading(true);
        try {
            const response = await fetch(`http://localhost:3510/projects/${projectID}/manageProject`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + user.accessToken
                },
                body: JSON.stringify({
                    "projectID": projectID,
                    "title": titleD,
                    "shortDescription": shortDescriptionD,
                    "description": descriptionD,
                    "period" : periodD,
                    "thumbnail": thumbnailD,
                    "ImagesList": ImagesListD,
                    "Tags": TagsD
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
