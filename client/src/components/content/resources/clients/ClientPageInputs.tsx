"use client"

import PageContent from '@/components/layout/PageContent'
import ResourcesDropList from '@/components/shared/resources/ResourcesDropList'
import ResourcesImageInput from '@/components/shared/resources/ResourcesImageInput'
import ResourcesInput from '@/components/shared/resources/ResourcesInput'
import { genders } from '@/constants/genders'
import { memberShipStatuses } from '@/constants/memberShipStatuses'
import { memberShipTypes } from '@/constants/memberShipTypes'




type ClientPageInputsProps = {
    name:string,
    setName:(newState:string) => void,
    email:string,
    setEmail:(newState:string) => void,
    phone:string,
    setPhone:(newState:string) => void,
    age:string,
    setAge:(newState:string) => void,
    gender:NameAndId,
    setGender:(state:NameAndId)=> void,
    membershipStatus:NameAndId,
    setMembershipStatus:(state:NameAndId)=> void,
    membershipType:NameAndId,
    setMembershipType:(state:NameAndId)=> void,
    handleSubmit:()=> void,
    formDataFile:FormData|undefined,
    setFormDataFile:(state:FormData)=> void,
    isLoading:boolean,
    submitButtonLabel:string
}

function ClientPageInputs({
    name,
    setAge,
    setEmail,
    setGender,
    setMembershipStatus,
    setName,
    setPhone,
    email,
    gender,
    phone,
    membershipStatus,
    age,
    membershipType,
    setMembershipType,
    handleSubmit,
    formDataFile,
    setFormDataFile,
    isLoading,
    submitButtonLabel
    
}:ClientPageInputsProps) {

    return (
        <PageContent>
                <div className='max-w-[600px] flex flex-col  gap-5 my-16 mx-20'>
                    <ResourcesInput
                        value={name} 
                        setValue={setName}
                        placeholder="Enter Client Name"
                        label='name'
                        type='text'
                    />

                    <ResourcesInput
                        value={email} 
                        setValue={setEmail}
                        placeholder="Enter Client Email"
                        label='email'
                        type='text'
                    />

                    <ResourcesInput
                        value={phone} 
                        setValue={setPhone}
                        placeholder="Enter Client Phone"
                        label='phone'
                        type='number'
                    />

                    <ResourcesInput
                        value={age} 
                        setValue={setAge}
                        placeholder="Enter Client Age"
                        label='age'
                        type='number'
                    />
                    <ResourcesDropList
                        listValue={gender}
                        setListValue={setGender}
                        options={genders}
                        placeholder='select client gender'
                        label='gender'
                        
                    />

                    <ResourcesDropList
                        listValue={membershipStatus}
                        setListValue={setMembershipStatus}
                        options={memberShipStatuses}
                        placeholder='select client membership status'
                        label='membership status'
                        
                    />
                    
                    <ResourcesDropList
                        listValue={membershipType}
                        setListValue={setMembershipType}
                        options={memberShipTypes}
                        placeholder='select client membership type'
                        label='membership type'
                    />
                    <ResourcesImageInput
                        label='photo' 
                        formDataFile={formDataFile} 
                        setFormDataFile={setFormDataFile}
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

export default ClientPageInputs