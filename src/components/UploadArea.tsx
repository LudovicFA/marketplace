import { faImage, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { createRef, Dispatch, SetStateAction, useState } from 'react'
import Uploader from './Uploader'
import { UploadResponse } from 'imagekit/dist/libs/interfaces'
import { Span } from 'next/dist/trace'
import UploadThumbnail from './UploadThumbnail'

type Props = {
    files: UploadResponse[],
    setFiles: Dispatch<SetStateAction<UploadResponse[]>>
}

const UploadArea = ({files, setFiles}: Props) => {

const [isUploading, setIsUploading] = useState(false)
    
  return (
    <div className='bg-gray-100 p-4 rounded'>
    <h2 className='text-center text-gray-600 uppercase text-xs font-bold'>
      Add photos of your product
    </h2>
    <div className='flex flex-col'>
        <FontAwesomeIcon icon={faImage} className='h-24 text-gray-300'/>
        <label 
            className={
                'upload-btn border  px-4 py-2 mt-2 rounded inline-flex gap-2 items-center justify-center '
                + (
                    isUploading 
                    ? 'text-gray-400 cursor-not-allowed' 
                    : 'border-blue-600  text-blue-600  cursor-pointer '
                )
            }
        >
            <Uploader 
                onSuccess={(file) => {
                setFiles(prev => [...prev, file])
                setIsUploading(false)
                }}
                onUploadStart={() => setIsUploading(true)}
            />
            {isUploading 
                ? (<span>Uploading...</span>) 
                : (
                <>
                    <FontAwesomeIcon icon={faPlus} />
                    <span>
                        Add photos
                    </span>
                </>
                )
            }
            
        </label>
        <div
            className='flex gap-2 mt-2 flex-wrap'
        >
            {files.map((file) => (
                <div className='size-16 rounded overflow-hidden' key={file.fileId}>
                    <UploadThumbnail file={file} />
                </div>
                
            ))}
        </div>
    </div>
  </div>
  )
}

export default UploadArea