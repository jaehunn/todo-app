import { delay, http, HttpResponse } from 'msw'

import { createRandomNumber } from '~/shared/utils'
import { todos as originalTodos } from '~/server/data/todos'
import { Todo } from '~/entities/todo'

let todos = originalTodos

const randomNumber = createRandomNumber(2)

const responses = [
  HttpResponse.json<{ message: string }>({ message: 'Not Found' }, { status: 404 }),
  HttpResponse.json<{ message: string }>({ message: 'Internal Server Error' }, { status: 500 }),
]

export const createTodo: Parameters<typeof http.post>[1] = async ({ request }) => {
  await delay(300)

  const { title, content } = (await request.json()) as { title: string; content: string }

  const newTodo = {
    id: `${todos.length + 1}`,
    title,
    content,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }

  todos = [...todos, newTodo]

  if (!title || !content) {
    return HttpResponse.json<{ message: string }>({ message: 'Bad Request' }, { status: 400 })
  }

  return HttpResponse.json<Todo>(newTodo, { status: 200 })
}

export const getTodoList: Parameters<typeof http.get>[1] = async ({ request }) => {
  await delay(500)

  const token = request.headers.get('authorization')

  if (token == null) {
    return HttpResponse.json<{ message: string }>({ message: 'Unauthorized' }, { status: 401 })
  }

  return responses[randomNumber - 1]
}

export const getTodoDetail: Parameters<typeof http.get>[1] = async ({ request, params }) => {
  await delay(300)

  const token = request.headers.get('authorization')

  if (token == null) {
    return HttpResponse.json<{ message: string }>({ message: 'Unauthorized' }, { status: 401 })
  }

  const todo = todos.find((todo) => todo.id === params.id)

  if (todo == null) {
    return responses[0]
  }

  return HttpResponse.json<Todo>(todo, { status: 200 })
}

export const updateTodo: Parameters<typeof http.put>[1] = async ({ request, params }) => {
  await delay(300)

  const token = request.headers.get('authorization')

  if (token == null) {
    return HttpResponse.json<{ message: string }>({ message: 'Unauthorized' }, { status: 401 })
  }

  const todo = todos.find((todo) => todo.id === params.id)

  if (todo == null) {
    return responses[0]
  }

  const todoData = (await request.json()) as { title: string; content: string }

  todos = todos.map((todo) =>
    todo.id === params.id ? { ...todo, ...todoData, updatedAt: new Date().toISOString() } : todo
  )

  return HttpResponse.json<Todo>(todo, { status: 200 })
}

export const deleteTodo: Parameters<typeof http.delete>[1] = async ({ request, params }) => {
  await delay(300)

  const token = request.headers.get('authorization')

  if (token == null) {
    return HttpResponse.json<{ message: string }>({ message: 'Unauthorized' }, { status: 401 })
  }

  const todo = todos.find((todo) => todo.id === params.id)

  if (todo == null) {
    return responses[0]
  }

  todos = todos.filter((todo) => todo.id !== params.id)

  return HttpResponse.json<{ id: string }>({ id: todo.id }, { status: 200 })
}
