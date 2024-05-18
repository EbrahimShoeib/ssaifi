type InquiryPageLayoutProps = {
    courses:{
        headCells:string[],
        dataCellsOrder: string[],
        data:any[]
    },
    subTables:React.ReactNode[],
    itemInfos:any

    
}
function InquiryPageLayout({
    courses
}:InquiryPageLayoutProps) {
    return (
        <div className='h-[calc(100%-80px)] w-full flex flex-col'>
            
        </div>
    )
}

export default InquiryPageLayout