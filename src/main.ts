import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SampleCall } from './utils/sample-data';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    await app.listen(3000);
    console.log(`Application is running on: ${await app.getUrl()}`);
    console.log(`Sample call id: ${SampleCall.id}`);
}

bootstrap();
