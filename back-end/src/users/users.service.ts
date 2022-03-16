import { UsersRepository } from './users.repository'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import * as bcrypt from 'bcrypt'
import { User } from './users.schema'
import { CreateUserDto } from './dto/create-users.dto'

@Injectable()
export class UsersService {
    constructor(private readonly usersRepository: UsersRepository) {}

    async createUser(createUserDto: CreateUserDto) {
        const { email, name, password } = createUserDto
        // user가 이미 존재하면 해당 user의 id가 담긴 객체, user가 없으면 null return
        const isUserExist = await this.usersRepository.findUserByEmail(email)
        if (isUserExist) throw new UnauthorizedException('이미 존재하는 사용자입니다.')

        const saltOrRounds = 10
        const hashedPassword = await bcrypt.hash(password, saltOrRounds)

        const user = await this.usersRepository.create({ email, name, password: hashedPassword })
        return user.virtualUser
    }
}
