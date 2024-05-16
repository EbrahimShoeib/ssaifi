"use client"
import React, { Suspense, useEffect, useState } from 'react'
import Avatar from '../shared/all/Avatar'
import Link from 'next/link'
import { GrAdd } from 'react-icons/gr'
import DropDownList from '../shared/all/DropDownList'
import BackButton from '../shared/all/BackButton'
import { usePathname } from 'next/navigation'


type PageHeaderProps = {
    dropDown?:{
        listValue:NameAndId,
        setListValue:(newValue:NameAndId) => void,
        options:NameAndId[]|[],
        placeholder:string,
        placeholderClassName?:string,
    },
    addNewButtonLabel?:string,
    title:any,
    showBackButton?:boolean,
    children?:any
}
function PageHeader({dropDown,children,addNewButtonLabel,title,showBackButton}:PageHeaderProps) {

    const pathname = usePathname()
    
    return (
        <Suspense>
            {
                true && (
                    <div className='w-full flex items-center h-[80px]'>
                        <div className='w-full flex justify-between items-center'>
                            <div className='flex items-center gap-5'>
                                {
                                    showBackButton ? (<BackButton/>) : <></>
                                }
                                <h4 className='text-smokey-white text-xl'>{title}</h4>
                            </div>

                            <div className='flex h-[30px] text-sm gap-5'>
                                
                                {
                                    Boolean(dropDown) ? (
                                        <div className='h-[30px] border-primary rounded-lg border'>
                                            <DropDownList
                                                listValue={dropDown?.listValue||null} 
                                                setListValue={dropDown?.setListValue || function(){}} 
                                                placeholder={dropDown?.placeholder||""}
                                                options={dropDown?.options||[]}
                                                placeholderClassName={`${dropDown?.placeholderClassName} min-w-[100px] px-4 py-2 text-smokey-white`}
                                            />
                                        </div>
                                    ) :<></>
                                }

                                {
                                    Boolean(addNewButtonLabel) ? (
                                        <Link
                                            className='page_header_button' 
                                            href={`${pathname}/add-new`} 
                                        >
                                            <GrAdd />
                                            <span>{addNewButtonLabel}</span>
                                        </Link>
                                    ) :<></>
                                }
                                {Boolean(children) && children}
                                <Avatar/>
                            </div>
                        </div>
                    </div>
                )
            }
        </Suspense>
    )
}

export default PageHeader