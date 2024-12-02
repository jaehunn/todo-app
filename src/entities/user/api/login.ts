import { httpClient } from '~/shared/config'

interface Params {
  email: string
  password: string
}

export const loginUrl = () => {
  return '/api/login' as const
}

export const login = ({ ...payload }: Params) => {
  return httpClient.post<Response>(loginUrl(), payload)
}
