"use client"

import { useEffect, useState } from 'react';
import Contador from './components/Contador'
import Reset from './components/Reset';
import Cronometro from './components/Cronometro';
import Task from './components/Task';
import User from './components/User';

interface UserType{
    id: number
    name: string
    username: string
    email: string
    adress: Address
    phone: string
    website: string
    company: Company
}

interface Address{
  street: string
  suite: string
  city: string
  zip: string
  geo: Geo
}
interface Geo{
  lat: number
  long: number
}
interface Company{
  name: string
  catchphrase: string
  bs: string
}

export default function Home() {
  const [contador, setContador]= useState(0);
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState<UserType[]>([]);

  /*
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users").
    then((response)=> response.json()).
    then((data)=> setUsers(data))
  },[])
  */
  
  useEffect(()=>{
    const interval = setInterval(()=>setContador((atual)=>atual+1),1000)
    return ()=> {
      clearInterval(interval)
    }
  },[])
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Contador 
        contador = {contador}
        onIncrement ={ ()=> setContador(contador+1)}
      />
      <Reset
        onReset={()=> setContador(0)}
      />
      <Cronometro/>
    </main>
  )
}

