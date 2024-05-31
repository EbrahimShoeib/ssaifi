import React from 'react'

function Spinner() {
    return (
        <div className='w-full p-4 h-full flex justify-center items-center'>
            <span
                className='w-[40px] animate-spin aspect-square rounded-full border-[3px] border-light-grey border-r-black '
            />
        </div>
    )
}

export default Spinner