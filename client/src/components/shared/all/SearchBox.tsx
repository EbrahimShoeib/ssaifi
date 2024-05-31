'use client'
import { httpGetServices } from '@/services/httpGetService'
import { useEffect, useState } from 'react'
import Spinner from './Spinner'
import { useDebounce } from 'use-debounce'



function SearchBox({
    searchUrl,
    listValue,
    label,
    setListValue,
    listClassName,
    BoxClassName,
    options,
    setResponse,
    placeholder
}:SearchBox) {
    const [showList,setShowList] = useState<boolean>(false)
    const [boxValue,setBoxValue] = useState<string>('')
    const [isLoading,setIsLoading] = useState<boolean>(false)
    
    const [debounceSearchInput] = useDebounce(boxValue,1000)

    const changeListValue = (value:NameAndId) => {        
        setListValue(value)        
        setShowList(false)
    }


    const handleInputOnChange = (e:any) => {
        setBoxValue(e?.target?.value)
        setIsLoading(true)
    }

    useEffect(()=>{
        const fetchClients = async () => {
            const res = await httpGetServices(`${searchUrl}?page=1&query=${debounceSearchInput}`)
            //const res = await httpGetServices(`${searchUrl}?page=1&query=${debounceSearchInput}`)

            if (Boolean(res)) {
                setResponse(res)
                setIsLoading(false)
            }
        }
        fetchClients()
        
    },[debounceSearchInput])

    useEffect(()=>{
        setBoxValue(listValue?.name||"")
    },[listValue])

    return (
        <div className='flex gap-5 w-full justify-between'>
            {
                label ? (
                    <div className='w-[150px] truncate text-md font-semibold flex justify-between items-center'>
                        <span>{label}</span>
                        <span>:</span>
                    </div>
                ) : <></>
            }

            <div className='w-fit flex-1 relative h-full'>
                <input 
                    className={`input w-full ${BoxClassName}`}
                    placeholder={placeholder||''}
                    value={boxValue}
                    onChange={handleInputOnChange}
                    type='text'
                    onClick={()=>setShowList(true)}
                />
                    

                {
                    showList ? (
                        <div onMouseLeave={()=> setShowList(false)} className="absolute flex items-center border-2 border-light-grey border-opacity-35 justify-center text-dark-grey z-50 min-h-11 bg-smokey-white left-0 rounded-lg max-h-[350px] overflow-auto h-fit w-full mt-2">
                            {
                                !isLoading ? (
                                    options.length ? (
                                        <ul className={`w-full flex flex-col ${listClassName}`}>
                                            {
                                                options.map((option:NameAndId,idx:number) => (
                                                    <li
                                                        onClick={()=>changeListValue(option)}
                                                        key={idx}
                                                        className="w-full flex items-center p-2 h-[30px] cursor-pointer hover:bg-zinc-300"
                                                    >
                                                        <p className="truncate">{option?.name}</p>
                                                    </li>
                                                )) 
                                            }
                                        </ul>
                                    ) : <p className='h-fit'>no data found</p>
                                ) : <div className='w-full h-[70px]'>
                                    <Spinner/>
                                </div>
                            }   
                            
                        </div>
                    ) : <></>
                }
            </div>
        </div>
    )
}

export default SearchBox