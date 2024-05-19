import React from 'react'

function DashboardInquiryWidget() {

  
    
    return (
        <div className='h-full flex gap-8 flex-col w-1/2 bg-white border border-dark-grey border-opacity-30 rounded-lg p-4 '>
            
            <div className='w-full items-end flex gap-2'>
                <p className='text-dark-grey text-opacity-80 text-2xl font-semibold'>Inquiry</p>
                <p className='text-light-grey text-opacity-70'>{"(the most activity)"}</p>
            </div>
            <div className='flex w-full flex-1 gap-5'>

                <div className='flex-1 text-sm flex flex-col '>

                    <p className='text-center w-full mb-1 text-lg text-light-grey semibold'>client</p>
                    
                    <div className='flex-1 items-center flex p-2  flex-col bg-light-grey rounded-lg bg-opacity-5 border-2 border-dark-grey border-opacity-10'>
                        <div className='w-8 aspect-square rounded-full bg-light-grey bg-opacity-40 '></div>
                        <p className='text-primary mt-2 mb-4'>iam client</p>

                        
                        <div className='flex w-full flex-1 flex-col gap-4'>
                            <div className='flex w-full  justify-between'>
                                <span className='text-dark-grey text-opacity-50 '>memberships</span>
                                <span className='text-primary'>0</span>
                            </div>

                            <div className='flex w-full  justify-between'>
                                <span className='text-dark-grey text-opacity-50 '>courses</span>
                                <span className='text-primary'>3</span>
                            </div>
                            <div className='flex w-full  justify-between'>
                                <span className='text-dark-grey text-opacity-50 '>cafeteria</span>
                                <span className='text-primary'>0</span>
                            </div>
                        </div>

                    
                    </div>

                </div>

                {/* under that will be removed*/}

                <div className='flex-1 text-sm flex flex-col '>

                    <p className='text-center w-full mb-1 text-lg text-light-grey semibold'>client</p>

                    <div className='flex-1 items-center flex p-2  flex-col bg-light-grey rounded-lg bg-opacity-5 border-2 border-dark-grey border-opacity-10'>
                        <div className='w-8 aspect-square rounded-full bg-light-grey bg-opacity-40 '></div>
                        <p className='text-primary mt-2 mb-4'>iam client</p>
     
                        <div className='flex w-full flex-1 flex-col gap-4'>
                            <div className='flex w-full  justify-between'>
                                <span className='text-dark-grey text-opacity-50 '>memberships</span>
                                <span className='text-primary'>0</span>
                            </div>

                            <div className='flex w-full  justify-between'>
                                <span className='text-dark-grey text-opacity-50 '>courses</span>
                                <span className='text-primary'>3</span>
                            </div>
                            <div className='flex w-full  justify-between'>
                                <span className='text-dark-grey text-opacity-50 '>cafeteria</span>
                                <span className='text-primary'>0</span>
                            </div>
                        </div>

                    </div>

                </div>
                

                <div className='flex-1 text-sm flex flex-col '>

                    <p className='text-center w-full mb-1 text-lg text-light-grey semibold'>client</p>

                    <div className='flex-1 items-center flex p-2  flex-col bg-light-grey rounded-lg bg-opacity-5 border-2 border-dark-grey border-opacity-10'>
                        <div className='w-8 aspect-square rounded-full bg-light-grey bg-opacity-40 '></div>
                        <p className='text-primary mt-2 mb-4'>iam client</p>

                           
                        <div className='flex w-full flex-1 flex-col gap-4'>
                            <div className='flex w-full  justify-between'>
                                <span className='text-dark-grey text-opacity-50 '>memberships</span>
                                <span className='text-primary'>0</span>
                            </div>

                            <div className='flex w-full  justify-between'>
                                <span className='text-dark-grey text-opacity-50 '>courses</span>
                                <span className='text-primary'>3</span>
                            </div>
                            <div className='flex w-full  justify-between'>
                                <span className='text-dark-grey text-opacity-50 '>cafeteria</span>
                                <span className='text-primary'>0</span>
                            </div>
                        </div>

                    </div>

                </div>
             
            </div>
        </div>
    )
}

export default DashboardInquiryWidget