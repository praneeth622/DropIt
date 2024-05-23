"use client"
import React, { useEffect, useState } from 'react'
import { getFirestore } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import {app} from '../../../../../firebaseConfig'
import FileInfo from './_components/FIleInfo'
import FileShare from './_components/FIleShare'


function FilePreview({params}) {

  const db = getFirestore(app);

  const [File,setFile] = useState()

  useEffect(()=>{
    console.log(params?.fileId)
    params?.fileId&&getFileInfo()
    console.log("File data "+File?.fileName)
  },[])

  const getFileInfo=async()=>{
    const docRef = doc(db, "FileData", params?.fileId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setFile(docSnap.data())
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
    
  }
  

  return (
    <div className='flex border border-black-500 m-5'>
      <FileInfo imageUrl ={File?.fileUrl} type={File?.fileType} />
      <FileShare></FileShare>
    </div>
  )
}

export default FilePreview
