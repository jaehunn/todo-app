import { useMutation } from '@tanstack/react-query'

import { signUp } from '~/entities/user'

export const useSignUp = () => {
  return useMutation({
    mutationFn: (params: Parameters<typeof signUp>[0]) => signUp(params),
  })
}
