"use client"

import { BASE_URL, authRoute } from '@/constants/api'
import { getUser } from '@/services/authServices'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { IoMdSettings } from 'react-icons/io'
import { TiArrowSortedDown } from 'react-icons/ti'

type AvatarImageProps = {
    onClick?:()=>void,
    user:any
}

const AvatarImage = ({onClick,user}:AvatarImageProps) => {
    return (
        <div onClick={onClick && onClick} className='w-[30px] flex justify-center items-center bg-zinc-400 aspect-square overflow-hidden rounded-full '>
            {
                Boolean(user?.avatar) ?
                (<img 
                    className='w-full h-full object-cover' 
                    src={`${BASE_URL}${authRoute}${user?.avatar||""}`} 
                    alt="img" 
                />) :
                (<p className='text-2xl uppercase text-smokey-white'>{user?.fullName?.[0] || ""}</p>)
            }
        </div>
    )
}

function Avatar() {

    const [showAccInfo,setShowAccInfo] = useState<boolean>(false)
    const [user,setUser] = useState<any>({})
    
    useEffect(()=>{
        setUser(getUser())
    },[])
    
    const toggleAccInfo = () => {
        setShowAccInfo(!showAccInfo)
    }
    return (
        <div className='relative '>
            <div className='flex items-center gap-2'>
                <AvatarImage onClick={toggleAccInfo} user={user}/>
                <TiArrowSortedDown onClick={toggleAccInfo} className='text-xl text-primary' />
            </div>
            {
                showAccInfo && (
                    <div className='w-[250px] flex flex-col p-3 absolute shadow-xl top-[50px] right-0 z-50 h-[200px] bg-smokey-white rounded-2xl'>
                        
                        <div className='flex-1 flex-col flex justify-center items-center'>
                            <div className='w-fit h-fit rounded-full border-2 border-primary'>
                                <AvatarImage user={user}/>
                            </div>
                            <p className='font-bold text-dark-grey mt-2 text-lg truncate '>{user?.fullName}</p>
                            <p className='text-primary text-sm'>{user?.isAdmin && "admin"}</p>
                        </div>

                        <div className='h-[40px] flex pt-3 items-center border-t border-t-light-grey border-opacity-40'>
                            <Link href="/profile/settings" className='text-dark-grey flex items-center gap-2 text-lg'>
                                <IoMdSettings/>
                                settings
                            </Link>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Avatar