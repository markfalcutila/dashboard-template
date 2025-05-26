// src/boot/fontawesome.ts
import type { App } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faBorderAll,
  faCogs,
  faChevronDown,
  faStore,
  faChartSimple,
  faMagnifyingGlass,
  faPlus,
  faToggleOn,
  faEye,
  faPen,
  faArrowRight,
  faArrowLeft,
  faArrowUpFromBracket,
} from '@fortawesome/free-solid-svg-icons';

export default ({ app }: { app: App }) => {
  library.add(
    faBorderAll,
    faCogs,
    faChevronDown,
    faStore,
    faChartSimple,
    faMagnifyingGlass,
    faPlus,
    faToggleOn,
    faEye,
    faPen,
    faArrowRight,
    faArrowLeft,
    faArrowUpFromBracket,
  );

  app.component('font-awesome-icon', FontAwesomeIcon);
};
