import PageInputsHolder from '@/components/layout/PageInputsHolder'
import { cafeteriaPayments } from '@/constants/cafeteriaPayments'
import { memberShipStatuses } from '@/constants/memberShipStatuses'
import { memberShipTypes } from '@/constants/memberShipTypes'
import React from 'react'

type DailyPageInputsProps = {
    date:string,
    setDate:(newState:string) => void,
    time:string,
    setTime:(newState:string) => void,
    client:NameAndId,
    setClient:(newState:NameAndId) => void,
    membershipStatus:NameAndId,
    setMembershipStatus:(newState:NameAndId) => void,
    clients:NameAndId[]|[],
    instructor:NameAndId,
    setInstructor:(newState:NameAndId) => void,
    instructors:NameAndId[]|[],
    payment:NameAndId,
    setPayment:(newState:NameAndId) => void,
    note:string,
    setNote:(newState:string) => void,
    horse:NameAndId,
    setHorse:(newState:NameAndId) => void,
    horses:NameAndId[]|[],
    price:string,
    arena:string,
    setArena:(newState:string) => void,
    membership:NameAndId,
    setMembership:(newState:NameAndId) => void,
    onSubmit:(e:any) => void,
    children?:React.ReactNode,
    isLoading:boolean,
    submitButtonLabel:string,
    setPrice:(newState:string) => void
} 
function DailyPageInputs({
    children,
    date,
    setDate,
    time,
    setTime,
    client,
    setClient,
    membershipStatus,
    setMembershipStatus,
    clients,
    instructor,
    setInstructor,
    instructors,
    payment,
    setPayment,
    note,
    setNote,
    horse,
    setHorse,
    horses,
    isLoading,
    price,
    arena,
    setArena,
    membership,
    setMembership,
    onSubmit,
    submitButtonLabel,
    setPrice
}:DailyPageInputsProps) {



    const dropDownLists:DropDownList[] = [
        {
            listValue:client,
            setListValue:setClient,
            options:clients,
            placeholder:'Select Client name',
            label:'client'
        },
        {
            listValue:membershipStatus,
            setListValue:setMembershipStatus,
            options:memberShipStatuses,
            placeholder:'Select Status',
            label:'status'
        },
        {
            listValue:membership,
            setListValue:setMembership,
            options:memberShipTypes,
            placeholder:'Select membership type',
            label:'membership'
        },
        {
            listValue:horse,
            setListValue:setHorse,
            options:horses,
            placeholder:'Select horse name',
            label:'horse'
        },
        {
            listValue:instructor,
            setListValue:setInstructor,
            options:instructors,
            placeholder:'Select instructor name',
            label:'instructor'
        },
        {
            listValue:payment,
            setListValue:setPayment,
            options:cafeteriaPayments,
            placeholder:'Select payment status',
            label:'payment'
        },
    ]


    const inputs:Input[] = [ 
        {
            label:'Date',
            type:'date',
            value:date,
            setValue:setDate,
            placeholder:'Enter Date'
        },
        {
            label:'price',
            type:'number',
            value:price,
            setValue:setPrice,
            placeholder:'Enter Price'
        },
        {
            label:'note',
            type:'text',
            value:note,
            setValue:setNote,
            placeholder:'Enter Note'
        },
        {
            label:'time',
            type:'text',
            value:time,
            setValue:setTime,
            placeholder:'Enter Time'
        },
        {
            label:'arena',
            type:'text',
            value:arena,
            setValue:setArena,
            placeholder:'Enter Arena'
        },
    ]
    return (
        <>
            <PageInputsHolder 
                isLoading={isLoading} 
                submitButtonLabel={submitButtonLabel} 
                handleSubmit={onSubmit} 
                inputs={inputs} 
                dropDownLists={dropDownLists}
                className='max-w-none w-fit !grid grid-cols-[repeat(2,400px)]'
            >
                {children && children}
            </PageInputsHolder>
        </>
    )
}

export default DailyPageInputs