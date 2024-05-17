import Link from 'next/link'
import React from 'react'
import { GrAdd } from 'react-icons/gr'

type Widget = {
    title:string,
    href:string,
    count:number,
}
function DashboardResourcesWidgets() {



    const widgets :Widget[]= [
        {
            title:"clients",
            href:"/clients",
            count:0
        },
        {
            title:"horses",
            href:"/horses",
            count:0
        },
        {
            title:"instructors",
            href:"/instructors",
            count:0
        },
    ]

    return (
        <div className='w-full flex justify-between gap-4 h-[85px]'>
            {
                widgets.map((widget:Widget,idx:number)=> (
                    <div key={idx} className='shadow-center bg-white flex justify-between w-1/3 px-5 py-4 rounded-2xl bg-red h-full '>
                        <div className='font-semibold text-dark-grey'>
                            <p className='text-xl'>{widget.title}</p>
                            <div className='text-sm flex'>
                                <p className='text-light-grey mr-1'>total : </p>
                                <p> {widget.count}</p>
                            </div>
                        </div>
                        <Link href={`/resources${widget.href}/add-new`}>
                            <GrAdd className='bg-primary text-smokey-white block w-[25px] h-[25px] p-1 rounded-md'/>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default DashboardResourcesWidgets