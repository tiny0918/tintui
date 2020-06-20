import React from 'react'
import { storiesOf } from '@storybook/react'

const markdownText = `
### 安装试试

~~~javascript
npm install tintui --save
~~~


### 使用

~~~javascript
// 加载样式
import 'tintui/dist/index.css'
// 引入组件
import { Button } from 'tintui'
~~~

### 特性

* 提供完整的TypeScript类型定义文件
* 完成单元测试
* 详细的文档与介绍
* 涉及全部流程,开箱即用
`
storiesOf('欢迎', module)
  .add('welcome', () => {
    return (
      <h2>欢迎来到 tintui 组件库</h2>
    )
  }, { info : { text: markdownText, source: false, }})