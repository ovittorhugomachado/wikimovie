import { createContext, useContext, useState } from "react";

export const GenreContext = createContext();

export const GenreProvider = ({children}) => {
    const [ currentGenre, setCurrentGenre ] = useState([])

    return (
        <GenreContext.Provider value={{ currentGenre, setCurrentGenre }}>
            {children}
        </GenreContext.Provider>
    );
}