import { Joke } from '@prisma/client';

export type CreateJokeDto = Omit<Joke, 'id'>;
