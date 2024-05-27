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

type LinksSearchBox = {
    BoxClassName?:string,
    listClassName?:string,
    label?:string,
    searchUrl:string,
    placeholder?:string,
    options:{
        name:string,
        href:string
    }[]|[],
    setResponse:any
}

type SearchBox = {
    listValue:NameAndId,
    setListValue:(newListValue:NameAndId)=>void,
    BoxClassName?:string,
    listClassName?:string,
    label?:string,
    searchUrl:string,
    placeholder?:string,
    options:NameAndId[]|[],
    setResponse:any
}

type QueryReqResult = {
    response:any,
    isSuccess:boolean,
    refetch:any,
    isLoading:boolean
}


type QueryReqResult = {
    response:any,
    isSuccess:boolean,
    refetch:any,
    isLoading:boolean
}





// type ChartSubColumn = {
//     title:string,
//     value:number,
//     color:string,
    
// }


// type ChartMainColumn = {
//     total:number,
//     subCols:ChartSubColumn[],
//     color?:String
// }


type InquiryLayoutItemInfos = {

    itemData:any,
    title:string,
    itemDataSubTitles:Record<string, string>,
    avatarUrl:string,
    role:string
    
}