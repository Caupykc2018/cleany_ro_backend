import {ILogInData, IRefreshingTokenData, IRegisterData} from '@interfaces/http/services/auth';
import {
  logInDataSchema,
  registerSchema,
  refreshingTokenSchema
} from '@validations/schemas/http/services/auth';
import { validateData } from '@validations/common';

export const validationLogInData = async (data: ILogInData) =>
  await validateData(logInDataSchema, data);

export const validationRegisterData = async (data: IRegisterData) =>
  await validateData(registerSchema, data);

export const validationRefreshingTokenData = async (data: IRefreshingTokenData) =>
  await validateData(refreshingTokenSchema, data);
