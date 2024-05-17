"use client"
import DailyPageInputs from '@/components/content/managment/daily/DailyPageInputs'
import PageHeader from '@/components/layout/PageHeader'
import { dailyRoute } from '@/constants/api'
import { useFailedPopUp } from '@/hooks/useFailedPopUp'
import { useGetClients } from '@/hooks/useGetClients'
import { useGetHorses } from '@/hooks/useGetHorses'
import { useGetInstructors } from '@/hooks/useGetInstructors'
import { useSuccessPopUp } from '@/hooks/useSuccessPopUp'
import { httpPatchService } from '@/services/httpPatchService'
import { statusCodeIndicator } from '@/utils/statusCodeIndicator'
import { toNameAndId } from '@/utils/toNameAndId'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useMutation } from 'react-query'

function EditDailyClassPage() {
    const [date,setDate] = useState<string>('')
    const [time,setTime] = useState<string>('')
    const [note,setNote] = useState<string>('')
    const [arena,setArena] = useState<string>('')
    const [price,setPrice] = useState<string>('')
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
    const {dailyId} = useParams()
    const dailyIdRoute = `${dailyRoute}/${dailyId}`

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
        mutationFn:async () => httpPatchService(dailyIdRoute,JSON.stringify(body)),
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
                        daily entry / 
                        <span className="text-primary">edit class</span> 
                    </span>
                )}
                showBackButton={true}
            />
            <DailyPageInputs
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
                submitButtonLabel="edit class"
                
            />
        </>
    )
}

export default EditDailyClassPage