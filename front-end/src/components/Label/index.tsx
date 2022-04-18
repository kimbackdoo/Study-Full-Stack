import { HTMLAttributes, ReactNode } from 'react'

interface LabelProps extends HTMLAttributes<HTMLLabelElement> {
    htmlFor?: string
    required?: boolean
    children?: ReactNode
}

function Label({ required, children, ...rest }: LabelProps) {
    return (
        <label className="block text-gray-700 text-sm font-bold mb-2" {...rest}>
            {children}&nbsp;
            {required && <span className="text-rose-600">*</span>}
        </label>
    )
}

export default Label
