import { httpClient } from '~/shared/config'

interface Params {
  id: string
}

interface Response {
  id: string
}

export const deleteTodoUrl = (id: string) => {
  return `/api/todos/${id}` as const
}

export const deleteTodo = (params: Params) => {
  return httpClient.delete<Response>(deleteTodoUrl(params.id))
}
