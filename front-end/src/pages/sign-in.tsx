import { useState } from 'react'
import Link from 'next/link'
import Icon from '@components/Icon'
import Label from '@components/Label'
import Input from '@components/Input'
import Button from '@components/Button'

function SignIn() {
    const [isShow, setIsShow] = useState<boolean>(false)

    const passwordType = isShow ? 'text' : 'password'
    const passwordIcon = isShow ? 'password-show' : 'password-hide'

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
                <div className="flex">
                    <Input id="password" type={passwordType} placeholder="비밀번호" />
                    <Button onClick={() => setIsShow((prev) => !prev)}>
                        <Icon icon={passwordIcon} />
                    </Button>
                </div>
            </div>
            <Button theme="sign">로그인</Button>
        </form>
    )
}

export default SignIn
