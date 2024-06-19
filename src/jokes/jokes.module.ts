import { Module } from '@nestjs/common';
import { JokesService } from './jokes.service';
import { JokesController } from './jokes.controller';
import { PrismaService } from 'nestjs-prisma';

@Module({
  controllers: [JokesController],
  providers: [JokesService, PrismaService],
})
export class JokesModule {}
