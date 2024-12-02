import { delay, http, HttpResponse } from 'msw'

import { users as originalUsers } from '~/server/data/users'
import { User } from '~/entities/user'

let users = originalUsers

const responses = [
  HttpResponse.json<{ message: string }>({ message: 'Not Found' }, { status: 404 }),
  HttpResponse.json<{ message: string }>({ message: 'Internal Server Error' }, { status: 500 }),
]

export const login: Parameters<typeof http.post>[1] = async ({ request }) => {
  await delay(300)

  const { email, password } = (await request.json()) as { email: string; password: string }

  const user = users.find((user) => user.email === email && user.password === password)

  if (user == null) {
    return responses[0]
  }

  const token = crypto.randomUUID()

  return HttpResponse.json<{ token: string }>({ token }, { status: 200 })
}

export const signUp: Parameters<typeof http.post>[1] = async ({ request }) => {
  await delay(300)

  const { name, email, password } = (await request.json()) as {
    name: string
    email: string
    password: string
  }

  const user = users.find((user) => user.email === email && user.password === password)

  if (user != null) {
    return HttpResponse.json<{ message: string }>({ message: 'Already Exists' }, { status: 400 })
  }

  const newUser: User = {
    id: `${users.length + 1}`,
    name,
    email,
    password,
    createdAt: new Date().toISOString(),
  }

  users = [...users, newUser]

  const token = crypto.randomUUID()

  return HttpResponse.json<{ token: string }>({ token }, { status: 200 })
}
