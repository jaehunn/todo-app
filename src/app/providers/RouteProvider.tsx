import {
  createBrowserRouter,
  RouterProvider as ReactRouterProvider,
} from 'react-router-dom'

import { LoginPage } from '~/pages/login'
import { SignUpPage } from '~/pages/sign-up'
import { TodoListPage } from '~/pages/todo-list'
import { TodoDetailPage } from '~/pages/todo-detail'

import { Layout, NotFoundPage, ErrorPage } from '~/shared/ui'
import { routes } from '~/shared/routes'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: routes.todoList,
        element: <TodoListPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: routes.login,
        element: <LoginPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: routes.signUp,
        element: <SignUpPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: routes.todoList,
        element: <TodoListPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: routes.todoDetail,
        element: <TodoDetailPage />,
        errorElement: <ErrorPage />,
      },

      { path: '*', element: <NotFoundPage /> },
    ],
  },
])

export const RouteProvider = () => {
  return <ReactRouterProvider router={router} />
}
