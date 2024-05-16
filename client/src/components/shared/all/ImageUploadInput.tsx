"use client"

import uuid from "react-uuid"


type ImageUploadInputProps = {
    formDataFile:FormData|undefined,
    setFormDataFile:(newFile:FormData)=>void,
    className?:string,
    children?:any,
    onChange?:(file:Blob)=> void 
}
function ImageUploadInput({formDataFile,setFormDataFile,className,onChange,children}:ImageUploadInputProps) {


    const changeInputValue = (e:any) => {
        const file = e?.target?.files?.[0]
        if (Boolean(file)) {
            const data = new FormData()
            data.append("image",file)
            setFormDataFile(data)

            onChange && onChange(file)
                
            

            // const reader = new FileReader()
            // reader.onload = (e:any) => {
            //     console.log(e.target.result);
            //     setImgBG(e.target.result)
            // }

            // reader.readAsDataURL(file)
        }   
        
    }    
    const id = uuid()

    
    return (
        <>  
            <label className={`${className} cursor-pointer block overflow-hidden}`} htmlFor={id}>
                {children ? children : ""}
            </label>
            <input className={` hidden`} id={id} type="file" onChange={changeInputValue}  />
        </>
    )
}

export default ImageUploadInput