function ChartYTitles({yTitles}:{yTitles:string[]}) {

    
    return (
        <div className='w-fit h-full relative pt-[10px] pb-[25px]'>
            <div className={`min-w-[40px] pr-2 h-full grid grid-rows-[repeat(${yTitles.length},1fr)]`}>
                {
                    yTitles.map((cell:any,idx:number) => (
                        <div key={idx} className='h-full  text-dark-grey opacity-70 text-right w-full'>
                            <span className="-translate-y-1/2 block">{cell}</span>
                        </div>
                    ))
                }
            </div>
            <span className="w-[1px] h-[105%] absolute right-0 -bottom-[3%] bg-dark-grey"/>
        </div>
    )
}

export default ChartYTitles