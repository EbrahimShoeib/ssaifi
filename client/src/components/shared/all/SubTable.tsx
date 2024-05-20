import Link from "next/link"

type SubTableProps = {
    tableBodyItems:any[]|[],
    tableHeadCells:string[]|[],
    tableBodyItemCellKeys:string[]|[],
    itemsHrefs?:any[]|[]
}

function SubTable({
    tableBodyItems,
    tableHeadCells,
    tableBodyItemCellKeys,
    itemsHrefs
}:SubTableProps) {
    return (
        <div className="overflow-auto relative w-full h-full">
            <table className='w-full capitalize mt-5 table-auto border-collapse'>
                <thead className="h-[40px] border-dark-grey border-b-[1px] border-opacity-20 relative">
                    <tr>
                        {
                            tableHeadCells?.map((cell:string,idx:number)=> (
                                <th key={idx} className="text-dark-grey px-5 text-opacity-70 text-left">
                                    {cell}
                                </th>
                            ))
                        }
                        
                        {
                            itemsHrefs?.length ? (<th className="w-[100px] px-5"></th>) :<></>
                        }
                    </tr>
                    
                </thead>
                <tbody>
                    {
                        tableBodyItems?.map((tableItem:any,index:number) => {
                            return(
                                <tr 
                                    key={index} 
                                    className="h-[60px] text-sm text-opacity-65 text-light-grey p-5 relative"
                                >
                                    {
                                        tableBodyItemCellKeys.map((key:any,idx:number) => (
                                            <td key={idx} className="px-5">
                                                {tableItem[key]}
                                            </td>
                                        ))
                                    }
                                    {
                                        itemsHrefs?.length ? (<td className="px-5 text-right">
                                            <Link className=" text-primary" href={itemsHrefs[index]}>view</Link>
                                        </td>) :<></>
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>      
            </table>
        </div>
    )
}

export default SubTable