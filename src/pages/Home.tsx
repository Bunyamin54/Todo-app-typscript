import React, { useState } from 'react'

 interface TodoType  {
 todo : string
 isDone : boolean
 id: string | number //* id bilgisi string yada number olabilir

 }
const Home = () => {

const [todos, setTodos] = useState<TodoType[]> ([])



  return (
    <div>Home</div>
  )
}

export default Home