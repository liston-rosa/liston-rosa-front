"use client";
import {  useEffect, useState } from "react";
import { GlobalContext } from '@/AppContext/AppContext';
import { fetchMainObj } from "@/app/utils/fetchs";


export const GlobalContextProvider = ({ children }) => {
    const [artWork, setArtWork] = useState({});
    const [errorState, setErrorState] = useState(false);
    

    useEffect(()=>{
        const fetchData = async () => {
              const data = await fetchMainObj();
              const [error, ...objs] = data;
            //   console.log(error)
              error ? setErrorState(true) : setArtWork(objs)
          };
          fetchData();

    }, [])

    return(
        <GlobalContext.Provider value={{artWork, errorState}} >
            {children}
        </GlobalContext.Provider>
    )
};
