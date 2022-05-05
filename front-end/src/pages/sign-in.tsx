import { useState } from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import Icon from '@components/Icon'
import Label from '@components/Label'
import Input from '@components/Input'
import Button from '@components/Button'

type SignInFormValues = { username: string; password: string }

function SignIn() {
    const { formState, handleSubmit, register } = useForm<SignInFormValues>({
        defaultValues: { username: '', password: '' },
        resolver: yupResolver(schema),
    })
    const { errors } = formState
    const [isShow, setIsShow] = useState(false)

    const onSubmit = (formValues: SignInFormValues) => {
        console.log(formValues)
    }

    const passwordType = isShow ? 'text' : 'password'
    const passwordIcon = isShow ? 'password-show' : 'password-hide'

    return (
        <form
            className="mx-auto mb-4 px-8 pt-6 pb-8 w-96 rounded shadow-md bg-white"
            onSubmit={handleSubmit(onSubmit)}
        >
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
                <Input id="username" placeholder="이메일" {...register('username')} />
                <p className={ERROR}>{errors.username?.message}</p>
            </div>
            <div className="mb-6 w-full">
                <Label htmlFor="password">비밀번호</Label>
                <Input
                    id="password"
                    type={passwordType}
                    placeholder="비밀번호"
                    {...register('password')}
                >
                    <Button style="w-5 h-5" onClick={() => setIsShow((prev) => !prev)}>
                        <Icon icon={passwordIcon} />
                    </Button>
                </Input>
                <p className={ERROR}>{errors.password?.message}</p>
            </div>
            <Button type="submit" theme="sign">
                로그인
            </Button>
        </form>
    )
}

const schema = yup.object({
    username: yup
        .string()
        .required('이메일 아이디를 입력해주세요.')
        .email('이메일 형식이 맞지 않습니다.'),
    password: yup.string().required('비밀번호를 입력해주세요.'),
})

const ERROR = 'py-1 text-sm text-red-400'

export default SignIn
