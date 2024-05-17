const ChartXTitles = ({xTitles}:{xTitles:string[]}) => {
    return (
        <div  
            style={{gridTemplateColumns:`repeat(${xTitles.length},1fr)`}}
            className='relative grid h-[25px]'
        >
            <span className="h-[1px] w-[105%] absolute right-0 top-0 bg-dark-grey"/>

            {
                xTitles.map((cell:any,idx:number) => (
                    <div key={idx} className='h-full pt-1 text-sm font-semibold text-dark-grey text-center w-full'>
                        {cell}
                    </div>
                ))
            }
        </div>
    )
}
export default ChartXTitles