import { useQuery } from '@tanstack/react-query'

import { getTodoList } from '~/entities/todo'

export const useGetTodoList = () => {
  return useQuery({
    queryKey: ['TODO_LIST'],
    queryFn: () => getTodoList(),
  })
}
