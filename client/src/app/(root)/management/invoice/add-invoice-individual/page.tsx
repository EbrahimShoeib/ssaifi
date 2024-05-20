"use client"

import IndInvoiceCheckoutTable from '@/components/content/managment/invoice/individual-invoice/IndInvoiceCheckoutTable'
import IndInvoicePageFooter from '@/components/content/managment/invoice/individual-invoice/IndInvoicePageFooter'
import IndInvoicePageInputs from '@/components/content/managment/invoice/individual-invoice/IndInvoicePageInputs'
import Loader from '@/components/layout/Loader'
import PageContent from '@/components/layout/PageContent'
import PageHeader from '@/components/layout/PageHeader'
import { packagesRoute } from '@/constants/api'
import { useGetClients } from '@/hooks/useGetClients'
import { useGetHorses } from '@/hooks/useGetHorses'
import { httpGetServices } from '@/services/httpGetService'
import { toNameAndId } from '@/utils/toNameAndId'
import React, { useEffect, useState } from 'react'




function AddIndividualInvoicePage() {
    const [startDate,setStartDate] = useState<string>("")
    const [endDate,setEndDate] = useState<string>("")
    const [checkoutDate,setCheckoutDate] = useState<string>("")
    const [debit,setDebit] = useState<string>("")
    const [description,setDescription] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [clients,setClients] = useState<NameAndId[]|[]>([])
    const [client,setClient] = useState<NameAndId>(null)
    const [horse,setHorse] = useState<NameAndId>(null)
    const [horses,setHorses] = useState<NameAndId[]|[]>([])
    const [discount,setDiscount] = useState<string>("")
    const [courses,setCourses] = useState<NameAndId[]|[]>([])
    const [isClientCoursesLoading,setIsClientCoursesLoading] = useState<boolean>(Boolean(client))

    useEffect(()=>{
        if ( !clients.length && !horses.length)
            setIsLoading(false)
    },[])
    

    const {isLoading:isClientsLoading} = useGetClients({
        onSuccess:(res) => {
            const clients = toNameAndId(res?.data?.client,"username","_id")            
            setClients(clients)
        }
    })
    

    const {isLoading:isHorsesLoading} = useGetHorses({
        onSuccess:(res) => {
            const horses = toNameAndId(res?.data?.hourse,"hourseName","_id")            
            setHorses(horses)
        }
    })
    const handleSubmit = () => {

    } 

    useEffect(()=> {
        const fetchClientCourses = async () => {
            Boolean(client) && setIsClientCoursesLoading(true)
            const res = await httpGetServices(`${packagesRoute}/course/${client?.id}`)
            const data = res?.Courses?.data  
            if (Boolean(data)) {
                setCourses(data)
                setIsClientCoursesLoading(false)
            }
        }
        fetchClientCourses()
    },[client])

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
                    <div className='w-full h-full flex flex-col'>
                        <IndInvoicePageInputs
                            client={client}
                            setClient={setClient}
                            clients={clients}
                            startDate={startDate}
                            setStartDate={setStartDate}
                            endDate={endDate}
                            setEndDate={setEndDate}
                        />

                        <IndInvoiceCheckoutTable  
                            horses={horses}
                            horse={horse}
                            setHorse={setHorse}
                            checkoutDate={checkoutDate}
                            setCheckoutDate={setCheckoutDate}
                            debit={debit}
                            setDebit={setDebit}
                            description={description}
                            setDescription={setDescription}
                            discount={discount}
                            setDiscount={setDiscount}
                            courses={courses}
                            isClientCoursesLoading={isClientCoursesLoading}
                        />
                        <IndInvoicePageFooter
                            isLoading={isLoading}
                            submitButtonFunc={handleSubmit}
                        />
                    </div>
                </Loader>
            </PageContent>
        </>
    )
}

export default AddIndividualInvoicePage