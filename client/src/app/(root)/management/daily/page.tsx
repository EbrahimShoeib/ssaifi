"use client"

import PageHeader from '@/components/layout/PageHeader'
import Loader from '@/components/layout/Loader'
import PageContent from '@/components/layout/PageContent'
import PaginationButtons from '@/components/layout/PaginationButtons'
import Table from '@/components/layout/Table'
import { dailyRoute } from '@/constants/api'
import { httpGetServices } from '@/services/httpGetService'
import { getReadableDate } from '@/utils/getReadableDate'
import { priceFormatter } from '@/utils/priceFormatter'
import { useSearchParams } from 'next/navigation'
import React, { Suspense } from 'react'
import { useQuery } from 'react-query'

function DailyPage() {
        
    const searchParams = useSearchParams()
    const pageNumber = searchParams.get("page") || "1"

    const {data:response,isSuccess,refetch}:any = useQuery({
        queryFn:async () => httpGetServices(`${dailyRoute}?page=${pageNumber}`),
        queryKey:["management","daily",'page',pageNumber]
    })

    console.log(response);
    

    const isDataHere = Boolean(response?.caveteriaItems?.data) && isSuccess


    const tableHeadCells = [
        "course date",
        "course time",
        "client name",
        "horse name",
        "course",
        "price",
        "status",
        "arena",
        "instructor name",
        "membership",
        "paid",
        "note"  
    ]

    const tableBodyItemCellKeys = [
        "courseDate",
        "courseTime",   
        "clientId",
        "hourseId",
        "course",
        "price",
        "status",
        "arena",
        "instractorId",
        "membership",
        "paid",
        "note"
    ]

    const tableBodyItems = response?.caveteriaItems?.data.map((item:any) => ({
        ...item,
        courseDate:getReadableDate(item.courseDate),
        price:(<span className='text-right block w-full'>
            {priceFormatter(String(item.price))}
        </span>),

    }))   

    return (
        <Suspense>
            <PageHeader
                title={"daily entry"}
                addNewButtonLabel='add class'
            />
            <div className='h-[calc(100%-80px)] w-full'>
                <PageContent className='overflow-y-hidden pt-10'>
                    <Loader isLoading={!isDataHere}>
                        <Table
                            tableBodyItemCellKeys={tableBodyItemCellKeys} 
                            tableBodyItems={tableBodyItems} 
                            tableHeadCells={tableHeadCells} 
                            isCrud={true}
                            refetch={refetch}
                            route={dailyRoute}
                        />
                    </Loader>
                </PageContent>
                {
                    isDataHere ? (
                        <PaginationButtons
                            maxPages={response.caveteriaItems.max_pages}
                            currentPage={response.caveteriaItems.current_page}
                        />
                    ): <></>
                }
            </div>
        </Suspense>
    )
}

export default DailyPage