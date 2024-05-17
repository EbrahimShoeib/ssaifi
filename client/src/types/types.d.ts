type Children = {
    readonly children: React.ReactNode
}


type RootTemplateProps = {
    readonly children: React.ReactNode
}

type RootLayoutProps = {
    readonly children: React.ReactNode
}


type NameAndId = {
    name: string,
    id:string
} | null


type QueryReqParameters = {
    pagination?:string,
    onSuccess?:((data:any)=>any)|null,
    onError?:((data:any)=>any)|null,
    queryKey?:any[]
} 




type Input = {
    value:string,
    placeholder:string,
    type:"password"|"text"|"number"|"datetime-local"|"date",
    label:string,
    setValue:(newState:string) => void,
}
 
type DropDownList = {
    options:NameAndId[]|[],
    listValue:NameAndId,
    placeholder:string,
    setListValue:(newListValue:NameAndId)=>void,
    placeholderClassName?:string,
    listClassName?:string,
    label?:string
}

type QueryReqResult = {
    response:any,
    isSuccess:boolean,
    refetch:any,
    isLoading:boolean
}





type ChartSubColumn = {
    title:string,
    value:number
}


type ChartMainColumn = {
    total:number,
    subCols:ChartSubColumn[]
}