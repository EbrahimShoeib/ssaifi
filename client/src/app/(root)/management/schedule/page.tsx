"use client"

import PageHeader from '@/components/layout/PageHeader'
import Loader from '@/components/layout/Loader'
import PageContent from '@/components/layout/PageContent'
import PaginationButtons from '@/components/layout/PaginationButtons'
import Table from '@/components/layout/Table'
import { scheduleRoute } from '@/constants/api'
import { httpGetServices } from '@/services/httpGetService'
import { getReadableDate } from '@/utils/getReadableDate'
import { priceFormatter } from '@/utils/priceFormatter'
import { useSearchParams } from 'next/navigation'
import React, { Suspense } from 'react'
import { useQuery } from 'react-query'

function SchedulePage() {
        
    const searchParams = useSearchParams()
    const pageNumber = searchParams.get("page") || "1"

    const {data:response,isSuccess,refetch}:any = useQuery({
        queryFn:async () => httpGetServices(`${scheduleRoute}?page=${pageNumber}`),
        queryKey:["management","schedule",'page',pageNumber]
    })   //keys are not valid   //keys are not valid
    
    const isDataHere = Boolean(response?.caveteriaItems?.data) && isSuccess


    const tableHeadCells = [
        "course date",
        "course time",
        "client name",
        "horse name",
        "course"   //keys are not valid   //keys are not valid
    ]

    const tableBodyItemCellKeys = [
        "menuItemName",
        "quantity",
        "type",
        "price",   //keys are not valid   //keys are not valid
        "date"
    ]

    const tableBodyItems = response?.caveteriaItems?.data.map((item:any) => ({
        ...item,
        date:getReadableDate(item.date),
        price:(<span className='text-right block w-full'>
            {priceFormatter(String(item.price))}
        </span>)
    }))   //keys are not valid   //keys are not valid

    return (
        <Suspense>
            <PageHeader
                title={"Up-coming Scheduals"}
                addNewButtonLabel='add class'
            />
            <div  className='h-[calc(100%-80px)] w-full'>
                <PageContent className='overflow-y-hidden pt-10'>
                    <Loader isLoading={!isDataHere}>
                        <Table
                            tableBodyItemCellKeys={tableBodyItemCellKeys} 
                            tableBodyItems={tableBodyItems} 
                            tableHeadCells={tableHeadCells} 
                            isCrud={true}
                            refetch={refetch}   //keys are not valid   //keys are not valid
                            route={scheduleRoute}
                        />
                    </Loader>
                </PageContent>
                {
                    isDataHere ? (
                        <PaginationButtons
                            maxPages={response.caveteriaItems.max_pages}
                            currentPage={response.caveteriaItems.current_page}
   //keys are not valid   //keys are not valid
                        />
                    ): <></>
                }
            </div>
        </Suspense>
    )
}

export default SchedulePage