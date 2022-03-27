import { Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'
import { SignInDto } from './dto/sign-in.dto'
import { UsersRepository } from './../users/users.repository'

@Injectable()
export class AuthService {
    constructor(
        private readonly usersRepository: UsersRepository,
        private jwtService: JwtService,
    ) {}

    async jwtSignIn({ email, password }: SignInDto) {
        //* 요청한 이메일이 존재하는지
        const user = await this.usersRepository.findUserByEmail({ email })
        if (!user) throw new UnauthorizedException('이메일과 비밀번호를 확인해주세요.')

        //* 요청한 비밀번호가 존재하는지
        const isPasswordValidated = await bcrypt.compare(password, user.password)
        if (!isPasswordValidated)
            throw new UnauthorizedException('이메일과 비밀번호를 확인해주세요.')

        const payload = { email, sub: user.id }
        return { token: this.jwtService.sign(payload) }
    }
}
