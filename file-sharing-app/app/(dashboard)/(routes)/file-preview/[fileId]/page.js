"use client"
import React, { useEffect, useState } from 'react'
import { getFirestore, updateDoc } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import {app} from '../../../../../firebaseConfig'
import FileInfo from './_components/FIleInfo'
import FileShare from './_components/FIleShare'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function FilePreview({params}) {

  const db = getFirestore(app);

  const [File,setFile] = useState()

  const notifySuccess = () => toast.success("Password Set Sucessfull!", { position: "top-right" });

  useEffect(()=>{
    console.log(params?.fileId)
    params?.fileId&&getFileInfo()
    console.log("File data "+File?.fileName)
  },[])

  const getFileInfo=async()=>{
    const docRef = doc(db, "FileData", params?.fileId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      //console.log("Document data :", docSnap.data());
      setFile(docSnap.data())
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
    
  }
  const passwordHandle = async(password)=>{
    const docRef = doc(db,'FileData',params?.fileId)
    await updateDoc(docRef,{
      password:password,
    })
    console.log("Password saved Sucessfully")
    notifySuccess()
  }
  

  return (
    <div className='flex border border-black-500 m-5'>
      <FileInfo imageUrl ={File} type={File?.fileType} />
      <FileShare File={File} savePassword={(password)=>passwordHandle(password)}/>
      <ToastContainer />
    </div>
  )
}

export default FilePreview
