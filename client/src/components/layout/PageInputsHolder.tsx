import React from 'react'
import PageContent from './PageContent'
import ResourcesInput from '../shared/resources/ResourcesInput'
import ResourcesDropList from '../shared/resources/ResourcesDropList'
import Loader from './Loader'
import SearchBox from '../shared/all/SearchBox'

type PageInputsHolderProps = {
    inputs:Input[],
    dropDownLists?:DropDownList[],
    isLoading:boolean,
    handleSubmit:(e:any) => void,
    submitButtonLabel:string,
    className?:string,
    children?:React.ReactNode,
    searchBoxes?:SearchBox[]
}
function PageInputsHolder({
    inputs,
    dropDownLists,
    isLoading,
    handleSubmit,
    submitButtonLabel,
    className,
    children,
    searchBoxes
}:PageInputsHolderProps) {
    
    return (
        <PageContent>
            <Loader isLoading={isLoading}>
                <div className={`max-w-[600px] flex flex-col gap-10 my-16 mx-8 ${className}`}>
                    {
                        Boolean(dropDownLists?.length) ? dropDownLists?.map((dropDownList:DropDownList,idx:number) => {
                            
                            return(
                                    <ResourcesDropList
                                        options={dropDownList.options}
                                        setListValue={dropDownList.setListValue}
                                        label={dropDownList.label || ""}
                                        key={idx}
                                        placeholder={dropDownList.placeholder}
                                        listValue={dropDownList.listValue}
                                    />
                                )
                            }
                        ) : ""
                    }
                    {
                        Boolean(searchBoxes?.length) ? searchBoxes?.map((currSearchBox:SearchBox,idx:number) => (
                            <SearchBox
                                key={idx}
                                options={currSearchBox.options}
                                searchUrl={currSearchBox.searchUrl}
                                setListValue={currSearchBox.setListValue}
                                setResponse={currSearchBox.setResponse}
                                label={currSearchBox?.label||''}
                                listValue={currSearchBox.listValue}
                                placeholder={currSearchBox?.placeholder}
                            />
                        )) : <></>
                    }
                    {
                        inputs.map((input:Input,idx:number) => (
                            <ResourcesInput
                                label={input.label}
                                placeholder={input.placeholder}
                                setValue={input.setValue}
                                value={input.value}
                                type={input.type}
                                key={idx}
                                
                            />
                        ))
                    }
                    {children && children}
                </div>
                <div className='w-full flex justify-center'>
                    <button onClick={handleSubmit} disabled={isLoading} className='page_submit_button'>
                        {submitButtonLabel}
                    </button>
                </div>
            </Loader>
        </PageContent>
    )
}

export default PageInputsHolder