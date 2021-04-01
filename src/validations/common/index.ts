import { ValidationDataError } from '@errors';
import { BaseSchema } from 'yup';

export const validateData = async <T>(schema: BaseSchema, data: T) => {
  try {
    await schema.validate(data, { abortEarly: false });
  } catch (e) {
    throw new ValidationDataError(e.inner);
  }
};
