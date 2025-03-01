import { z } from 'zod';

export const USerSchema = z.object({
  id: z.string().uuid().optional(),
  name: z.string().min(1),
  email: z.string().email().nullable(),
  password: z.string().min(6).max(20).nullable(),
  birth: z.date().optional(),
  birth_place: z.string().nullable().optional(),
  death: z.date().nullable().optional(),
  gender: z.enum(['male', 'female']),
  phone: z.string().nullable().optional(),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
});

export type UserProps = z.infer<typeof USerSchema>;