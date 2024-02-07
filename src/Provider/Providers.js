"use client";
import {  useEffect, useState } from "react";
import { SessionProvider } from "next-auth/react";
import { GlobalContext } from '@/AppContext/AppContext';
import { fetchMainObj } from "@/utils/fetchs";



export const GlobalContextProvider = ({ children }) => {
    const [artWork, setArtWork] = useState();
    const [errorState, setErrorState] = useState(false);
    

    useEffect(()=>{
        const fetchData = async () => {
              const data = await fetchMainObj();
              const [error, ...objs] = data;
              error ? setErrorState(true) : setArtWork(objs)
          };
          fetchData();
    }, []);
    
   return(
        <GlobalContext.Provider value={{artWork, errorState}} >
            {children}
        </GlobalContext.Provider>
    )
};

// export const UserProvider = ({children, session}) => {
//     // console.log('here we are at UserProviders:  children-->', children, ' session --->', session)
//     return <SessionProvider session={session}>{children}</SessionProvider>
// };
