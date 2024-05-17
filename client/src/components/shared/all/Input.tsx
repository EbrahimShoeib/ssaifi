"use client"

type InputProps = {
    value: string,
    setValue: (newValue:string) => void,
    regex?: RegExp,
    className?:string,
    type:"password"|"text"|"number"|"datetime-local"|"date",
    placeholder?:string,
    label?:string,
    labelClassName?:string
}

function Input({
    value,
    setValue,
    regex,
    type,
    className,
    placeholder,
    label,
    labelClassName
}:InputProps) {
    

    const changeValue = (e:any) => {
        const newValue:string = e.target.value

        if (type === "number") {
            if (/^\d*\.?\d*$/.test(newValue)) {
                setValue(newValue);
            }
        } else if (regex) {
            if (regex.test(newValue)) {
                setValue(newValue);
            }
        } else {
            setValue(newValue);
        }
    }
    


    return (
        <>
            {
                label ? (
                    <label className={`${labelClassName ? labelClassName:""}`}>
                        <pre style={{fontFamily:"inherit"}}>{label}</pre>
                    </label>
                ) : <></>
            }

            <input 
                value={value}
                className={`${className ? className : ''} bg-transparent`}
                onChange={changeValue}
                type={type === "number" ? "text" : type}
                placeholder={placeholder ? placeholder : ''}
            >

            </input>

        </>
    )
}

export default Input