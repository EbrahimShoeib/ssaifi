"use client"

import PageInputsHolder from '@/components/layout/PageInputsHolder'
import { clientsRoute, horsesRoute, instructorsRoute, packagesRoute } from '@/constants/api'
import { cafeteriaPayments } from '@/constants/cafeteriaPayments'
import { memberShipStatuses } from '@/constants/memberShipStatuses'
import { memberShipTypes } from '@/constants/memberShipTypes'
import { httpGetServices } from '@/services/httpGetService'
import { toNameAndId } from '@/utils/toNameAndId'
import React, { useState } from 'react'
import { useQuery } from 'react-query'

type DailyPageInputsProps = {
    date:string,
    setDate:(newState:string) => void,
    time:string,
    setTime:(newState:string) => void,
    client:NameAndId,
    setClient:(newState:NameAndId) => void,
    membershipStatus:NameAndId,
    setMembershipStatus:(newState:NameAndId) => void,
    instructor:NameAndId,
    setInstructor:(newState:NameAndId) => void,
    payment:NameAndId,
    setPayment:(newState:NameAndId) => void,
    note:string,
    setNote:(newState:string) => void,
    horse:NameAndId,
    setHorse:(newState:NameAndId) => void,
    price:string,
    arena:string,
    setArena:(newState:string) => void,
    membership:NameAndId,
    setMembership:(newState:NameAndId) => void,
    onSubmit:(e:any) => void,
    children?:React.ReactNode,
    isLoading:boolean,
    submitButtonLabel:string,
    setPrice:(newState:string) => void,
    course:NameAndId,
    setCourse:(newState:NameAndId) => void,
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
    instructor,
    setInstructor,
    payment,
    setPayment,
    note,
    setNote,
    horse,
    setHorse,
    isLoading,
    price,
    arena,
    setArena,
    membership,
    setMembership,
    onSubmit,
    submitButtonLabel,
    setPrice,
    course,
    setCourse
}:DailyPageInputsProps) {

    const [packagesRes,setPackagesRes] = useState<any>()
    const [horsesRes,setHorsesRes] = useState<any>()
    const [clientsRes,setClientsRes] = useState<any>()
    const [instructorsRes,setInstructorsRes] = useState<any>()




    const dropDownLists:DropDownList[] = [
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
            listValue:payment,
            setListValue:setPayment,
            options:cafeteriaPayments,
            placeholder:'Select payment status',
            label:'payment'
        },
    ]
    const searchBoxes :SearchBox[] = [
        {
            listValue:client,
            options:toNameAndId(clientsRes?.data?.client,'username','_id'),
            searchUrl:clientsRoute,
            setResponse:setClientsRes,
            label:'select client',
            setListValue:setClient,
            placeholder:"select client"
        },
        {
            listValue:horse,
            options:toNameAndId(horsesRes?.data?.hourse,'hourseName','_id'),
            searchUrl:horsesRoute,
            setResponse:setHorsesRes,
            label:'select horse',
            setListValue:setHorse,
            placeholder:"select horse"
        },
        {
            listValue:instructor,
            options:toNameAndId(instructorsRes?.data?.instractor,'instractorName','_id'),
            searchUrl:instructorsRoute,
            setResponse:setInstructorsRes,
            label:'select instructor',
            setListValue:setInstructor,
            placeholder:"select instructor"
        },
        {
            listValue:course,
            options:toNameAndId(packagesRes?.Packages?.data,'name','_id'),
            searchUrl:packagesRoute,
            setResponse:setPackagesRes,
            label:'select course',
            setListValue:setCourse,
            placeholder:"select course"
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
                searchBoxes={searchBoxes}
            >
                {children && children}
            </PageInputsHolder>
        </>
    )
}

export default DailyPageInputs