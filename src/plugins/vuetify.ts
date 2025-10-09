import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import ru from 'vuetify/src/locale/ru'

Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    locales: { ru }
  },
  theme: {
    options: {
      customProperties: true
    },

  },
  typography: {
    fontFamily: '"Roboto", "Inter", "Segoe UI", Arial, sans-serif',
  },
  icons: { iconfont: 'mdi' },



});