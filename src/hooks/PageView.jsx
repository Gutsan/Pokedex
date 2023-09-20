import { useState, useEffect } from "react";
export const usePageRange=(page=1,elementForPage=12)=>{
    const [endpointLimit, setEndpointLimit] = useState({lowerLimit:0, upperLimit:11});
    useEffect(() => {
        const lowerLimit=elementForPage*page-elementForPage
        const upperLimit=lowerLimit+elementForPage-1
        setEndpointLimit({lowerLimit,upperLimit});
      }, [page]);
    
      return endpointLimit
}