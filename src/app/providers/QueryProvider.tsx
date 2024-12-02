import { PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      //   ...
    },
    mutations: {
      //   ...
    },
  },
})

export const QueryProvider = ({ children }: PropsWithChildren<unknown>) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
