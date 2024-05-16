"use client"

import PackagesInputs from '@/components/content/sales/packages/PackagesInputs'
import PageHeader from '@/components/layout/PageHeader'
import { packagesRoute } from '@/constants/api'
import { useFailedPopUp } from '@/hooks/useFailedPopUp'
import { useGetClients } from '@/hooks/useGetClients'
import { usePopUp } from '@/hooks/usePopUp'
import { useSuccessPopUp } from '@/hooks/useSuccessPopUp'
import { httpGetServices } from '@/services/httpGetService'
import { httpPatchService } from '@/services/httpPatchService'
import { getIsoDate } from '@/utils/getIsoDate'
import { getPackageCategory } from '@/utils/getPackageCategory'
import { getPackageStatus } from '@/utils/getPackageStatus'
import { statusCodeIndicator } from '@/utils/statusCodeIndicator'
import { toNameAndId } from '@/utils/toNameAndId'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { MdErrorOutline } from 'react-icons/md'
import { useMutation } from 'react-query'

function PackageEditPage() {
    const [startDate,setStartDate] = useState<string>("")
    const [endDate,setEndDate] = useState<string>("")
    const [lessons,setLessons] = useState<string>("")

    const [status,setStatus] = useState<NameAndId>(null)
    const [category,setCategory] = useState<NameAndId>(null)

    const [client,setClient] = useState<NameAndId>(null)
    const [clients , setClients] = useState<NameAndId[]|[]>([])

    const [isLoading,setIsLoading] = useState<boolean>(true)

    const failedPopUp = useFailedPopUp()
    const successPopUp = useSuccessPopUp()
    const router = useRouter()
    const {packageId} = useParams()
    const packageIdRoute = `${packagesRoute}/${packageId}`

    const {mutate} = useMutation({
        mutationFn:async () => httpPatchService(packageIdRoute,JSON.stringify({
            category:category?.name||"no-category",
            lessons,
            startDate,
            endDate,
            status:status?.name,
            clientId:client?.id
        })),
        onSuccess:(res) => {
            const status = statusCodeIndicator(res.status_code) === "success" 
            
            if (status) {
                successPopUp("package updated successfully")
                router.push("/sales/packages")
            }else {
                failedPopUp(res.message)
            }
        },
        onError: () => failedPopUp()
    })

    useGetClients({
        onSuccess:(res)=>{
            const clients = toNameAndId(res?.data?.client,"username","_id")            
            setClients(clients)
        }
    })

    useEffect(()=>{
        const fetchPackageItem = async () => {
            const res = await httpGetServices(packageIdRoute)
            console.log(res);
            
            const itemData = res?.data?.packages
            
            if (Boolean(itemData)) {
                setCategory(getPackageCategory(itemData.category))
                setStatus(getPackageStatus(itemData.status))
                
                const client = itemData.clientId ? ({
                    name:itemData.clientId.username,
                    id:itemData.clientId._id
                }) : null
                setClient(client)
                setStartDate(getIsoDate(itemData.startDate))
                setEndDate(getIsoDate(itemData.endDate))
                setLessons(itemData.lessons)
                setIsLoading(false)
            }
        }
        fetchPackageItem()
    },[])


    return (
        <>
            <PageHeader
                title={(
                    <span>
                        stables packages /
                        <span className='text-primary'>edit package</span>
                    </span>
                )}
                showBackButton={true}
            />
            <PackagesInputs
                category={category}
                setCategory={setCategory}
                clients={clients}
                setClient={setClient}
                client={client}
                setEndDate={setEndDate}
                setLessons={setLessons}
                setStartDate={setStartDate}
                setStatus={setStatus}
                startDate={startDate}
                status={status}
                endDate={endDate}
                handleSubmit={mutate}
                isLoading={isLoading}
                lessons={lessons}
                submitButtonLabel="save package"
            />
        </>
    )
}

export default PackageEditPage