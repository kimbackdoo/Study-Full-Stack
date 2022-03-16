import { User } from './../../users/users.schema'
import { PickType } from '@nestjs/swagger'

export class LogInDto extends PickType(User, ['email', 'password'] as const) {}
