"use client"

import HorsesPageContent from '@/components/content/resources/horses/HorsePageContent'
import PageHeader from '@/components/layout/PageHeader'
import PaginationButtons from '@/components/layout/PaginationButtons'
import { useGetHorses } from '@/hooks/useGetHorses'
import { toNameAndId } from '@/utils/toNameAndId'
import { useSearchParams } from 'next/navigation'
import React, { Suspense, useState } from 'react'

function HorsesPage() {

    const searchParams = useSearchParams()
    const pageNumber = searchParams.get("page") || "1"


    const {response,isSuccess,refetch}:any = useGetHorses({
        pagination:`?page=${pageNumber}`,
        queryKey:['page',pageNumber]
    })

    const isDataHere = Boolean(response?.data?.hourse) && isSuccess

    
    return (
        <Suspense>
            <div className='w-full h-[calc(100%-80px)]'>
                <PageHeader
                    title="stables horses"
                    addNewButtonLabel='add new horse'
                    
                />

                <HorsesPageContent 
                    isDataHere={isDataHere} 
                    response={response}
                    refetch={refetch}
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

export default HorsesPage