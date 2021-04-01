import { object, string } from 'yup';

export const logInDataSchema = object().shape({
  email: string().required('Email is required'),
  password: string().required('Password is required'),
});

export const registerSchema = object().shape({
  email: string().email('Is not valid email').required('Email is required'),
  password: string()
    .min(8, 'Password must be more then 8 characters')
    .max(32, 'Password must be less then 32 characters')
    .required('Password is required'),
  name: string()
    .min(3, 'Name must be more then 3 characters')
    .max(32, 'Name must be less then 32 characters')
    .required('Name is required'),
  role: string().required('Role is required'),
});

export const refreshingTokenSchema = object().shape({
  refreshToken: string().required('Refresh token is required')
})
