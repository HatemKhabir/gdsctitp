import React, { useEffect, useState } from 'react'
import axios from "axios"

function Home() {
    const [response,setResponse]=useState("");

    useEffect(()=>{
   const fetchWorkouts=async()=>{
       try {
           const response = await axios.get("http://localhost:8080/api/workout/")
           setResponse(response.data);
        } catch (error) {
            console.log(error)
        }
    }
    fetchWorkouts();
    },[])


  return (
    <>
    <div>Home</div>
    <p>{response}</p>
    </>
  )
}

export default Home