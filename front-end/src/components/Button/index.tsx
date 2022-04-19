import { HTMLAttributes, ReactNode } from 'react'
import {
    ButtonSize,
    ButtonTheme,
    DEFAULT,
    PSEUDOS,
    SIZES,
    THEMES,
} from '@components/Button/constants'

interface ButtonProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'style'> {
    type?: 'button' | 'submit'
    size?: ButtonSize
    theme?: ButtonTheme
    style?: string
    disabled?: boolean
    children?: ReactNode
}

function Button({
    type = 'button',
    size = 'base',
    theme = 'default',
    style,
    disabled,
    children,
    ...rest
}: ButtonProps) {
    const defaultStyle = theme === 'default' ? '' : DEFAULT
    const customStyle = style ?? ''

    return (
        <button
            className={`${THEMES[theme]} ${SIZES[size]} ${defaultStyle} ${PSEUDOS} ${customStyle}`}
            type={type}
            disabled={disabled}
            {...rest}
        >
            {children}
        </button>
    )
}

export default Button
