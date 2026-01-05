/* eslint-disable import/no-default-export */
import React, { FC } from 'react'
import { Routes, Route, Navigate, useInRouterContext } from 'react-router-dom'
import { ExamplePage } from 'pages'

export type TAppInnerProps = {
  cluster?: string
  namespace?: string
  syntheticProject?: string
  pluginName?: string
  pluginPath?: string
}

export const AppInner: FC<TAppInnerProps> = ({ cluster, namespace, syntheticProject, pluginName, pluginPath }) => {
  const inRouter = useInRouterContext()
  console.log('Plugin sees router context?', inRouter)

  if (!inRouter) return <div>Plugin is NOT under host Router (likely duplicate react-router-dom)</div>

  return (
    <Routes>
      <Route index element={<Navigate to="example-page" replace />} />

      {/* NOTE: paths are RELATIVE to /.../plugins/:pluginName/* */}
      <Route
        path="example-page"
        element={
          <ExamplePage
            cluster={cluster}
            namespace={namespace}
            syntheticProject={syntheticProject}
            pluginName={pluginName}
            pluginPath={pluginPath}
          />
        }
      />

      {/* optional catch-all */}
      {/* <Route path="*" element={<MainPage />} /> */}
    </Routes>
  )
}
