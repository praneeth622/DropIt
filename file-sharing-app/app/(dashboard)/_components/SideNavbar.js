"use client";

import { File, Gem, Upload } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';

function SideNavbar() {
  const menuList = [
    {
      id: 1,
      name: 'Upload',
      path: '/upload',
      icon: Upload,
    },
    {
      id: 2,
      name: 'File',
      path: '/file',
      icon: File,
    },
    {
      id: 3,
      name: 'Upgrade',
      path: '/upgrade',
      icon: Gem,
    },
  ];

  const router = useRouter();
  const path = usePathname();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const currentPathIndex = menuList.findIndex(item => item.path === path);
    if (currentPathIndex !== -1) {
      setActiveIndex(currentPathIndex);
    }
  }, [path]);

  const handleNavigation = (index, path) => {
    setActiveIndex(index);
    router.push(path);
  };

  return (
    <div className="shadow-sm border-r h-full">
      <div className="border-b p-5">
        <Image src="/logo.svg" width={150} height={100} alt="Logo" />
      </div>
      <div className="flex flex-col">
        {menuList.map((item, index) => (
          <button
            key={item.id}
            onClick={() => handleNavigation(index, item.path)}
            className={`flex gap-2 py-4 px-4 hover:bg-gray-100 w-full text-gray-500 ${path === item.path ? 'bg-blue-50 text-orange-500' : ''}`}
          >
            <item.icon className="w-6 h-6" />
            <h2>{item.name}</h2>
          </button>
        ))}
      </div>
    </div>
  );
}

export default SideNavbar;
