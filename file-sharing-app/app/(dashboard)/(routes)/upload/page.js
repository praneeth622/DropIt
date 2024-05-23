"use client"
import React, { useEffect, useState } from 'react'
import UploadForm from './_components/UploadForm'
import generateRandomString from '../../../_utlis/GenarateRandomString'
import {app} from '../../../../firebaseConfig'
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore"; 
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation'

function Upload() {

  const storage =getStorage(app)
  const db = getFirestore(app);
  const router = useRouter(); 

  const {user}=useUser();

  const [Progress,setProgress] = useState(0)
  const [uploadCompleted , setUploadCompleted] = useState(false)
  const [fileURL,setFileURL] = useState()
  const [newfileURL,setnewFileURL] = useState(false)

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
        setUploadCompleted(true)

        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          saveInfo(File,downloadURL)
        });
        
      },
      (error) => {
        // Handle unsuccessful uploads
        console.error('Upload failed:', error);
      }
    );

    const saveInfo = async(File,fileurl)=>{
      const docId=generateRandomString(6).toString()
      
      await setDoc(doc(db, "FileData", docId),{
        fileName : File?.name,
        fileSize: File?.size,
        fileType: File?.type,
        fileUrl:fileurl,
        userEmailId:user?.primaryEmailAddress.emailAddress,
        userName:user?.username,
        password:'',
        id:docId,
        shortURL:process.env.NEXT_PUBLIC_BASE_URL+"f/"+docId,
      });
      setFileURL(docId)
    }
  }
  useEffect(()=>{
    if (uploadCompleted == true){
      setnewFileURL(true)
    }
  },[fileURL])

  useEffect(()=>{
    uploadCompleted&&setTimeout(()=>{
      setUploadCompleted(false)
      //window.location.reload()
       //console.log("/file-preview/" + fileURL)
      router.push("/file-preview/" + fileURL);
    },2000)
  },[newfileURL])
  
  return (
    <div className='p-5 px-8 md:px-28'>
      <h2 className='text-[25px] m-5 text-center'>Safe & <strong className='text-orange-500'>Easy</strong> File <strong className='text-orange-500'>Sharing</strong>.</h2>
      <UploadForm uploadButtonClick={(File)=>{
        funuploadFile(File)}} progress={Progress}/>
    </div>
  )
}

export default Upload
