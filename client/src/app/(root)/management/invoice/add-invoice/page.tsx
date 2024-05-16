"use client"

import InvoicePageInputs from '@/components/content/managment/invoice/InvoicePageInputs'
import PageHeader from '@/components/layout/PageHeader'
import { useGetClients } from '@/hooks/useGetClients'
import { toNameAndId } from '@/utils/toNameAndId'
import React, { useEffect, useState } from 'react'

function AddInvoicePage() {
  
    const [invoiceType,setInvoiceType] = useState<string>("")
    const [invoiceId,setInvoiceId] = useState<string>("")
    const [client,setClient] = useState<NameAndId>(null)
    const [clientType,setClientType] = useState<NameAndId>(null)
    const [totalAmount,setTotalAmount] = useState<string>("")
    const [date,setDate] = useState<string>("")
    const [membershipStatus,setMembershipStatus] = useState<NameAndId>(null)
    const [clients,setClients] = useState<NameAndId[]|[]>([])

    const [isLoading,setIsLoading] = useState<boolean>(true)

    const {isLoading:isClientsLoading} = useGetClients({
        onSuccess:(res) =>{
            const clients = toNameAndId(res?.data?.client,"username","_id")
            setClients(clients)
        }
    })

    useEffect(()=>{
        if (!isClientsLoading) 
            setIsLoading(false)
    },[isClientsLoading])

    const handleSubmit = () => {

    }

    return (
        <>
            <PageHeader
                title={(
                    <span>
                        daily entry / 
                        <span className="text-primary">add invoice</span>
                    </span>
                )}
                showBackButton={true}
            />
            <InvoicePageInputs
                isLoading={isLoading}
                client={client}
                setClient={setClient}
                clientType={clientType}
                setClientType={setClientType}
                totalAmount={totalAmount}
                setTotalAmount={setTotalAmount}
                date={date}
                setDate={setDate}
                membershipStatus={membershipStatus}
                setMembershipStatus={setMembershipStatus}
                clients={clients}
                invoiceId={invoiceId}
                onSubmit={handleSubmit}
                setInvoiceId={setInvoiceId}
                submitButtonLabel='add invoice'
            />
        </>
    )
}

export default AddInvoicePage