import { httpClient } from '~/shared/config'

interface Params {
  email: string
  password: string
}

export const signUpUrl = () => {
  return '/api/signup' as const
}

export const signUp = ({ ...payload }: Params) => {
  return httpClient.post<Response>(signUpUrl(), payload)
}
