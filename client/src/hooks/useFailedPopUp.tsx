import { MdErrorOutline } from "react-icons/md"
import { usePopUp } from "./usePopUp"

export const useFailedPopUp = () => {
    const popUp = usePopUp()

    return (message?:string) => {
        popUp({
            popUpMessage:message || "process failed, try again",
            popUpTitle:"failed",
            popUpIcon:<MdErrorOutline />,
            showPopUp:true,
            popUpType:"alert"
        })
    }
}