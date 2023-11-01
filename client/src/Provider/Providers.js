"use client";
import {  useEffect, useState } from "react";
import { GlobalContext } from '@/AppContext/AppContext';
import { fetchMainObj } from "@/utils/fetchs";


export const GlobalContextProvider = ({ children }) => {
    const [artWork, setArtWork] = useState();
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
    // console.log(artWork, errorState)
    return(
        <GlobalContext.Provider value={{artWork, errorState}} >
            {children}
        </GlobalContext.Provider>
    )
};
