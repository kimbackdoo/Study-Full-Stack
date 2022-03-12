import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    app.useGlobalPipes(new ValidationPipe())

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
