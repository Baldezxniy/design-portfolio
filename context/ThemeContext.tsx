'use client';

import React, {createContext, Dispatch, SetStateAction, useContext, useEffect, useState} from 'react'
import {ActiveSectionContext} from "@/context/ActiveSectionContext";

type Theme = 'dark' | 'light';

type Props = {
    children: React.ReactNode;
}
type TThemeContext = {
    theme: Theme;
    toggleTheme: ()=> void;
}
const ThemeContext = createContext<TThemeContext | null>(null);
export default function ThemeContextProvider({children}: Props) {
    const [theme, setTheme] = useState<Theme>('light');
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
            window.localStorage.setItem('theme', 'dark');
            document.documentElement.classList.add('dark')
        } else {
            setTheme('light');
            window.localStorage.setItem('theme', 'light');
            document.documentElement.classList.remove('dark');
        }
    }

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme') as Theme | null;
        if (localTheme) {
            setTheme(localTheme);
            if (localTheme === 'dark') {
                document.documentElement.classList.add('dark');
            }
        } else if (window.matchMedia('(prefers-color-scheme: dark)')) {
            setTheme('dark');
            document.documentElement.classList.add('dark');
        }
    }, [])
    return (
        <ThemeContext.Provider value={{
            theme,
            toggleTheme
        }}>{children}</ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === null) {
        throw new Error("useTheme must be used within a ThemeContextProvider");
    }

    return context;
}
