import { IconContext } from 'react-icons'
import '../src/styles/globals.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const withIcon = (StoryFn) => {
  return (
    <IconContext.Provider value={{ className: 'icon' }}>
      <StoryFn />
    </IconContext.Provider>
  )
}

export const decorators = [withIcon]
