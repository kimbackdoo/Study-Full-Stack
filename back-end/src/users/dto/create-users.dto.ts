import { PickType } from '@nestjs/swagger'
import { User } from '../users.schema'

// OmitType은 해당 요소만 제거해서 가져오기 때문에 prototype도 추가적으로 배열에 넣어줘야함
// 따라서, Picktype을 사용하여 해당 요소들만 가져오게끔 하면됨
export class CreateUserDto extends PickType(User, ['email', 'name', 'password'] as const) {}
