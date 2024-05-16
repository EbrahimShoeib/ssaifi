"use client"

import SchedulePageInputs from "@/components/content/managment/schedule/SchedulePageInputs"
import PageHeader from "@/components/layout/PageHeader"
import { useGetClients } from "@/hooks/useGetClients"
import { useGetHorses } from "@/hooks/useGetHorses"
import { useGetInstructors } from "@/hooks/useGetInstructors"
import { toNameAndId } from "@/utils/toNameAndId"
import { useEffect, useState } from "react"

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


    useEffect(()=>{
        if (Boolean(instructors.length && clients.length && horses.length))
            setIsLoading(false)
    },[instructors,clients,horses])

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
    const addNewItem = () => {

    }
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
                onSubmit={addNewItem}
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