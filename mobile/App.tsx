import * as React from 'react'
import { AppRegistry } from 'react-native'
import App from './src/App'
import { QueryClient, QueryClientProvider } from 'react-query'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { PaperProvider } from 'react-native-paper'
export default function Main (): JSX.Element {
  const queryClient = new QueryClient()

  return (
    <PaperProvider>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <App />
        </SafeAreaProvider>
      </QueryClientProvider>
    </PaperProvider>
  )
}

AppRegistry.registerComponent('mobile', () => Main)
