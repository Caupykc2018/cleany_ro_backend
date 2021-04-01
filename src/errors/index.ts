import { ValidationError } from 'yup';

export class HandledResponseError<T> extends Error {
  isResponseError: boolean = true;
  body: T;
  status: number;
  constructor(body: T, status: number) {
    super('');
    this.body = body;
    this.status = status;
  }
}

export class ValidationDataError extends HandledResponseError<{
  [p: string]: string;
}> {
  constructor(errors: ValidationError[]) {
    const body = errors.reduce((accumulator, { message, path }) => {
      return {
        ...accumulator,
        [path]: message,
      };
    }, {});
    super(body, 422);
  }
}
