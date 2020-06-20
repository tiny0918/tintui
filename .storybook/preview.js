import "../src/styles/index.scss";
import { create } from "@storybook/theming";
import { addParameters, configure } from "@storybook/react";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";
addParameters({
	docs: {
		container: DocsContainer,
		page: DocsPage,
		PreviewSource: "open"
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
