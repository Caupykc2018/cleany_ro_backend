import { createConnection } from 'typeorm';

export const initializeDatabase = async () => {
  await createConnection();
  console.log('Start database');
};
