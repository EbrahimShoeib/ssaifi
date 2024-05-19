"use client"

import DashBoardActionsWidget from '@/components/content/dashboard/DashBoardActionsWidget'
import DashboardCafeteriaWidget from '@/components/content/dashboard/DashboardCafeteriaWidget'
import DashboardChartsWidget from '@/components/content/dashboard/DashboardChartsWidget'
import DashboardInquiryWidget from '@/components/content/dashboard/DashboardInquiryWidget'
import DashboardResourcesWidgets from '@/components/content/dashboard/DashboardResourcesWidgets'
import Loader from '@/components/layout/Loader'
import PageContent from '@/components/layout/PageContent'
import PageHeader from '@/components/layout/PageHeader'
import { useEffect, useState } from 'react'

function Dashboard() {

    const [isLoading,setIsLoading] = useState<boolean>(true)

    useEffect(()=>{
        setIsLoading(false)
    },[])


    return (
        <>
            <PageHeader
                title={"dashboard"}
            />
            <PageContent>
                <Loader isLoading={isLoading}>
                    <div className='w-full flex flex-col h-full p-6'>
                        <DashboardResourcesWidgets/>
                        <div className='my-9 flex gap-4 h-[300px]'>
                            <DashboardChartsWidget/>
                            <DashBoardActionsWidget/>
                        </div>
                        <div className='w-full flex gap-4 flex-1'>
                            <DashboardCafeteriaWidget/>
                            <DashboardInquiryWidget/>
                        </div>
                    </div>
                </Loader>
            </PageContent>
        </>
    )
}

export default Dashboard