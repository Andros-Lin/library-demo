import Vue from "vue";
import Vuex, { ModuleTree } from "vuex";

Vue.use(Vuex);

const loadModules = () => {
  const moduleFiles = require.context( "./modules", true, /[A-Za-z0-9-_\s]+\.ts$/i);
  const modules: ModuleTree<any> = {};
  moduleFiles.keys().forEach(modulePath => {
    const matched = modulePath.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const moduleName = matched[1];
      modules[moduleName] = moduleFiles(modulePath).default;
    }
  });
  return modules;
};

const createStore = () => {
  return new Vuex.Store({
    modules: loadModules()
  });
};

export default createStore();
