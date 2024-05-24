"use client"
import React, { useEffect, useState } from 'react'
import { getFirestore, updateDoc } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import {app} from '../../../firebaseConfig'
import FileItem from './_componets/FileItem'

function FileView({params}) {

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
    <div className="flex justify-center items-center w-full h-screen">
        <FileItem file={File}/>
    </div>

  )
}

export default FileView
