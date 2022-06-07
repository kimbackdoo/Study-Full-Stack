import instance from '@lib/axios-config'
import { SignInDto } from '@services/auth/request'

export async function SignInAPI(signInDto: SignInDto) {
    await instance.post('/auth/sign-in', signInDto)
}
