"use client"

import CafeteriaConsumedInputs from "@/components/content/sales/cafeteria/CafeteriaConsumedInputs"
import PageHeader from "@/components/layout/PageHeader"
import { cafeteriaConsumedItemRoute } from "@/constants/api"
import { useFailedPopUp } from "@/hooks/useFailedPopUp"
import { useGetClients } from "@/hooks/useGetClients"
import { usePopUp } from "@/hooks/usePopUp"
import { useSuccessPopUp } from "@/hooks/useSuccessPopUp"
import { httpPostService } from "@/services/httpPostService"
import { statusCodeIndicator } from "@/utils/statusCodeIndicator"
import { toNameAndId } from "@/utils/toNameAndId"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import { MdErrorOutline } from "react-icons/md"
import { useMutation } from "react-query"

function AddNewConsumedItemPage() {
    const [itemName,setItemName] = useState<string>("")
    const [quantity,setQuantity] = useState<string>("")
    const [price,setPrice] = useState<string>("")
    const [payment,setPayment] = useState<NameAndId>(null)
    const [client,setClient] = useState<NameAndId>(null)
    const [date,setDate] = useState<string>("")
    const [clients,setClients] = useState<NameAndId[]|[]>([])
    const [isLoading,setIsLoading] = useState<boolean>(false)

    const failedPopUp = useFailedPopUp()
    const successPopUp = useSuccessPopUp()
    const router = useRouter()

    useGetClients({
        onSuccess:async (res) => {
            const resData = await res
            const data = resData.data.client
            if (Boolean(data)) {
                const clients = toNameAndId(data,"username","_id")
                setClients(clients)
            }
        }
    })

    const {mutate} = useMutation({
        mutationFn:async () => httpPostService(cafeteriaConsumedItemRoute,JSON.stringify({
            consumedItemName:itemName,
            consumedQuantity:quantity,
            consumedPrice:price,
            date,
            type:"not-type",
            clientId:client?.id,
            consumedPayment:payment?.name
        })),
        onSuccess:(res) => {
            const status = statusCodeIndicator(res.status_code) === "success" 
            
            if (status) {
                successPopUp("item added successfully")
                router.push("/sales/cafeteria/consumed-item")
            }else {
                failedPopUp(res.message)
            }
        },
        onError: () => failedPopUp()
    })

    return (
        <>
            <PageHeader
                title={(
                    <span>
                        stables cafeteria / 
                        <span className="text-primary"> add consumed item</span> 
                    </span>
                )}
                showBackButton={true}
            />
            <CafeteriaConsumedInputs
                handleSubmit={mutate}
                itemName={itemName}
                setItemName={setItemName}
                quantity={quantity}
                setQuantity={setQuantity}
                price={price}
                setPrice={setPrice}
                date={date}
                setDate={setDate}
                isLoading={isLoading}
                client={client}
                setClient={setClient}
                payment={payment}
                setPayment={setPayment}     
                clients={clients}
                submitButtonLabel="add consumed item"
            />
        </>
    )
}

export default AddNewConsumedItemPage