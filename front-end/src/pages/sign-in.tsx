import { useRef } from 'react'
import Link from 'next/link'

import Icon from '@components/Icon'
import Label from '@components/Label'
import Input from '@components/Input'
import Button from '@components/Button'

import type { InputRef } from '@components/Input'

function SignIn() {
    const inputRef = useRef<InputRef>({} as InputRef)
    // const [isShow, setIsShow] = useState<boolean>(false)

    // const passwordType = inputRef.current?.isShow ? 'text' : 'password'
    // const passwordIcon = inputRef.current?.isShow ? 'password-show' : 'password-hide'
    // const passwordType = inputTest.current?.isShow ? 'text' : 'password'
    // const passwordIcon = inputTest.current?.isShow ? 'password-show' : 'password-hide'

    return (
        <form className="mx-auto mb-4 px-8 pt-6 pb-8 w-96 rounded shadow-md bg-white">
            <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-gray-600">로그인</h3>
                <Link href="/sign-up">
                    <a className="px-3 py-2 border border-rose-400 shadow font-bold text-rose-400 hover:bg-rose-400 hover:text-white transition-all">
                        회원가입
                    </a>
                </Link>
            </div>
            <div className="mb-4 w-full">
                <Label htmlFor="username">이메일</Label>
                <Input id="username" placeholder="이메일" />
            </div>
            <div className="mb-6 w-full">
                <Label htmlFor="password">비밀번호</Label>
                <Input
                    ref={inputRef}
                    id="password"
                    type={getPasswordType(inputRef.current.isShow)}
                    placeholder="비밀번호"
                >
                    <Button style="w-5 h-5" onClick={inputRef.current.show}>
                        <Icon icon={getPasswordIcon(inputRef.current.isShow)} />
                    </Button>
                </Input>
            </div>
            <Button theme="sign">로그인</Button>
        </form>
    )
}

function getPasswordType(isShow: boolean) {
    console.log(isShow)
    return isShow ? 'text' : 'password'
}

function getPasswordIcon(isShow: boolean) {
    return isShow ? 'password-show' : 'password-hide'
}

export default SignIn
