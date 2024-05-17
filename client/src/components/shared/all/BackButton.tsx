"use client"

import { useRouter } from 'next/navigation'
import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'


function BackButton() {

    const router = useRouter()

    const handleGoBack = () => {
        router.back()
    }

    return (
        <button className='w-[30px] hover:bg-primary duration-100 hover:text-smokey-white text-lg bg-opacity-60 text-dark-grey bg-zinc-300 rounded-full flex justify-center items-center aspect-square' onClick={handleGoBack}>
            <IoIosArrowBack />
        </button>
    )
}

export default BackButton