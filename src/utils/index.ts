import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { secret } from '@config';

export const hash = async (value) => await bcrypt.hash(value, 8);

export const compareHash = async (value: string, hash: string) =>
  await bcrypt.compare(value, hash);

export const createToken = <T extends {}>(
  value: T,
  expiresIn?: string | number
) => jwt.sign(value, secret, { expiresIn: expiresIn || 0 });
