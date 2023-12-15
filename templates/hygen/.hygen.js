const Path = require('path')

const PROJECT_ROOT = __dirname;
const resolvePath = (...paths) => Path.resolve(PROJECT_ROOT, ...paths)

module.exports = {
  // Путь к темплейтам hygen
  templates: resolvePath('.hygenTemplates'),
  helpers: {
    sharedPath: () => {return "@example/shared"},
    sharedComponentsPath: (to) => resolvePath('shared/ui/components', to),
    screensPath: (to) => resolvePath('screens', to),
    sharedFunctionsPath: (to) => resolvePath('shared/utils', to),
    dataRepositoriesPath: (to) => resolvePath('data/repositories', to),
    dataSourcesPath: (to) => resolvePath('data/sources', to),
  },
}
