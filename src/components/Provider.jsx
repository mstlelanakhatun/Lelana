import { createContext, useEffect, useState } from "react";

export const ProviderContext = createContext(null);
const Provider = ({ children }) => {

    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );
    console.log(theme)
    const Toggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };
    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);


    const authInfo = {
        theme,
        Toggle
    }

    return (
        <ProviderContext.Provider value={authInfo}>
            {children}
        </ProviderContext.Provider>
    );
};

export default Provider;