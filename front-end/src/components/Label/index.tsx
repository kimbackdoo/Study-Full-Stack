import { HTMLAttributes, ReactNode } from 'react'

interface LabelProps extends HTMLAttributes<HTMLLabelElement> {
    htmlFor?: string
    children?: ReactNode
}

function Label({ children, ...rest }: LabelProps) {
    return (
        <label className="block text-gray-700 text-sm font-bold mb-2" {...rest}>
            {children}
        </label>
    )
}

export default Label
