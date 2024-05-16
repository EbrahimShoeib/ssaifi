 import React from 'react'
 import Input from '../all/Input'


function ResourcesInput({value,type,setValue,label,placeholder}:Input) {
 

    return (
        <div className='flex w-full gap-5 items-center justify-between'>
            <div className='w-[150px] text-md font-semibold flex justify-between items-center'>
                <div className='flex items-center'>
                    <span>{label}</span>
                    <span className='text-red-500 ml-2 text-mg'>*</span>
                </div>
                <span>:</span>
            </div>
            <Input
                value={value} 
                type={type}
                className={` overflow-hidden truncate border border-solid 
                focus:border-primary focus:border-opacity-100
                placeholder:text-dark-grey placeholder:text-opacity-45 w-[calc(100%-170px)]
                border-dark-grey border-opacity-40 rounded-lg 
                text-md h-[35px] bg-transparent p-3 `}
                placeholder={placeholder} 
                setValue={setValue}
            />
        </div>
    )
 }

 export default ResourcesInput