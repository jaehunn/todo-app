import { httpClient } from '~/shared/config'
import { Todo } from '~/entities/todo/model'

interface Params {
  content: string
  title: string
}

interface Response {
  todo: Todo
}

export const createTodoUrl = () => {
  return '/api/todos' as const
}

export const createTodo = ({ ...payload }: Params) => {
  return httpClient.post<Response>(createTodoUrl(), payload)
}
