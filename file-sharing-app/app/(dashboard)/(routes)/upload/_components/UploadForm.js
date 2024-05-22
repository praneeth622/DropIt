
import React, { useState } from 'react'
import AlertMsg from './AlertMsg'
import FilePreview from './FilePreview'
import file from '../../file/page'

function UploadForm({uploadButtonClick}) {
    const [File,setFile] = useState()
    const [error,setError] = useState()
    const onFileSelect = (file)=>{
        console.log(file.size)
        if(file&&file.size > 2000000){
            console.log("File size is greater than 2 MB")
            setError("File size is greater than 2 MB")
            setFile(null)
            return;
        }
        setError(null)
        setFile(file)
    }
    return (
        <div className='text-center'>
            <div className="flex items-center justify-center w-full">
                <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-64 border-2 border-orange-300 border-dashed rounded-lg cursor-pointer bg-orange-50 hover:bg-gray-100"
                >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                            className="w-8 h-8 mb-4 text-orange-500"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 16"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                            />
                        </svg>
                        <p className=" text-orange-500 mb-2 text-sm sm:text-lg">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs sm:text-base text-gray-500">
                            SVG, PNG, JPG or GIF (MAX Size is 2 MB)
                        </p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" onChange={(e)=>onFileSelect(e.target.files[0])} />
                </label>
            </div>
            {error&& <AlertMsg msg={error} />}
            {File&& <FilePreview file={File} removeFile={()=>setFile(null)}/>}
            <button onClick={()=>uploadButtonClick(File)} disabled={!File} className=' p-5 my-5 text-white disabled:bg-gray-400 w-[30%] bg-orange-500 rounded-full'>
                Upload
            </button>

        </div>
    )
}

export default UploadForm
