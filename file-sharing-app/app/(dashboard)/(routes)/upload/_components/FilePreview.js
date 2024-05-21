import React from 'react'
import { File, X } from 'lucide-react'

function FilePreview({ file , removeFile}) {
    return (
        <div className='flex justify-between items-center border rounded-md mt-5 border-orange-200'>
            <div className='flex gap-7 items-center text-center'>
                <File />
                <div className='text-left'>
                    <h2>{file.name}</h2>
                    <h2 className='text-[15px] text-gray-400'>{file?.type}/{(file.size / 1024 / 1024).toFixed(2)} MB</h2>
                </div>
            </div>
            <X className='cursor-pointer' onClick={()=>removeFile()}/>
        </div>
    )
}

export default FilePreview
