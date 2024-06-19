import { Joke } from '@prisma/client';

export type UpdateJokeDto = Partial<Omit<Joke, 'id'>>;
