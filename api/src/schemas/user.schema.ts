import { z } from 'zod';

export const UserSchema = z.object({
  id: z.string().uuid().optional(),
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(6).max(20),
  birth: z.date().optional(),
  birth_place: z.string().optional(),
  death: z.date().optional(),
  gender: z.enum(['male', 'female']).optional(),
  phone: z.string().optional(),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
});

export type UserProps = z.infer<typeof UserSchema>;
export type UserUpdateProps = Partial<UserProps>;