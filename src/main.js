import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faClock, faPhone, faEnvelope, faLocationDot, faChevronRight,
     faLock, faRibbon, faGraduationCap, faCertificate ,
    faArrowRight, faQuoteRight
    } from "@fortawesome/free-solid-svg-icons";

library.add(faClock);
library.add(faPhone);
library.add(faEnvelope);
library.add(faLocationDot);
library.add(faChevronRight);
library.add(faLock);
library.add(faRibbon);
library.add(faGraduationCap);
library.add(faCertificate);
library.add(faArrowRight);
library.add(faQuoteRight);


createApp(App).component("fonts-icon", FontAwesomeIcon).use(store).use(router).mount('#app')
