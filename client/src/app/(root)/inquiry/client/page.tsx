"use client"

import PageContent from '@/components/layout/PageContent'
import PageHeader from '@/components/layout/PageHeader'
import NoDataFound from '@/components/shared/all/NoDataFound'
import { useGetClients } from '@/hooks/useGetClients'
import React, { useState } from 'react'

function page() {

    const [clients,setClients] = useState<DropDownLink[]>([])

    useGetClients({
        onSuccess (res) {
            const clients = res?.data?.client?.map((curr:any) => ({
                name:curr.username,
                href:`/inquiry/client/${curr._id}`
            }));
            setClients(clients)
        }
    })
    return (
        <>
            <PageHeader
                title={"client inquiry"}
                dropDownLinks={{
                    options:clients,
                    placeholder:"select client"
                }}
            />
            <PageContent>
                <NoDataFound message='Select or search about client name 
                to display client inquiry'/>
            </PageContent>
        </>
    )
}

export default page