const fetchProject = async ({queryKey}) => {
    const projectId = queryKey[1];
    const response = await fetch(`http://localhost:3510/projects/${projectId}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
    };


export default fetchProject;