import { forwardRef } from 'react'

import useFocus from '@hooks/useFocus'
import { DEFAULT, PSEUDOS } from '@components/Input/constants'

import type { HTMLAttributes, ReactNode } from 'react'

interface InputProps extends HTMLAttributes<HTMLInputElement> {
    type?: 'text' | 'password' | 'email'
    children?: ReactNode
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ type = 'text', children, ...rest }, ref) => {
        const [isFocus, { ...restFocus }] = useFocus()

        const focusStyle = isFocus ? PSEUDOS : ''

        return (
            <div className={`${DEFAULT} ${focusStyle}`} {...restFocus}>
                <input ref={ref} className="w-full outline-none" type={type} {...rest} />
                {children}
            </div>
        )
    },
)

Input.displayName = 'Input'
export default Input
