import {useParams} from 'react-router-dom';

const Home = () => {
    const {projectID} = useParams();
    return (
        <div>
            <h1 className='text-3xl font-bold underline'>Home</h1>
            <h1>{projectID}</h1>
        </div>
    )
}

export default Home;