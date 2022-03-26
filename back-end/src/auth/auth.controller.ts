import { Body, Controller, Post } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { AuthService } from './auth.service'
import { SignInDto } from './dto/sign-in.dto'

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @ApiOperation({ summary: '로그인' })
    @Post('login')
    logIn(@Body() signInData: SignInDto) {
        return this.authService.jwtSignIn(signInData)
    }
}
