"use client"

import SchedulePageInputs from "@/components/content/managment/schedule/SchedulePageInputs"
import PageHeader from "@/components/layout/PageHeader"
import { scheduleRoute } from "@/constants/api"
import { useFailedPopUp } from "@/hooks/useFailedPopUp"
import { useGetClients } from "@/hooks/useGetClients"
import { useGetHorses } from "@/hooks/useGetHorses"
import { useGetInstructors } from "@/hooks/useGetInstructors"
import { useSuccessPopUp } from "@/hooks/useSuccessPopUp"
import { httpGetServices } from "@/services/httpGetService"
import { httpPatchService } from "@/services/httpPatchService"
import { getCafeteriaPayment } from "@/utils/getCafeteriaPayment"
import { getMembershipStatus } from "@/utils/getMembershipStatus"
import { getMembershipType } from "@/utils/getMembershipType"
import { statusCodeIndicator } from "@/utils/statusCodeIndicator"
import { toNameAndId } from "@/utils/toNameAndId"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useMutation } from "react-query"

function EditScheduleClassPage() {

    const [date,setDate] = useState<string>('')
    const [time,setTime] = useState<string>('')
    const [note,setNote] = useState<string>('')
    const [arena,setArena] = useState<string>('')
    const [price,setPrice] = useState<string>('')
    const [confirmation,setConfirmation] = useState<string>("")
    const [membershipStatus,setMembershipStatus] = useState<NameAndId>(null)
    const [client,setClient] = useState<NameAndId>(null)
    const [instructor,setInstructor] = useState<NameAndId>(null)
    const [horse,setHorse] = useState<NameAndId>(null)
    const [membership,setMembership] = useState<NameAndId>(null)
    const [payment,setPayment] = useState<NameAndId>(null)
    const [clients,setClients] = useState<NameAndId[]|[]>([])
    const [horses,setHorses] = useState<NameAndId[]|[]>([])
    const [instructors,setInstructors] = useState<NameAndId[]|[]>([])

    const [isLoading,setIsLoading] = useState<boolean>(true)

    const {scheduleId}= useParams()
    const scheduleIdRoute = `${scheduleRoute}/${scheduleId}`

    const body = {
        courseDate:date,
        courseTime:time,
        note,
        arena,
        price,
        status:membershipStatus?.id,
        clientId:client?.id,
        instractorId:instructor?.id,
        hourseId:horse?.id,
        membership:membership?.id,
        paid:payment?.id,
    }

    const failedPopUp = useFailedPopUp()
    const successPopUp = useSuccessPopUp()
    const router = useRouter()


    useEffect(()=>{
        const fetchDailyData = async () => {
            const res = await httpGetServices(scheduleIdRoute)
            const data = res.data
            if (Boolean(data)) {
                setDate(data?.courseDate)
                setTime(data?.courseTime)
                setNote(data?.note)
                setArena(data?.arena)
                setPrice(data?.price)
                setMembershipStatus(getMembershipStatus(data?.status))
                const client = Boolean(data?.clientId) ? ({
                    name:data?.clientId?.username,
                    id:data?.clientId?._id
                }) : null
                setClient(client)
                const instructor = Boolean(data?.instractorId) ? ({
                    name:data?.instractorId?.instractorName,
                    id:data?.instructorId?._id
                }) : null
                setInstructor(instructor)
                const horse = Boolean(data?.hourseId) ? ({
                    name:data?.hourseId?.hourseName,
                    id:data?.hourseId?._id
                }) : null
                setHorse(horse)
                setMembership(getMembershipType(data?.membership))
                setPayment(getCafeteriaPayment(data?.paid))
                setConfirmation(data?.Confitmation)
            }
        }
        fetchDailyData()
    },[])

    useGetInstructors({
        onSuccess: async (res) => {
            const instructors = toNameAndId(res?.data?.instractor,"instractorName","_id")
            setInstructors(instructors)            
        }
    })

    useGetClients({
        onSuccess: async (res) => {
            const clients = toNameAndId(res?.data?.client,"username","_id")
            setClients(clients)            
        }
    })

    useGetHorses({
        onSuccess: async (res) => {
            const horses = toNameAndId(res?.data?.hourse,"hourseName","_id")
            setHorses(horses)            
        }
    })
    
    const {mutate} = useMutation({
        mutationFn:async () => httpPatchService(scheduleIdRoute,JSON.stringify(body)),
        onSuccess:async(res)=> {
            const status = statusCodeIndicator(res.status_code) === "success" 
            
            if (status) {
                successPopUp("class updated successfully")
                router.push("/management/daily")
            
            }else {
                failedPopUp(res.message)
            }
        },
        onError:()=> {
            failedPopUp()
        }
    })
    return (
        <>
            <PageHeader
                title={(
                    <span>
                        Up-coming Schedules / 
                        <span className="text-primary">edit class</span> 
                    </span>
                )}
                showBackButton={true}
            />
            <SchedulePageInputs
                isLoading={isLoading}
                date={date}
                setDate={setDate}
                time={time}
                setTime={setTime}
                note={note}
                setNote={setNote}
                arena={arena}
                setArena={setArena}
                membershipStatus={membershipStatus}
                setMembershipStatus={setMembershipStatus}
                client={client}
                setClient={setClient}
                instructor={instructor}
                setInstructor={setInstructor}
                membership={membership}
                setMembership={setMembership}
                payment={payment}
                setPayment={setPayment}
                clients={clients}
                horses={horses}
                instructors={instructors}
                horse={horse}
                setHorse={setHorse}
                onSubmit={mutate}
                price={price}
                setPrice={setPrice}                
                submitButtonLabel="save class"
                confirmation={confirmation}
                setConfirmation={setConfirmation}
                
            />
        </>
    )
}

export default EditScheduleClassPage