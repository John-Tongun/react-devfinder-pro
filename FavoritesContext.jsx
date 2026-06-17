import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = useState([]);

    const addFavorite = (user) => {
        setFavorites([...favorites, user]);
    };

    return (
        <FavoritesContext.Provider value={{
            favorites,
            addFavorite
        }}>
            {children}
        </FavoritesContext.Provider>
    );
}

export const useFavorites = () => useContext(FavoritesContext);