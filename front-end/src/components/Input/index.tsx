import { forwardRef, useImperativeHandle, useState } from 'react'

import useFocus from '@hooks/useFocus'
import { DEFAULT, PSEUDOS } from '@components/Input/constants'

import type { HTMLAttributes, ReactNode } from 'react'

interface InputProps extends HTMLAttributes<HTMLInputElement> {
    type?: 'text' | 'password' | 'email'
    children?: ReactNode
}

export interface InputRef extends HTMLInputElement {
    show: () => void
    isShow: boolean
}

// TODO useImperativeHandle 이용해서 password 보이게, 안보이게 어떻게 구현할지 고민...
const Input = forwardRef<InputRef, InputProps>(({ type = 'text', children, ...rest }, ref) => {
    const [isFocus, { ...restFocus }] = useFocus()
    const [isShow, setIsShow] = useState(false)

    useImperativeHandle(
        ref,
        () =>
            ({
                show: () => setIsShow((prev) => !prev),
                isShow,
            } as InputRef),
        [isShow],
    )

    const focusStyle = isFocus ? PSEUDOS : ''
    const showInput = isShow ? type : 'password'

    return (
        <div className={`${DEFAULT} ${focusStyle}`} {...restFocus}>
            <input ref={ref} className="w-full outline-none" type={showInput} {...rest} />
            {children}
        </div>
    )
})

Input.displayName = 'Input'
export default Input
