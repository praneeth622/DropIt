"use client"
import React from 'react'
import UploadForm from './_components/UploadForm'
function Upload() {
  return (
    <div className='p-5 px-8 md:px-28'>
      <h2 className='text-[25px] m-5 text-center'>Safe & <strong className='text-orange-500'>Easy</strong> File <strong className='text-orange-500'>Sharing</strong>.</h2>
      <UploadForm />
    </div>
  )
}

export default Upload
