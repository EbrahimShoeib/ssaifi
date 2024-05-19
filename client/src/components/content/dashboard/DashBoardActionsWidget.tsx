import SubTable from '@/components/shared/all/SubTable'
import React from 'react'

function DashBoardActionsWidget() {
    const actions = [
        {
            name:"iam action",
            type:"add"
        }
    ]

    const links = [
        ""
    ]
    return (
        <div className='h-full overflow-hidden w-1/3 bg-white shadow-lg rounded-xl'>
            <p className='text-dark-grey mt-4 text-opacity-90 ml-4 text-lg font-semibold'>recent actions</p>
            <div>
                <SubTable
                    tableBodyItemCellKeys={["name","type"]}
                    tableBodyItems={actions}
                    tableHeadCells={["action","type"]}
                    itemsHrefs={links}
                />
            </div>
        </div>
    )
}

export default DashBoardActionsWidget