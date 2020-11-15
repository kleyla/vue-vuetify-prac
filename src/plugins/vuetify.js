import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#0ED2F7",
        secondary: "#B2FEFA",
        success: "#00ced1",
        accent: "#00bbbd",
        info: "#00a7aa",
      },
    },
  },
});
