import PageContent from '@/components/layout/PageContent'
import ResourcesDropList from '@/components/shared/resources/ResourcesDropList'
import ResourcesInput from '@/components/shared/resources/ResourcesInput'
import { memberShipStatuses } from '@/constants/memberShipStatuses'
import { memberShipTypes } from '@/constants/memberShipTypes'
import React from 'react'

type MembershipIndividualInputsProps = {
    client:NameAndId,
    setClient:(newState:NameAndId)=> void,
    clients:NameAndId[]|[],
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
    clients,
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
    return (
        <PageContent>
            <div className='max-w-[600px] flex flex-col gap-10 my-16 mx-8'>

                <ResourcesDropList
                    listValue={client} 
                    setListValue={setClient}
                    placeholder="Enter client Name"
                    label='client name'
                    options={clients}
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