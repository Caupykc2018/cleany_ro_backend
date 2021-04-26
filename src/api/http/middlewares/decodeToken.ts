import * as jwt from 'koa-jwt';
import { secret } from '@config';

const DecodeTokenMiddleware = (key = 'payload', passthrough = true) =>
  jwt({
    secret,
    key,
    passthrough,
  });

export default DecodeTokenMiddleware;
