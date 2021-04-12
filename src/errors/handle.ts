import { HandledResponseError } from '@errors';
import { getReasonPhrase, StatusCodes } from 'http-status-codes';

const handleError = <T extends HandledResponseError<any>>(error: T) => {
  if (error.isResponseError) {
    return {
      body: error.body,
      status: error.status,
    };
  }
  return {
    body: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
    status: StatusCodes.INTERNAL_SERVER_ERROR,
  };
};

export default handleError;
