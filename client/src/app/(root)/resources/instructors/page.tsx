"use client"

import InstructorsPageContent from '@/components/content/resources/instructors/InstructorsPageContent'
import PageHeader from '@/components/layout/PageHeader'
import PaginationButtons from '@/components/layout/PaginationButtons'
import { instructorsRoute } from '@/constants/api'
import { useGetInstructors } from '@/hooks/useGetInstructors'
import { httpGetServices } from '@/services/httpGetService'
import { toNameAndId } from '@/utils/toNameAndId'
import { useSearchParams } from 'next/navigation'
import React, { Suspense, useState } from 'react'
import { useQuery } from 'react-query'

function InstructorsPage() {


    const searchParams = useSearchParams()
    const pageNumber = searchParams.get("page") || "1"

    const [listValue,setListValue] = useState<any>(null)

    const {data:response,isSuccess,refetch} = useQuery({
        queryKey:["instructors","page",pageNumber],
        queryFn:async () => httpGetServices(`${instructorsRoute}?page=${pageNumber}`)
    })
    useGetInstructors({
        pagination:`?page=${pageNumber}`,
        queryKey:["page"]
    })

    const isDataHere = Boolean(response?.data?.instractor) && isSuccess

    let listOptions = isDataHere ? toNameAndId(response.data.instractor,"instractorName","_id"): []
    
    return (
        <Suspense>
            <div className='w-full h-[calc(100%-80px)]'>
                <PageHeader
                    title={"stables instructors"}
                    dropDown={{
                        options:listOptions,
                        listValue,
                        setListValue,
                        placeholder:"select instructor"
                    }}
                    addNewButtonLabel='add new instructor'
                />
                
                <InstructorsPageContent
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
export default InstructorsPage