"use client"

import { useEffect, useState } from 'react';
import { UserType } from '@/app/users/page';
import User from '@/app/components/User';



export default function UserID({params}:{params:{id:number}}) {
  const [user, setUser] = useState<UserType>();

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`).
    then((response)=> response.json()).
    then((data)=> setUser(data))
  },[params.id])


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <User name={user?.name ?? ""} username={user?.username ?? ""} email={user?.email}  />
    </main>
    
  )
}