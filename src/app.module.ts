import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { NewsModule } from './news/news.module';
import { EventsModule } from './events/events.module';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'iqtisodiyot',
      autoLoadModels: true, // Modelni avtomatik yuklash
      // synchronize: true, // Har safar modelni avtomatik yaratish (productionda false qilish kerak!)
    }),
    UsersModule,
    NewsModule,
    EventsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
