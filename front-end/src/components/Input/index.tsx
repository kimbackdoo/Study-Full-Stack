import { DEFAULT, PSEUDOS } from '@components/Input/constants'
import { forwardRef, HTMLAttributes } from 'react'

interface InputProps extends HTMLAttributes<HTMLInputElement> {
    type?: 'text' | 'password' | 'email'
}

// TODO Input 컴포넌트 유연하게 사용할 수 있도록 설계하고 코드 쓸 것
const Input = forwardRef<HTMLInputElement, InputProps>(({ type = 'text', ...rest }, ref) => {
    return (
        <div className={`${DEFAULT} ${PSEUDOS}`}>
            <input className="w-full outline-none" ref={ref} type={type} {...rest} />
        </div>
    )
})

Input.displayName = 'Input'
export default Input
