"use client"

import PageContent from '@/components/layout/PageContent'
import PageHeader from '@/components/layout/PageHeader'
import NoDataFound from '@/components/shared/all/NoDataFound'
import { useGetHorses } from '@/hooks/useGetHorses'
import React, { useState } from 'react'

function page() {

    const [horses,setHorses] = useState<DropDownLink[]>([])

    useGetHorses({
        onSuccess (res) {
            const horses = res?.data?.hourse?.map((curr:any) => ({
                name:curr.hourseName,
                href:`/inquiry/horse/${curr._id}`
            }));
            setHorses(horses)
        }
    })
    return (
        <>
            <PageHeader
                title={"horse inquiry"}
                dropDownLinks={{
                    options:horses,
                    placeholder:"select horse"
                }}
            />
            <PageContent>
                <NoDataFound message='Select or search about horse name 
                to display horse inquiry'/>
            </PageContent>
        </>
    )
}

export default page