import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
    const [query, setQuery] = useState("");
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!query) return;

        const fetchUsers = async () => {
            setLoading(true);

            try {
                const res = await fetch(
                    `https://api.github.com/search/users?q=${query}`
                );
                const data = await res.json();
                setUsers(data.items || []);
            } catch (err) {
                console.error(err);
            }

            setLoading(false);
        };

        const delay = setTimeout(fetchUsers, 500);
        return () => clearTimeout(delay);
    }, [query]);

    return (
        <div>
            <div className="mb-3">
                <input
                    className="form-control"
                    placeholder="Search GitHub users..."
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>

            {
                loading && (
                    <div className="alert alert-info">
                        Loading users...
                    </div>
                )
            }

            <div className="row">
                {
                    users.map((user) => (
                        <div key={user.id} className="col-md-4 mb-3">
                            <Link
                                to={`/user/${user.login}`}
                                className="text-decoration-none"
                            >
                                <div className="card">
                                    <img
                                        src={user.avatar_url}
                                        className="card-img-top"
                                        alt=""
                                    />
                                    <div className="card-body">
                                        <h5>{user.login}</h5>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}