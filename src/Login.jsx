import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './components/ui/card';
import { Button } from './components/ui/button';
import { Input } from "@/components/ui/input"
import { Label } from '@radix-ui/react-label';
import {useState} from 'react';
import {useSignIn} from './hooks/useSignIn';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const {signIn, isLoading, error} = useSignIn();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signIn(email, password);
        console.log(email, password);
    }
    return (
        <form onSubmit={handleSubmit}>
            <Card  className='w-[500px] align-content: center'>
            <CardHeader>
            <CardTitle  >Welcome to HLPortfolio</CardTitle>
            <CardDescription>Log in to access admin role</CardDescription>
            </CardHeader>
            <CardContent>
            <div className='flex flex-col space-y-4'>
                <Label htmlFor="email"> Email : </Label>
                <Input type="email" onChange={(e)=> setEmail(e.target.value)} id="email" name="email" />

                <Label htmlFor="password"> Password : </Label>
                <Input type="password"  onChange={(e)=> setPassword(e.target.value)} id="password" name="password" />
                </div>
            </CardContent>
            <CardFooter>
            <Button className='w-[500px] align-content: center' disabled={isLoading} >Log in</Button>
            {error && <div className="error">{error.message}=</div>}
            </CardFooter>
        </Card>
        </form>
   )};

export default Login;


