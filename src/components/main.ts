import type { App } from "vue";
import PitSpinner from "./PitSpinner.vue";

export default {
  install: (app: App) => {
    app.component("PitSpinner", PitSpinner);
  },
};

export { PitSpinner };
