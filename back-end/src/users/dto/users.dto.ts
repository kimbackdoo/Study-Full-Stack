import { ApiProperty, PickType } from '@nestjs/swagger'
import { User } from '../users.schema'

export class VirtualUserDto extends PickType(User, ['email', 'name'] as const) {
    @ApiProperty({ example: '12345678', description: 'id' })
    id: string
}
