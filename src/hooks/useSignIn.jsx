import {useState} from 'react';
import {useAuthContext} from './useAuthContext';

export const useSignIn = () => {
    const {dispatch} = useAuthContext();
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const signIn = async (email, password) => {
        try {
            const response = await fetch('http://localhost:3510/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            
            if (response.ok) {
                const user = await response.json();
                console.log(user);
                localStorage.setItem('user', JSON.stringify(user)); 
                console.log(JSON.stringify(user));
                dispatch({ type: 'LOGIN', payload: user });
            } else {
                setIsLoading(false);
                const error = await response.json();
                setError(error);
            }
        } catch (error) {
            setError({ message: error.message });
        }
    };

    return {signIn,isLoading,  error};
}