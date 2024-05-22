"use client"
import React, { useState } from 'react'
import UploadForm from './_components/UploadForm'


function Upload() {
  const storage =getStorage(app)
  const [uploadFile,setUploadFile] = useState()
  const funuploadFile=(File)=>{
    
    setUploadFile(File)
  }
  return (
    <div className='p-5 px-8 md:px-28'>
      <h2 className='text-[25px] m-5 text-center'>Safe & <strong className='text-orange-500'>Easy</strong> File <strong className='text-orange-500'>Sharing</strong>.</h2>
      <UploadForm uploadButtonClick={(File)=>{
        funuploadFile(File)}}/>
    </div>
  )
}

export default Upload
