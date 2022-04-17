import { HTMLAttributes, ReactNode } from 'react'
import {
    ButtonSize,
    ButtonTheme,
    DEFAULT,
    PSEUDOS,
    SIZES,
    THEMES,
} from '@components/Button/constants'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    size?: ButtonSize
    theme?: ButtonTheme
    disabled?: boolean
    children?: ReactNode
}

function Button({ size = 'base', theme = 'default', disabled, children, ...rest }: ButtonProps) {
    return (
        <button
            className={`${THEMES[theme]} ${SIZES[size]} ${DEFAULT} ${PSEUDOS}`}
            disabled={disabled}
            {...rest}
        >
            {children}
        </button>
    )
}

export default Button
