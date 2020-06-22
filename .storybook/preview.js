import "../src/styles/index.scss";
import { create } from "@storybook/theming";
import { addParameters, configure } from "@storybook/react";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)
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
});

const loaderFn = () => {
  return [
    require('../src/stories/Welcome.stories.mdx'),
    require('../src/components/Button/button.stories.mdx'),
    require('../src/components/Alert/alert.stories.mdx'),
    require('../src/components/Menu/menu.stories.mdx'),
    require('../src/components/Tabs/tabs.stories.mdx'),
    require('../src/components/Icon/icon.stories.mdx'),
    require('../src/components/Input/input.stories.mdx'),
    require('../src/components/AutoComplete/autoComplete.stories.mdx'),
    require('../src/components/Select/select.stories.mdx'),
    require('../src/components/Upload/upload.stories.mdx'),
  ]
};


// automatically import all files ending in *.stories.js
configure(loaderFn, module);
