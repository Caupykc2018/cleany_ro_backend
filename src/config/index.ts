import * as dotenv from 'dotenv';

dotenv.config();

export const port = process.env.PORT || 3001;
export const secret = process.env.SECRET || 'secret';
export const expiresToken = process.env.EXPIRES_TOKEN || '5m';
