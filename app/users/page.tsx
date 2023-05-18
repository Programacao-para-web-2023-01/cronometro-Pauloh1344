"use client"

import { useEffect, useState } from 'react';
import User from '../components/User';

export interface UserType{
    id: number
    name: string
    username: string
    email: string
    phone: string
    website: string
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

export default function Users() {
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users").
    then((response)=> response.json()).
    then((data)=> setUsers(data))
  },[])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {users.map(u => (
        <User
            key = {u.id}
            name = {u.name}
            username = {u.username}
            email = {u.email}
        />
        ))}

    </main>
  )
}

