import SubTable from '@/components/shared/all/SubTable'
import { priceFormatter } from '@/utils/priceFormatter'
import React from 'react'

type DashboardCafeteriaWidgetProps = {
    cafeterias:any[]
}
function DashboardCafeteriaWidget({cafeterias}:DashboardCafeteriaWidgetProps) {

    

    const tableData =cafeterias?.length ? cafeterias?.map(item => ({
        name:item?.consumedItemName,
        payment:item?.consumedPayment,
        quantity:item?.consumedQuantity,
        price:(<span className='text-right block w-full'>
            {priceFormatter(String(item?.consumedPrice))}
        </span>)
    })) : []
    
    const links = cafeterias?.length ? cafeterias?.map(item =>`/sales/cafeteria/consumed-item/${item._id}/edit`) : []
    
    return (
        <div className='h-full flex flex-col overflow-hidden w-1/2 bg-white shadow-lg rounded-xl'>
            <p className='text-dark-grey mt-4 text-opacity-90 ml-4 text-lg font-semibold'>latest cafeteria orders</p>
            <div className='flex-1'>
                <SubTable
                    tableBodyItemCellKeys={["name","payment","quantity","price"]}
                    tableBodyItems={tableData}
                    tableHeadCells={["name","payment","quantity","price"]}
                    itemsHrefs={links}
                />
            </div>
        </div>
    )
}

export default DashboardCafeteriaWidget