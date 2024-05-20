import Chart from "@/components/shared/all/chart/Chart"



  
type DashboardChartsWidgetProps = {
    total:number,
    columns:number[]
}

function DashboardChartsWidget({total,columns}:DashboardChartsWidgetProps) {
    const yTitles = [
        '100',
        '40',
        '60',
        '80',
        '20'     
    ]
 
    const xTitles = [
        "medicines",
        "cafeterias",
        "inventories",
        "courses"
    ]

    return (
        <div className='h-full flex gap-7 flex-col bg-white border border-dark-grey border-opacity-30 rounded-lg p-4 w-full aw-2/3'>
            <div className='h-[35px] w-full flex justify-between items-center'>
                <p className='text-2xl text-dark-grey font-semibold'>sales</p>
            </div>
            <div className="flex-1 w-3/4">
                <Chart
                    total={total}
                    xTitles={xTitles}
                    yTitles={yTitles}
                    columns={columns}
                />  
            </div>
        </div>
    )
}

export default DashboardChartsWidget