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
        " 1",
        "2"
    ]

    
    const ChartMainColumns: ChartMainColumn[] = [
       
        {
            total:400,
            subCols:[
                {
                    title:"individual",
                    value:100,
                    color:"red"
                },
                {
                    title:"individual",
                    value:300,
                    color:"blue"
                },
            ]
        },
        {
            total:600,
            subCols:[
                {
                    title:"individual",
                    value:600,
                    color:"green"
                },
                {
                    title:"individual",
                    value:400,
                    color:"orange"
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