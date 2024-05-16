import PageContent from '@/components/layout/PageContent'
import ResourcesDropList from '@/components/shared/resources/ResourcesDropList'
import ResourcesInput from '@/components/shared/resources/ResourcesInput'
import React from 'react'


type InventoryConsumedInputsProps = {
    handleSubmit: () => void,
    itemName:string,
    setItemName: (newState: string) => void,
    quantity:string,
    setQuantity: (newState: string) => void,
    price:string,
    setPrice: (newState: string) => void,
    measure:string,
    setMeasure:(newState: string) => void,
    isLoading:boolean,
    horses:NameAndId[]|[],
    setHorse: (newState:NameAndId) => void,
    horse:NameAndId,
    submitButtonLabel:string
}
function InventoryConsumedInputs({
    handleSubmit,
    itemName,
    setItemName,
    quantity,
    setQuantity,
    price,
    setPrice,
    isLoading,
    measure,
    setMeasure,
    horses,
    setHorse,
    horse,
    submitButtonLabel
}:InventoryConsumedInputsProps) {
    return (
        <PageContent>
            <div className='max-w-[600px] flex flex-col gap-10 my-16 mx-8'>
                <ResourcesDropList
                    listValue={horse}
                    setListValue={setHorse}
                    options={horses}
                    placeholder='Select horse name'
                    label='horse'
                />
                <ResourcesInput
                    value={itemName} 
                    setValue={setItemName}
                    placeholder="Enter Item Name"
                    label='item name'
                    type='text'
                />
                <ResourcesInput
                    value={quantity} 
                    setValue={setQuantity}
                    placeholder="Quantity"
                    label='quantity'
                    type='number'
                />
                <ResourcesInput
                    value={price} 
                    setValue={setPrice}
                    placeholder="price"
                    label='price'
                    type='number'
                />      
                <ResourcesInput
                    value={measure} 
                    setValue={setMeasure}
                    placeholder="measure"
                    label='measure'
                    type='number'
                />  
        
            </div>
            <div className='w-full flex justify-center'>
                <button onClick={handleSubmit} disabled={isLoading} className='w-[350px] text-primary duration-300 hover:bg-primary hover:text-smokey-white font-semibold text-2xl capitalize rounded-2xl h-[60px] border border-primary'>
                    {submitButtonLabel}
                </button>
            </div>
        </PageContent>
    )
}

export default InventoryConsumedInputs