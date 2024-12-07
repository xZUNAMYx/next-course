'use client'

import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react'

export default function ProfilePage () {
  const { data: session } = useSession();
  // const { data: session } = auth();

    useEffect(() => {
        console.log("Client Side Profile Page")
    }, []);

  return (
    <>
      <div>ProfilePage</div>

      <hr />

      <div className='flex flex-col'>
        <span>{ session?.user?.name || "No name"}</span>
        <span>{ session?.user?.email || "No email" }</span>
        <span>{ session?.user?.id || "No email" }</span>
        <span>{ session?.user?.roles || "No rol" }</span>
        <span>Holaaaaaaa</span>
      </div>
    </>
  )
}
