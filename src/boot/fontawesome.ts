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
  );

  app.component('font-awesome-icon', FontAwesomeIcon);
};
