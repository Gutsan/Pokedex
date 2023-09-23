import { createContext,useState } from "react";

export const PageContext=createContext()
export function PageProvider({children}){
    const [RenderPage, setRenderPage] = useState(1);
    return(
    <PageContext.Provider value={{
        RenderPage,
        setRenderPage
    }}>
        {children}
    </PageContext.Provider>
    )
}