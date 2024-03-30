import React,{useState,useEffect} from 'react'

const useAPI = () => {
  const[item,setItem]= useState([])
    const API = async ()=>{
        const data = await fetch("https://fakestoreapi.com/products")
        const mydata = await data.json()
    setItem(mydata)
      }
    
    useEffect (()=>{
    API()
    },[])


  return item
}

export default useAPI