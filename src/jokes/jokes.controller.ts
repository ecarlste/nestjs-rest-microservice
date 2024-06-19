import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { JokesService } from './jokes.service';
import { CreateJokeDto } from './dto/create-joke.dto';
import { UpdateJokeDto } from './dto/update-joke.dto';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Controller('jokes')
export class JokesController {
  constructor(private readonly jokesService: JokesService) {}

  @Post()
  create(@Body() createJokeDto: CreateJokeDto) {
    return this.jokesService.create(createJokeDto);
  }

  @Get()
  findAll() {
    return this.jokesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result = await this.jokesService.findOne(+id);

    if (!result) {
      throw new HttpException('Joke not found', HttpStatus.NOT_FOUND);
    }

    return result;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateJokeDto: UpdateJokeDto) {
    try {
      return await this.jokesService.update(+id, updateJokeDto);
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        throw new HttpException('Joke not found', HttpStatus.NOT_FOUND);
      } else {
        throw error;
      }
    }
  }

  @Delete(':id')
  async cremove(@Param('id') id: string) {
    try {
      return await this.jokesService.remove(+id);
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        throw new HttpException('Joke not found', HttpStatus.NOT_FOUND);
      } else {
        throw error;
      }
    }
  }
}
