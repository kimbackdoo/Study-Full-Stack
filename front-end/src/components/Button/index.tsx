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
    type?: 'button' | 'submit'
    size?: ButtonSize
    theme?: ButtonTheme
    disabled?: boolean
    children?: ReactNode
}

function Button({
    type = 'button',
    size = 'base',
    theme = 'default',
    disabled,
    children,
    ...rest
}: ButtonProps) {
    const defaultStyle = theme === 'default' ? '' : DEFAULT

    return (
        <button
            className={`${THEMES[theme]} ${SIZES[size]} ${defaultStyle} ${PSEUDOS}`}
            type={type}
            disabled={disabled}
            {...rest}
        >
            {children}
        </button>
    )
}

export default Button
