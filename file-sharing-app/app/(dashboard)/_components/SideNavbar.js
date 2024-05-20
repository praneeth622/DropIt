"use client"

import { File, Gem, Shield, ShieldEllipsis, Upload } from 'lucide-react'
import React, { useState } from 'react'
import Image from 'next/image'

function SideNavbar() {
    const menuList=[
        {
            id:1,
            name:'Upload',
            path:'/upload',
            icon:Upload
        },
        {
            id:2,
            name:'File',
            path:'/file',
            icon:File
        },
        {
            id:3,
            name:'Upgrade',
            path:'/upgrade',
            icon:Gem
        },
    ]
    const [activeIndex,setActiveIndex] = useState(0)
  return (
    <div className='shadow-sm border-r h-full'>
      <div className='border-b p-5'>
        <Image src="./logo.svg" width={150} height={100} />
      </div>
      <div className='flex flex-col f'>
        {menuList.map((item,index)=>(
            <button
            key={item.id}
            onClick={() => setActiveIndex(index)}
            className={`flex gap-2 py-4 px-4 hover:bg-gray-100 w-full text-gray-500 ${activeIndex === index ? 'bg-blue-50 text-orange-500' : ''}`}
        >
            <item.icon className="w-6 h-6" />
            <h2>{item.name}</h2>
        </button>

        ))}
      </div>
    </div>
  )
}

export default SideNavbar
