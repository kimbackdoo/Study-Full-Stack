import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import mongoose from 'mongoose'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UsersController } from './users/users.controller'
import { UsersService } from './users/users.service'
import { UsersModule } from './users/users.module'

@Module({
    imports: [
        ConfigModule.forRoot(),
        MongooseModule.forRoot(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }),
        UsersModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule implements NestModule {
    readonly #isDev = process.env.MODE === 'dev'

    configure(consumer: MiddlewareConsumer) {
        mongoose.set('debug', this.#isDev)
    }
}
