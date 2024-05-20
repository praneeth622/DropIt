import React from 'react'
import SideNavbar from './_components/SideNavbar'
import TopHeader from './_components/TopHeader'

function layout({children}) {
  return (
    <div>
      <div className=' h-full w-64 flex-col fixed insert-y-0 z-50'>
        <SideNavbar />
      </div>
      <div className='md:ml-64'>
        <TopHeader />
        {children}
      </div>
    </div>
  )
}

export default layout
