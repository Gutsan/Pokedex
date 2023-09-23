import { createContext,useState } from "react";

export const LouderContext=createContext()
export function LouderPovider ({children}){
    const [louder, setLouder] = useState(false);
    return(
    <LouderContext.Provider value={{
        louder,
        setLouder
    }}>
        {children}
    </LouderContext.Provider>
    )
}