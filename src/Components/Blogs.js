import React from 'react'
import{
Form,
Button,
Input
} from 'reactstrap';
import {useState,useEffect} from 'react';
export default function Blogs()
{
    const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    try {
      const response = await fetch('https://tdcp.gop.pk/sikyatra_api/get_Blogs');
          if (response.ok) {
              console.log(response.ok);
        const result = await response.json();
         setData(result);
      } 
      else 
      {
          setError(`Error: ${response.status} - ${response.statusText}`);
        }
      }
       catch (error) 
       {
        setError(`Network Error: ${error.message}`);
      }
    };
    useEffect(() => {
       
      
          // Call the fetchData function
          fetchData();
        }, []);
    return(
        <>
        
        </>
    )
}