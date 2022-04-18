import { forwardRef, HTMLAttributes, ReactNode, useImperativeHandle } from 'react'
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

interface Ref {
    isShow: () => void
}

const Button = forwardRef<Ref, ButtonProps>(
    (
        { type = 'button', size = 'base', theme = 'default', style, disabled, children, ...rest },
        ref,
    ) => {
        // TODO useImperativeHandle 훅을 사용해서 비밀번호 버튼 만들 것
        // useImperativeHandle(
        //     ref,
        //     () => ({
        //         isShow: () => {},
        //     }),
        //     [],
        // )

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
    },
)

Button.displayName = 'Button'
export default Button
