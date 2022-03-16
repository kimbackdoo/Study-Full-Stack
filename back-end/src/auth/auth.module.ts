import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { JwtStrategy } from './jwt/jwt.strategy'
import { AuthService } from './auth.service'
import { UsersModule } from './../users/users.module'
import { AuthController } from './auth.controller'

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt', session: false }),
        JwtModule.register({
            secret: 'secret',
            signOptions: { expiresIn: '1y' },
        }),
        UsersModule,
    ],
    providers: [AuthService, JwtStrategy],
    controllers: [AuthController],
})
export class AuthModule {}
