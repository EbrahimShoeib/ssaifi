'use client'

import Link from "next/link"
import { useState } from "react"
import { TiArrowSortedDown } from "react-icons/ti"



function DropDownLinks({options,placeholder,placeholderClassName,listClassName}:DropDownLinksProps) {
    const [showList,setShowList] = useState<boolean>(false)
    
    const toggleList = () => {
        setShowList(!showList)
    }

    return (
        <div className='w-full relative h-full'>
            <div role="button" onClick={toggleList} className={`w-full overflow-hidden truncate flex gap-1 justify-between items-center h-full ${placeholderClassName}`}>
                <span className="truncate">{placeholder}</span>
                <TiArrowSortedDown className={`text-md "text-primary inline-block rotate-180"}`} />
            </div>

            {
                showList && (options.length > 0) ? (
                    <div className="absolute z-50 left-0 rounded-lg border-2 max-h-[350px] overflow-auto h-fit w-full mt-4">
                        <ul className={`w-full bg-smokey-white flex flex-col ${listClassName}`}>
                            {
                                options.map((option:DropDownLink,idx:number) => (
                                    <Link
                                        key={idx}
                                        className="w-full flex items-center p-2 h-[30px] cursor-pointer hover:bg-zinc-300"
                                        href={option?.href}
                                    >
                                        <p className="truncate">{option?.name}</p>
                                    </Link>
                                ))
                            }
                        </ul>
                    </div>
                ) : <></>
            }
        </div>
    )
}

export default DropDownLinks