'use client'

import PageInputsHolder from "@/components/layout/PageInputsHolder"
import { clientsRoute } from "@/constants/api"
import { clientTypes } from "@/constants/clientTypes"
import { memberShipStatuses } from "@/constants/memberShipStatuses"
import { toNameAndId } from "@/utils/toNameAndId"
import { useState } from "react"

type InvoicePageInputsProps = {
    client:NameAndId,
    setClient:(newState:NameAndId) => void,
    date:string,
    setDate:(newState:string) => void,
    membershipStatus:NameAndId,
    totalAmount:string,
    setTotalAmount:(newState:string) => void,
    setMembershipStatus:(newState:NameAndId) => void,
    invoiceId:string,
    setInvoiceId:(newState:string) => void,
    isLoading:boolean,
    submitButtonLabel:string,
    onSubmit:()=> void,
    clientType:NameAndId,
    setClientType:(newState:NameAndId) => void,
    invoiceType:string,
    setInvoiceType:(newState:string) => void,

}

function InvoicePageInputs({
    isLoading,
    submitButtonLabel,
    onSubmit,
    client,
    setClient,
    date,
    setDate,
    membershipStatus,
    setMembershipStatus,
    invoiceId,
    setInvoiceId,
    totalAmount,
    setTotalAmount,
    clientType,
    setClientType,
    invoiceType,
    setInvoiceType,
}:InvoicePageInputsProps) {
    const [clientsRes,setClientsRes] = useState<any>()

    const dropDownLists:DropDownList[] = [
        {
            listValue:clientType,
            setListValue:setClientType,
            options:clientTypes,
            placeholder:'Select Client Type',
            label:'client Type'
        },
        {
            listValue:membershipStatus,
            setListValue:setMembershipStatus,
            options:memberShipStatuses,
            placeholder:'Select Status',
            label:'status'
        }
    ]
    const inputs:Input[] = [
        {
            value:date,
            setValue:setDate,
            label:'Date',
            type:'datetime-local',
            placeholder:'Enter Date'
        },
        {
            value:totalAmount,
            setValue:setTotalAmount,
            label:'Total Amount',
            type:'number',
            placeholder:'Enter Total Amount'
        },
        // {
        //     value:invoiceId,
        //     setValue:setInvoiceId,
        //     label:'Invoice Id',
        //     type:'text',
        //     placeholder:'Enter Invoice Id'
        // },
        {
            value:invoiceType,
            setValue:setInvoiceType,
            label:'invoice type',
            type:'text',
            placeholder:'Enter invoice type'
        },
    ]

    const searchBoxes :SearchBox[] = [
        {
            listValue:client,
            options:toNameAndId(clientsRes?.data?.client,'username','_id'),
            setListValue:setClient,
            searchUrl:clientsRoute,
            setResponse:setClientsRes,
            label:'select client',
            placeholder:"select client"
        }
    ]

    return (
        <>
            <PageInputsHolder
                isLoading={isLoading} 
                submitButtonLabel={submitButtonLabel} 
                handleSubmit={onSubmit} 
                inputs={inputs} 
                searchBoxes={searchBoxes}
                dropDownLists={dropDownLists}
            >
            </PageInputsHolder>
        </>
    )
}

export default InvoicePageInputs