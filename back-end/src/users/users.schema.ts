import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose'
import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator'
import { Document } from 'mongoose'

const options: SchemaOptions = { timestamps: true }

@Schema(options)
export class User extends Document {
    @ApiProperty({ example: 'test@test.com', description: 'email', required: true })
    @Prop({ required: true, unique: true })
    @IsEmail()
    @IsNotEmpty()
    email: string

    @ApiProperty({ example: 'username', description: 'name', required: true })
    @Prop({ required: true })
    @IsString()
    @IsNotEmpty()
    name: string

    @ApiProperty({ example: 'password', description: 'password', required: true })
    @Prop({ required: true })
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password: string

    @Prop()
    @IsString()
    imageUrl: string

    readonly virtualUser: { id: string; email: string; name: string }
}

export const UserSchema = SchemaFactory.createForClass(User)

UserSchema.virtual('virtualUser').get(function (this: User) {
    return { id: this.id, email: this.email, name: this.name }
})
