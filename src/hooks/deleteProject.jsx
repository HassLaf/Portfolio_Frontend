import { useState } from 'react';

export const useDelete = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const deleteProject = async (projectID) => {
        setIsLoading(true);
        try {
            const response = await fetch(`http://localhost:3510/projects/${projectID}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            
            if (response.ok) {
                console.log('Le projet a été supprimé avec succès.');
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

    return { deleteProject, isLoading, error };
};
