import { configure } from '@kadira/storybook'

const loadStories = () => {
  require('../src/stories')
}

configure(loadStories, module)
