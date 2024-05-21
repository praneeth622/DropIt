import { AlertCircle } from 'lucide-react'
import React from 'react'

function AlertMsg({msg}) {
  return (
    <div className='flex p-5 gap-5 rounded-xl mt-5 text-white bg-red-500'>
      <AlertCircle/>
      {msg}
    </div>
  )
}

export default AlertMsg
