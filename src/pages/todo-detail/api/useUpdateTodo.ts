import { useMutation } from '@tanstack/react-query'

import { updateTodo } from '~/entities/todo'

export const useUpdateTodo = () => {
  return useMutation({
    mutationFn: (params: Parameters<typeof updateTodo>[0]) => updateTodo(params),
  })
}
