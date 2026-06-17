import { useFavorites } from '../context/FavoritesContext';

export default function Favorites() {
    const { favorites } = useFavorites();

    return (
        <div>
            <h3>Favorites</h3>

            {
                favorites.length === 0 && ( <p> No favorites yet.</p>)
            }

            <ul className='list-group'>
                {
                    favorites.map((user, index) => (
                        <li key={index} className='list-group-item'>
                            {user.login}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}