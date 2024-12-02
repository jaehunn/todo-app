import { useMutation } from '@tanstack/react-query'

import { deleteTodo } from '~/entities/todo'

export const useDeleteTodo = () => {
  return useMutation({
    mutationFn: (params: Parameters<typeof deleteTodo>[0]) => deleteTodo(params),
  })
}
