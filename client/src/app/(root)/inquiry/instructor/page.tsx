"use client"

import PageContent from '@/components/layout/PageContent'
import PageHeader from '@/components/layout/PageHeader'
import NoDataFound from '@/components/shared/all/NoDataFound'
import { useGetInstructors } from '@/hooks/useGetInstructors'
import React, { useState } from 'react'

function InstructorInquiry() {

    const [instructors,setInstructors] = useState<DropDownLink[]>([])

    useGetInstructors({
        onSuccess (res) {
            const instructors = res?.data?.instractor?.map((curr:any) => ({
                name:curr.instractorName,
                href:`/inquiry/instructor/${curr._id}`
            }));
            setInstructors(instructors)
        }
    })


    return (
        <>
            <PageHeader
                title={"instructor inquiry"}
                dropDownLinks={{
                    options:instructors,
                    placeholder:"select instructor"
                }}
            />
            <PageContent>
                <NoDataFound message='Select or search about Instructor name 
                to display instructor inquiry'/>
            </PageContent>
        </>
    )
}

export default InstructorInquiry