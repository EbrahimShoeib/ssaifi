"use client"

import IndInvoicePageFooter from '@/components/content/managment/invoice/individual-invoice/IndInvoicePageFooter'
import IndInvoicePageInputs from '@/components/content/managment/invoice/individual-invoice/IndInvoicePageInputs'
import Loader from '@/components/layout/Loader'
import PageContent from '@/components/layout/PageContent'
import PageHeader from '@/components/layout/PageHeader'
import { useGetClients } from '@/hooks/useGetClients'
import { toNameAndId } from '@/utils/toNameAndId'
import React, { useEffect, useState } from 'react'

function AddIndividualInvoicePage() {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [clients,setClients] = useState<NameAndId[]|[]>([])
    const [client,setClient] = useState<NameAndId>(null)
    const [startDate,setStartDate] = useState<string>("")
    const [endDate,setEndDate] = useState<string>("")

    useEffect(()=>{
        if ( !isClientsLoading )
            setIsLoading(false)
    },[])
    

    const {isLoading:isClientsLoading} = useGetClients({
        onSuccess:(res) => {
            const clients = toNameAndId(res?.data?.client,"username","_id")            
            setClients(clients)
        }
    })

    const handleSubmit = () => {

    } 

    return (
        <>
            <PageHeader
                title={(
                    <span>
                        daily entry / 
                        <span className="text-primary">add individual invoice</span>
                    </span>
                )}
                showBackButton={true}
            />
            <PageContent className='p-8 flex flex-col justify-between'>
                <Loader isLoading={isLoading}>
                    <IndInvoicePageInputs
                        client={client}
                        setClient={setClient}
                        clients={clients}
                        startDate={startDate}
                        setStartDate={setStartDate}
                        endDate={endDate}
                        setEndDate={setEndDate}
                    />
                    <IndInvoicePageFooter
                        isLoading={isLoading}
                        submitButtonFunc={handleSubmit}
                    />
                </Loader>
            </PageContent>
        </>
    )
}

export default AddIndividualInvoicePage