import { usePopUp } from "./usePopUp"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"

export const useSuccessPopUp = () => {
    const popUp = usePopUp()

    return (message?:string) => {
        popUp({
            popUpMessage:message || "process done successfully",
            popUpTitle:"success",
            popUpIcon:<IoMdCheckmarkCircleOutline />,
            showPopUp:true,
            popUpType:"alert"
        })
    }
}