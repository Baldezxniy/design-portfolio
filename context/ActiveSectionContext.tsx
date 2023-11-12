'use client'

import React, {createContext, Dispatch, ReactNode, SetStateAction, useContext, useState} from 'react'
import {TSectionName} from "@/types";

type TActiveSectionContext = {
    activeSection: TSectionName;
    setActiveSection: Dispatch<SetStateAction<TSectionName>>;
    timeOfLastClick: number;
    setTimeOfLastClick: Dispatch<SetStateAction<number>>
};

export const ActiveSectionContext = createContext<TActiveSectionContext | null>(null);

type Props = {
    children: ReactNode
};
export default function ActiveSectionContextProvider({children}: Props) {
    const [activeSection, setActiveSection] = useState<TSectionName>('Home');
    const [timeOfLastClick, setTimeOfLastClick] = useState(0);

    return <ActiveSectionContext.Provider
        value={{
            activeSection,
            setActiveSection,
            timeOfLastClick,
            setTimeOfLastClick
        }}>
        {children}
    </ActiveSectionContext.Provider>;
}


export const useActiveSectionContext = () => {
    const context = useContext(ActiveSectionContext);

    if (context === null) {
        throw new Error("useActiveSectionContext must be used within a ActiveSectionContextProvider");
    }

    return context;
};
