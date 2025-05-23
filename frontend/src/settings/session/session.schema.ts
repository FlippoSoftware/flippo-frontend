import { RecordId } from 'surrealdb';
import { z } from 'zod';

const SessionSchema = z.object({
  email: z.string().email().optional(),
  image: z.string().url().optional(),
  name: z.string().optional(),
  role: z.union([z.literal('user'), z.literal('admin'), z.literal('premium')]),
  surname: z.string().optional(),
  userId: z.instanceof(RecordId<'user'>),
  username: z.string().optional()
});

type TSession = z.infer<typeof SessionSchema>;

export { SessionSchema, type TSession };
