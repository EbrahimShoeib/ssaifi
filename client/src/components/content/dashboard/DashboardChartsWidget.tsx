import Chart from "@/components/shared/all/chart/Chart"



  


function DashboardChartsWidget() {
    return (
        <div className='h-full flex gap-7 flex-col bg-white border border-dark-grey border-opacity-30 rounded-lg p-4 w-2/3'>
            <div className='h-[35px] w-full flex justify-between items-center'>
                <p className='text-2xl text-dark-grey font-semibold'>sales</p>
            </div>
            <div className="flex-1">
                <Chart/>
                
            </div>
        </div>
    )
}

export default DashboardChartsWidget