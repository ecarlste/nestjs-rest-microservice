import { Injectable } from '@nestjs/common';
import { CreateJokeDto } from './dto/create-joke.dto';
import { UpdateJokeDto } from './dto/update-joke.dto';
import { PrismaService } from 'nestjs-prisma';
import { Joke as JokeModel } from '@prisma/client';

@Injectable()
export class JokesService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createJokeDto: CreateJokeDto) {
    return this.prismaService.joke.create({
      data: createJokeDto,
    });
  }

  findAll(): Promise<JokeModel[]> {
    return this.prismaService.joke.findMany();
  }

  findOne(id: number) {
    return this.prismaService.joke.findUnique({
      where: { id },
    });
  }

  update(id: number, updateJokeDto: UpdateJokeDto) {
    return this.prismaService.joke.update({
      where: { id },
      data: updateJokeDto,
    });
  }

  remove(id: number) {
    return this.prismaService.joke.delete({
      where: { id },
    });
  }
}
