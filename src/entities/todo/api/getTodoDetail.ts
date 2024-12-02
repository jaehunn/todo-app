import { httpClient } from '~/shared/config'
import { Todo } from '~/entities/todo/model'

interface Params {
  id: string
}

interface Response {
  todo: Todo
}

export const getTodoDetailUrl = (id: string) => {
  return `/api/todos/${id}` as const
}

export const getTodoDetail = (params: Params) => {
  return httpClient.get<Response>(getTodoDetailUrl(params.id))
}
