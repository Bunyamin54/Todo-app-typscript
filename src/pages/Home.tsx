import axios from 'axios'
import React, { useState } from 'react'

 interface TodoType  {
 todo : string
 isDone : boolean
 id: string | number //* id bilgisi string yada number olabilir

 }
const Home = () => {

const [todos, setTodos] = useState<TodoType[]>([])
   
  const url:string = import.meta.env.VITE_BASE_URL
  const getTodos = async () => 
   try {
    
    const {data} = await axios<TodoType[]>(url)

   } catch (error) {
    
   }


  return <div onClick={()=> setTodos([{id:5, todo:"eren", isDone:"true"}])}>Home</div>
  
}

export default Home