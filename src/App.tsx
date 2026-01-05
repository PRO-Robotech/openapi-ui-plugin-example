/* eslint-disable import/no-default-export */
import React, { FC } from 'react'

export type TPluginProps = {
  cluster?: string
  namespace?: string
  syntheticProject?: string
  pluginName?: string
  pluginPath?: string
}

export const App: FC<TPluginProps> = ({ cluster, namespace, syntheticProject, pluginName, pluginPath }) => {
  return (
    <div
      style={{
        padding: '20px',
        border: '2px dashed #4c8bf5',
        borderRadius: '8px',
        fontFamily: 'monospace',
      }}
    >
      <h3>🚀 Plugin Loaded!</h3>
      <pre style={{ fontSize: '14px', whiteSpace: 'pre-wrap' }}>
        {JSON.stringify(
          {
            cluster,
            namespace,
            syntheticProject,
            pluginName,
            pluginPath,
          },
          null,
          2,
        )}
      </pre>
    </div>
  )
}

export default App
