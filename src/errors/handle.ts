import { HandledResponseError } from '@errors';

const handleError = <T extends HandledResponseError<any>>(error: T) => {
  if (error.isResponseError) {
    return {
      body: error.body,
      status: error.status,
    };
  }
  return {
    body: error.message,
    status: 500,
  };
};

export default handleError;
