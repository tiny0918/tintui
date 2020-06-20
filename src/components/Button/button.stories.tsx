import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button from './button'
  
const buttonWithSize = () => (
  <>
    <Button className="tiny-space" size="lg"> large button </Button>
    <Button className="tiny-space" onClick={action('clicked')}> default button </Button>
    <Button size="sm"> small button </Button>
  </>
)

const buttonWithType = () => (
  <>
    <Button className="tiny-space" onClick={action('clicked')}> default button </Button>
    <Button className="tiny-space" btnType="primary"> primary button </Button>
    <Button className="tiny-space" btnType="danger"> danger button </Button>
    <Button btnType="link" href="https://google.com"> link button </Button>
  </>
)
storiesOf('Button', module)
  .add('不同尺寸的 Button', buttonWithSize)
  .add('不同类型的 Button', buttonWithType)