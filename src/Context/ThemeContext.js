import React, {createContext, useState} from 'react';

const ContextTheme = createContext()

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(false)
    const user = JSON.parse(window.localStorage.getItem("user"))
    return (
        <ContextTheme.Provider value={{theme, setTheme, user}}>
            {children}
        </ContextTheme.Provider>
    );
}

export { ContextTheme, ThemeProvider };
