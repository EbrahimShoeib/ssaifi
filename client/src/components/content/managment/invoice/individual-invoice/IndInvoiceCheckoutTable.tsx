import DropDownList from '@/components/shared/all/DropDownList'
import Input from '@/components/shared/all/Input'
import React from 'react'


type IndInvoiceCheckoutTableProps = {
    horses:NameAndId[]|[],
    horse:NameAndId,
    setHorse:(newHorse:NameAndId)=>void,
    checkoutDate:string,
    setCheckoutDate:(newDate:string)=>void,
    debit:string,
    setDebit:(newPrice:string)=>void,
    description:string,
    setDescription:(newDescription:string)=>void,
    courses:any[],
    discount:string,
    setDiscount:(newState:string)=> void,
}
function IndInvoiceCheckoutTable({
    horses,
    horse,
    setHorse,
    checkoutDate,
    debit,
    description,
    setCheckoutDate,
    setDebit,
    setDescription,
    courses,
    discount,
    setDiscount,
}:IndInvoiceCheckoutTableProps) {
    const coursesTotal:number = courses.reduce((acc:any,curr:any)=> +acc.price + +curr.price,0)

    const cells = [
        {
            title:"lessons",
            value:courses.length
        },
        {
            title:"discount",
            value:<Input
                    type='number'
                    value={discount}
                    setValue={setDiscount}
                    className='input w-[60px] !border-0 p-1 h-[20px] bg-smokey-white'
                />
        },
        {
            title:"Sub-Total",
            value:(coursesTotal * 84 ) / 100
        },
        {
            title:"tax 16(%)",
            value:(coursesTotal * 16 ) / 100,
        },
        {
            title:"Total",
            value:coursesTotal
        }
    ]

    return (
        <div className='w-full flex flex-1 flex-col justify-between'>
            <div>
                <div className='h-[50px] px-2 grid items-center grid-cols-[repeat(4,1fr)] rounded-full bg-dark-grey'>
                    {
                        [
                            "horse name",
                            "description",
                            "horse name",
                            "debit"
                        ].map((cell:string,idx:number)=> (
                            <p className='text-lg pl-5 text-smokey-white' key={idx}>
                                {cell}
                            </p>
                        ))
                    }
                </div>
                <div className='grid items-center grid-cols-[repeat(4,1fr)] gap-5 border-b py-5 border-dark-grey border-opacity-40 '>
                    <Input
                        type='date'
                        setValue={setCheckoutDate}
                        value={checkoutDate}
                        className='input w-[170px]'
                        placeholder='date'
                    />
                    <Input
                        type='text'
                        setValue={setDescription}
                        value={description}
                        className='input w-[170px]'
                        placeholder='description'
                    />
                    <div className='w-[170px]'>
                        <DropDownList
                            listValue={horse}
                            options={horses}
                            placeholder='horse name'
                            setListValue={setHorse}
                            placeholderClassName='input '
                        />
                    </div>
                    <Input
                        type='text'
                        setValue={setDebit}
                        value={debit}
                        className='input w-[170px]'
                        placeholder='debit'
                    />
                </div>

            </div>
            <div className='h-[150px] items-center grid grid-cols-[repeat(5,1fr)] p-7 bg-light-grey bg-opacity-30 rounded-2xl'>
                {
                    cells.map((cell:any,idx:number)=> (
                        <div key={idx} className='flex w-full gap-6 flex-col items-center'>
                            <p>{cell.title}</p>
                            <div>{cell.value}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default IndInvoiceCheckoutTable