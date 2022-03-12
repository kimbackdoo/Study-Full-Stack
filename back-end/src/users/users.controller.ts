import { Body, Controller, Get, Post } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { UsersService } from './users.service'
import { VirtualUserDto } from './dto/users.dto'
import { CreateUserDto } from './dto/create-users.dto'

@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @ApiOperation({ summary: '사용자 조회' })
    @Get()
    getCurrentUser() {
        return 'current user'
    }

    @ApiOperation({ summary: '회원가입' })
    @ApiResponse({ status: 201, description: 'OK', type: VirtualUserDto })
    @ApiResponse({ status: 500, description: 'Internal Server Error...' })
    @Post()
    async createUser(@Body() createUsersDto: CreateUserDto) {
        return await this.usersService.createUser(createUsersDto)
    }

    @ApiOperation({ summary: '로그인' })
    @Post('login')
    logIn() {
        return 'log in'
    }

    @ApiOperation({ summary: '로그아웃' })
    @Post('logout')
    logOut() {
        return 'log out'
    }

    @ApiOperation({ summary: '이미지 업로드' })
    @Post('upload/users')
    uploadUserImage() {
        return 'upload user image'
    }
}
