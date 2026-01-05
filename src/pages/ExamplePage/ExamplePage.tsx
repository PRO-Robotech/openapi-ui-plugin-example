import React, { FC } from 'react'
import { Greeting } from 'components'

type TExamplePageProps = {
  cluster?: string
  namespace?: string
  syntheticProject?: string
  pluginName?: string
  pluginPath?: string
}

export const ExamplePage: FC<TExamplePageProps> = props => {
  return <Greeting {...props} />
}
