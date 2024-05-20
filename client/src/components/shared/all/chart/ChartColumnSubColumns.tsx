const GraphColumnSubColumns = ({mainColumn}:{mainColumn:ChartMainColumn}) => {


    const subColumns = mainColumn.subCols.sort((a, b) => a.value - b.value).reverse()

    return subColumns.map((mainColValue,idx:number) => {
        const total = mainColumn.total
        const colValuePercent = total ? (mainColValue.value / total) * 100 : 100
        return (
            <div 
                style={{
                    height:`${colValuePercent}%`,
                    zIndex:idx+1,
                    background:mainColumn.subCols[idx].color,
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
