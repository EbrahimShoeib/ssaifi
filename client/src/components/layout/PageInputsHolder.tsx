import React from 'react'
import PageContent from './PageContent'
import ResourcesInput from '../shared/resources/ResourcesInput'
import ResourcesDropList from '../shared/resources/ResourcesDropList'
import Loader from './Loader'

type PageInputsHolderProps = {
    inputs:Input[],
    dropDownLists?:DropDownList[],
    isLoading:boolean,
    handleSubmit:(e:any) => void,
    submitButtonLabel:string,
    className?:string,
    children?:React.ReactNode
}
function PageInputsHolder({
    inputs,
    dropDownLists,
    isLoading,
    handleSubmit,
    submitButtonLabel,
    className,
    children
}:PageInputsHolderProps) {
    
    return (
        <PageContent>
            <Loader isLoading={isLoading}>
                <div className={`max-w-[600px] flex flex-col gap-10 my-16 mx-8 ${className}`}>
                    {
                        Boolean(dropDownLists) ? dropDownLists?.map((dropDownList:DropDownList,idx:number) => {
                            
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