import GraphColumnSubColumns from "./ChartColumnSubColumns"
import ChartXTitles from "./ChartXTitles"
import ChartYTitles from "./ChartYTitles"

function Chart() {
    const yTitles = [
        "20",
        "40",
        "60",
        "80",
        "100",
    ]

    const xTitles = [
        "fuck",
        "lol"
    ]

    const ChartMainColumns: ChartMainColumn[] = [
       
        {
            total:400,
            subCols:[
                {
                    title:"individual",
                    value:80
                },
                {
                    title:"individual",
                    value:300
                },
            ]
        },
        {
            total:0,
            subCols:[
                {
                    title:"individual",
                    value:400
                },
                {
                    title:"individual",
                    value:300
                },
            ]
        },
    ]
     

    return (
        <div className='w-full flex h-full'>

            <ChartYTitles yTitles={yTitles.reverse()}/>

            <div className='flex-1 flex pt-[10px] flex-col'>
                <div 
                    className='flex-1 grid'
                    style={{gridTemplateColumns:`repeat(${xTitles.length},1fr)`}}
                >
                    {
                        ChartMainColumns.map((mainColumn:ChartMainColumn,idx:number)=>{
                            
                            return (
                                <div key={idx} className='w-full hover:bg-light-grey duration-100 hover:bg-opacity-50 h-full'>
                                    <div className='h-full relative mx-auto w-[50px] bg-dark-grey bg-opacity-80'>
                                        {
                                            <GraphColumnSubColumns mainColumn={mainColumn}/>
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <ChartXTitles xTitles={xTitles}/>
            </div>

        </div>
    )
}






export default Chart