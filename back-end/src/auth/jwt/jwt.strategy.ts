import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { UsersRepository } from './../../users/users.repository'
import { Payload } from './jwt.payload.d'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly usersRepository: UsersRepository) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_SECRET_KEY,
            ignoreExpiration: false,
        })
    }

    async validate({ sub }: Payload) {
        const user = await this.usersRepository.findUserByIdWithoutPassword({ userId: sub })
        if (!user) throw new UnauthorizedException('존재하지 않는 회원입니다')
        return user
    }
}
