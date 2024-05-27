'use client'

import PageContent from '@/components/layout/PageContent'
import SearchBox from '@/components/shared/all/SearchBox'
import ResourcesInput from '@/components/shared/resources/ResourcesInput'
import { horsesRoute } from '@/constants/api'
import { toNameAndId } from '@/utils/toNameAndId'
import React, { useState } from 'react'

type MedicalConsumedInputsProps = {
    itemName: string,
    setItemName: (newState:string) => void,
    quantity: string,
    setQuantity:  (newState:string) => void,
    price: string,
    setPrice:  (newState:string) => void,
    description: string,
    setDescription:  (newState:string) => void,
    handleSubmit: () => void,
    isLoading: boolean,
    dosage:string,
    setDosage: (newState:string) => void,
    horse:NameAndId,
    setHorse: (newState:NameAndId) => void,
    submitButtonLabel: string,
}

function MedicalConsumedInputs({
    itemName,
    setItemName,
    quantity,
    setQuantity,
    price,
    setPrice,
    description,
    setDescription,
    handleSubmit,
    isLoading,
    dosage,
    setDosage,
    horse,
    setHorse,
    submitButtonLabel
}:MedicalConsumedInputsProps) {


    const [horsesRes,setHorsesRes] = useState<any>()

    return (
        <PageContent>
            <div className='max-w-[600px] flex flex-col gap-10 my-16 mx-8'>

                <ResourcesInput
                    value={itemName} 
                    setValue={setItemName}
                    placeholder="Enter Item Name"
                    label='item name'
                    type='text'
                />
                <ResourcesInput
                    value={quantity} 
                    setValue={setQuantity}
                    placeholder="Quantity"
                    label='quantity'
                    type='number'
                />
                <ResourcesInput
                    value={price} 
                    setValue={setPrice}
                    placeholder="price"
                    label='price'
                    type='number'
                />      
                <ResourcesInput
                    value={description} 
                    setValue={setDescription}
                    placeholder="description"
                    label='description'
                    type='text'
                />  
                <ResourcesInput
                    value={dosage} 
                    setValue={setDosage}
                    placeholder="dosage"
                    label='dosage'
                    type='number'
                />  
                <SearchBox
                    searchUrl={horsesRoute}
                    listValue={horse}
                    setListValue={setHorse}
                    setResponse={setHorsesRes}
                    options={toNameAndId(horsesRes?.data?.hourse,'hourseName','_id')}
                    label='search horse'
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

export default MedicalConsumedInputs