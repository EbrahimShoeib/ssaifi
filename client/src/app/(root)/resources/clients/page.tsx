"use client"
import ClientsPageContent from '@/components/content/resources/clients/ClientsPageContent'
import Loader from '@/components/layout/Loader'
import PageHeader from '@/components/layout/PageHeader'
import PaginationButtons from '@/components/layout/PaginationButtons'
import { useGetClients } from '@/hooks/useGetClients'
import { toNameAndId } from '@/utils/toNameAndId'
import { useSearchParams } from 'next/navigation'
import React, { Suspense, useState } from 'react'

function ClientsPage() {

    const searchParams = useSearchParams()
    const pageNumber = searchParams.get("page") || "1"
    

    const {response,isSuccess,refetch}:any = useGetClients({
        pagination:`?page=${pageNumber}`,
        queryKey:['page',pageNumber]

    })
    

    const isDataHere = Boolean(response?.data?.client) && isSuccess

    
    
    return (
        <Suspense>
            <div className='w-full h-[calc(100%-80px)]'>
                <PageHeader
                    title={"stables clients"}
                    
                    addNewButtonLabel='add new client'
                />
                <ClientsPageContent 
                    refetch={refetch}
                    isDataHere={isDataHere} 
                    response={response}
                />
            </div>
            {
                isDataHere ? (
                    <PaginationButtons
                        maxPages={response.data.max_pages}
                        currentPage={response.data.current_page}
                    />
                ): <></>
            }
        </Suspense>
    )
}

export default ClientsPage