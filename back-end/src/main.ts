import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import * as expressBasicAuth from 'express-basic-auth'
import { AppModule } from './app.module'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    app.useGlobalPipes(new ValidationPipe())
    app.use(
        ['/api/docs', '/api/docs-json'],
        expressBasicAuth({
            challenge: true,
            users: {
                [process.env.SWAGGER_ID]: process.env.SWAGGER_PASSWORD,
            },
        }),
    )

    const config = new DocumentBuilder()
        .setTitle('백엔드 공부용')
        .setDescription('백엔드 공부용')
        .setVersion('1.0.0')
        .build()
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('api/docs', app, document)

    await app.listen(process.env.PORT)
}
bootstrap()
