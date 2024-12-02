import { httpClient } from '~/shared/config'
import { Todo } from '~/entities/todo/model'

interface Response {
  todos: Todo[]
}

export const getTodoListUrl = () => {
  return '/api/todos' as const
}

export const getTodoList = () => {
  return httpClient.get<Response>(getTodoListUrl())
}
