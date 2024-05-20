"use client"

import DashBoardActionsWidget from '@/components/content/dashboard/DashBoardActionsWidget'
import DashboardCafeteriaWidget from '@/components/content/dashboard/DashboardCafeteriaWidget'
import DashboardChartsWidget from '@/components/content/dashboard/DashboardChartsWidget'
import DashboardInquiryWidget from '@/components/content/dashboard/DashboardInquiryWidget'
import DashboardResourcesWidgets from '@/components/content/dashboard/DashboardResourcesWidgets'
import Loader from '@/components/layout/Loader'
import PageContent from '@/components/layout/PageContent'
import PageHeader from '@/components/layout/PageHeader'
import { dashboardRoute } from '@/constants/api'
import { httpGetServices } from '@/services/httpGetService'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'

function Dashboard() {

    const [isLoading,setIsLoading] = useState<boolean>(true)

    useEffect(()=>{
        setIsLoading(false)
    },[])

    const {data:response} = useQuery({
        queryKey:['dashboard'],
        queryFn:async ()=> httpGetServices(dashboardRoute)
    })
    const data = response?.data
    const columns:number[] = [
        data?.totalMedicine,
        data?.totalCafeteria,
        data?.totalInventory,
        data?.totalCourse
    ]
    const columnsTotals = columns.reduce((acc,curr) => acc + curr,0)
console.log(data);

    
    return (
        <>
            <PageHeader
                title={"dashboard"}
            />
            <PageContent>
                <Loader isLoading={isLoading}>
                    <div className='w-full flex flex-col h-full p-6'>
                        <DashboardResourcesWidgets
                            clientsQty={data?.totalClients}
                            horsesQty={data?.totalHourse}
                            instructorsQty={data?.totalInstructor}
                        />
                        <div className='my-9 flex gap-4 h-[300px]'>
                            <DashboardChartsWidget
                                columns={columns}
                                total={columnsTotals}
                            />
                            <DashBoardActionsWidget/>
                        </div>
                        <div className='w-full flex gap-4 flex-1'>
                            <DashboardCafeteriaWidget/>
                            <DashboardInquiryWidget
                                items={data?.mostActiveClients}
                            />
                        </div>
                    </div>
                </Loader>
            </PageContent>
        </>
    )
}

export default Dashboard