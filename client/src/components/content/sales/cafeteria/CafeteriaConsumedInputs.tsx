'use client'
import PageContent from '@/components/layout/PageContent'
import SearchBox from '@/components/shared/all/SearchBox'
import ResourcesDropList from '@/components/shared/resources/ResourcesDropList'
import ResourcesInput from '@/components/shared/resources/ResourcesInput'
import { clientsRoute } from '@/constants/api'
import { cafeteriaPayments } from '@/constants/cafeteriaPayments'
import { toNameAndId } from '@/utils/toNameAndId'
import React, { useState } from 'react'


type CafeteriaConsumedInputsProps = {
    handleSubmit: () => void,
    itemName:string,
    setItemName: (newState: string) => void,
    quantity:string,
    setQuantity: (newState: string) => void,
    price:string,
    setPrice: (newState: string) => void,
    date:string,
    setDate: (newState:string) => void,
    isLoading:boolean,
    client:NameAndId,
    setClient:(newState:NameAndId) => void,
    payment:NameAndId,
    setPayment:(newState:NameAndId) => void,
    submitButtonLabel:string
}

function CafeteriaConsumedInputs({
    handleSubmit,
    itemName,
    setItemName,
    quantity,
    setQuantity,
    price,
    setPrice,
    date,
    setDate,
    isLoading,
    client,
    setClient,
    setPayment,
    payment,
    submitButtonLabel

}:CafeteriaConsumedInputsProps) {

    const [clientsRes,setClientsRes] = useState<any>()

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
                    value={date} 
                    setValue={setDate}
                    placeholder="date"
                    label='date'
                    type="datetime-local"
                />

                <ResourcesDropList
                    listValue={payment}
                    setListValue={setPayment}
                    options={cafeteriaPayments}
                    placeholder='Select Payment'
                    label='payment'
                />
                <SearchBox
                    label={'search client'}
                    options={toNameAndId(clientsRes?.data?.client,'username',"_id")}
                    searchUrl={clientsRoute}
                    setResponse={setClientsRes}
                    listValue={client}
                    setListValue={setClient}
                />
            </div>
            <div className='w-full flex justify-center'>
                <button
                    onClick={handleSubmit} 
                    disabled={isLoading} 
                    className='w-[350px] text-primary duration-300 hover:bg-primary hover:text-smokey-white font-semibold text-2xl capitalize rounded-2xl h-[60px] border border-primary'>
                    {submitButtonLabel}
                </button>
            </div>
        </PageContent>
    )
}

export default CafeteriaConsumedInputs