import { useState } from 'react'

type FocusParams = [boolean, () => void, () => void]

function useFocus(): FocusParams {
    const [isFocus, setIsFocus] = useState<boolean>(false)

    const onFocus = () => setIsFocus(true)

    const onBlur = () => setIsFocus(false)

    return [isFocus, onFocus, onBlur]
}

export default useFocus
