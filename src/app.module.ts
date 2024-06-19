import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JokesModule } from './jokes/jokes.module';

@Module({
  imports: [ConfigModule.forRoot(), JokesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
