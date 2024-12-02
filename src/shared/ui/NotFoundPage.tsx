import { useNavigate } from 'react-router-dom'

import { routes } from '~/shared/routes'

export const NotFoundPage = () => {
  const navigate = useNavigate()

  const handleClickHomeButton = () => {
    navigate(routes.todoList, { replace: true })
  }

  return (
    <div>
      <h1>404</h1>
      <p>페이지 경로가 잘못 되었습니다</p>
      <button onClick={handleClickHomeButton}>Home으로 이동</button>
    </div>
  )
}
