"use client"
import { useRef, useState } from "react"
import ChartXTitles from "./ChartXTitles"
import ChartYTitles from "./ChartYTitles"

type ChartProps = {
    yTitles:string[],
    xTitles:string[],
    total:number,
    columns:number[]
}

type currentData = {
    colPercent:number,
    xTitle:string
} | null
function Chart({
    yTitles,
    xTitles,
    total,
    columns
}:ChartProps) {
    const infosHolder = useRef<HTMLDivElement>(null)
    const [currentData,setCurrentData] = useState<currentData>(null)
    
    const moveCurrInfosHolder = (e:any) => {
        const containerRect = infosHolder.current?.parentElement?.getBoundingClientRect();
        if (containerRect) {
            const containerOffsetLeft = containerRect.left;
            const containerOffsetTop = containerRect.top;
        
            infosHolder.current?.animate({
                left:`${e.clientX-containerOffsetLeft}px`,
                top:`${e.clientY-containerOffsetTop}px`
            },{duration:100})
            infosHolder.current?.style?.setProperty('left', `${e.clientX-containerOffsetLeft}px`);
            infosHolder.current?.style?.setProperty('top', `${e.clientY-containerOffsetTop}px`);
        }
    }
     

    return (
        <div onMouseMove={moveCurrInfosHolder} className='w-full chart relative flex h-full'>

            <ChartYTitles yTitles={yTitles.reverse()}/>

            <div className='flex-1 flex pt-[10px] flex-col'>
                <div 
                    className='flex-1 grid'
                    style={{gridTemplateColumns:`repeat(${xTitles.length},1fr)`}}
                >
                    {
                        columns.map((col:number,idx:number)=>{
                            const colPercent = (col / total) * 100 || 0
                            const changeCurrData = () => setCurrentData({colPercent,xTitle:xTitles[idx]})
                            
                            return (
                                <div onMouseEnter={changeCurrData} key={idx} className='w-full hover:bg-light-grey duration-100 hover:bg-opacity-30 h-full'>
                                    <div className='h-full relative mx-auto w-[50px] bg-dark-grey bg-opacity-80'>
                                        <span style={{height:`${colPercent}%`}} className="w-full absolute bottom-0 left-0 block bg-blue-600 bg-opacity-80"/>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <ChartXTitles xTitles={xTitles}/>
            </div>

            <div ref={infosHolder} className="chart_info_holder hidden absolute p-1 w-fit pointer-events-none h-[60px] bg-smokey-white border-dark-grey border border-opacity-35 translate-x-[6%] translate-y-[6%]  rounded-lg overflow-hidden flex-col min-w-[140px] aspect-square">
                <p>{currentData?.xTitle}</p>
                <p className="text-nowrap">percent: {currentData?.colPercent.toFixed(2)}%</p>
            </div>
            
        </div>
    )
}






export default Chart