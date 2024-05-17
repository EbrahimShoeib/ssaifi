import PageInputsHolder from "@/components/layout/PageInputsHolder"
import { clientTypes } from "@/constants/clientTypes"
import { memberShipStatuses } from "@/constants/memberShipStatuses"

type InvoicePageInputsProps = {
    client:NameAndId,
    setClient:(newState:NameAndId) => void,
    date:string,
    setDate:(newState:string) => void,
    membershipStatus:NameAndId,
    clients:NameAndId[]|[],
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
    clients,
    clientType,
    setClientType,
    invoiceType,
    setInvoiceType,
}:InvoicePageInputsProps) {
    const dropDownLists:DropDownList[] = [
        {
            listValue:clientType,
            setListValue:setClientType,
            options:clientTypes,
            placeholder:'Select Client Type',
            label:'client Type'
        },
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
            type:'text',
            placeholder:'Enter Total Amount'
        },
        {
            value:invoiceId,
            setValue:setInvoiceId,
            label:'Invoice Id',
            type:'text',
            placeholder:'Enter Invoice Id'
        },
        {
            value:invoiceType,
            setValue:setInvoiceType,
            label:'invoice type',
            type:'text',
            placeholder:'Enter invoice type'
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
            >
            </PageInputsHolder>
        </>
    )
}

export default InvoicePageInputs