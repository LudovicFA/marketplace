"use client"

import UploadArea from '@/components/UploadArea'
import Uploader from '@/components/Uploader'
import { faImage, faLocationCrosshairs, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { setFips } from 'crypto'
import { UploadResponse } from 'imagekit/dist/libs/interfaces'
import React, { useState } from 'react'

const NewAdPage = () => {

  const [files, setFiles] = useState<UploadResponse[]>([])

  return (
    <form action="" className='max-w-xl mx-auto grid grid-cols-2 gap-8 '>
        
        <div className='grow pt-8'>

          <UploadArea files={files} setFiles={setFiles}/>

          <div className='mt-8'>
            <label htmlFor="">Where is it located</label>
            <button className='w-full flex items-center justify-center gap-2 py-1 border border-gray-400 text-gray-600 rounded'>
              <FontAwesomeIcon icon={faLocationCrosshairs} />
              <span>Share current location</span>
            </button>
            <div className='bg-gray-200 p-4 min-h-12 rounded text-gray-400 text-center mt-2'>
              Google Maps here
            </div>
          </div>
        </div>

        <div className='grow pt-2'>
          <label htmlFor="titleIn">Title</label>
          <input id="titleIn" type="text" placeholder='Title' />

          <label htmlFor="priceIn">Price</label>
          <input id="priceIn" type="number" placeholder='price' />

          <label htmlFor="categoryIn">Category</label>        
          <select name="" id="categoryIn">
            <option disabled value="">Select a category</option>
            <option >🚗Cars</option>
            <option >🔋Electronics</option>
            <option >🏠Properties</option>
          </select>

          <label htmlFor="descriptionIn">Description</label>
          <textarea name="" id="descriptionIn" placeholder='description'></textarea>

          <label htmlFor="contactIn">Contact information</label>
          <textarea name="" id="contactIn" placeholder='mobile: +33 6 82 55 84 54'></textarea>

          <button className='bg-blue-600 text-white  px-4 py-2 mt-2 rounded w-full'>
            Publish
          </button>
        </div>

    </form>
  )
}

export default NewAdPage