import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateUserDto } from './dto/create-users.dto'
import { User } from './users.schema'

@Injectable()
export class UsersRepository {
    constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {}

    async findUserByEmail(email: string) {
        return await this.userModel.findOne({ email })
    }

    async create(user: CreateUserDto) {
        return await this.userModel.create(user)
    }
}
