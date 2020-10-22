import { requestGet } from './axios'

export const loginWithEmail = (params) => requestGet("/authentication/login_email", params);