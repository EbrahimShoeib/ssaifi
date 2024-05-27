import React from 'react'
import { IoMdImage } from 'react-icons/io'
import ImageUploadInput from '../all/ImageUploadInput'



type ResourcesImageInputProps = {
    formDataFile:FormData|undefined,
    setFormDataFile:(newFile:FormData)=>void,
    label:string
}
function ResourcesImageInput({formDataFile,label,setFormDataFile}:ResourcesImageInputProps) {
    
    return (
        <div className='flex w-full gap-5 items-center justify-between'>
            <div className='w-[180px] text-md font-semibold flex justify-between items-center'>
                <div className='flex items-center'>
                    <span>{label}</span>
                    <span className='text-red-500 ml-2'>*</span>
                </div>
                <span>:</span>
            </div>
            <ImageUploadInput
                className='input w-[calc(100%-170px)]' 
                formDataFile={formDataFile}
                setFormDataFile={setFormDataFile}
            >
                select file to upload
                <IoMdImage className={`text-2xl ${Boolean(formDataFile) && "text-primary"}`} />

            </ImageUploadInput>
        </div>
    )
}

export default ResourcesImageInput