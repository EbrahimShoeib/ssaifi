"use client"

import MembershipFamilyInputs from "@/components/content/sales/membership/MembershipFamilyInputs"
import PageHeader from "@/components/layout/PageHeader"
import { familyMembershipRoute } from "@/constants/api"
import { useFailedPopUp } from "@/hooks/useFailedPopUp"
import { usePopUp } from "@/hooks/usePopUp"
import { useSuccessPopUp } from "@/hooks/useSuccessPopUp"
import { httpGetServices } from "@/services/httpGetService"
import { httpPatchService } from "@/services/httpPatchService"
import { getIsoDate } from "@/utils/getIsoDate"
import { getMembershipStatus } from "@/utils/getMembershipStatus"
import { getMembershipType } from "@/utils/getMembershipType"
import { statusCodeIndicator } from "@/utils/statusCodeIndicator"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import { MdErrorOutline } from "react-icons/md"
import { useMutation } from "react-query"

function EditFamilyMembershipPage() {
    const [startDate,setStartDate] = useState<string>("")
    const [endDate,setEndDate] = useState<string>("")
    const [familyName,setFamilyName] = useState<string>("")
    const [members,setMembers] = useState<string>("")

    const [status,setStatus] = useState<NameAndId>(null)
    const [membershipType,setMembershipType] = useState<NameAndId>(null)

    const [isLoading,setIsLoading] = useState<boolean>(true)
    const failedPopUp = useFailedPopUp()
    const successPopUp = useSuccessPopUp()
    const router = useRouter()
    const {membershipId} = useParams()
    const familyMembershipIdRoute = `${familyMembershipRoute}/${membershipId}`

    const {mutate} = useMutation({
        mutationFn:async () => httpPatchService(familyMembershipIdRoute,JSON.stringify({
            famillyName:familyName,
            membershipTtpe:membershipType?.name,
            status:status?.name,
            startDate,
            endDate,
            members
           
        })),
        onSuccess:(res) => {
            const status = statusCodeIndicator(res.status_code) === "success" 
            
            if (status) {
                successPopUp("item updated successfully")
                router.push("/sales/membership/family")
            }else {
                failedPopUp(res.message)
            }
        },
        onError: () => failedPopUp()
    })


    useEffect(()=>{
        const fetchMembershipData = async () => {
            const membershipData = await httpGetServices(familyMembershipIdRoute) 
            const data = membershipData.data
            if (Boolean(data)) {
                console.log(data);
                setFamilyName(data.famillyName)
                setMembers(data.members)
                setStatus(getMembershipStatus(data.status))
                setMembershipType(getMembershipType(data.membershipTtpe))
                setStartDate(getIsoDate(data.startDate))
                setEndDate(getIsoDate(data.endDate))
                setIsLoading(false)
            }
            
        }
        fetchMembershipData()
    },[])
    return (
        <>
            <PageHeader
                showBackButton={true}
                title={(
                    <span>
                        stables membership /
                        <span className='text-primary'>edit family membership</span>
                    </span>
                )}
            />
            <MembershipFamilyInputs
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}
                status={status}
                setStatus={setStatus}
                membershipType={membershipType}
                setMembershipType={setMembershipType}
                handleSubmit={mutate}
                isLoading={isLoading}
                familyName={familyName}
                setFamilyName={setFamilyName}
                members={members}
                setMembers={setMembers}
                submitButtonLabel='save individual membership'
            />
        </>
    )
}

export default EditFamilyMembershipPage