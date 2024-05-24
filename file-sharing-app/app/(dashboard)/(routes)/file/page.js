"use client"
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore'; // Import Firestore functions as needed
import {app} from '../../../../firebaseConfig'
import { getFirestore } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { useUser } from '@clerk/nextjs';
import FileTable from './_components/FileTable'

const YourComponent = () => {
  const [files, setFiles] = useState([]);

  const {user}=useUser();

  const db = getFirestore(app);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "FileData"));
      const fileData = [];
      querySnapshot.forEach((doc) => {
        fileData.push({
          id: doc.id,
          ...doc.data()
        });
      });
      setFiles(fileData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className='m-8 text-3xl'>My Files</div>
      <FileTable files={files} user={user}/>
    </div>
  );
};

export default YourComponent;
