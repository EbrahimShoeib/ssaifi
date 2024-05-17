const GraphColumnSubColumns = ({mainColumn}:{mainColumn:ChartMainColumn}) => {
    const MainColValues = mainColumn.subCols
    .map((subCol:ChartSubColumn) => subCol.value)
    .sort((a, b) => a - b).reverse()

    return MainColValues.map((mainColValue,idx:number) => {
        const total = mainColumn.total
        const colValuePercent = total ? (mainColValue / total) * 100 : 100
        return (
            <div 
                style={{
                    height:`${colValuePercent}%`,
                    zIndex:idx+1,
                    background:["red","green","blue","purple","yellow",][Math.round(Math.random()* 4)],
                }} 
                key={idx}
                className={`absolute hover:text-opacity-100 text-opacity-0 duration-100 w-full text-smokey-white left-0 bottom-0`}
            >
                {colValuePercent}%
            </div>
        )
    })
}

export default GraphColumnSubColumns
