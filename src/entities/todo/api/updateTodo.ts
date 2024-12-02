import { httpClient } from '~/shared/config'
import { Todo } from '~/entities/todo/model'

interface Params {
  id: string
  todo: Todo
}

interface Response {
  todo: Todo
}

export const updateTodoUrl = (id: string) => {
  return `/api/todos/${id}` as const
}

export const updateTodo = ({ id, ...payload }: Params) => {
  return httpClient.put<Response>(updateTodoUrl(id), payload)
}
