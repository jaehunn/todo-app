import { useQuery } from '@tanstack/react-query'

import { getTodoDetail } from '~/entities/todo'

export const useGetTodoDetail = (params: Parameters<typeof getTodoDetail>[0]) => {
  return useQuery({
    queryKey: ['TODO_DETAIL', { ...params }],
    queryFn: () => getTodoDetail(params),
  })
}
