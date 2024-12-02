import { http } from 'msw'

import { createTodoUrl, deleteTodoUrl, getTodoDetailUrl, getTodoListUrl, updateTodoUrl } from '~/entities/todo'
import { loginUrl, signUpUrl } from '~/entities/user'
import * as todoHandlers from './todo'
import * as userHandlers from './user'

export const handlers = () => [
  // todo
  http.get(getTodoListUrl(), todoHandlers.getTodoList),
  http.get(getTodoDetailUrl(':id'), todoHandlers.getTodoDetail),
  http.post(createTodoUrl(), todoHandlers.createTodo),
  http.put(updateTodoUrl(':id'), todoHandlers.updateTodo),
  http.delete(deleteTodoUrl(':id'), todoHandlers.deleteTodo),

  // user
  http.post(loginUrl(), userHandlers.login),
  http.post(signUpUrl(), userHandlers.signUp),
]
