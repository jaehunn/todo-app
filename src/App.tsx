import { QueryProvider, RouteProvider } from './app/providers'

function App() {
  return (
    <QueryProvider>
      <RouteProvider />
    </QueryProvider>
  )
}

export default App
