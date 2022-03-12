import { OmitType } from '@nestjs/swagger'
import { User } from '../users.schema'

// ?? 파일명 users.request.dto 대신 create-users.dto는 어떤지 고민
export class CreateUserDto extends OmitType(User, ['virtualUser'] as const) {}
