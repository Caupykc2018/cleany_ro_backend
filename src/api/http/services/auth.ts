import {
  ILogInData,
  IRegisterData,
  IRefreshingTokenData,
} from '@interfaces/http/services/auth';
import {
  validationLogInData,
  validationRegisterData,
  validationRefreshingTokenData,
} from '@validations/http/services/auth';
import { User, RefreshToken } from '@models';
import { HandledResponseError } from '@errors';
import { createToken } from '@utils';
import { expiresToken } from '@config';
import { StatusCodes } from 'http-status-codes';

class AuthService {
  createAccessToken(idUser: number) {
    return createToken({ id: idUser }, expiresToken);
  }

  async logIn(data: ILogInData) {
    await validationLogInData(data);

    const { email, password } = data;

    const user = await User.findOne({
      where: { email },
      relations: ['refreshToken'],
    });

    if (!user) {
      throw new HandledResponseError(
        'Incorrect email or password',
        StatusCodes.UNPROCESSABLE_ENTITY
      );
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      throw new HandledResponseError(
        'Incorrect email or password',
        StatusCodes.UNPROCESSABLE_ENTITY
      );
    }

    user.refreshToken.refresh();
    await user.refreshToken.save();

    return {
      ...user.responseData(),
      token: `Bearer ${this.createAccessToken(user.id)}`,
    };
  }

  async register(data: IRegisterData) {
    await validationRegisterData(data);

    const refreshToken = RefreshToken.create();

    await refreshToken.save();

    const user = User.create({
      ...data,
      refreshToken,
    });

    await user.save();

    return {
      ...user.responseData(),
      token: `Bearer ${this.createAccessToken(user.id)}`,
    };
  }

  async refreshingToken(data: IRefreshingTokenData) {
    await validationRefreshingTokenData(data);

    const { refreshToken } = data;

    const findRefreshToken = await RefreshToken.findOne({
      where: { token: refreshToken },
      relations: ['user'],
    });

    if (!findRefreshToken) {
      throw new HandledResponseError('Incorrect refresh token', 422);
    }

    findRefreshToken.refresh();
    await findRefreshToken.save();

    return {
      ...findRefreshToken.user.responseData(),
      refreshToken: findRefreshToken.token,
      token: `Bearer ${this.createAccessToken(findRefreshToken.user.id)}`,
    };
  }
}

export default new AuthService();
