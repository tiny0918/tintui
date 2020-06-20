import { configure, addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info'
import React from 'react'
import { create } from '@storybook/theming'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import "../src/styles/index.scss"
// add-info table style not working for now, I don't know the reason, so we have to manaul import it
import "./fix_info_style.scss"

library.add(fas)
const wrapperStyle = {
  padding: '20px 40px',
  width: '600px'
}

const storyWrapper = (stroyFn) => (
  <div style={wrapperStyle}>
    {stroyFn()}
  </div>
)
addDecorator(storyWrapper)
addDecorator(withInfo)
addParameters({
  info: { 
      inline: true, 
      header: false
  },
  options: {
      theme: create({
          brandTitle: 'tintui',
          brandUrl: 'https://tiny0918.github.io/tintui/'
      }),
  },
  dependencies: {
      withStoriesOnly: true,
      hideEmpty: true,
  }
})

const loaderFn = () => {
  return [
    require('../src/welcome.stories.tsx'),
    require('../src/components/Button/button.stories.tsx'),
    require('../src/components/Alert/alert.stories.tsx'),
    require('../src/components/Menu/menu.stories.tsx'),
    require('../src/components/Tabs/tabs.stories.tsx'),
    require('../src/components/Icon/icon.stories.tsx'),
    require('../src/components/Input/input.stories.tsx'),
    require('../src/components/AutoComplete/autoComplete.stories.tsx'),
    require('../src/components/Select/select.stories.tsx'),
    require('../src/components/Upload/upload.stories.tsx'),
  ]
}


// automatically import all files ending in *.stories.js
configure(loaderFn, module);
