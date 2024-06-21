import React, { ChangeEvent, useState } from 'react';
import './inputFields.scss'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/reducers'
type InputFieldsProps = {
    label?: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    disabled?: boolean
    placeholder?: string
    type?: string
    prefixIcon?: string
    suffixIcon?: string
    onSuffixClick?: () => void
    required?: boolean
    error?: boolean
    errorMsg?: string
    theme?: 'light' | 'dark' 
    page?:'login'|'register'
    
} & React.HTMLProps<HTMLInputElement>

const InputFields:React.FC<InputFieldsProps> = ({label,onChange, disabled, type, placeholder, prefixIcon, suffixIcon, required, error, onSuffixClick, errorMsg, theme = 'light', page,...props}) => {
    
    const [focussed, setFocus] = useState<boolean>()
    const onFocus = () => {
        setFocus(true)
    }
    const {device}=useSelector((state:RootState)=>state.windowSize);
    const onTextInputBlur = () =>{
        setFocus(false)
    }

    return (
        <div className={`input-container ${type} ${page} ${device}`}>
            
            {label ? <div className={`label ${device} ${theme}  ${page} ${error ? "error" : ""}`}>{label}{required ? " *" : " (optional)"}</div> : null}

            {/* <div className={`input-box ${device} ${focussed ? "active" : ""}  ${disabled ? "disabled" : ""} ${error ? "error" : ""} ${theme}`}>
                <div className='prefix'>
                    {prefixIcon? 
                        <img className='prefix-icon' src={prefixIcon} alt=''/> : null
                    } */}
                    <input 
                        type= {type}
                        className={`input-box ${error ? "error" : ""} ${page} ${device}`} 
                        onChange={(e)=>{
                            onChange(e)
                        }}
                        onFocus={onFocus}
                        onBlur={onTextInputBlur}
                        placeholder={placeholder}
                        {...props}
                        disabled={disabled}
                       
                    />
                     {error && errorMsg ? 
                            <div className='error-msg'>{errorMsg}</div> : null
                        }
                </div>
            //     {suffixIcon?
            //         <img className='suffix-icon' onClick={onSuffixClick} src={suffixIcon} alt=''/> : null 
            //     }
            // </div>

            
        // </div>
    )
}
export default InputFields;