import React from 'react'

function ProgressBar({progress =0}) {
  return (
    <div className='mt-5'>
      <div className='bg-gray-400 w-full h-4 rounded-full'>
        <div className='bg-orange-400 h-4 rounded-full text-[12px]' style={{width:`${progress}%`}}>
          {`${Number(progress).toFixed(0)}%`}
        </div>
      </div>
    </div>
  )
}

export default ProgressBar
