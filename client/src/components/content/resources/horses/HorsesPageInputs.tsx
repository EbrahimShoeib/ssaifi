import PageContent from '@/components/layout/PageContent'
import ResourcesDropList from '@/components/shared/resources/ResourcesDropList'
import ResourcesImageInput from '@/components/shared/resources/ResourcesImageInput'
import ResourcesInput from '@/components/shared/resources/ResourcesInput'
import { genders } from '@/constants/genders'
import React from 'react'

type HorsePageInputsProps = {
    name:string,
    setName:(state:string)=>void,
    note:string,
    setNote:(state:string)=>void,
    age:string,
    setAge:(state:string)=>void,
    isLoading:boolean,
    gender:NameAndId,
    setGender:(state:NameAndId)=>void
    groom:NameAndId,
    setGroom:(state:NameAndId)=>void,
    client:NameAndId,
    setClient:(state:NameAndId)=>void,
    handleSubmit: ()=> void,
    clients:NameAndId[]|[],
    horses:NameAndId[]|[],
    horseCategory:NameAndId,
    setHorseCategory:(state:NameAndId)=>void,
    horseCategories:NameAndId[]|[],
    formDataFile:FormData|undefined,
    setFormDataFile:(state:FormData)=> void,
    submitButtonLabel:string,

}
function HorsePageInputs({
    name,
    setName,
    note,
    setNote,
    age,
    setAge,
    isLoading,
    gender,
    setGender,
    groom,
    setGroom,
    client,
    setClient,
    handleSubmit,
    clients,
    horses,
    horseCategory,
    setHorseCategory,
    horseCategories,
    formDataFile,
    setFormDataFile,
    submitButtonLabel,

}:HorsePageInputsProps) {


    
    return (
        <PageContent>   
            <div className='max-w-[600px] flex flex-col gap-5 my-16 mx-8'>
                <ResourcesInput
                    value={name} 
                    setValue={setName}
                    placeholder="Enter horse Name"
                    label='horse name'
                    type='text'
                />
                <ResourcesInput
                    value={note} 
                    setValue={setNote}
                    placeholder="Enter Note"
                    label='Note'
                    type='text'
                />
                <ResourcesInput
                    value={age} 
                    setValue={setAge}
                    placeholder="Enter horse Age"
                    label='age'
                    type='number'
                />
                <ResourcesDropList
                    listValue={gender}
                    setListValue={setGender}
                    options={genders}
                    placeholder='Select horse Gender'
                    label='gender'
                />
                <ResourcesDropList
                    listValue={groom}
                    setListValue={setGroom}
                    options={horses}
                    placeholder='Select Groom'
                    label='groom'
                    
                />
                <ResourcesDropList
                    listValue={client}
                    setListValue={setClient}
                    options={clients}
                    placeholder='Select Client '
                    label='client'
                    
                />
                <ResourcesImageInput
                    label='photo' 
                    formDataFile={formDataFile} 
                    setFormDataFile={setFormDataFile}
                />
                <ResourcesDropList
                    listValue={horseCategory}
                    setListValue={setHorseCategory}
                    options={horseCategories}
                    placeholder='Select horse category '
                    label='categories'
                    
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

export default HorsePageInputs
