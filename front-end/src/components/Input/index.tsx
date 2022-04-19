import { forwardRef, HTMLAttributes, ReactNode, useImperativeHandle, useRef, useState } from 'react'
import { DEFAULT, PSEUDOS } from '@components/Input/constants'
import useFocus from '@hooks/useFocus'

interface InputProps extends HTMLAttributes<HTMLInputElement> {
    type?: 'text' | 'password' | 'email'
    children?: ReactNode
}

export interface Ref {
    show: () => void
    isShow: boolean
}

// TODO useImperativeHandle 이용해서 password 보이게, 안보이게 어떻게 구현할지 고민...
const Input = forwardRef<Ref, InputProps>(({ type = 'text', children, ...rest }, ref) => {
    const [isFocus, { ...restFocus }] = useFocus()
    const [isShow, setIsShow] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)

    useImperativeHandle(
        ref,
        () => ({
            show: () => setIsShow((prev) => !prev),
            isShow,
        }),
        [isShow],
    )

    // console.log(isShow)
    const focusStyle = isFocus ? PSEUDOS : ''

    return (
        <div className={`${DEFAULT} ${focusStyle}`} {...restFocus}>
            <input className="w-full outline-none" ref={inputRef} type={type} {...rest} />
            {children}
        </div>
    )
})

Input.displayName = 'Input'
export default Input
