import React from 'react'

type IndInvoicePageFooterProps = {
    submitButtonFunc:()=>void,
    isLoading:boolean,
}

function IndInvoicePageFooter({submitButtonFunc,isLoading}:IndInvoicePageFooterProps) {

    return (
        <>
        
            <div className='w-full mt-6 flex-col gap-9 flex items-center'>
                <div className='w-[300px] text-dark-grey text-center'>
                    <p className='font-bold'>Please Make Cheques Payable To :</p>
                    <p className='my-2 font-bold'>شركة الأكاديمية الدولية للفروسية</p>
                    <div className='text-sm flex flex-col gap-1 justify-center'>
                        <p>P.O Box 926028 - Amman, Jordan - 11190</p>
                        <p>Phone: {"(00962)"} 777 44 2222</p>
                        <p>E-mail: Info@SaifiStables.com</p>
                    </div>
                </div>
                <button onClick={submitButtonFunc} disabled={isLoading} className='page_submit_button'>
                    DOWNLOAD INVOICE
                </button>
            </div>
        </>
    )
}

export default IndInvoicePageFooter