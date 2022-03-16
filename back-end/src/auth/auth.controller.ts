import { Body, Controller, Post } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { AuthService } from './auth.service'
import { LogInDto } from './dto/login.dto'

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @ApiOperation({ summary: '로그인' })
    @Post('login')
    logIn(@Body() logInData: LogInDto) {
        return this.authService.jwtLogIn(logInData)
    }
}
