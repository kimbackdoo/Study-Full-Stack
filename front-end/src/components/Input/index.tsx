import { DEFAULT, PSEUDOS } from '@components/Input/constants'
import { forwardRef, HTMLAttributes } from 'react'

interface InputProps extends HTMLAttributes<HTMLInputElement> {
    type?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ type = 'text', ...rest }, ref) => {
    return <input className={`${DEFAULT} ${PSEUDOS}`} ref={ref} type={type} {...rest} />
})

export default Input
