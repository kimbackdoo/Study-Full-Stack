import { forwardRef, HTMLAttributes } from 'react'

interface InputProps extends HTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement>((_, ref) => {
    return <input />
})

export default Input
