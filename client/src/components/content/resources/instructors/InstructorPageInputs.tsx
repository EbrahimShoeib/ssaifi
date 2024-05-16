import PageContent from '@/components/layout/PageContent'
import ResourcesDropList from '@/components/shared/resources/ResourcesDropList'
import ResourcesImageInput from '@/components/shared/resources/ResourcesImageInput'
import ResourcesInput from '@/components/shared/resources/ResourcesInput'
import { genders } from '@/constants/genders'
import React from 'react'


type InstructorPageInputsProps = { 
    name:string,
    setName:(state:string)=>void,
    age:string,
    setAge:(state:string)=>void,
    gender:NameAndId,
    setGender:(state:NameAndId)=>void,
    isLoading:boolean,
    handleSubmit:()=>void,
    email:string,
    setEmail:(state:string)=>void,
    phone:string,
    setPhone:(state:string)=>void,
    formDataFile:FormData|undefined,
    setFormDataFile: (newState:FormData) => void,
    submitButtonLabel:string
}
function InstructorPageInputs({
    name,
    setName,
    age,
    setAge,
    gender,
    setGender,
    isLoading,
    handleSubmit,
    email,
    setEmail,
    phone,
    setPhone,
    formDataFile,
    setFormDataFile,
    submitButtonLabel
}:InstructorPageInputsProps) {
    return (
        <PageContent className='overflow-hidden'>   
            <div className='max-w-[600px] flex flex-col gap-10 my-16 mx-8'>
                <ResourcesInput
                    value={name} 
                    setValue={setName}
                    placeholder="instructor Client Name"
                    label='name'
                    type='text'
                />

                <ResourcesInput
                    value={email} 
                    setValue={setEmail}
                    placeholder="Enter instructor Email"
                    label='email'
                    type='text'
                />

                <ResourcesInput
                    value={phone} 
                    setValue={setPhone}
                    placeholder="Enter instructor Phone"
                    label='phone'
                    type='number'
                />

                <ResourcesInput
                    value={age} 
                    setValue={setAge}
                    placeholder="Enter instructor Age"
                    label='age'
                    type='number'
                />
                <ResourcesImageInput
                    label='photo' 
                    formDataFile={formDataFile} 
                    setFormDataFile={setFormDataFile}
                />
                <ResourcesDropList
                    listValue={gender}
                    setListValue={setGender}
                    options={genders}
                    placeholder='select instructor gender'
                    label='gender'
                    
                />
            </div>
            <div className='w-full flex justify-center'>
                <button onClick={handleSubmit} disabled={isLoading} className='w-[350px] text-primary duration-300 hover:bg-primary hover:text-smokey-white font-semibold text-2xl capitalize rounded-2xl h-[60px] border border-primary'>
                    {submitButtonLabel}
                </button>
            </div>

    
        </PageContent>
    )
}

export default InstructorPageInputs