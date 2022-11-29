import { camelize } from './format'

function withInstall(options) {
  options.install = (app) => {
    const { name } = options
    if (name) {
      app.component(name, options)
      app.component(camelize(`-${name}`), options)
    }
  }
  return options
}
export { withInstall }
