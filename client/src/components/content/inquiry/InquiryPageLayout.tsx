import Loader from "@/components/layout/Loader"
import InquiryLayoutInfo from "./InquiryLayoutInfo"
import Table from "@/components/layout/Table"
import { priceFormatter } from "@/utils/priceFormatter"

type InquiryPageLayoutProps = {
    courses:{
        headCells:string[],
        dataCellsOrder: string[],
        data:any[]
    },
    subTables?:any[],
    item:InquiryLayoutItemInfos,
    isLoading:boolean
}
function InquiryPageLayout({
    courses,
    subTables,
    item,
    isLoading,
}:InquiryPageLayoutProps) {

    const inquiryCourses = courses?.data?.map((item:any) => ({
        ...item,
        instractorId:item?.instractorId?.instractorName||"no-instructor",
        clientId:item?.clientId?.username || "no-hourse",
        hourseId:item?.hourseId?.hourseName || "no-hourse",
        courseDate:item?.courseDate,
        price:<span className="text-right">
            {priceFormatter(item?.price)}
            </span>,
        course:item?.course?.name || "no-course",
    }))
    //console.log(courses);
    
    return (
        <div className='h-[calc(100%-80px)] gap-4 w-full flex flex-col'>
            <Loader isLoading={isLoading}>
                <InquiryLayoutInfo item={item}/>
                <div className="flex-1 flex flex-col">
                    <p className="text-primary mb-3 text-lg">courses</p>
                    <div 
                        style={{height:subTables?.length ? "0":"250px"}}
                        className="w-full rounded-2xl overflow-hidden flex-1 bg-smokey-white"
                    >
                        <Table
                            isCrud={false}
                            tableHeadCells={courses?.headCells}
                            tableBodyItemCellKeys={courses?.dataCellsOrder}
                            tableBodyItems={inquiryCourses}
                            
                        />
                    </div>
                </div>
                {
                    Boolean(subTables?.length) ? (

                        <div className="justify-between flex gap-5">
                            {
                                subTables?.map((subTable,idx) => (
                                    <div 
                                        style={{width:`calc(98%/${subTables.length})`}}
                                        key={idx}
                                    >
                                        <p className="text-primary mb-3 text-lg">{subTable?.title}</p>
                                        <div className="h-[230px] bg-smokey-white rounded-2xl overflow-hidden">
                                            <div className="h-full overflow-auto">
                                                {subTable?.table}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    ) : <></>
                }

            </Loader>
        </div>
    )
}

export default InquiryPageLayout