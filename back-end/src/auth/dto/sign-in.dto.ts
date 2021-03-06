import { User } from '../../users/users.schema'
import { PickType } from '@nestjs/swagger'

export class SignInDto extends PickType(User, ['email', 'password'] as const) {}
