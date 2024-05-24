import React, { useState } from 'react'
import { FaFileAlt } from 'react-icons/fa';

function FileItem({file}) {

  const [password, setPassword] = useState('');
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    // Assuming the correct password is "password123"
    setIsPasswordCorrect(e.target.value === 'password123');
  };

  return (
    <div>
      <div className="flex justify-center items-center w-full  p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center w-full max-w-md">
        {/* Filename Shared message */}
        <h2 className="text-xl font-semibold mb-4">{file?.filename} Shared a file with you</h2>
        
        {/* Big File Icon */}
        <FaFileAlt className="text-6xl text-blue-500 mx-auto mb-4" />

        {/* Filename, Filetype, Filesize */}
        <div className="text-lg mb-4">
          {file?.filename} ⚡️ {file?.filetype} ⚡️ {file?.filesize}
        </div>

        {/* Password input and download button */}
        <div className="mb-4">
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={handlePasswordChange}
            className="border rounded-lg p-2 w-full mb-4"
          />
          <button
            disabled={!isPasswordCorrect}
            className={`w-full p-2 rounded-lg ${isPasswordCorrect ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
          >
            Download
          </button>
        </div>

        {/* Terms and Conditions */}
        <div className="text-sm text-gray-200">
          *Terms and Conditions Apply
        </div>
      </div>
    </div>
    </div>
  )
}

export default FileItem
