/* eslint-disable import/no-default-export */
import React, { FC } from 'react'
import { ExamplePage } from 'pages'

export type TAppInnerProps = {
  cluster?: string
  namespace?: string
  syntheticProject?: string
  pluginName?: string
  pluginPath?: string
}

export const AppInner: FC<TAppInnerProps> = ({ cluster, namespace, syntheticProject, pluginName, pluginPath }) => {
  return (
    <ExamplePage
      cluster={cluster}
      namespace={namespace}
      syntheticProject={syntheticProject}
      pluginName={pluginName}
      pluginPath={pluginPath}
    />
  )
}
