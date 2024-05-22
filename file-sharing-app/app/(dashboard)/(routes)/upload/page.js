"use client"
import React, { useEffect, useState } from 'react'
import UploadForm from './_components/UploadForm'
import {app} from '../../../../firebaseConfig'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";

function Upload() {
  const storage =getStorage(app)
  const [Progress,setProgress] = useState(0)
  const funuploadFile = (File) => {
    console.log(File?.type);
  
    const metadata = {
      contentType: File?.type
    };
  
    const storageRef = ref(storage, 'File-upload/' + File?.name);
    const uploadTask = uploadBytesResumable(storageRef, File, metadata);
  
    uploadTask.on('state_changed',
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        setProgress(progress)

        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
        });
      },
      (error) => {
        // Handle unsuccessful uploads
        console.error('Upload failed:', error);
      }
    );
  }
  
  return (
    <div className='p-5 px-8 md:px-28'>
      <h2 className='text-[25px] m-5 text-center'>Safe & <strong className='text-orange-500'>Easy</strong> File <strong className='text-orange-500'>Sharing</strong>.</h2>
      <UploadForm uploadButtonClick={(File)=>{
        funuploadFile(File)}} progress={Progress}/>
    </div>
  )
}

export default Upload
