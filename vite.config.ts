// @ts-check
import preactRefresh from '@prefresh/vite'
import type { UserConfig } from 'vite'

/**
 * @type { import('vite').UserConfig }
 */
const config: UserConfig = {
  jsx: {
    factory: 'h',
    fragment: 'Fragment',
  },
  plugins: [preactRefresh()],
}

export default config
