import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import db from '../../config/dbConnection';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  // db.connection.connect(function (err) {
  //   if (err) throw err;
  //   console.log('Connected!');
  // });
}
bootstrap();
