import React, { FC } from 'react'
import { Provider } from 'react-redux'
import { store } from 'store/store'
import { ExamplePage } from 'pages/ExamplePage'
import { AppInner } from './AppInner'

export type TAppProps = {
  cluster?: string
  namespace?: string
  syntheticProject?: string
  pluginName?: string
  pluginPath?: string
  withRoutes?: boolean
  toggleTheme?: () => void
}

export const App: FC<TAppProps> = ({
  cluster,
  namespace,
  syntheticProject,
  pluginName,
  pluginPath,
  withRoutes,
  toggleTheme,
}) => {
  // Logic is specific for type of plugin
  if (!withRoutes) {
    return (
      <Provider store={store}>
        <ExamplePage
          cluster={cluster}
          namespace={namespace}
          syntheticProject={syntheticProject}
          pluginName={pluginName}
          pluginPath={pluginPath}
          toggleTheme={toggleTheme}
        />
      </Provider>
    )
  }
  return (
    <Provider store={store}>
      <AppInner
        cluster={cluster}
        namespace={namespace}
        syntheticProject={syntheticProject}
        pluginName={pluginName}
        pluginPath={pluginPath}
        toggleTheme={toggleTheme}
      />
    </Provider>
  )
}

// eslint-disable-next-line import/no-default-export
export default App
