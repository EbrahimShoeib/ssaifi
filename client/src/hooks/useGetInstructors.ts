import { instructorsRoute } from "@/constants/api";
import { httpGetServices } from "@/services/httpGetService";
import { useQuery } from "react-query";

 
export function useGetInstructors({
    pagination,
    onSuccess,
    onError,
    queryKey
}:QueryReqParameters):any {
    let queryOptions:any = {
        queryKey:["instructors"],
        queryFn:async () => httpGetServices(`${instructorsRoute}${Boolean(pagination)? pagination : ''}`),
    }
    Boolean(onSuccess) ? queryOptions.onSuccess = onSuccess : null
    Boolean(onError) ? queryOptions.onError = onError : null
    if (!queryKey) {
        queryKey = []
    }
    Boolean(queryKey) ? queryOptions.queryKey = [...queryKey,queryOptions.queryKey] : null

    const {data:response,isSuccess,refetch,isLoading} = useQuery(queryOptions)
    return {response,isSuccess,refetch,isLoading}
}

