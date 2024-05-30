import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col'>
        <Link href={"Profile"}>
          <div className='border border-black hover:bg-gray-300'>
            <div className='text-4xl p-5 hover:animate-pulse'>Profile</div>
          </div>
        </Link>
        <Link href={"Works"}>
          <div className='border border-black hover:bg-gray-300'>
            <div className='text-4xl p-5 hover:animate-pulse'>WORKS</div>
          </div>
        </Link>
    </div>
  )
}

