export type ButtonSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl'
export type ButtonTheme = 'success' | 'error' | 'warning' | 'default'

export const DEFAULT = 'py-2 w-full rounded-md shadow-md font-bold text-white transition-all'

export const PSEUDOS = 'disabled:bg-gray-400 hover:opacity-90'

export const SIZES = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
}

export const THEMES = {
    success: 'bg-sky-500',
    error: 'bg-red-400',
    warning: 'bg-amber-400',
    default: 'bg-rose-400',
}
