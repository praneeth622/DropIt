import React, { useState ,useEffect} from 'react'
import { FaFileAlt } from 'react-icons/fa';
import Image from 'next/image';

function FileItem({file}) {

  const [password, setPassword] = useState('');
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
  const [fileState, setFileState] = useState(null);

  useEffect(() => {
    if (file) {
      setFileState(file);
    }
    // console.log("File is :"+ file?.userName)
  }, [file]);

  useEffect(() => {
    if (fileState) {
      console.log("This is fileitem data "+fileState?.userEmailId?.split("@")[0]);
    }
    console.log("Password is :"+fileState?.password)
  }, [fileState]);


  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setIsPasswordCorrect(e.target.value === fileState?.password);
    console.log("Password is :"+fileState?.password)
  };

  return (
    <div>
      <div className="flex justify-center items-center w-full  p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center w-full max-w-md">
        {/* Filename Shared message */}
        <h2 className="text-xl font-semibold mb-4"><span className='text-orange-500 bold'>{fileState?.userEmailId?.split("@")[0]} </span>Shared a file with you</h2>
        
        {/* Big File Icon */}
        {/* <FaFileAlt className="text-6xl text-blue-500 mx-auto mb-4" /> */}
        <div className='flex flex-col items-center justify-center m-5'>
          <Image
            src={fileState?.fileUrl}
            alt={fileState?.fileType} 
            width={200} 
            height={200}
            className="rounded-md "
          />
        </div>
        {/* Filename, Filetype, Filesize */}
        <div className="text-lg w-full mb-4">
          {fileState?.fileName} ⚡️ {fileState?.fileType} ⚡️ {fileState?.fileSize}
        </div>

        {/* Password input and download button */}
        <div className="mb-4">
      {fileState?.password && (
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={handlePasswordChange}
          className="border rounded-lg p-2 w-full mb-4"
        />
      )}
        <button
              disabled={(fileState?.password && !isPasswordCorrect)}
              onClick={()=>window.open(fileState?.fileUrl)}
              className={`w-full p-2 rounded-lg ${
                isPasswordCorrect || !fileState?.password
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
            Download
        </button>
      </div>

        {/* Terms and Conditions */}
        <div className="text-sm text-gray-300">
          *Terms and Conditions Apply
        </div>
      </div>
    </div>
    </div>
  )
}

export default FileItem
