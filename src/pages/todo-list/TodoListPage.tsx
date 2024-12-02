import { useGetTodoList } from './api'

export default function TodoListPage() {
  const { data: todoList } = useGetTodoList()

  console.log(todoList)

  return <div>TodoListPage</div>
}
