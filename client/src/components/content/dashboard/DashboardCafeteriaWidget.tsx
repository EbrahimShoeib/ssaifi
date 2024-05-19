import SubTable from '@/components/shared/all/SubTable'
import React from 'react'

function DashboardCafeteriaWidget() {


    const tableData = [
        {
            name:"iam action",
            item:"add",
            quantity:"4",
            price:"40$"
        }
    ]

    const links = [
        "",
        "",
        ""
    ]
    return (
        <div className='h-full flex flex-col overflow-hidden w-1/2 bg-white shadow-lg rounded-xl'>
            <p className='text-dark-grey mt-4 text-opacity-90 ml-4 text-lg font-semibold'>latest cafeteria orders</p>
            <div className='flex-1'>
                <SubTable
                    tableBodyItemCellKeys={["name","item","quantity","price"]}
                    tableBodyItems={tableData}
                    tableHeadCells={["name","item","quantity","price"]}
                    itemsHrefs={links}
                />
            </div>
        </div>
    )
}

export default DashboardCafeteriaWidget