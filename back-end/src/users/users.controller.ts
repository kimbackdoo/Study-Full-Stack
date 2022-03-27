import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { UsersService } from './users.service'
import { VirtualUserDto } from './dto/users.dto'
import { CreateUserDto } from './dto/create-users.dto'
import { JwtAuthGuard } from './../auth/jwt/jwt.guard'
import { CurrentUser } from 'src/common/decorators/user.decorator'
import { User } from 'src/users/users.schema'

@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @ApiOperation({ summary: '사용자 조회' })
    @UseGuards(JwtAuthGuard)
    @Get()
    getCurrentUser(@CurrentUser() user: User) {
        return user.virtualUser
    }

    @ApiOperation({ summary: '회원가입' })
    @ApiResponse({ status: 201, description: 'OK', type: VirtualUserDto })
    @ApiResponse({ status: 500, description: 'Internal Server Error...' })
    @Post()
    async createUser(@Body() createUsersDto: CreateUserDto) {
        return await this.usersService.createUser(createUsersDto)
    }

    @ApiOperation({ summary: '이미지 업로드' })
    @Post('upload/users')
    uploadUserImage() {
        return 'upload user image'
    }
}
