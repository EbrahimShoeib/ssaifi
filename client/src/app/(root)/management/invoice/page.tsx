"use client"

import Loader from "@/components/layout/Loader"
import PageContent from "@/components/layout/PageContent"
import PageHeader from "@/components/layout/PageHeader"
import PaginationButtons from "@/components/layout/PaginationButtons"
import Table from "@/components/layout/Table"
import { invoiceRoute } from "@/constants/api"
import { httpGetServices } from "@/services/httpGetService"
import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import { Suspense } from "react"
import { GrAdd } from "react-icons/gr"
import { useQuery } from "react-query"

function InvoicePage() {
            
    const searchParams = useSearchParams()
    const pageNumber = searchParams.get("page") || "1"

    const {data:response,isSuccess,refetch}:any = useQuery({
        queryFn:async () => httpGetServices(`${invoiceRoute}?page=${pageNumber}`),
        queryKey:["management","schedule",'page',pageNumber]
    })   //keys are not valid   //keys are not valid
    const pathname = usePathname()
    const isDataHere = Boolean(response?.caveteriaItems?.data) && isSuccess


    const tableHeadCells = [
        "menu item name",
        "quantity",
        "type",
        "price",
        "date"   //keys are not valid   //keys are not valid
    ]

    const tableBodyItemCellKeys = [
        "menuItemName",
        "quantity",
        "type",
        "price",   //keys are not valid   //keys are not valid
        "date"
    ]

    const tableBodyItems = response?.caveteriaItems?.data

    return (
        <Suspense>
            <PageHeader
                title={"Invoices List"}
            >
                <Link
                    className='page_header_button' 
                    href={`${pathname}/add-invoice`} 
                >
                    <GrAdd />
                    <span>add invoice</span>
                </Link>
                <Link
                    className='page_header_button' 
                    href={`${pathname}/add-invoice-individual`} 
                >
                    <GrAdd />
                    <span>add individual invoice</span>
                </Link>
            </PageHeader>
            <div  className='h-[calc(100%-80px)] w-full'>
                <PageContent className='overflow-y-hidden pt-10'>
                    <Loader isLoading={!isDataHere}>
                        <Table
                            tableBodyItemCellKeys={tableBodyItemCellKeys} 
                            tableBodyItems={tableBodyItems} 
                            tableHeadCells={tableHeadCells} 
                            isCrud={true}
                            refetch={refetch}   //keys are not valid   //keys are not valid
                            route={invoiceRoute}
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

export default InvoicePage