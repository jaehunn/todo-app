import { useMutation } from '@tanstack/react-query'

import { login } from '~/entities/user'

export const useLogin = () => {
  return useMutation({
    mutationFn: (pararms: Parameters<typeof login>[0]) => login(pararms),
  })
}
