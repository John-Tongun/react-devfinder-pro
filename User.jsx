import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function User() {

    // Get username from the URL => /user/<username>
    const { username } = useParams();

    const [user, setUser] = useState(null);
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const userResponse = await fetch(
                `https://api.github.com/users/${username}`
            );

            const repositoriesResponse = await fetch(
                `https://api.github.com/users/${username}/repos`
            );

            setUser(await userResponse.json());
            setRepos(await repositoriesResponse.json());
        };

        fetchData();
    }, [username]);

    if (!user) return <p>Loading....</p>

    return (
        <div>
            <div className='card mb-3'>
                <div className='card-body'>
                    <h2>{user.login}</h2>
                    <p>{user.bio}</p>
                </div>
            </div>

            <h4>Repositories</h4>

            <div className='list-group'>
                {
                    repos.map((repository) => (
                        <div
                            key={repository.id}
                            className='list-group-item'
                        >
                            {repository.name}
                        </div>
                    ))
                }
            </div>
        </div>
    );
}