import { createApp } from 'vue'
import App from './App.vue'
import { library } from "@fortawesome/fontawesome-svg-core"
import {faChartGantt, faHome, faCircleInfo, faPhone, faUsersGear} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import router from './router'
import {faFacebook, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";

library.add(faCircleInfo, faUsersGear, faPhone, faChartGantt, faHome, faTwitter, faFacebook, faInstagram);

createApp(App)
    .use(router)
    .component("fai", FontAwesomeIcon)
    .mount('#app');
