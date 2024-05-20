import React from 'react'
import {  UserButton } from '@clerk/nextjs'

function Files() {
  return (
    <div>
      Files
      <UserButton afterSignOutUrl='' />
    </div>
  )
}

export default Files
