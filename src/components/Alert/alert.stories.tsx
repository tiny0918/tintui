import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Alert from './alert'

const stylesAlert = () => {
  return (
    <>
      <Alert title="this is alert!"></Alert>
      <Alert title="this is Success" type="success"></Alert>
      <Alert title="this is Danger!" type="danger"></Alert>
      <Alert title="this is Warning!" type="warning" closable={false}></Alert>
    </>
  )
}
const descAlert = () => {
  return <Alert title="提示标题欧亲" description="this is a long description" onClose={action('closed')}></Alert>
}
storiesOf('Alert', module)
  .add('不同类型的 Alert', stylesAlert)
  .add('添加描述的 Alert', descAlert)