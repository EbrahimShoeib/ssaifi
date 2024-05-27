'use client'

import PageContent from '@/components/layout/PageContent'
import SearchBox from '@/components/shared/all/SearchBox'
import ResourcesDropList from '@/components/shared/resources/ResourcesDropList'
import ResourcesInput from '@/components/shared/resources/ResourcesInput'
import { clientsRoute } from '@/constants/api'
import { memberShipStatuses } from '@/constants/memberShipStatuses'
import { memberShipTypes } from '@/constants/memberShipTypes'
import { toNameAndId } from '@/utils/toNameAndId'
import React, { useState } from 'react'

type MembershipIndividualInputsProps = {
    client:NameAndId,
    setClient:(newState:NameAndId)=> void,
    startDate:string,
    setStartDate:(newState:string)=> void,
    endDate:string,
    setEndDate:(newState:string)=> void,
    status:NameAndId,
    setStatus:(newState:NameAndId)=> void,
    membershipType:NameAndId,
    setMembershipType:(newState:NameAndId)=> void,
    handleSubmit:()=> void,
    isLoading:boolean,
    submitButtonLabel:string
}

function MembershipIndividualInputs({
    client,
    setClient,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    status,
    setStatus,
    membershipType,
    setMembershipType,
    handleSubmit,
    isLoading,
    submitButtonLabel
}:MembershipIndividualInputsProps) {
    
    const [clientsRes, setClientsRes] = useState<any>()
    return (
        <PageContent>
            <div className='max-w-[600px] flex flex-col gap-10 my-16 mx-8'>

                <SearchBox
                    listValue={client} 
                    setListValue={setClient}
                    searchUrl={clientsRoute}
                    setResponse={setClientsRes}
                    label='search client'
                    options={toNameAndId(clientsRes?.data?.client,'username','_id')}
                />
                <ResourcesDropList
                    listValue={status} 
                    setListValue={setStatus}
                    placeholder="Enter membership status"
                    label='membership status'
                    options={memberShipStatuses}
                />
                <ResourcesInput
                    value={startDate} 
                    setValue={setStartDate}
                    placeholder="enter start date"
                    label='start date'
                    type='datetime-local'
                />
                <ResourcesInput
                    value={endDate} 
                    setValue={setEndDate}
                    placeholder="enter end date"
                    label='end date'
                    type='datetime-local'
                />
                <ResourcesDropList
                    listValue={membershipType} 
                    setListValue={setMembershipType}
                    placeholder="select membership type"
                    label='membership type'
                    options={memberShipTypes}
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

export default MembershipIndividualInputs