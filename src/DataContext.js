import React, { useEffect } from 'react';
import { createContext, useState } from 'react';
import api from './api/connectServer';

const Data = createContext({});

export const DataContext = ({ children }) => {
    let [userName,setUserName] = useState(null);
    let [ accessToken, setAccessToken ] = useState(null);

    useEffect( ()=>{
      const checkRefreshToken = async ()=>{
        try {
          const res = await api.get('/refresh');
          if(res && res.data) console.log(res.data);
        } catch (err) {
          if(err.response){
            console.log(err.response.data.message);
            console.log(err.response.status);
          }
          console.log(`Error : ${err.message}`);
        }
      }
      checkRefreshToken();
    },[]);
  return (
    <Data.Provider value={{ 
        userName, setUserName, accessToken, setAccessToken,
    }}>
      { children }
    </Data.Provider>
  )
}

export default Data;
