"use client"

import SettingsPageContent from '@/components/content/profile/settings/SettingsPageContent'
import PageHeader from '@/components/layout/PageHeader'
import { BASE_URL, authRoute, getAdminRoute, updateAdminRoute, userAvatarUploadRoute } from '@/constants/api'
import { usePopUp } from '@/hooks/usePopUp'
import { useSuccessPopUp } from '@/hooks/useSuccessPopUp'
import { setUser } from '@/services/authServices'
import { httpGetServices } from '@/services/httpGetService'
import { httpPatchService } from '@/services/httpPatchService'
import { httpPostFormDataService } from '@/services/httpPostFormDataService'
import React, { useEffect, useState } from 'react'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'


function SettingsPage() {

    const [fullName,setFullName] = useState<string>('')
    const [mobile,setMobile] = useState<string>('')
    const [email,setEmail] = useState<string>('')
    const [avatar,setAvatar] = useState<string>('')
    const [address,setAddress] = useState<string>('')
    const [image,setImage] = useState<FormData>()
    const [isLoading,setIsLoading] = useState<boolean>(true)
    
    const successPopUp = useSuccessPopUp()
    const fetchData = async () => {
        const {data} = await httpGetServices(getAdminRoute)
        if (Boolean(data)) {
            setFullName(data.fullName)
            setEmail(data.email)
            setMobile(data.mobile)
            setAddress(data.address)
            setAvatar(`${BASE_URL}${authRoute}${data.avatar}`)
            setIsLoading(false)
            setUser(data)
        }
    }

    useEffect(()=>{
        fetchData()
    },[])

    const handleAdminUpdate =() => {
      
        setIsLoading(true)
        const updateAdminData = async() => {
            const res = await httpPatchService(updateAdminRoute,JSON.stringify({
                fullName,
                mobile,
                address,
                email
            }))
            
            const data = res.data
            if (Boolean(data)) {
                successPopUp("data updated successfully")
                const response = await httpPostFormDataService(userAvatarUploadRoute,image)
                if (Boolean(response.data)) {
                    fetchData()
                    successPopUp("avatar updated successfully")

                }
            }
        }
        updateAdminData()
    } 


    
    return (
        <>
            <PageHeader
                title={"settings"}
            />
            <SettingsPageContent
                fullName={fullName}
                setAddress={setAddress}
                setEmail={setEmail}
                setMobile={setMobile}
                setFullName={setFullName}
                address={address}
                avatar={avatar}
                email={email}
                mobile={mobile}
                handleAdminUpdate={handleAdminUpdate}
                image={image}
                setImage={setImage}
                isLoading={isLoading}
                setAvatar={setAvatar}
            />
        </>
    )
}




export default SettingsPage